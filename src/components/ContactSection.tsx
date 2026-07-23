import {
	CheckCircle2,
	Clock,
	MapPin,
	Navigation,
	Phone,
	Send,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import { Button } from "#/components/ui/button";

export function ContactSection() {
	const [submitted, setSubmitted] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		service: "Self Service",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitted(true);
	};

	return (
		<section
			id="location"
			className="py-16 md:py-24 bg-slate-100/60 dark:bg-slate-900/40 relative"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-700 dark:text-sky-300 text-xs font-bold uppercase tracking-wider">
						<MapPin className="size-3.5 text-sky-500" />
						Visit Us or Get in Touch
					</div>
					<h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">
						Located in{" "}
						<span className="text-sky-600 dark:text-cyan-400">
							Sierra Madre, California
						</span>
					</h2>
					<p className="text-base text-slate-600 dark:text-slate-300">
						Open 24 hours a day, 7 days a week. Free dedicated parking right at
						our front door.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
					{/* Left Column: Contact & Location Info */}
					<div className="lg:col-span-6 space-y-6">
						<div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6">
							<div className="flex items-start gap-4">
								<div className="size-12 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
									<MapPin className="size-6" />
								</div>
								<div>
									<h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
										Our Address
									</h3>
									<p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
										370 W Sierra Madre Blvd, Unit J <br />
										Sierra Madre, CA 91024
									</p>
									<a
										href="https://www.google.com/maps/dir/Current+Location/34.1616563,-118.0605302"
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 dark:text-cyan-400 mt-2 hover:underline"
									>
										<Navigation className="size-3.5" />
										Get Driving Directions
									</a>
								</div>
							</div>

							<div className="flex items-start gap-4 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
								<div className="size-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
									<Clock className="size-6" />
								</div>
								<div>
									<h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
										Operating Hours
									</h3>
									<p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
										<strong className="text-emerald-600 dark:text-emerald-400">
											Open 24/7
										</strong>{" "}
										— Self-Service Laundry <br />
										Attendants on site during daytime hours for Fluff & Fold
										drop-offs.
									</p>
								</div>
							</div>

							<div className="flex items-start gap-4 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
								<div className="size-12 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
									<Phone className="size-6" />
								</div>
								<div>
									<h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
										Phone & Contact
									</h3>
									<a
										href="tel:+16263556213"
										className="text-base font-extrabold text-sky-600 dark:text-cyan-400 hover:underline block mt-1"
									>
										(626) 355-6213
									</a>
									<p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
										Call anytime for inquiries or commercial quotes
									</p>
								</div>
							</div>
						</div>

						{/* Google Maps Embed */}
						<div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md h-[280px]">
							<iframe
								title="Sierra Madre Laundry Google Map"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.8385258673756!2d-118.06271882352844!3d34.16165637311494!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c31e21b8b209%3A0xa6ebbb30c6a51d8b!2s370%20W%20Sierra%20Madre%20Blvd%20%23J%2C%20Sierra%20Madre%2C%20CA%2091024!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen={false}
								loading="lazy"
							></iframe>
						</div>
					</div>

					{/* Right Column: Contact & Pickup Request Form */}
					<div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
						<h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white mb-2">
							Send Us A Message
						</h3>
						<p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6">
							Have a question about our machines, commercial rates, or drop-off
							service? Drop us a message below!
						</p>

						{submitted ? (
							<div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
								<CheckCircle2 className="size-10 text-emerald-500 mx-auto animate-bounce" />
								<h4 className="font-heading font-bold text-lg text-emerald-700 dark:text-emerald-300">
									Message Received!
								</h4>
								<p className="text-xs text-slate-600 dark:text-slate-300">
									Thank you for reaching out to Sierra Madre Laundry. We will
									reply to your phone or email shortly!
								</p>
								<Button
									type="button"
									variant="outline"
									size="sm"
									onClick={() => setSubmitted(false)}
									className="mt-2"
								>
									Send Another Message
								</Button>
							</div>
						) : (
							<form onSubmit={handleSubmit} className="space-y-4">
								<div>
									<label
										htmlFor="contact-name"
										className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
									>
										Your Name
									</label>
									<input
										id="contact-name"
										type="text"
										required
										placeholder="e.g. Jane Doe"
										value={formData.name}
										onChange={(e) =>
											setFormData({ ...formData, name: e.target.value })
										}
										className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
									/>
								</div>

								<div>
									<label
										htmlFor="contact-phone"
										className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
									>
										Phone Number or Email
									</label>
									<input
										id="contact-phone"
										type="text"
										required
										placeholder="(626) 000-0000 or email"
										value={formData.phone}
										onChange={(e) =>
											setFormData({ ...formData, phone: e.target.value })
										}
										className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
									/>
								</div>

								<div>
									<label
										htmlFor="contact-service"
										className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
									>
										Interested Service
									</label>
									<select
										id="contact-service"
										value={formData.service}
										onChange={(e) =>
											setFormData({ ...formData, service: e.target.value })
										}
										className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
									>
										<option value="Self Service">
											24/7 Self Service Laundromat
										</option>
										<option value="Fluff & Fold">
											Fluff & Fold Drop-off Service
										</option>
										<option value="Pickup & Delivery">
											Pickup & Delivery Service
										</option>
										<option value="Commercial">
											Commercial Account (Airbnb/Gym/Hotel)
										</option>
									</select>
								</div>

								<div>
									<label
										htmlFor="contact-message"
										className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
									>
										Message / Notes
									</label>
									<textarea
										id="contact-message"
										rows={4}
										placeholder="How can we help you?"
										value={formData.message}
										onChange={(e) =>
											setFormData({ ...formData, message: e.target.value })
										}
										className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
									></textarea>
								</div>

								<Button
									type="submit"
									size="lg"
									className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-6 rounded-xl shadow-md shadow-sky-600/20"
								>
									<Send className="size-4 mr-2" />
									Submit Message
								</Button>
							</form>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
