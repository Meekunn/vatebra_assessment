import Image1 from "../../assets/image1.jpg";
import Image2 from "../../assets/image2.jpg";
import Image3 from "../../assets/image3.jpg";

interface ISlideShow {
	img: string;
	alt: string;
}

export const carouselImages: ISlideShow[] = [
	{
		img: Image1,
		alt: "Image 1",
	},
	{
		img: Image2,
		alt: "Image 2",
	},
	{
		img: Image3,
		alt: "Image 3",
	},
];
