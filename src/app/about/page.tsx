import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AboutPage() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Sobre o CasalResolve
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça nossa missão, visão e os valores que nos guiam
          </p>
        </div>

        <div className="mt-16">
          <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">Nossa História</h2>
              <p className="text-base text-gray-600 mb-4">
                O CasalResolve nasceu da observação de que muitos casais enfrentam dificuldades para resolver conflitos de forma construtiva. Fundado em 2023 por uma equipe de especialistas em tecnologia e psicologia, nossa plataforma combina o poder da inteligência artificial com técnicas comprovadas de mediação de conflitos.
              </p>
              <p className="text-base text-gray-600">
                Após meses de pesquisa e desenvolvimento, lançamos uma plataforma que já ajudou centenas de casais a melhorarem sua comunicação e resolverem conflitos de forma mais eficaz e harmoniosa.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">Nossa Missão</h2>
              <p className="text-base text-gray-600">
                Ajudar casais a construírem relacionamentos mais saudáveis e duradouros através de comunicação eficaz e resolução construtiva de conflitos.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">Nossa Visão</h2>
              <p className="text-base text-gray-600">
                Ser a principal plataforma de resolução de conflitos para casais, utilizando tecnologia avançada para promover relacionamentos mais harmoniosos em todo o mundo.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nossos Valores</h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm px-5 py-4 sm:px-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-purple-100 rounded-md p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Privacidade</h3>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  Protegemos rigorosamente os dados dos nossos usuários, garantindo confidencialidade total.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm px-5 py-4 sm:px-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-purple-100 rounded-md p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Empatia</h3>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  Desenvolvemos nossa plataforma com foco na compreensão das necessidades emocionais dos casais.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm px-5 py-4 sm:px-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-purple-100 rounded-md p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Inovação</h3>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  Buscamos constantemente novas tecnologias e abordagens para melhorar a experiência dos nossos usuários.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nossa Equipe</h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm px-5 py-4 sm:px-6 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Ana Silva</h3>
              <p className="text-sm text-purple-600 mb-2">CEO & Fundadora</p>
              <p className="text-sm text-gray-600">
                Psicóloga com especialização em terapia de casais e 10 anos de experiência clínica.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm px-5 py-4 sm:px-6 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Carlos Mendes</h3>
              <p className="text-sm text-purple-600 mb-2">CTO</p>
              <p className="text-sm text-gray-600">
                Engenheiro de IA com experiência em processamento de linguagem natural e aprendizado de máquina.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm px-5 py-4 sm:px-6 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Juliana Costa</h3>
              <p className="text-sm text-purple-600 mb-2">Diretora de Produto</p>
              <p className="text-sm text-gray-600">
                Especialista em UX com foco em criar experiências digitais acessíveis e intuitivas.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Junte-se a nós nessa jornada</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <Link href="/auth/signup">Criar Conta</Link>
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
