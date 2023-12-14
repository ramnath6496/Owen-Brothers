import React from 'react'

function TopPanel() {
	const panel = [
		{ content: "Need Help? Call: 0161 624 6211" },
		{ content: "Contact us" },
		{ content: "Sign in" },
		{ content: "Create an account" }
	]
	return (
		<div className="top-panel border-b-2">
			<div className="page-wrapper">
				<div className="container mx-auto py-2 px-12">
					<ul className="flex justify-end tracking-wide">
						{panel.map((list, index) => {
							return (<li key={list.content} className="text-xs mx-4 font-medium uppercase text-gray-400">
								{index === 0 ? <span>{list.content}</span> : <a href="/" className="hover:underline">{list.content}</a>}
							</li>)
						})}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default TopPanel
