import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Resumo */}
          <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M9 4H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2h-4m-1.5-2l-3 3h-3l-3-3" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="truncate text-sm font-medium text-gray-500">Discussões Ativas</dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">3</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                  <Link href="/dashboard/discussions" className="font-medium text-purple-600 hover:text-purple-500">
                    Ver todas
                  </Link>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="truncate text-sm font-medium text-gray-500">Acordos Documentados</dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">7</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                  <Link href="/dashboard/agreements" className="font-medium text-purple-600 hover:text-purple-500">
                    Ver todos
                  </Link>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="truncate text-sm font-medium text-gray-500">Dias sem Conflitos</dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">12</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                  <Link href="/dashboard/stats" className="font-medium text-purple-600 hover:text-purple-500">
                    Ver estatísticas
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Ações Rápidas */}
          <div className="mb-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Ações Rápidas</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <Link href="/dashboard/discussions/new">
                  Iniciar Nova Discussão
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/dashboard/agreements/new">
                  Criar Novo Acordo
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/dashboard/invite">
                  Convidar Parceiro(a)
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/dashboard/ai-suggestions">
                  Obter Sugestões da IA
                </Link>
              </Button>
            </div>
          </div>

          {/* Discussões Recentes */}
          <div className="mb-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Discussões Recentes</h2>
            <div className="overflow-hidden bg-white shadow sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                <li>
                  <Link href="/dashboard/discussions/1" className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="truncate text-sm font-medium text-purple-600">Divisão de tarefas domésticas</p>
                        <div className="ml-2 flex flex-shrink-0">
                          <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            Resolvido
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 flex justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            Você e Maria
                          </p>
                        </div>
                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          <time dateTime="2023-01-15">15 de Janeiro, 2023</time>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link href="/dashboard/discussions/2" className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="truncate text-sm font-medium text-purple-600">Planejamento financeiro</p>
                        <div className="ml-2 flex flex-shrink-0">
                          <p className="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800">
                            Em progresso
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 flex justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            Você e Maria
                          </p>
                        </div>
                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          <time dateTime="2023-02-10">10 de Fevereiro, 2023</time>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link href="/dashboard/discussions/3" className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="truncate text-sm font-medium text-purple-600">Comunicação e tempo de qualidade</p>
                        <div className="ml-2 flex flex-shrink-0">
                          <p className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
                            Pendente
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 flex justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            Você e Maria
                          </p>
                        </div>
                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          <time dateTime="2023-03-05">5 de Março, 2023</time>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Sugestões da IA */}
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Sugestões da IA</h2>
            <div className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">Melhore sua comunicação</h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p>
                    Baseado nas suas discussões recentes, notamos que a comunicação sobre expectativas poderia ser melhorada. 
                    Aqui estão algumas sugestões:
                  </p>
                </div>
                <div className="mt-3">
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-500">
                    <li>Pratique a escuta ativa durante as conversas</li>
                    <li>Estabeleça um tempo semanal dedicado para conversas importantes</li>
                    <li>Use frases com "eu" em vez de acusações com "você"</li>
                  </ul>
                </div>
                <div className="mt-5">
                  <Button asChild variant="outline">
                    <Link href="/dashboard/ai-suggestions">
                      Ver mais sugestões
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
