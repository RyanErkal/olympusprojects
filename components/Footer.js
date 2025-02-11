import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-slate-950 py-4 mt-auto">
			<div className="max-w-7xl mx-auto text-center text-gray-600 text-sm border-t-2 border-slate-800 pt-4">
				<p>
					The Olympus Projects© {new Date().getFullYear()} All rights
					reserved.
				</p>
				<p>
					Designed & Developed by{" "}
					<Link
						href="https://www.redesignsolutions.co"
						target="_blank"
						className="text-slate-400 font-semibold underline hover:text-orange-400 transition-all ease-in-out duration-300">
						ReDesign
					</Link>
				</p>
			</div>
		</footer>
	);
}
