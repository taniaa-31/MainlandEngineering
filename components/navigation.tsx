//updated Navigation.js
"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Navigation({ onNavClick = () => {} }) {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef(null)
  const headerHeight = 70

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Our Work", href: "#ourWork" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  // Close on resize > md
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  // Prevent scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => (document.body.style.overflow = "")
  }, [isOpen])

  // Scroll-to-top handler
  const handleNavClick = (section) => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsOpen(false)
    onNavClick(section)
  }

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md transition-transform duration-300"
      style={{ WebkitBackdropFilter: "blur(10px)" }}
    >
      <nav className="max-w-[1400px] mx-auto px-[5%] py-3 flex items-center justify-between">
        {/* Logo */}
        {/* <div
          className="flex items-center gap-3 z-[1001] cursor-pointer"
          onClick={() => handleNavClick("Home")}
        >
          <Image
            src="/Logo-removebg-preview.png"
            alt="Mainland Engineering Logo"
            width={100}
            height={70}
            priority
            className="w-[clamp(35px,5vw,50px)] h-[clamp(35px,5vw,50px)]"
          />
          <span className="logo-text font-bold text-[clamp(1rem,2vw,1.25rem)] text-[#1B6083] hidden sm:inline-block">
            Mainland Engineering Group
          </span>
        </div> */}


        {/* Logo */}
        <div
          className="flex items-center gap-1 z-[1001] cursor-pointer"
          onClick={() => handleNavClick("Home")}
        >
          {/* Logo Image */}
          <div className="relative w-[clamp(50px,10vw,120px)] h-[clamp(40px,8vw,80px)]">
            <Image
              src="/Logo-removebg-preview.png"
              alt="Mainland Engineering Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Logo Text */}
          <span className="logo-text font-bold text-[clamp(2rem,2vw,1.25rem)] text-[#1B6083] hidden sm:inline-block">
            Mainland Engineering Group
          </span>
        </div>


        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.name}>
               <Link
    href={item.href}
    onClick={() => {
      setIsOpen(false)
      onNavClick(item.name)
    }}
    className="relative text-[#2c3e50] font-medium text-base transition-colors duration-300 hover:text-[#1B6083] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#1B6083] hover:after:w-full after:transition-all after:duration-300"
  >
    {item.name}
  </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden z-[1001]">
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((s) => !s)}
            className="flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-[#1B6083]" />
            ) : (
              <Menu className="h-6 w-6 text-[#1B6083]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed right-0 z-[999] w-full max-w-[800px]
        h-[calc(100vh-${headerHeight}px)] bg-white/98 backdrop-blur-md shadow-2xl
        transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          top: `${headerHeight}px`,
          height: `calc(100vh - ${headerHeight}px)`,
        }}
      >
        <div className="h-full px-6 py-8 flex flex-col gap-6">
          {navItems.map((item) => (
            // <a
            //   key={item.name}
            //   href={item.href}
            //   onClick={(e) => {
            //     e.preventDefault()
            //     handleNavClick(item.name)
            //   }}
            //   className="relative text-[#2c3e50] font-medium text-lg transition-colors duration-300 hover:text-[#1B6083]
            //   after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
            //   after:bg-[#1B6083] hover:after:w-full after:transition-all after:duration-300"
            // >
            //   {item.name}
            // </a>
           <Link
  key={item.name}
  href={item.href}
  onClick={() => {
    setIsOpen(false)
    onNavClick(item.name)
  }}
  className="text-[#2c3e50] font-medium text-lg transition-colors hover:text-[#1B6083] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
             after:bg-[#1B6083] hover:after:w-full after:transition-all after:duration-300"
>
  {item.name}
</Link>
          ))}
        </div>
      </div>
    </header>
  )
}
