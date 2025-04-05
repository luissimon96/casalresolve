import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies })

  // Verificar se o usuário está autenticado
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  }

  // Obter acordos do usuário
  const { data, error } = await supabase
    .from('agreements')
    .select('*')
    .eq('user_id', session.user.id)
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  return NextResponse.json({ agreements: data })
}

export async function POST(request: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies })

  // Verificar se o usuário está autenticado
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  }

  // Obter dados da requisição
  const json = await request.json()
  const { title, content, discussion_id, partner_id } = json

  // Validar dados
  if (!title || !content) {
    return NextResponse.json({ error: 'Título e conteúdo são obrigatórios' }, { status: 400 })
  }

  // Criar novo acordo
  const { data, error } = await supabase
    .from('agreements')
    .insert([
      {
        title,
        content,
        user_id: session.user.id,
        partner_id,
        discussion_id,
        status: 'pending'
      }
    ])
    .select()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  return NextResponse.json({ agreement: data[0] }, { status: 201 })
}
