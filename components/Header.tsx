'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const menuItems = [
    { href: '#empresa', label: 'Empresas' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#obras', label: 'Obras' },
    { href: '#seguranca', label: 'Segurança' },
    { href: '#contato', label: 'Contato' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Detectar se rolou para baixo ou para cima
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Rolando para baixo - esconder header
        setIsVisible(false)
      } else {
        // Rolando para cima - mostrar header
        setIsVisible(true)
      }
      
      // Adicionar background blur quando rolar
      setIsScrolled(currentScrollY > 20)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const handleMenuClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => handleMenuClick('#inicio')}
          >
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Impar Climatização e Sistemas"
                width={170}
                height={72}
                priority
                className="h-14 w-auto"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm tracking-wide">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleMenuClick(item.href)}
                className="relative text-gray-700 hover:text-navy transition-colors font-medium group cursor-pointer"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-navy transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden xl:flex items-center space-x-6 text-sm">
            <a 
              href="tel:+554830898300" 
              className="flex items-center space-x-2 text-gray-600 hover:text-navy transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(48) 3089-8300</span>
            </a>
            <a 
              href="mailto:impar@imparsistemas.com" 
              className="flex items-center space-x-2 text-gray-600 hover:text-navy transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Contato</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-7 h-7 text-navy" /> : <Menu className="w-7 h-7 text-navy" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-gray-200 bg-transparent">
            {menuItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => handleMenuClick(item.href)}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-navy transition-all"
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animation: isMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                }}
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile Contact */}
            <div className="mt-4 pt-4 border-t border-gray-200 px-4 pb-4">
              <a 
                href="tel:+554830898300" 
                className="flex items-center space-x-2 text-navy mb-2"
              >
                <Phone className="w-4 h-4" />
                <span>(48) 3089-8300</span>
              </a>
              <a 
                href="mailto:impar@imparsistemas.com" 
                className="flex items-center space-x-2 text-navy"
              >
                <Mail className="w-4 h-4" />
                <span>impar@imparsistemas.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  )
}