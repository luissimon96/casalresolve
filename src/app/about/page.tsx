import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Sobre o CasalResolve</h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-16">
          Conheça nossa missão, visão e os valores que nos guiam
        </p>

        {/* Seção: Nossa História */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Nossa História</h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              O CasalResolve nasceu da observação de que muitos casais enfrentam dificuldades para resolver conflitos de forma construtiva. Fundado em 2023 por uma equipe de especialistas em tecnologia e psicologia, nossa plataforma combina o poder da inteligência artificial com técnicas comprovadas de mediação de conflitos.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Após meses de pesquisa e desenvolvimento, lançamos uma plataforma que já ajudou centenas de casais a melhorarem sua comunicação e resolverem conflitos de forma mais eficaz e harmoniosa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Nossa Missão</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ajudar casais a construírem relacionamentos mais saudáveis e duradouros através de comunicação eficaz e resolução construtiva de conflitos.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Nossa Visão</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ser a principal plataforma de resolução de conflitos para casais, utilizando tecnologia avançada para promover relacionamentos mais harmoniosos em todo o mundo.
              </p>
            </div>
          </div>
        </div>

        {/* Seção: Nossos Valores */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Nossos Valores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Privacidade</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Protegemos rigorosamente os dados dos nossos usuários, garantindo confidencialidade total.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Empatia</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Desenvolvemos nossa plataforma com foco na compreensão das necessidades emocionais dos casais.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Inovação</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Buscamos constantemente novas tecnologias e abordagens para melhorar a experiência dos nossos usuários.
              </p>
            </div>
          </div>
        </div>

        {/* Seção: Nossa Equipe */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Nossa Equipe</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 overflow-hidden">
                <div className="w-full h-full bg-purple-200 dark:bg-purple-800 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold">Ana Silva</h3>
              <p className="text-purple-600 dark:text-purple-400 mb-2">CEO & Fundadora</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Psicóloga com especialização em terapia de casais e 10 anos de experiência clínica.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 overflow-hidden">
                <div className="w-full h-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold">Carlos Mendes</h3>
              <p className="text-purple-600 dark:text-purple-400 mb-2">CTO</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Engenheiro de IA com experiência em processamento de linguagem natural e aprendizado de máquina.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 overflow-hidden">
                <div className="w-full h-full bg-green-200 dark:bg-green-800 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold">Juliana Costa</h3>
              <p className="text-purple-600 dark:text-purple-400 mb-2">Diretora de Produto</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Especialista em UX com foco em criar experiências digitais acessíveis e intuitivas.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Junte-se a nós nessa jornada</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link href="/auth/signup">Criar Conta</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Fale Conosco</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
