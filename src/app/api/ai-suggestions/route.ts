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

  // Aqui seria implementada a lógica de IA para gerar sugestões
  // baseadas no histórico de discussões e acordos do usuário
  
  // Por enquanto, retornamos sugestões estáticas
  const suggestions = [
    {
      id: 1,
      title: 'Melhore sua comunicação',
      description: 'Baseado nas suas discussões recentes, notamos que a comunicação sobre expectativas poderia ser melhorada.',
      tips: [
        'Pratique a escuta ativa durante as conversas',
        'Estabeleça um tempo semanal dedicado para conversas importantes',
        'Use frases com "eu" em vez de acusações com "você"'
      ]
    },
    {
      id: 2,
      title: 'Divisão de tarefas',
      description: 'Percebemos que a divisão de tarefas domésticas é um tema recorrente nas suas discussões.',
      tips: [
        'Crie uma lista clara de responsabilidades',
        'Revise a divisão periodicamente',
        'Reconheça e agradeça o esforço do parceiro(a)'
      ]
    },
    {
      id: 3,
      title: 'Gestão financeira',
      description: 'Questões financeiras aparecem em várias discussões recentes.',
      tips: [
        'Estabeleça um orçamento conjunto',
        'Defina metas financeiras de curto e longo prazo',
        'Tenha conversas regulares sobre finanças'
      ]
    }
  ]

  return NextResponse.json({ suggestions })
}
