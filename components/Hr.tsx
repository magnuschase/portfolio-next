import React from 'react'
import Image from 'next/image'

type HrProps = {
	flip?: boolean
}

const Hr = (props: HrProps) => {
	const flip = props.flip ? '-scale-y-100' : ''

	return (
		<div className={`block ${flip}`}>
			<Image src="/hr.svg" width="100vw" height="12" layout="responsive" />
		</div>
	)
}

export default Hr