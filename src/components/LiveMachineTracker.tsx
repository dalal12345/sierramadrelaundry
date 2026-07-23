import { CheckCircle2, Clock, Play, WashingMachine, Zap } from "lucide-react";
import { useState } from "react";
import { Button } from "#/components/ui/button";

type MachineType = "all" | "washer" | "dryer";

interface Machine {
	id: string;
	name: string;
	type: "washer" | "dryer";
	capacity: string;
	status: "available" | "running" | "maintenance";
	timeLeft?: number;
	price: string;
	idealFor: string;
}

const INITIAL_MACHINES: Machine[] = [
	{
		id: "W01",
		name: "Speed Queen #01",
		type: "washer",
		capacity: "20 lb",
		status: "available",
		price: "$4.25",
		idealFor: "1-2 Baskets / Single Load",
	},
	{
		id: "W02",
		name: "Speed Queen #02",
		type: "washer",
		capacity: "20 lb",
		status: "running",
		timeLeft: 12,
		price: "$4.25",
		idealFor: "1-2 Baskets / Single Load",
	},
	{
		id: "W03",
		name: "Speed Queen #03",
		type: "washer",
		capacity: "30 lb",
		status: "available",
		price: "$5.75",
		idealFor: "Double Family Load",
	},
	{
		id: "W04",
		name: "Speed Queen #04",
		type: "washer",
		capacity: "30 lb",
		status: "available",
		price: "$5.75",
		idealFor: "Double Family Load",
	},
	{
		id: "W05",
		name: "Speed Queen #05",
		type: "washer",
		capacity: "45 lb",
		status: "running",
		timeLeft: 6,
		price: "$7.50",
		idealFor: "Large Bedding / Queen Comforter",
	},
	{
		id: "W06",
		name: "Speed Queen #06",
		type: "washer",
		capacity: "45 lb",
		status: "available",
		price: "$7.50",
		idealFor: "Large Bedding / Queen Comforter",
	},
	{
		id: "W07",
		name: "Speed Queen Monster #07",
		type: "washer",
		capacity: "60 lb",
		status: "available",
		price: "$9.75",
		idealFor: "King Comforters & Heavy Blankets",
	},
	{
		id: "W08",
		name: "Speed Queen Monster #08",
		type: "washer",
		capacity: "80 lb",
		status: "available",
		price: "$12.50",
		idealFor: "Bulk Laundry & Commercial Loads",
	},
	{
		id: "D01",
		name: "Express Dryer #01",
		type: "dryer",
		capacity: "30 lb",
		status: "available",
		price: "$0.50 / 6 mins",
		idealFor: "Express High-Heat Drying",
	},
	{
		id: "D02",
		name: "Express Dryer #02",
		type: "dryer",
		capacity: "30 lb",
		status: "available",
		price: "$0.50 / 6 mins",
		idealFor: "Express High-Heat Drying",
	},
	{
		id: "D03",
		name: "Super Dryer #03",
		type: "dryer",
		capacity: "45 lb",
		status: "running",
		timeLeft: 18,
		price: "$0.75 / 6 mins",
		idealFor: "Heavy Blanket Drying",
	},
	{
		id: "D04",
		name: "Super Dryer #04",
		type: "dryer",
		capacity: "45 lb",
		status: "available",
		price: "$0.75 / 6 mins",
		idealFor: "Heavy Blanket Drying",
	},
];

