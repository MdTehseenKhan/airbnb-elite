import { categories } from "../constants"

const Footer = () => {
	return (
<footer className="bg-gray-100 text-sm">
	<div className="flex flex-col p-5 text-left">
		{ categories?.map(({ category, links }, i) => (
				<div key={`${i}-${category}`} className="text-gray-900 px-4 py-5 border-b border-gray-300">
					<h2 className="font-[cereal-bold] mb-3">
						{category}
					</h2>
					<nav className="grid md:grid-cols-3 list-none font-[cereal-light]">
						{ links?.map(({ linkText, link }) => (
							<li key={`${i}-${linkText}`} className="my-2">
								<a href={link}>{linkText}</a>
							</li>
						))}
					</nav>
				</div>
			))}
	</div>
	<div className="pb-5 px-5 text-gray-500 flex justify-between">
		<p>
			© 2022 Airbnb elite —&nbsp;
			<a href="https://twitter.com/m_tehseen_khan" target="_blank">@tehseenkhan</a>
		</p>
		<span className="inline-flex space-x-3">
			<a href="https://www.facebook.com/muhammadtehseen.khan.986" target="_blank">
				<svg
					fill="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					className="w-5 h-5"
					viewBox="0 0 24 24"
				>
					<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
				</svg>
			</a>
			<a href="https://twitter.com/m_tehseen_khan" target="_blank">
				<svg
					fill="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					className="w-5 h-5"
					viewBox="0 0 24 24"
				>
					<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
				</svg>
			</a>
			<a href="https://www.instagram.com/ig_haiwaan_not0p/" target="_blank">
				<svg
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					className="w-5 h-5"
					viewBox="0 0 24 24"
				>
					<rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
					<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
				</svg>
			</a>
			<a href="https://linkedin.com/in/muhammad-tehseen-khan-159825172" target="_blank">
				<svg
					fill="currentColor"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={0}
					className="w-5 h-5"
					viewBox="0 0 24 24"
				>
					<path
						stroke="none"
						d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
					/>
					<circle cx={4} cy={4} r={2} stroke="none" />
				</svg>
			</a>
		</span>
</div>
</footer>

	)
}
export default Footer






