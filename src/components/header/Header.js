import React from 'react';
import logo from '../../images/owen_logo.png'
import bag from '../../images/shopping-bag.svg'


function Header() {
	return (
		<div>
			<div className="header">
				<div className="container mx-auto py-8 px-12 flex justify-between">
					<div className="search ps-40">
						<input id="search" name="search" type="search" autoComplete="search" placeholder="Search..." className="block rounded-full bg-zinc-100 py-1.5 px-4 text-gray-400 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
					</div>
					<div className="logo">
						<a href="/">
							<img src={logo} alt="Owen Brothers" width="175px" />
						</a>
					</div>
					<div className="custom">
						<p className='text-xs font-medium uppercase text-gray-400'>Call us now</p>
						<p className='text-lg font-bold'>+44 (0) 161 624 6211</p>
					</div>
					<div className="cart pe-5">
						<a href="/" className="group -m-2 flex items-center p-2">
							<img src={bag} alt="Shopping Cart" width="40px" />
							<span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
