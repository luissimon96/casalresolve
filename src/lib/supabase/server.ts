import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { createMockAuthClient } from '../auth/mock-auth'
import { createMockDbClient } from '../db/mock-db'

// Verificar se estamos em modo de desenvolvimento
const isDevelopmentMode = process.env.SUPABASE_DEV_MODE === 'true'

export const createClient = () => {
  // Se estamos em modo de desenvolvimento, usar mocks
  if (isDevelopmentMode) {
    console.log('Usando cliente Supabase simulado para servidor')
    const mockAuthClient = createMockAuthClient()
    const mockDbClient = createMockDbClient()

    // Combinar os clientes
    return {
      ...mockAuthClient,
      ...mockDbClient
    }
  }

  // Caso contrário, usar cliente Supabase real
  const cookieStore = cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: any) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: any) {
          cookieStore.set({ name, value: '', ...options })
        },
      },
    }
  )
}
