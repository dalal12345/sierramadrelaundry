import React from 'react'
import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react'

const REVIEWS = [
  {
    name: 'Sarah M.',
    location: 'Sierra Madre, CA',
    rating: 5,
    source: 'Yelp Reviewer',
    comment: 'Hands down the cleanest laundromat in the San Gabriel Valley! Being open 24/7 is a lifesaver. I love sitting out on the covered patio with my laptop while the 80lb washer gets my king duvet spotless in 25 mins.',
  },
  {
    name: 'David K.',
    location: 'Pasadena, CA',
    rating: 5,
    source: 'Google Reviewer',
    comment: 'No more digging around for quarters! Pay right on my phone or card. The attendant daytime staff are super helpful, and the facility smells fresh and clean. Highly recommended!',
  },
  {
    name: 'Elena R.',
    location: 'Arcadia, CA',
    rating: 5,
    source: 'Verified Customer',
    comment: 'Used their Fluff & Fold drop-off service after returning from vacation with 4 bags of laundry. Dropped it off in the morning and picked it up perfectly folded that evening. Worth every penny!',
  },
  {
    name: 'Marcus B.',
    location: 'Altadena, CA',
    rating: 5,
    source: 'Local Business Owner',
    comment: 'Sierra Madre Laundry handles our Airbnb linen account weekly. Always punctual, fresh-smelling towels, and top tier commercial communication.',
  }
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-slate-100/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="size-3.5 text-amber-500" />
            Loved By Our Community
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">
            What Our Customers <span className="text-amber-500">Are Saying</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Read real feedback from locals in Sierra Madre, Pasadena, and Arcadia.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS.map((rev, idx) => (
            <div 
              key={idx}
              className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between relative"
            >
              <Quote className="size-10 text-sky-500/20 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="size-4 fill-amber-400" />
                  ))}
                </div>

                {/* Comment Text */}
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center justify-between border-t border-slate-200/60 dark:border-slate-800/60 pt-4">
                <div>
                  <h4 className="font-heading font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-1.5">
                    {rev.name}
                    <CheckCircle2 className="size-4 text-sky-500" />
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {rev.location}
                  </p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-200/60 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {rev.source}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
