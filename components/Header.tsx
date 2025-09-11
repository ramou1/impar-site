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
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#seguranca', label: 'Segurança' },
    { href: '#obras', label: 'Obras' },
    { href: '#atuacoes', label: 'Atuações' },
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
    <>
      {/* Top Bar - WhatsApp */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-brand-blue text-white py-2 text-center text-xs font-medium uppercase tracking-wide">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          <a 
            href="https://wa.me/554830898300"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            ATENDIMENTO PELO WHATSAPP
          </a>
        </div>
      </div>
      
      <header 
        className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 ${
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
                className="relative text-gray-700 hover:text-brand-blue transition-colors font-medium group cursor-pointer"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden xl:flex items-center space-x-6 text-sm">
            <a 
              href="tel:+554830898300" 
              className="flex items-center space-x-2 text-gray-600 hover:text-brand-blue transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(48) 3089-8300</span>
            </a>
            <a 
              href="mailto:impar@imparsistemas.com" 
              className="flex items-center space-x-2 text-gray-600 hover:text-brand-blue transition-colors"
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
            {isMenuOpen ? <X className="w-7 h-7 text-brand-blue" /> : <Menu className="w-7 h-7 text-brand-blue" />}
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
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-brand-blue transition-all"
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
                className="flex items-center space-x-2 text-brand-blue mb-2"
              >
                <Phone className="w-4 h-4" />
                <span>(48) 3089-8300</span>
              </a>
              <a 
                href="mailto:impar@imparsistemas.com" 
                className="flex items-center space-x-2 text-brand-blue"
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
    </>
  )
}