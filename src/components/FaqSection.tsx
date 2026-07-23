import React, { useState } from 'react'
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react'

const FAQS = [
  {
    q: 'Do I need quarters to use the washers and dryers?',
    a: 'No quarters required! Sierra Madre Laundry is fully modernized. You can pay directly at the machine or kiosk using your credit card, debit card, Apple Pay, Google Pay, crisp dollar bills, or a reloadable laundry card.'
  },
  {
    q: 'What are your hours of operation?',
    a: 'Our self-service laundromat is open 24 hours a day, 7 days a week, 365 days a year! Friendly attendants are on site during daytime hours to assist you with Fluff & Fold drop-offs and vending.'
  },
  {
    q: 'Where can I park when bringing my laundry?',
    a: 'We have a dedicated free off-street parking lot right in front of our entrance at 370 W Sierra Madre Blvd, Unit J, making loading and unloading your laundry baskets fast and easy.'
  },
  {
    q: 'How long does a standard wash and dry cycle take?',
    a: 'Our high-efficiency Speed Queen washers complete a full wash cycle in just 25 to 30 minutes. Our express high-heat dryers dry most loads in 24 to 30 minutes, getting you in and out in under an hour!'
  },
  {
    q: 'What is your Fluff & Fold drop-off turnaround time?',
    a: 'Standard drop-off laundry is ready within 24 hours. We also offer same-day express service if dropped off before 11:00 AM!'
  },
  {
    q: 'Do you offer pickup and delivery in Pasadena or Arcadia?',
    a: 'Yes! We offer doorstep pickup and delivery across Sierra Madre, Pasadena, Arcadia, Altadena, Monrovia, San Marino, and nearby cities.'
  }
]

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-700 dark:text-sky-300 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="size-3.5 text-sky-500" />
            Frequently Asked Questions
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Have Questions? <span className="text-sky-600 dark:text-cyan-400">We’ve Got Answers.</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div 
                key={idx}
                className="glass-panel rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`size-5 text-sky-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
