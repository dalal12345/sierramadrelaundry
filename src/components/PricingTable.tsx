import React from 'react'
import { Check, DollarSign, Sparkles, HelpCircle, Phone } from 'lucide-react'
import { Button } from '#/components/ui/button'

const RATES = [
  {
    category: 'Self-Service Washers',
    items: [
      { name: '20 lb Speed Queen Washer', price: '$4.25 / wash', desc: '1 - 2 Baskets / Small Loads' },
      { name: '30 lb Double Washer', price: '$5.75 / wash', desc: 'Family Load / Double Capacity' },
      { name: '45 lb Large Washer', price: '$7.50 / wash', desc: 'Queen Comforters & Bedding' },
      { name: '60 lb Monster Washer', price: '$9.75 / wash', desc: 'King Comforters & Heavy Duvets' },
      { name: '80 lb Bulk Washer', price: '$12.50 / wash', desc: 'Massive Commercial & Bulk Loads' },
    ]
  },
  {
    category: 'High-Heat Dryers & Add-ons',
    items: [
      { name: '30 lb High-Temp Dryer', price: '$0.50 per 6 mins', desc: 'High-efficiency fast drying' },
      { name: '45 lb Heavy-Duty Dryer', price: '$0.75 per 6 mins', desc: 'Comforters & thick blankets' },
      { name: 'Tide / Eco Detergent Pods', price: '$1.50 / pack', desc: 'Available via on-site vending' },
      { name: 'Downy Softener & Dryer Sheets', price: '$1.00 / pack', desc: 'Available via on-site vending' },
    ]
  },
  {
    category: 'Fluff & Fold Drop-off',
    items: [
      { name: 'Regular Laundry (Per LB)', price: '$1.85 / lb', desc: '15 lb minimum load' },
      { name: 'Same-Day Express Drop-off', price: '$2.25 / lb', desc: 'Guaranteed 6-hour turn-around' },
      { name: 'Comforter / Bedding Cleaning', price: '$25.00 - $35.00', desc: 'Per comforter (Twin to King)' },
      { name: 'Residential Pickup & Delivery', price: '$2.15 / lb', desc: 'Doorstep pickup in Sierra Madre/Pasadena' },
    ]
  }
]

export function PricingTable() {
  return (
    <section id="pricing" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <DollarSign className="size-3.5 text-emerald-500" />
            Clear & Honest Rates
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">
            Transparent Pricing. <span className="text-sky-600 dark:text-cyan-400">No Hidden Fees.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Pay easily using your credit card, Apple Pay, Google Pay, crisp dollar bills, or loyalty card.
          </p>
        </div>

        {/* Pricing Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RATES.map((cat, idx) => (
            <div 
              key={idx}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-3 text-sky-600 dark:text-cyan-400">
                  {cat.category}
                </h3>

                <div className="space-y-4 mb-6">
                  {cat.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-start gap-4 pb-3 border-b border-slate-100 dark:border-slate-800/50">
                      <div>
                        <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                          {item.name}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                      <span className="font-heading font-extrabold text-sm text-emerald-600 dark:text-emerald-400 shrink-0">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <a href="#calculator">
                  <Button variant="outline" className="w-full justify-center text-xs font-bold rounded-xl border-slate-300 dark:border-slate-700">
                    Estimate Total Cost
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-sky-900 via-slate-900 to-sky-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading font-bold text-lg text-white">Need a Commercial Volume Rate for your Airbnb or Gym?</h4>
            <p className="text-xs text-sky-200">We offer custom invoicing and volume discounts for local businesses.</p>
          </div>
          <a href="tel:+16263556213">
            <Button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-sm shrink-0">
              <Phone className="size-4 mr-2" />
              Call (626) 355-6213
            </Button>
          </a>
        </div>

      </div>
    </section>
  )
}
