export default function DisneyCharacter() {
	return (
		<div className='flex flex-col font-poppins'>
			<nav className='h-24 max-w-5xl w-full mx-auto'>
				<div>
					<span className='text-lg font-semibold'>LOGO</span>
					<span className='font-medium text-base'>Character</span>
				</div>

				<div className='relative'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2.5 stroke-gray-500'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
						/>
					</svg>
					<input
						className='appearance-none bg-gray-100 py-2.5 pl-10 pr-2.5 rounded-full text-gray-700 outline-none'
						placeholder='Search character...'
					/>
				</div>

				<div>
					<span>Menu</span>
				</div>
			</nav>
			<div className='flex-1'></div>
		</div>
	);
}
