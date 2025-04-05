import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HowItWorksPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Como Funciona o CasalResolve</h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-16">
          Entenda como nossa plataforma utiliza IA para ajudar casais a resolverem seus conflitos
        </p>

        {/* Seção 1: Processo */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Nosso Processo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cadastro e Convite</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Crie sua conta e convide seu parceiro(a) para participar da plataforma.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Discussão Estruturada</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Inicie uma discussão sobre o tema que deseja resolver, seguindo nosso formato estruturado.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Resolução Assistida</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Nossa IA analisa a discussão e sugere soluções baseadas em técnicas de mediação.
              </p>
            </div>
          </div>
        </div>

        {/* Seção 2: Tecnologia */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Nossa Tecnologia</h2>
          
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-semibold mb-4">Inteligência Artificial Avançada</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Utilizamos algoritmos de processamento de linguagem natural para analisar padrões de comunicação e identificar pontos de conflito.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Nossa IA foi treinada com técnicas de mediação e terapia de casais para oferecer sugestões eficazes e imparciais.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="w-64 h-64 bg-purple-200 dark:bg-purple-800 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8">
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pl-8">
                <h3 className="text-2xl font-semibold mb-4">Segurança e Privacidade</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Todas as discussões são criptografadas e armazenadas com segurança. Apenas você e seu parceiro(a) têm acesso às informações.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Não compartilhamos seus dados com terceiros e seguimos rigorosos protocolos de privacidade.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="w-64 h-64 bg-blue-200 dark:bg-blue-800 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 3: Benefícios */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Benefícios</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-2">Comunicação Melhorada</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Aprenda a expressar suas necessidades e ouvir seu parceiro(a) de forma mais eficaz.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-2">Resolução Mais Rápida</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Resolva conflitos de forma mais rápida e eficiente com a ajuda da nossa IA.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-2">Ambiente Neutro</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Discuta temas sensíveis em um ambiente neutro e estruturado, reduzindo conflitos emocionais.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-2">Histórico Organizado</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Mantenha um registro organizado de discussões e acordos para referência futura.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Pronto para melhorar seu relacionamento?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link href="/auth/signup">Começar Agora</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/pricing">Ver Planos</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
