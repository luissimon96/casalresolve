'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function InvitePage() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(false)
    setLoading(true)

    try {
      // Verificar se o usuário está autenticado
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        setError('Você precisa estar logado para convidar alguém')
        return
      }

      // Verificar se o email existe
      const { data: userExists, error: userError } = await supabase
        .from('profiles')
        .select('user_id')
        .eq('email', email)
        .single()

      if (userError && userError.code !== 'PGRST116') {
        setError(userError.message)
        return
      }

      if (!userExists) {
        // Enviar convite por email (simulado)
        // Em uma implementação real, você enviaria um email com um link para cadastro
        console.log(`Enviando convite para ${email}`)
        setSuccess(true)
        setEmail('')
        return
      }

      // Criar relacionamento
      const { error: partnerError } = await supabase
        .from('partners')
        .insert([
          {
            user_id: session.user.id,
            partner_id: userExists.user_id,
            status: 'pending'
          }
        ])

      if (partnerError) {
        if (partnerError.code === '23505') {
          setError('Esta pessoa já foi convidada ou já faz parte da sua família')
        } else {
          setError(partnerError.message)
        }
        return
      }

      setSuccess(true)
      setEmail('')
    } catch (err) {
      console.error('Error inviting partner:', err)
      setError('Ocorreu um erro ao enviar o convite. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Convidar para Família</h1>
        <p className="mt-2 text-sm text-gray-600">
          Convide seu parceiro(a) ou membros da família para participar das discussões.
        </p>
      </div>

      {error && (
        <div className="mb-4 rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Erro</h3>
              <div className="mt-2 text-sm text-red-700">
                <p>{error}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {success && (
        <div className="mb-4 rounded-md bg-green-50 p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">Sucesso</h3>
              <div className="mt-2 text-sm text-green-700">
                <p>Convite enviado com sucesso!</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <div className="px-4 py-6 sm:p-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                  placeholder="email@exemplo.com"
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Se a pessoa já tiver uma conta, ela receberá uma notificação. Caso contrário, receberá um email para criar uma conta.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push('/dashboard')}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700"
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Enviar Convite'}
          </Button>
        </div>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Convites Pendentes</h2>
        <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl overflow-hidden">
          <ul className="divide-y divide-gray-200">
            <li className="px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">maria@exemplo.com</p>
                <p className="text-sm text-gray-500">Enviado em 10/04/2023</p>
              </div>
              <div>
                <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                  Pendente
                </span>
              </div>
            </li>
            <li className="px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">joao@exemplo.com</p>
                <p className="text-sm text-gray-500">Enviado em 05/04/2023</p>
              </div>
              <div>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Aceito
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
