import React from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'

const Custom500: NextPage = ({ data, footer }: any) => {
	return (
		<div className="w-screen h-screen flex justify-center items-center">
			<div className="flex flex-col gap-4 text-center">
				<div className="text-5xl text-red-400 font-thin">Error 500</div>
				<Link href="/" >
					<div className="text-4xl text-red-500 font-thin select-none cursor-pointer">return to homepage</div>
				</Link>
			</div>
		</div>
	)
}

export default Custom500