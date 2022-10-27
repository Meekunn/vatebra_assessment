import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { testimonies } from "./testimonies";
import Testimony from "./Testimony";
import "./testimonies.css";
import { useState } from "react";

const Testimonials = () => {
	const [slideIdx, setSlideIdx] = useState(1);

	const nextSlide = () => {
		if (slideIdx !== testimonies.length) {
			setSlideIdx(slideIdx + 1);
		} else if (slideIdx === testimonies.length) {
			setSlideIdx(1);
		}
	};

	const prevSlide = () => {
		if (slideIdx !== 1) {
			setSlideIdx(slideIdx - 1);
		} else if (slideIdx === 1) {
			setSlideIdx(testimonies.length);
		}
	};

	return (
		<div className="testimonials-wrapper">
			<div className="testimonials">
				<h2>
					What our clients are saying about <span>Cast A Vote</span>
				</h2>
				<div className="testimonies">
					{testimonies.map((testimony, id) => (
						<div
							key={id}
							className={slideIdx === id + 1 ? "testimony-wrapper active" : "testimony-wrapper"}
						>
							<Testimony
								clientName={testimony.clientName}
								role={testimony.role}
								image={testimony.image}
								summary={testimony.summary}
							/>
						</div>
					))}
					<div className="carousel-btns">
						<button onClick={prevSlide}>
							<MdArrowBackIosNew />
						</button>
						<button onClick={nextSlide}>
							<MdArrowForwardIos />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
