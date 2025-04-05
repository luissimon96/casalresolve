import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HowItWorksPage() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Como Funciona o CasalResolve
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Entenda como nossa plataforma utiliza IA para ajudar casais a resolverem seus conflitos
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {/* Etapa 1 */}
            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                <span className="text-xl font-bold">1</span>
              </div>
              <div className="ml-16">
                <h2 className="text-lg font-medium text-gray-900">Cadastro e Convite</h2>
                <p className="mt-2 text-base text-gray-600">
                  Crie sua conta e convide seu parceiro(a) para participar da plataforma.
                </p>
              </div>
            </div>

            {/* Etapa 2 */}
            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                <span className="text-xl font-bold">2</span>
              </div>
              <div className="ml-16">
                <h2 className="text-lg font-medium text-gray-900">Discussão Estruturada</h2>
                <p className="mt-2 text-base text-gray-600">
                  Inicie uma discussão sobre o tema que deseja resolver, seguindo nosso formato estruturado.
                </p>
              </div>
            </div>

            {/* Etapa 3 */}
            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                <span className="text-xl font-bold">3</span>
              </div>
              <div className="ml-16">
                <h2 className="text-lg font-medium text-gray-900">Resolução Assistida</h2>
                <p className="mt-2 text-base text-gray-600">
                  Nossa IA analisa a discussão e sugere soluções baseadas em técnicas de mediação.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nossa Tecnologia</h2>

          <div className="bg-gray-50 overflow-hidden shadow rounded-lg mb-8">
            <div className="px-4 py-5 sm:p-6">
              <div className="sm:flex sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Inteligência Artificial Avançada</h3>
                  <div className="mt-2 max-w-xl text-sm text-gray-600">
                    <p>
                      Utilizamos algoritmos de processamento de linguagem natural para analisar padrões de comunicação e identificar pontos de conflito.
                    </p>
                    <p className="mt-2">
                      Nossa IA foi treinada com técnicas de mediação e terapia de casais para oferecer sugestões eficazes e imparciais.
                    </p>
                  </div>
                </div>
                <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="sm:flex sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Segurança e Privacidade</h3>
                  <div className="mt-2 max-w-xl text-sm text-gray-600">
                    <p>
                      Todas as discussões são criptografadas e armazenadas com segurança. Apenas você e seu parceiro(a) têm acesso às informações.
                    </p>
                    <p className="mt-2">
                      Não compartilhamos seus dados com terceiros e seguimos rigorosos protocolos de privacidade.
                    </p>
                  </div>
                </div>
                <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Benefícios</h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900">Comunicação Melhorada</h3>
                <p className="text-sm text-gray-600">
                  Aprenda a expressar suas necessidades e ouvir seu parceiro(a) de forma mais eficaz.
                </p>
              </div>
            </div>

            <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900">Resolução Mais Rápida</h3>
                <p className="text-sm text-gray-600">
                  Resolva conflitos de forma mais rápida e eficiente com a ajuda da nossa IA.
                </p>
              </div>
            </div>

            <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900">Ambiente Neutro</h3>
                <p className="text-sm text-gray-600">
                  Discuta temas sensíveis em um ambiente neutro e estruturado, reduzindo conflitos emocionais.
                </p>
              </div>
            </div>

            <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900">Histórico Organizado</h3>
                <p className="text-sm text-gray-600">
                  Mantenha um registro organizado de discussões e acordos para referência futura.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pronto para melhorar seu relacionamento?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <Link href="/auth/signup">Começar Agora</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/pricing">Ver Planos</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
