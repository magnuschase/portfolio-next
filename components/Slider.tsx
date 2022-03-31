import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
const Slider = (props: { data: Array<string> }) => {

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
				{props.data.map(element => (
					<SwiperSlide key={element}>
						<img src={element} alt="project image" className="w-4/5" />
					</SwiperSlide>
				))}
			</Swiper>
		</div>

	)
}

export default Slider