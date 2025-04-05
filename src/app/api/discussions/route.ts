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

  // Obter discussões do usuário
  const { data, error } = await supabase
    .from('discussions')
    .select('*')
    .eq('user_id', session.user.id)
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  return NextResponse.json({ discussions: data })
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
  const { title, description, partner_id } = json

  // Validar dados
  if (!title || !description) {
    return NextResponse.json({ error: 'Título e descrição são obrigatórios' }, { status: 400 })
  }

  // Criar nova discussão
  const { data, error } = await supabase
    .from('discussions')
    .insert([
      {
        title,
        description,
        user_id: session.user.id,
        partner_id,
        status: 'pending'
      }
    ])
    .select()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  return NextResponse.json({ discussion: data[0] }, { status: 201 })
}
