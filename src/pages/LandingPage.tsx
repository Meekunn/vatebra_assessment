import DemoSetup from "../components/DemoSetup/DemoSetup";
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
			<DemoSetup />
			<Footer />
		</>
	);
};

export default LandingPage;
