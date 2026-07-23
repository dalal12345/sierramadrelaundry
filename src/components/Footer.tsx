import React from 'react'
import { WashingMachine, Phone, MapPin, Sparkles, Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-gradient-to-tr from-sky-500 to-teal-400 p-0.5 shadow-md">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                  <WashingMachine className="size-5 text-cyan-400" />
                </div>
              </div>
              <span className="font-heading font-extrabold text-lg text-white">
                SIERRA MADRE LAUNDRY
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sierra Madre's premier 24/7 self-service laundromat and eco-cleaners. Featuring high-capacity Speed Queen washers, mobile card pay, outdoor patio, & free Wi-Fi.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-sm">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#live-tracker" className="hover:text-cyan-400 transition-colors">Live Machine Availability</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Self Service & Drop-off</a></li>
              <li><a href="#calculator" className="hover:text-cyan-400 transition-colors">Wash Cost Calculator</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Rate Card & Washer Sizes</a></li>
              <li><a href="#amenities" className="hover:text-cyan-400 transition-colors">Outdoor Patio & Free Wi-Fi</a></li>
            </ul>
          </div>

          {/* Col 3: Service Cities */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-sm">Cities Served</h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>Sierra Madre (91024)</li>
              <li>Pasadena & Hastings Ranch</li>
              <li>Arcadia & Monrovia</li>
              <li>Altadena & San Marino</li>
              <li>Alhambra, Duarte & El Monte</li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-sm">Contact & Hours</h4>
            <p className="text-xs text-emerald-400 font-bold">● Open 24/7/365</p>
            <p className="text-xs text-slate-300">
              370 W Sierra Madre Blvd, Unit J <br />
              Sierra Madre, CA 91024
            </p>
            <a href="tel:+16263556213" className="text-xs font-bold text-cyan-400 hover:underline block">
              Call: (626) 355-6213
            </a>
          </div>

        </div>

        {/* Pitch Banner */}
        <div className="p-4 rounded-2xl bg-sky-950/60 border border-sky-800/60 text-center text-xs text-sky-200 mb-8 flex flex-col sm:flex-row items-center justify-center gap-2">
          <Sparkles className="size-4 text-amber-400 shrink-0" />
          <span>Redesigned Pitch Proposal for <strong>Sierra Madre Laundry</strong> — Next-Gen Web Experience, Dark/Light Themes & Touchless Pay Integration</span>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Sierra Madre Laundry. All rights reserved. Formerly Drop A Load Laundry.</p>
        </div>

      </div>
    </footer>
  )
}
