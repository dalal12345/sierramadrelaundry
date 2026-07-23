import React, { useState } from 'react'
import { 
  Calculator, 
  Sparkles, 
  WashingMachine, 
  PackageCheck, 
  Truck, 
  ShieldCheck, 
  Clock,
  CheckCircle2,
  DollarSign
} from 'lucide-react'
import { Button } from '#/components/ui/button'

export function CostCalculator() {
  const [loadSize, setLoadSize] = useState<'small' | 'medium' | 'large' | 'commercial'>('medium')
  const [serviceType, setServiceType] = useState<'self' | 'dropoff' | 'delivery'>('self')
  const [addDetergent, setAddDetergent] = useState<boolean>(false)
  const [addSoftener, setAddSoftener] = useState<boolean>(false)

  // Calculations
  const basePrices = {
    self: { small: 4.25, medium: 5.75, large: 9.75, commercial: 14.50 },
    dropoff: { small: 18.00, medium: 32.00, large: 55.00, commercial: 85.00 },
    delivery: { small: 28.00, medium: 45.00, large: 75.00, commercial: 110.00 }
  }

  const dryPrices = { self: 1.50, dropoff: 0, delivery: 0 }
  
  const estimatedPrice = (
    basePrices[serviceType][loadSize] + 
    dryPrices[serviceType] + 
    (addDetergent ? 1.50 : 0) + 
    (addSoftener ? 1.00 : 0)
  ).toFixed(2)

  const timeEstimates = {
    self: '40 - 45 Minutes Total',
    dropoff: 'Same-Day or 24-Hour Express',
    delivery: 'Schedule Pickup & Delivery Slot'
  }

  return (
    <section id="calculator" className="py-16 md:py-24 bg-slate-100/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Calculator className="size-3.5 text-emerald-500" />
            Instant Cost & Time Estimator
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Plan Your Wash & Estimate <span className="text-emerald-600 dark:text-emerald-400">Exact Cost</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Select your load size and service option below to see transparent rates and estimated completion time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-8">
            
            {/* 1. Choose Service Type */}
            <div>
              <label className="block font-heading font-bold text-sm text-slate-900 dark:text-white mb-3">
                1. Select Service Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setServiceType('self')}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    serviceType === 'self'
                      ? 'border-sky-500 bg-sky-500/10 text-slate-900 dark:text-white shadow-md'
                      : 'border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-100'
                  }`}
                >
                  <WashingMachine className="size-5 text-sky-500 mb-2" />
                  <h3 className="font-bold text-sm">Self-Service</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">24/7 Wash & Dry in-store</p>
                </button>

                <button
                  type="button"
                  onClick={() => setServiceType('dropoff')}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    serviceType === 'dropoff'
                      ? 'border-sky-500 bg-sky-500/10 text-slate-900 dark:text-white shadow-md'
                      : 'border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-100'
                  }`}
                >
                  <PackageCheck className="size-5 text-teal-500 mb-2" />
                  <h3 className="font-bold text-sm">Fluff & Fold</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">We wash, dry & fold for you</p>
                </button>

                <button
                  type="button"
                  onClick={() => setServiceType('delivery')}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    serviceType === 'delivery'
                      ? 'border-sky-500 bg-sky-500/10 text-slate-900 dark:text-white shadow-md'
                      : 'border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-100'
                  }`}
                >
                  <Truck className="size-5 text-amber-500 mb-2" />
                  <h3 className="font-bold text-sm">Pickup & Delivery</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Door-to-door convenience</p>
                </button>
              </div>
            </div>

            {/* 2. Choose Load Size */}
            <div>
              <label className="block font-heading font-bold text-sm text-slate-900 dark:text-white mb-3">
                2. Select Laundry Volume / Load Size
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'small', label: '1 Basket', desc: '~15-20 lbs' },
                  { id: 'medium', label: '2-3 Baskets', desc: '~30-35 lbs' },
                  { id: 'large', label: 'Comforters & Bedding', desc: '~45-50 lbs' },
                  { id: 'commercial', label: 'Bulk / Commercial', desc: '~60-80+ lbs' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setLoadSize(item.id as any)}
                    className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                      loadSize === item.id
                        ? 'border-emerald-500 bg-emerald-500/10 text-slate-900 dark:text-white shadow-md font-bold'
                        : 'border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-100'
                    }`}
                  >
                    <span className="block text-xs font-extrabold">{item.label}</span>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Add-on Supplies */}
            <div>
              <label className="block font-heading font-bold text-sm text-slate-900 dark:text-white mb-3">
                3. Optional Vending Add-ons
              </label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer bg-white/60 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
                  <input
                    type="checkbox"
                    checked={addDetergent}
                    onChange={(e) => setAddDetergent(e.target.checked)}
                    className="size-4 text-sky-600 rounded"
                  />
                  <span>Premium Tide / Eco Detergent Pod (+$1.50)</span>
                </label>

                <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer bg-white/60 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
                  <input
                    type="checkbox"
                    checked={addSoftener}
                    onChange={(e) => setAddSoftener(e.target.checked)}
                    className="size-4 text-sky-600 rounded"
                  />
                  <span>Downy Fabric Softener / Dryer Sheet (+$1.00)</span>
                </label>
              </div>
            </div>

          </div>

          {/* Right Column: Calculated Output Card */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-sky-500/30 dark:border-sky-500/20 shadow-xl bg-gradient-to-b from-sky-500/5 to-teal-500/5">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">
              <span className="font-heading font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="size-4 text-amber-500" />
                Estimated Price Breakdown
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400">
                Transparent Rates
              </span>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center text-sm text-slate-600 dark:text-slate-300">
                <span>Selected Service:</span>
                <strong className="text-slate-900 dark:text-white capitalize">
                  {serviceType === 'self' ? 'Self-Service Wash' : serviceType === 'dropoff' ? 'Fluff & Fold Drop-off' : 'Pickup & Delivery'}
                </strong>
              </div>

              <div className="flex justify-between items-center text-sm text-slate-600 dark:text-slate-300">
                <span>Capacity / Load:</span>
                <strong className="text-slate-900 dark:text-white uppercase">{loadSize}</strong>
              </div>

              <div className="flex justify-between items-center text-sm text-slate-600 dark:text-slate-300">
                <span>Estimated Completion Time:</span>
                <strong className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <Clock className="size-3.5" />
                  {timeEstimates[serviceType]}
                </strong>
              </div>
            </div>

            {/* Total Price Display */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center mb-6 shadow-sm">
              <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400">
                Estimated Total Cost
              </span>
              <div className="font-heading font-black text-4xl sm:text-5xl text-sky-600 dark:text-cyan-400 mt-1">
                ${estimatedPrice}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Accepted: Apple Pay, Credit Card, Cash/Bills, Loyalty Card
              </p>
            </div>

            <a href="tel:+16263556213" className="w-full">
              <Button size="lg" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-6 rounded-2xl shadow-lg shadow-emerald-600/20">
                <CheckCircle2 className="size-5 mr-2" />
                Book Service or Visit Now
              </Button>
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
