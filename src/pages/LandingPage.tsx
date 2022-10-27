import DemoSetup from "../components/DemoSetup/DemoSetup";
import Enterprise from "../components/Enterprise/Enterprise";
import Footer from "../components/Footer/Footer";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";

const LandingPage = () => {
	return (
		<>
			<Navbar />
			<ImageCarousel />
			<Services />
			<DemoSetup />
			<Enterprise />
			<Testimonials />
			<Footer />
		</>
	);
};

export default LandingPage;
