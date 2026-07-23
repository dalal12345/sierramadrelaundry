import {
	ArrowRight,
	Clock,
	CreditCard,
	ShieldCheck,
	Sparkles,
	Star,
	Sun,
	WashingMachine,
	Wifi,
	Zap,
} from "lucide-react";
import { Button } from "#/components/ui/button";

const STAR_KEYS = ["star-1", "star-2", "star-3", "star-4", "star-5"];

export function Hero() {
	return (
		<section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
			{/* Background Gradient Blurs */}
			<div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-sky-500/20 via-cyan-400/15 to-teal-400/10 rounded-full blur-3xl pointer-events-none -z-10" />
			<div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-sky-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
					{/* Left Column: Text & CTAs */}
					<div className="lg:col-span-7 space-y-6 text-center lg:text-left">
						{/* Top Badge */}
						<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 dark:bg-sky-400/10 border border-sky-500/20 dark:border-sky-400/20 text-sky-700 dark:text-sky-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-sm">
							<Sparkles className="size-4 text-amber-500 animate-bounce" />
							<span>Sierra Madre’s Premier 24/7 Eco-Smart Laundromat</span>
						</div>

						{/* Main Headline */}
						<h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-[1.1]">
							Laundry Made{" "}
							<span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
								Effortless & Clean.
							</span>
							<br />
							<span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-700 dark:text-slate-200">
								Open 24 Hours, Every Day.
							</span>
						</h1>

						{/* Subhead */}
						<p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
							State-of-the-art Speed Queen high-capacity washers, touchless
							mobile app & credit card pay, free gigabit Wi-Fi, air-conditioned
							seating & an outdoor garden patio. Formerly coin-op, now fully
							modernized!
						</p>

						{/* Hero Quick Feature Chips */}
						<div className="flex flex-wrap justify-center lg:justify-start gap-2.5 pt-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
							<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-xs">
								<Clock className="size-4 text-emerald-500" />
								24/7 Self-Service
							</span>
							<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-xs">
								<CreditCard className="size-4 text-sky-500" />
								Card & Mobile Pay
							</span>
							<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-xs">
								<Wifi className="size-4 text-cyan-500" />
								Free Wi-Fi & Patio
							</span>
							<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-xs">
								<ShieldCheck className="size-4 text-teal-500" />
								Attended & Clean
							</span>
						</div>

						{/* Hero Action Buttons */}
						<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
							<a href="#live-tracker" className="w-full sm:w-auto">
								<Button
									type="button"
									size="lg"
									className="w-full sm:w-auto gap-2 bg-gradient-to-r from-sky-600 via-cyan-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white shadow-lg shadow-sky-500/25 text-base font-semibold px-7 py-6 rounded-2xl"
								>
									<WashingMachine className="size-5" />
									Check Live Machine Status
									<ArrowRight className="size-4 ml-1" />
								</Button>
							</a>

							<a href="#calculator" className="w-full sm:w-auto">
								<Button
									type="button"
									variant="outline"
									size="lg"
									className="w-full sm:w-auto gap-2 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-base font-semibold px-6 py-6 rounded-2xl"
								>
									<Zap className="size-4 text-amber-500" />
									Calculate Wash Time & Cost
								</Button>
							</a>
						</div>

						{/* Social Proof / Rating */}
						<div className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200/60 dark:border-slate-800/60 max-w-md mx-auto lg:mx-0">
							<div className="flex items-center text-amber-400">
								{STAR_KEYS.map((k) => (
									<Star key={k} className="size-4 fill-amber-400" />
								))}
							</div>
							<p className="font-medium text-slate-700 dark:text-slate-300">
								<span className="font-bold">4.8 / 5 Stars</span> • Serving
								Sierra Madre, Pasadena & Arcadia
							</p>
						</div>
					</div>

					{/* Right Column: Hero Visual Glass Card Showcase */}
					<div className="lg:col-span-5 relative">
						{/* Main Interactive Glass Card */}
						<div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/40 dark:border-slate-800/80 shadow-2xl relative z-10 overflow-hidden">
							<div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">
								<div className="flex items-center gap-3">
									<div className="size-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400">
										<WashingMachine className="size-6 animate-pulse" />
									</div>
									<div>
										<h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
											Live Laundromat Hub
										</h3>
										<p className="text-xs text-slate-500 dark:text-slate-400">
											370 W Sierra Madre Blvd, Sierra Madre
										</p>
									</div>
								</div>
								<span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
									Open 24 Hours
								</span>
							</div>

							{/* Status Stats Grid */}
							<div className="grid grid-cols-2 gap-4 mb-6">
								<div className="p-4 rounded-2xl bg-sky-500/5 dark:bg-sky-500/10 border border-sky-500/15">
									<p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
										Washers Available
									</p>
									<div className="flex items-baseline gap-2 mt-1">
										<span className="font-heading text-3xl font-extrabold text-sky-600 dark:text-sky-400">
											18 / 22
										</span>
										<span className="text-xs text-emerald-500 font-bold">
											Ready
										</span>
									</div>
									<p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
										20lb to 80lb Capacity
									</p>
								</div>

								<div className="p-4 rounded-2xl bg-teal-500/5 dark:bg-teal-500/10 border border-teal-500/15">
									<p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
										Dryers Available
									</p>
									<div className="flex items-baseline gap-2 mt-1">
										<span className="font-heading text-3xl font-extrabold text-teal-600 dark:text-teal-400">
											16 / 20
										</span>
										<span className="text-xs text-emerald-500 font-bold">
											Ready
										</span>
									</div>
									<p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
										High-Temp Express Dry
									</p>
								</div>
							</div>

							{/* Live Feature Preview */}
							<div className="space-y-3">
								<div className="flex items-center justify-between p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/50 text-xs">
									<span className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
										<CreditCard className="size-4 text-cyan-500" />
										Accepted Payments
									</span>
									<span className="font-semibold text-sky-600 dark:text-cyan-400">
										Apple Pay, Cards, Cash
									</span>
								</div>

								<div className="flex items-center justify-between p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/50 text-xs">
									<span className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
										<Clock className="size-4 text-emerald-500" />
										Average Wash Time
									</span>
									<span className="font-semibold text-emerald-600 dark:text-emerald-400">
										25 - 30 Minutes
									</span>
								</div>

								<div className="flex items-center justify-between p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/50 text-xs">
									<span className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
										<Sun className="size-4 text-amber-500" />
										Special Feature
									</span>
									<span className="font-semibold text-amber-600 dark:text-amber-400">
										Shaded Outdoor Patio
									</span>
								</div>
							</div>

							{/* Bottom Quick Callout */}
							<div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-center">
								<p className="text-xs text-slate-500 dark:text-slate-400">
									📍 Located right next to Sierra Madre town center with
									dedicated free parking.
								</p>
							</div>
						</div>

						{/* Floating Decorative Elements */}
						<div className="hidden sm:block absolute -bottom-6 -left-6 z-20 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl max-w-xs animate-float">
							<div className="flex items-center gap-3">
								<div className="size-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
									<Wifi className="size-5" />
								</div>
								<div>
									<h4 className="text-xs font-bold text-slate-900 dark:text-white">
										Free Gigabit Wi-Fi
									</h4>
									<p className="text-[11px] text-slate-500 dark:text-slate-400">
										Work or stream while you wait
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
