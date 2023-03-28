import { Swiper, SwiperSlide } from 'swiper/react'
import React from 'react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import HygraphImage from '../types/frontPage/HygraphImage.interface'

interface SliderPayload {
	data: HygraphImage[]
}

const Slider: React.FC<SliderPayload> = ({data}) => {

	return (
		<div>
			<Swiper
				slidesPerView={1}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false
				}}
				modules={[Autoplay]}
				className="w-auto"
			>
				{data.map(({url}) => (
					<SwiperSlide key={url}>
						<img src={url} alt="project image" className="w-4/5" />
					</SwiperSlide>
				))}
			</Swiper>
		</div>

	)
}

export default Slider