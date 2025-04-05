import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Resolva Conflitos de Relacionamento com Ajuda da IA
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                CasalResolve utiliza inteligência artificial para ajudar casais a resolverem seus conflitos,
                documentarem acordos e melhorarem sua comunicação.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
                  <Link href="/auth/signup">Começar Agora</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/pricing">Ver Planos</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/hero-image.png"
                alt="Casal resolvendo conflitos com ajuda da IA"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Como a IA Pode Ajudar Seu Relacionamento</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mediação Assistida</h3>
              <p className="text-gray-600">Nossa IA analisa padrões de comunicação e sugere abordagens para resolver conflitos de forma construtiva.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Documentação de Acordos</h3>
              <p className="text-gray-600">Registre e acompanhe acordos entre você e seu parceiro(a) para evitar mal-entendidos futuros.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Histórico de Discussões</h3>
              <p className="text-gray-600">Mantenha um registro organizado de discussões anteriores para referência e aprendizado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">O Que Nossos Usuários Dizem</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="italic mb-4">"CasalResolve transformou a forma como lidamos com nossos conflitos. A IA nos ajudou a identificar padrões negativos de comunicação que nem percebíamos."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold">Ana e Carlos</p>
                  <p className="text-sm text-gray-600">Juntos há 5 anos</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="italic mb-4">"A documentação de acordos nos ajudou a evitar várias discussões repetitivas. Agora temos clareza sobre o que foi combinado e podemos seguir em frente."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold">Juliana e Pedro</p>
                  <p className="text-sm text-gray-600">Casados há 3 anos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Melhorar Seu Relacionamento?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Junte-se a milhares de casais que estão transformando seus relacionamentos com a ajuda da tecnologia.</p>
          <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
            <Link href="/auth/signup">Criar Conta Gratuita</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">CasalResolve</h3>
              <p className="text-gray-400">Utilizando IA para melhorar relacionamentos e resolver conflitos.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white">Início</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-white">Planos</Link></li>
                <li><Link href="/auth/login" className="text-gray-400 hover:text-white">Login</Link></li>
                <li><Link href="/auth/signup" className="text-gray-400 hover:text-white">Cadastro</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Guias</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Suporte</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Termos de Uso</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacidade</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} CasalResolve. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
