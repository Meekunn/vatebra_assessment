import { FaLaptopCode, FaLocationArrow } from "react-icons/fa";
import { GiSpeedometer } from "react-icons/gi";
import { TbHeadset } from "react-icons/tb";
import "./services.css";

const Services = () => {
	return (
		<div className="services-wrapper">
			<div className="services">
				<section className="service-section">
					<div className="service">
						<span className="icon">
							<FaLocationArrow />
						</span>
						<div className="detail">
							<h2>Self-service</h2>
							<p>Initiate your own voting system with little help from the support team.</p>
						</div>
					</div>
					<div className="service">
						<span className="icon">
							<FaLaptopCode />
						</span>
						<div className="detail">
							<h2>Real-time Monitoring</h2>
							<p>Seamless and transparent voting system for businesses.</p>
						</div>
					</div>
				</section>
				<section className="service-section">
					<div className="service">
						<span className="icon">
							<GiSpeedometer />
						</span>
						<div className="detail">
							<h2>Instant vote count</h2>
							<p>Seamless and transparent voting system for businesses.</p>
						</div>
					</div>
					<div className="service">
						<span className="icon">
							<TbHeadset />
						</span>
						<div className="detail">
							<h2>24/7 Customer Support</h2>
							<p>Seamless and transparent voting system for businesses.</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Services;
