import React, { useState } from 'react'
import { MapPin, Navigation, CheckCircle2, Sparkles } from 'lucide-react'
import { Button } from '#/components/ui/button'

const AREAS = [
  { city: 'Sierra Madre, CA', zip: '91024', desc: 'Home of Sierra Madre Laundry — 24/7 Self-Service & Local Pickup' },
  { city: 'Pasadena, CA', zip: '91101 - 91109', desc: 'Serving East Pasadena, Old Town, & Hastings Ranch communities' },
  { city: 'Arcadia, CA', zip: '91006 - 91007', desc: 'Convenient laundry pickup & express drop-off service' },
  { city: 'Monrovia, CA', zip: '91016', desc: 'Full laundry pickup & commercial laundry accounts' },
  { city: 'Altadena, CA', zip: '91001', desc: 'Residential fluff & fold and self-service access' },
  { city: 'San Marino, CA', zip: '91108', desc: 'Premium white-glove laundry drop-off & delivery' },
  { city: 'Alhambra, CA', zip: '91801', desc: 'Commercial & residential laundry service coverage' },
  { city: 'Duarte, CA', zip: '91010', desc: 'Fast turn-around wash, dry, and fold service' },
]

export function ServiceAreas() {
  const [selectedCity, setSelectedCity] = useState(AREAS[0])

  return (
    <section className="py-16 md:py-24 relative bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <MapPin className="size-3.5 text-cyan-500" />
            San Gabriel Valley Service Coverage
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Proudly Serving <span className="text-sky-600 dark:text-cyan-400">Sierra Madre & Neighboring Cities</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Our 24/7 laundromat is located in Sierra Madre, with pickup and delivery available across all surrounding communities.
          </p>
        </div>

        {/* Interactive Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {AREAS.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCity(item)}
              className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                selectedCity.city === item.city
                  ? 'bg-sky-600 text-white border-sky-600 shadow-lg shadow-sky-600/20 scale-[1.02]'
                  : 'glass-panel text-slate-900 dark:text-white border-slate-200 dark:border-slate-800 hover:border-sky-500/50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-heading font-extrabold text-base">{item.city}</span>
                <MapPin className={`size-4 ${selectedCity.city === item.city ? 'text-white' : 'text-sky-500'}`} />
              </div>
              <span className={`text-xs font-semibold block ${selectedCity.city === item.city ? 'text-sky-100' : 'text-slate-500 dark:text-slate-400'}`}>
                ZIP: {item.zip}
              </span>
            </button>
          ))}
        </div>

        {/* Selected City Detail Card */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-sky-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-extrabold uppercase tracking-wider text-sky-600 dark:text-cyan-400">
              Selected Service Zone
            </span>
            <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">
              {selectedCity.city}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl">
              {selectedCity.desc}. Visit our 24/7 facility or contact us to schedule doorstep pickup.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a href="tel:+16263556213">
              <Button size="lg" className="bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-xl">
                Check Pickup Availability
              </Button>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
