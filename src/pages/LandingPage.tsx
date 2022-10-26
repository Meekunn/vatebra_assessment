import Footer from "../components/Footer/Footer";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";

const LandingPage = () => {
	return (
		<>
			<Navbar />
			<ImageCarousel />
			<Services />
			<Footer />
		</>
	);
};

export default LandingPage;
