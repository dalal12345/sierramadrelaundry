import {
	ArrowRight,
	Building2,
	Check,
	PackageCheck,
	Sparkles,
	Truck,
	WashingMachine,
} from "lucide-react";
import { Button } from "#/components/ui/button";

const SERVICES = [
	{
		icon: WashingMachine,
		title: "24/7 Self-Service Laundromat",
		badge: "Open 24/7/365",
		description:
			"Experience brand-new, high-efficiency Speed Queen washers and dryers ranging from 20 lb to 80 lb capacity. Pay easily with credit card, Apple Pay, mobile app, or dollar bills.",
		highlights: [
			"Fast 25-30 minute wash cycles",
			"Air-conditioned & brightly lit space",
			"High-heat express dryers",
			"Free high-speed Wi-Fi & outdoor patio",
		],
		color: "from-sky-500 to-cyan-500",
	},
	{
		icon: PackageCheck,
		title: "Wash, Dry & Fold Drop-Off",
		badge: "Attended Daytime Service",
		description:
			"Drop your laundry off with our friendly on-site staff. We sort, wash with premium detergents, dry, and neatly fold your clothes into ready-to-store bundles.",
		highlights: [
			"Same-day express turnarounds",
			"Eco-friendly detergent options",
			"Special treatment for delicate fabrics",
			"Hanger options for collared shirts & suits",
		],
		color: "from-teal-500 to-emerald-500",
	},
	{
		icon: Truck,
		title: "Residential Pickup & Delivery",
		badge: "Door-to-Door Convenience",
		description:
			"Save hours every week! We pick up your dirty laundry right from your doorstep in Sierra Madre, Pasadena, Arcadia, and nearby towns, and return it fresh and folded.",
		highlights: [
			"Easy online scheduling & tracking",
			"Custom detergent & scent choices",
			"48-hour standard or 24-hour express",
			"Serving San Gabriel Valley area",
		],
		color: "from-cyan-500 to-blue-600",
	},
	{
		icon: Building2,
		title: "Commercial Laundry Accounts",
		badge: "B2B & Wholesale",
		description:
			"Custom bulk washing services designed for Airbnb hosts, boutique hotels, spas, fitness gyms, restaurants, and medical offices with reliable scheduled pickup.",
		highlights: [
			"Dedicated account manager",
			"Flexible invoicing & volume rates",
			"Sanitization & linen care protocols",
			"Heavy-duty tablecloth & towel washing",
		],
		color: "from-amber-500 to-orange-500",
	},
];

export function ServicesShowcase() {
	return (
		<section id="services" className="py-16 md:py-24 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-700 dark:text-sky-300 text-xs font-bold uppercase tracking-wider">
						<Sparkles className="size-3.5 text-amber-500" />
						Our Premium Laundry Solutions
					</div>
					<h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">
						Everything You Need For{" "}
						<span className="bg-gradient-to-r from-sky-600 to-teal-500 bg-clip-text text-transparent">
							Fresh, Spotless Laundry
						</span>
					</h2>
					<p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
						Whether you want to wash your own clothes in our 24/7 laundromat,
						drop them off for Fluff & Fold, or have us pick them up at your home
						or business.
					</p>
				</div>

				{/* Services Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{SERVICES.map((service) => {
						const Icon = service.icon;
						return (
							<div
								key={service.title}
								className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between group"
							>
								<div>
									{/* Top Icon & Badge */}
									<div className="flex items-center justify-between gap-4 mb-6">
										<div
											className={`size-14 rounded-2xl bg-gradient-to-tr ${service.color} p-0.5 shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform`}
										>
											<div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-cyan-400">
												<Icon className="size-7" />
											</div>
										</div>
										<span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
											{service.badge}
										</span>
									</div>

									{/* Title & Description */}
									<h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white mb-3">
										{service.title}
									</h3>
									<p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
										{service.description}
									</p>

									{/* Highlights Bullet Points */}
									<div className="space-y-2.5 mb-8">
										{service.highlights.map((h) => (
											<div
												key={h}
												className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200"
											>
												<div className="size-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
													<Check className="size-3.5 stroke-[3]" />
												</div>
												<span>{h}</span>
											</div>
										))}
									</div>
								</div>

								{/* Card Action Button */}
								<div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
									<a href="#location">
										<Button
											type="button"
											variant="outline"
											className="w-full justify-between group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600 transition-all text-sm font-semibold rounded-xl"
										>
											<span>Learn More & Start Service</span>
											<ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
										</Button>
									</a>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