export function LiveMachineTracker() {
	const [filter, setFilter] = useState<MachineType>("all");
	const [machines, setMachines] = useState<Machine[]>(INITIAL_MACHINES);
	const [activeCycleMachine, setActiveCycleMachine] = useState<string | null>(
		null,
	);

	const filteredMachines = machines.filter(
		(m) => filter === "all" || m.type === filter,
	);

	const handleStartSimulatedCycle = (id: string) => {
		setActiveCycleMachine(id);
		setMachines((prev) =>
			prev.map((m) => {
				if (m.id === id) {
					return { ...m, status: "running", timeLeft: 25 };
				}
				return m;
			}),
		);
	};

	return (
		<section id="live-tracker" className="py-16 md:py-24 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
						<Zap className="size-3.5 text-amber-500" />
						Live Machine Availability Tracker
					</div>
					<h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
						See Available Washers & Dryers{" "}
						<span className="text-sky-600 dark:text-cyan-400">
							In Real Time
						</span>
					</h2>
					<p className="text-base text-slate-600 dark:text-slate-300">
						Never wait in line. Check which high-capacity Speed Queen washers
						and high-heat dryers are ready before you arrive at Sierra Madre
						Laundry.
					</p>
				</div>

				{/* Filter & Legend Bar */}
				<div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
					{/* Tabs */}
					<div className="flex items-center gap-2">
						<button
							type="button"
							onClick={() => setFilter("all")}
							className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
								filter === "all"
									? "bg-sky-600 text-white shadow-md"
									: "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
							}`}
						>
							All Machines ({machines.length})
						</button>
						<button
							type="button"
							onClick={() => setFilter("washer")}
							className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
								filter === "washer"
									? "bg-sky-600 text-white shadow-md"
									: "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
							}`}
						>
							Washers ({machines.filter((m) => m.type === "washer").length})
						</button>
						<button
							type="button"
							onClick={() => setFilter("dryer")}
							className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
								filter === "dryer"
									? "bg-sky-600 text-white shadow-md"
									: "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
							}`}
						>
							Dryers ({machines.filter((m) => m.type === "dryer").length})
						</button>
					</div>

					{/* Status Indicator Legend */}
					<div className="flex items-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-400">
						<span className="flex items-center gap-1.5">
							<span className="size-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
							Available
						</span>
						<span className="flex items-center gap-1.5">
							<span className="size-2.5 rounded-full bg-amber-500"></span>
							In Use / Running
						</span>
					</div>
				</div>

				{/* Machine Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{filteredMachines.map((m) => (
						<div
							key={m.id}
							className={`glass-panel p-5 rounded-2xl border transition-all duration-300 relative ${
								m.status === "available"
									? "border-emerald-500/30 dark:border-emerald-500/20 hover:border-emerald-500/60"
									: "border-amber-500/30 dark:border-amber-500/20 opacity-90"
							}`}
						>
							{/* Header */}
							<div className="flex items-start justify-between gap-2 mb-3">
								<div className="flex items-center gap-2.5">
									<div
										className={`p-2.5 rounded-xl ${
											m.type === "washer"
												? "bg-sky-500/10 text-sky-600 dark:text-sky-400"
												: "bg-orange-500/10 text-orange-600 dark:text-orange-400"
										}`}
									>
										<WashingMachine className="size-6" />
									</div>
									<div>
										<h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white">
											{m.name}
										</h3>
										<span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
											Capacity:{" "}
											<strong className="text-sky-600 dark:text-cyan-400">
												{m.capacity}
											</strong>
										</span>
									</div>
								</div>

								<span
									className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
										m.status === "available"
											? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
											: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
									}`}
								>
									{m.status === "available"
										? "● Available"
										: `⏳ ${m.timeLeft}m left`}
								</span>
							</div>

							{/* Description / Ideal For */}
							<p className="text-xs text-slate-600 dark:text-slate-300 mb-4 bg-slate-100/60 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
								💡 <strong>Ideal for:</strong> {m.idealFor}
							</p>

							{/* Price & Action */}
							<div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-800">
								<div>
									<span className="text-[10px] uppercase font-bold text-slate-400">
										Standard Rate
									</span>
									<p className="font-heading font-extrabold text-lg text-slate-900 dark:text-white">
										{m.price}
									</p>
								</div>

								{m.status === "available" ? (
									<Button
										type="button"
										size="sm"
										onClick={() => handleStartSimulatedCycle(m.id)}
										className="gap-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-3 py-1.5 rounded-xl cursor-pointer"
									>
										<Play className="size-3.5" />
										Start Wash Demo
									</Button>
								) : (
									<span className="text-xs font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1">
										<Clock className="size-3.5" />
										Finishing soon
									</span>
								)}
							</div>
						</div>
					))}
				</div>

				{/* Demo Pay Notification Banner */}
				{activeCycleMachine && (
					<div className="mt-8 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center animate-in fade-in duration-300">
						<p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 flex items-center justify-center gap-2">
							<CheckCircle2 className="size-5 text-emerald-500" />
							Simulated mobile wash started for Machine{" "}
							<strong>{activeCycleMachine}</strong>! Pay with Apple Pay, Credit
							Card, or Cash at the counter.
						</p>
					</div>
				)}
			</div>
		</section>
	);
}
