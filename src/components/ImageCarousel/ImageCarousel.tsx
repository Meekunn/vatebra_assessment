import { useEffect, useState } from "react";
import { carouselImages } from "./images";
import "./imagecarousel.css";

const dotArray: number[] = [0, 1, 2];

const ImageCarousel = () => {
	const [imageId, setImageId] = useState(1);

	useEffect(() => {
		const slide = setInterval(() => {
			if (imageId === carouselImages.length) {
				setImageId(1);
			} else {
				setImageId((id) => id + 1);
			}
		}, 5000);

		return () => clearInterval(slide);
	}, [imageId]);

	const dotPosition = (id: number) => {
		setImageId(id);
	};
	return (
		<div className="image-carousel">
			<div className="images">
				{carouselImages.map((item, id) => (
					<img
						src={item.img}
						alt={item.alt}
						key={id}
						className={imageId === id + 1 ? "image active" : "image"}
					/>
				))}
				<div className="overlay-items-wrapper">
					<div className="overlay-items">
						<h1>
							<strong>Cast-A-Vote</strong> provides faster and transparent result and thus allowing
							your organization to build trust.
						</h1>
						<button>Get Started</button>
						<div className="dots-wrapper">
							{dotArray.map((id: number) => (
								<div
									className={imageId === id + 1 ? "dots active" : "dots"}
									onClick={() => dotPosition(id + 1)}
									key={id}
								></div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImageCarousel;
