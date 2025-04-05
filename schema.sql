-- Esquema do banco de dados para o CasalResolve

-- Habilitar extensões
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Tabela de perfis de usuários
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users NOT NULL,
  name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Função para atualizar o timestamp de updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para atualizar o timestamp de updated_at
CREATE TRIGGER update_profiles_updated_at
BEFORE UPDATE ON profiles
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Tabela de relacionamentos entre usuários
CREATE TABLE partners (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users NOT NULL,
  partner_id UUID REFERENCES auth.users NOT NULL,
  status TEXT CHECK (status IN ('pending', 'accepted', 'rejected')) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, partner_id)
);

-- Trigger para atualizar o timestamp de updated_at
CREATE TRIGGER update_partners_updated_at
BEFORE UPDATE ON partners
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Tabela de discussões
CREATE TABLE discussions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  user_id UUID REFERENCES auth.users NOT NULL,
  partner_id UUID REFERENCES auth.users,
  status TEXT CHECK (status IN ('pending', 'in_progress', 'resolved')) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Trigger para atualizar o timestamp de updated_at
CREATE TRIGGER update_discussions_updated_at
BEFORE UPDATE ON discussions
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Tabela de mensagens
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  discussion_id UUID REFERENCES discussions NOT NULL,
  user_id UUID REFERENCES auth.users NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Trigger para atualizar o timestamp de updated_at
CREATE TRIGGER update_messages_updated_at
BEFORE UPDATE ON messages
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Tabela de acordos
CREATE TABLE agreements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  user_id UUID REFERENCES auth.users NOT NULL,
  partner_id UUID REFERENCES auth.users,
  discussion_id UUID REFERENCES discussions,
  status TEXT CHECK (status IN ('pending', 'accepted', 'rejected')) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Trigger para atualizar o timestamp de updated_at
CREATE TRIGGER update_agreements_updated_at
BEFORE UPDATE ON agreements
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Tabela de assinaturas
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users NOT NULL UNIQUE,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  plan TEXT CHECK (plan IN ('free', 'essential', 'premium')) DEFAULT 'free',
  status TEXT CHECK (status IN ('active', 'canceled', 'past_due')) DEFAULT 'active',
  current_period_end TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Trigger para atualizar o timestamp de updated_at
CREATE TRIGGER update_subscriptions_updated_at
BEFORE UPDATE ON subscriptions
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Políticas de segurança RLS (Row Level Security)

-- Habilitar RLS em todas as tabelas
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE discussions ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE agreements ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Políticas para profiles
CREATE POLICY "Usuários podem ver seus próprios perfis"
  ON profiles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Usuários podem atualizar seus próprios perfis"
  ON profiles FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Usuários podem inserir seus próprios perfis"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Políticas para partners
CREATE POLICY "Usuários podem ver seus próprios relacionamentos"
  ON partners FOR SELECT
  USING (auth.uid() = user_id OR auth.uid() = partner_id);

CREATE POLICY "Usuários podem atualizar seus próprios relacionamentos"
  ON partners FOR UPDATE
  USING (auth.uid() = user_id OR auth.uid() = partner_id);

CREATE POLICY "Usuários podem inserir relacionamentos"
  ON partners FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Políticas para discussions
CREATE POLICY "Usuários podem ver suas próprias discussões ou discussões compartilhadas"
  ON discussions FOR SELECT
  USING (auth.uid() = user_id OR auth.uid() = partner_id);

CREATE POLICY "Usuários podem atualizar suas próprias discussões"
  ON discussions FOR UPDATE
  USING (auth.uid() = user_id OR auth.uid() = partner_id);

CREATE POLICY "Usuários podem inserir discussões"
  ON discussions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Políticas para messages
CREATE POLICY "Usuários podem ver mensagens de discussões que participam"
  ON messages FOR SELECT
  USING (
    auth.uid() IN (
      SELECT user_id FROM discussions WHERE id = messages.discussion_id
      UNION
      SELECT partner_id FROM discussions WHERE id = messages.discussion_id
    )
  );

CREATE POLICY "Usuários podem inserir mensagens em discussões que participam"
  ON messages FOR INSERT
  WITH CHECK (
    auth.uid() IN (
      SELECT user_id FROM discussions WHERE id = discussion_id
      UNION
      SELECT partner_id FROM discussions WHERE id = discussion_id
    )
  );

-- Políticas para agreements
CREATE POLICY "Usuários podem ver seus próprios acordos ou acordos compartilhados"
  ON agreements FOR SELECT
  USING (auth.uid() = user_id OR auth.uid() = partner_id);

CREATE POLICY "Usuários podem atualizar seus próprios acordos"
  ON agreements FOR UPDATE
  USING (auth.uid() = user_id OR auth.uid() = partner_id);

CREATE POLICY "Usuários podem inserir acordos"
  ON agreements FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Políticas para subscriptions
CREATE POLICY "Usuários podem ver suas próprias assinaturas"
  ON subscriptions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Usuários podem atualizar suas próprias assinaturas"
  ON subscriptions FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Usuários podem inserir suas próprias assinaturas"
  ON subscriptions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Função para criar um perfil automaticamente após o cadastro
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, name)
  VALUES (NEW.id, NEW.email);
  
  INSERT INTO public.subscriptions (user_id, plan)
  VALUES (NEW.id, 'free');
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger para criar perfil e assinatura após cadastro
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
