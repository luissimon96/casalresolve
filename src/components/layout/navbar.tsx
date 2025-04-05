'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const pathname = usePathname()
  const supabase = createClientComponentClient()

  // Verificar se o usuário está logado
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setIsLoggedIn(!!session)
    }

    checkUser()
  }, [supabase.auth])

  // Links de navegação
  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Preços', href: '/pricing' },
    { name: 'Como Funciona', href: '/how-it-works' },
    { name: 'Sobre', href: '/about' },
  ]

  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-500 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-white">
                CasalResolve
              </span>
            </Link>
          </div>

          {/* Links de navegação - Desktop */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`inline-flex items-center px-3 py-2 text-sm font-medium text-white hover:bg-purple-700 hover:bg-opacity-50 rounded-md transition-colors ${
                  pathname === link.href
                    ? 'bg-white bg-opacity-20'
                    : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Botões de ação - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
                <Link href="/dashboard">Meu Dashboard</Link>
              </Button>
            ) : (
              <>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/auth/login">Entrar</Link>
                </Button>
                <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
                  <Link href="/auth/signup">Criar Conta</Link>
                </Button>
              </>
            )}
          </div>

          {/* Menu mobile */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-purple-700 hover:bg-opacity-50 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile expandido */}
      {isMenuOpen && (
        <div className="md:hidden bg-purple-800 bg-opacity-95">
          <div className="pt-2 pb-3 space-y-1 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-purple-700 ${
                  pathname === link.href
                    ? 'bg-purple-700 bg-opacity-70'
                    : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-purple-700 px-4">
            {isLoggedIn ? (
              <div className="space-y-1">
                <Link
                  href="/dashboard"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-purple-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Meu Dashboard
                </Link>
                <button
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-purple-700"
                  onClick={() => {
                    supabase.auth.signOut()
                    setIsMenuOpen(false)
                    window.location.href = '/'
                  }}
                >
                  Sair
                </button>
              </div>
            ) : (
              <div className="space-y-3 flex flex-col">
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 w-full justify-center">
                  <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>
                    Entrar
                  </Link>
                </Button>
                <Button asChild className="bg-white text-purple-700 hover:bg-gray-100 w-full justify-center">
                  <Link href="/auth/signup" onClick={() => setIsMenuOpen(false)}>
                    Criar Conta
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
