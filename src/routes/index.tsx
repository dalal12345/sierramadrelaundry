import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '#/components/Navbar'
import { Hero } from '#/components/Hero'
import { LiveMachineTracker } from '#/components/LiveMachineTracker'
import { ServicesShowcase } from '#/components/ServicesShowcase'
import { CostCalculator } from '#/components/CostCalculator'
import { Amenities } from '#/components/Amenities'
import { ServiceAreas } from '#/components/ServiceAreas'
import { PricingTable } from '#/components/PricingTable'
import { Testimonials } from '#/components/Testimonials'
import { FaqSection } from '#/components/FaqSection'
import { ContactSection } from '#/components/ContactSection'
import { Footer } from '#/components/Footer'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LiveMachineTracker />
        <ServicesShowcase />
        <CostCalculator />
        <Amenities />
        <ServiceAreas />
        <PricingTable />
        <Testimonials />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
