import React from "react"

const Footer: React.FC = () => {
	return (
		<div className="w-screen py-4 px-10 border-t border-kapala-400 text-kapala-400 font-thin mt-12 flex justify-between">
			<a href={`mailto:jakub@kapala.xyz`}>contact me at <span className="font-medium">jakub@kapala.xyz</span></a>
			<a href="#">go up</a>
		</div>
	)
}

export default Footer