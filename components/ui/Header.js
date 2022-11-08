import Link from 'next/link'
import React from 'react'

export default function Header() {
	return (
		<div className='px-6 py-4 border-b border-gray-100'>
			<Link href="/">
				<span className='text-mb-4 text-3xl font-extrabold text-gray-900 md:text-3xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>References App</span>
			</Link>
		</div>
	)
}
