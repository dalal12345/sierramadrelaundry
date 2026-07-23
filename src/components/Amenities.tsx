import {
	Car,
	Coffee,
	CreditCard,
	Sparkles,
	Sun,
	Wifi,
	Wind,
} from "lucide-react";

const AMENITIES = [
	{
		icon: Sun,
		title: "Outdoor Garden Patio",
		description:
			"Enjoy the sunny Sierra Madre mountain views & fresh air in our outdoor shaded seating patio while your wash runs.",
		tag: "Popular Feature",
	},
	{
		icon: Wifi,
		title: "Free High-Speed Wi-Fi",
		description:
			"Stay productive or stream your favorite shows with our complimentary ultra-fast Wi-Fi network.",
		tag: "Gigabit Speed",
	},
	{
		icon: CreditCard,
		title: "Touchless Mobile & Card Pay",
		description:
			"No quarters needed! Use your credit card, Apple Pay, Google Pay, crisp dollar bills, or loyalty card.",
		tag: "100% Touchless",
	},
	{
		icon: Wind,
		title: "Air Conditioned & Clean",
		description:
			"Spacious, climate-controlled interior with comfortable seating, clean folding tables, and bright lighting.",
		tag: "Climate Controlled",
	},
	{
		icon: Coffee,
		title: "Snack & Supply Vending",
		description:
			"Cold sodas, snacks, and brand-name laundry soaps, softeners, and bleach available right on-site.",
		tag: "Convenient",
	},
	{
		icon: Car,
		title: "Free Dedicated Parking Lot",
		description:
			"Hassle-free parking right in front of our entrance, making loading and unloading heavy baskets effortless.",
		tag: "Free Off-Street",
	},
];

export function Amenities() {
	return (
		<section
			id="amenities"
			className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden"
		>
			{/* Glow Effects */}
			<div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-sky-500/10 blur-3xl pointer-events-none" />
			<div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-teal-500/10 blur-3xl pointer-events-none" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Header */}
				<div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider border border-sky-500/30">
						<Sparkles className="size-3.5 text-amber-400" />
						Designed For Your Comfort
					</div>
					<h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
						More Than Just A Laundromat. <br />
						<span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
							A Relaxing Community Hub.
						</span>
					</h2>
					<p className="text-base sm:text-lg text-slate-300">
						We’ve created a clean, safe, and modern environment so doing laundry
						feels like a breeze.
					</p>
				</div>

				{/* Amenities Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{AMENITIES.map((item) => {
						const Icon = item.icon;
						return (
							<div
								key={item.title}
								className="bg-slate-800/80 backdrop-blur-md p-6 rounded-3xl border border-slate-700/80 hover:border-sky-400/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
							>
								<div className="flex items-center justify-between gap-4 mb-5">
									<div className="size-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-colors">
										<Icon className="size-6" />
									</div>
									<span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-700 text-sky-300 border border-slate-600">
										{item.tag}
									</span>
								</div>

								<h3 className="font-heading font-bold text-xl text-white mb-2">
									{item.title}
								</h3>
								<p className="text-sm text-slate-300 leading-relaxed">
									{item.description}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
