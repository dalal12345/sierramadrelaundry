import { createFileRoute } from "@tanstack/react-router";
import { Amenities } from "#/components/Amenities";
import { ContactSection } from "#/components/ContactSection";
import { CostCalculator } from "#/components/CostCalculator";
import { FaqSection } from "#/components/FaqSection";
import { Footer } from "#/components/Footer";
import { Hero } from "#/components/Hero";
import { LiveMachineTracker } from "#/components/LiveMachineTracker";
import { Navbar } from "#/components/Navbar";
import { PricingTable } from "#/components/PricingTable";
import { ServiceAreas } from "#/components/ServiceAreas";
import { ServicesShowcase } from "#/components/ServicesShowcase";
import { Testimonials } from "#/components/Testimonials";

export const Route = createFileRoute("/")({ component: Home });

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
	);
}
