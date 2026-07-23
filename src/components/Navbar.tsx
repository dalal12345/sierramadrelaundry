import React, { useState, useEffect } from 'react'
import { 
  Phone, 
  MapPin, 
  Clock, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Sparkles, 
  CheckCircle2,
  WashingMachine,
  Navigation
} from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { Button } from '#/components/ui/button'

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Announcement Bar */}
      <div className="bg-sky-900 text-slate-100 text-xs py-2 px-4 border-b border-sky-800/50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-slate-200">
            <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              OPEN 24/7 • SELF SERVICE
            </span>
            <span className="hidden md:inline-flex items-center gap-1">
              <MapPin className="size-3.5 text-sky-400" />
              370 W Sierra Madre Blvd, Unit J, Sierra Madre, CA 91024
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="tel:+16263556213" 
              className="inline-flex items-center gap-1.5 hover:text-sky-300 font-medium transition-colors"
            >
              <Phone className="size-3.5 text-sky-400" />
              (626) 355-6213
            </a>
            
            {/* Theme Switcher Toggle */}
            <button
              onClick={toggleTheme}
              className="inline-flex items-center gap-1.5 bg-sky-950/80 hover:bg-sky-800 text-sky-200 px-2.5 py-1 rounded-full text-xs font-semibold border border-sky-700/60 transition-all cursor-pointer"
              title="Toggle Light / Dark Mode"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="size-3.5 text-amber-400" />
                  <span>Light</span>
                </>
              ) : (
                <>
                  <Moon className="size-3.5 text-sky-300" />
                  <span>Dark</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Primary Sticky Header */}
      <div 
        className={`w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-800 shadow-xl py-3' 
            : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200/60 dark:border-slate-800/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Header */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="size-11 rounded-2xl bg-gradient-to-tr from-sky-600 via-cyan-500 to-teal-400 p-0.5 shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                <WashingMachine className="size-6 text-cyan-400 animate-spin-slow" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
                  SIERRA MADRE
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wide bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                  24/7
                </span>
              </div>
              <p className="text-xs font-semibold tracking-wider text-sky-600 dark:text-cyan-400 uppercase">
                LAUNDROMAT & ECO CLEANERS
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 font-medium text-sm">
            <a href="#live-tracker" className="text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1">
              <Sparkles className="size-3.5 text-amber-500" />
              Live Machine Tracker
            </a>
            <a href="#services" className="text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-cyan-400 transition-colors">
              Services
            </a>
            <a href="#calculator" className="text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-cyan-400 transition-colors">
              Cost Estimator
            </a>
            <a href="#pricing" className="text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-cyan-400 transition-colors">
              Pricing
            </a>
            <a href="#amenities" className="text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-cyan-400 transition-colors">
              Patio & Amenities
            </a>
            <a href="#location" className="text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-cyan-400 transition-colors">
              Location
            </a>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="https://www.google.com/maps/dir/Current+Location/34.1616563,-118.0605302" 
              target="_blank" 
              rel="noreferrer"
            >
              <Button variant="outline" size="sm" className="gap-1.5 border-sky-500/30 text-sky-700 dark:text-sky-300 hover:bg-sky-500/10">
                <Navigation className="size-3.5" />
                Directions
              </Button>
            </a>
            <a href="tel:+16263556213">
              <Button size="sm" className="gap-1.5 bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white shadow-md shadow-sky-600/20">
                <Phone className="size-3.5" />
                Call (626) 355-6213
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggler */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 text-slate-100 border-b border-slate-800 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 font-medium">
            <a 
              href="#live-tracker" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-sky-400 py-1"
            >
              <Sparkles className="size-4 text-amber-400" />
              Live Machine Tracker
            </a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-sky-400">Services</a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-sky-400">Cost Estimator</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-sky-400">Pricing Rates</a>
            <a href="#amenities" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-sky-400">Patio & Wi-Fi</a>
            <a href="#location" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-sky-400">Location & Hours</a>
          </nav>
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <a href="tel:+16263556213" className="w-full">
              <Button className="w-full justify-center bg-sky-600 hover:bg-sky-500 text-white">
                <Phone className="size-4 mr-2" />
                Call (626) 355-6213
              </Button>
            </a>
            <a 
              href="https://www.google.com/maps/dir/Current+Location/34.1616563,-118.0605302"
              target="_blank" 
              rel="noreferrer"
              className="w-full"
            >
              <Button variant="outline" className="w-full justify-center border-slate-700 text-slate-200">
                <Navigation className="size-4 mr-2" />
                Open Google Maps
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
