export default function Address() {
	return (
		<section className="bg-slate-950 py-24 px-4">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col items-center">
					<h2 className="uppercase text-4xl sm:text-5xl xl:text-6xl font-black bg-gradient-to-r from-[#FDD557] to-amber-500 bg-clip-text text-transparent">
						GET IN TOUCH
					</h2>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
					<div className="flex flex-col items-start">
						<h3 className="text-2xl font-bold text-slate-100">
							Phone
						</h3>
						<a
							href="tel:01615472679"
							className="text-lg text-slate-400 mt-2 hover:text-slate-200 transition-colors duration-300">
							0161 547 2679
						</a>

						<h3 className="text-2xl font-bold text-slate-100 mt-8">
							Email
						</h3>
						<a
							href="mailto:train@theolympusprojects.com"
							className="text-lg text-slate-400 mt-2 hover:text-slate-200 transition-colors duration-300">
							train@theolympusprojects.com
						</a>

						<h3 className="text-2xl font-bold text-slate-100 mt-8">
							Address
						</h3>
						<a
							href="https://maps.google.com/?q=109-113+Corporation+Street+Manchester+M4+4DX"
							target="_blank"
							rel="noopener noreferrer"
							className="text-lg text-slate-400 mt-2 hover:text-slate-200 transition-colors duration-300">
							109-113 Corporation Street Manchester, M4 4DX
						</a>
					</div>
					<div className="w-full h-[500px] rounded-lg overflow-hidden">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9496.43408645751!2d-2.2423744242686143!3d53.4843907572718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1c33fedc419%3A0x4953b8416ff88ba7!2sThe%20Olympus%20Projects!5e0!3m2!1sen!2suk!4v1739278959573!5m2!1sen!2suk"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"></iframe>
					</div>
				</div>
			</div>
		</section>
	);
}
