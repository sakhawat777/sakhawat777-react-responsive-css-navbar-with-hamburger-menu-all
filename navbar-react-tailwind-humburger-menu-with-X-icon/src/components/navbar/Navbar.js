import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className='bg-gray-900 text-white'>
			<div className='container mx-auto flex items-center justify-between px-4 py-3'>
				<div>
					<img src='/path/to/logo.png' alt='Logo' className='w-10 h-10' />
				</div>
				<div className='flex items-center justify-center flex-grow'>
					<input
						type='text'
						placeholder='Search'
						className='w-full p-2 rounded-md bg-gray-800 text-white'
					/>
				</div>
				<div className='flex items-center space-x-4'>
					<button className='text-white'>Login</button>
					<button className='text-white'>Sign up</button>
					<button className='text-white'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='w-6 h-6'>
							<circle cx='9' cy='21' r='1' />
							<circle cx='20' cy='21' r='1' />
							<path d='M4 4h16l-2 12H6L4 4z' />
						</svg>
					</button>
				</div>
				<div className='-mr-2 flex md:hidden'>
					<button
						className='block text-white focus:outline-none'
						onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='w-6 h-6'>
								<line x1='18' y1='6' x2='6' y2='18' />
								<line x1='6' y1='6' x2='18' y2='18' />
							</svg>
						) : (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='w-6 h-6'>
								<path d='M4 6h16M4 12h16M4 18h16' />
							</svg>
						)}
					</button>
				</div>
			</div>
			<Transition
				show={isOpen}
				enter='transition ease-out duration-200'
				enterFrom='opacity-0 scale-95'
				enterTo='opacity-100 scale-100'
				leave='transition ease-in duration-200'
				leaveFrom='opacity-100 scale-100'
				leaveTo='opacity-0 scale-95'>
				<div className='md:hidden bg-gray-800 text-white'>
					<ul className='py-2 px-4 space-y-2'>
						<li>
							<a href='/' className='block text-white'>
								Home
							</a>
						</li>
						<li>
							<a href='/about' className='block text-white'>
								About
							</a>
						</li>
						<li>
							<a href='/services' className='block text-white'>
								Services
							</a>
						</li>
						<li>
							<a href='/contact' className='block text-white'>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</Transition>
		</nav>
	);
};

export default Navbar;
