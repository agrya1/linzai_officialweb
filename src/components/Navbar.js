import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark-lighter backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="font-sans text-primary text-2xl">
          临在 ∞
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#values">核心价值</NavLink>
          <NavLink href="#products">产品矩阵</NavLink>
          <NavLink href="#guide">灵性指南</NavLink>
          <NavLink href="#contact">联系我们</NavLink>
        </div>
        
        <button className="block md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <Link 
      href={href} 
      className="text-light-text-muted hover:text-white transition-colors duration-300"
    >
      {children}
    </Link>
  );
} 