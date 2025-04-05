'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function CreateCasePage() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
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
        setError('Você precisa estar logado para criar um caso')
        return
      }

      // Criar o caso
      const { data, error } = await supabase
        .from('discussions')
        .insert([
          {
            title,
            description,
            user_id: session.user.id,
            status: 'pending'
          }
        ])
        .select()

      if (error) {
        setError(error.message)
        return
      }

      setSuccess(true)
      setTitle('')
      setDescription('')
      
      // Redirecionar para a página do caso
      setTimeout(() => {
        router.push(`/dashboard/discussions/${data[0].id}`)
      }, 2000)
    } catch (err) {
      console.error('Error creating case:', err)
      setError('Ocorreu um erro ao criar o caso. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Criar Novo Caso</h1>
        <p className="mt-2 text-sm text-gray-600">
          Preencha os detalhes abaixo para criar um novo caso de discussão.
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
                <p>Caso criado com sucesso! Redirecionando...</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <div className="px-4 py-6 sm:p-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                Título
              </label>
              <div className="mt-2">
                <Input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                Descrição
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Descreva o caso em detalhes para facilitar a resolução.
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
            {loading ? 'Criando...' : 'Criar Caso'}
          </Button>
        </div>
      </form>
    </div>
  )
}
