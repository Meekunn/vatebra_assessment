import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-wrapper">
				<div className="footer-summary">
					<div className="logo-wrapper">
						<IoMdCheckmarkCircleOutline />
						<p style={{ color: "#000" }}>cast-a-vote</p>
					</div>
					<p>
						Plot 1187, Abimbola Awoniyi Close, Off Kasumu Ekemode Str, Via Saka Tinubu Street,
						Victoria Island, Lagos, Nigeria.
					</p>
					<a href="mailto:info@vatebra.com">
						<strong>E:</strong> info@vatebra.com
					</a>
					<a href="mailto:customersupport@vatebra.com">
						<strong>E:</strong> customersupport@vatebra.com
					</a>
				</div>
				<div className="footer-section">
					<h2 className="footer-heading">Info</h2>
					<Link to="#">About Us</Link>
					<Link to="#">SaaS Solution</Link>
					<Link to="#">B@B Enterprise</Link>
					<Link to="#">Contact Us</Link>
				</div>
				<div className="footer-section">
					<h2 className="footer-heading">Contact</h2>
					<div className="contacts">
						<span>
							<BsTelephoneFill />
						</span>
						<a href="tel:+234906257247">234906257247</a>
					</div>
					<div className="contacts">
						<span>
							<IoIosMail />
						</span>
						<a href="mailto:customersupport@vatebra.com">customersupport@vatebra.com</a>
					</div>
					<div className="contacts">
						<span>
							<IoLocationSharp />
						</span>
						<a href="https://www.google.com/maps/place/Vatebra+Limited,+Nigeria/@6.4260887,3.4211792,17.75z/data=!4m5!3m4!1s0x103bf532fb4ccb4d:0x74f269fd220f0c3!8m2!3d6.4261275!4d3.4222953">
							Plot 1187, Abimbola Awoniyi Close, Off Kasumu Ekemode Str, Via Saka Tinubu Street,
							Victoria Island, Lagos, Nigeria.
						</a>
					</div>
				</div>
				<div className="footer-section">
					<h2 className="footer-heading">Abuja Office</h2>
					<p>
						302 Fortune Place, No. 8 Nairobi Street, Off Aminu Kano Crescent, Wuse 2, ABuja, Nigeria
					</p>
					<a href="tel:+234906257247">
						<strong>T:</strong> 234906257247
					</a>
					<a href="mailto:abujaoffice@vatebra.com">
						<strong>E:</strong> abujaoffice@vatebra.com
					</a>
				</div>
			</div>
			<div className="footer-extra">
				<div className="social-media">
					<a href="https://Vatebra.com" className="social-icon">
						<FaFacebookF />
					</a>
					<a href="https://Vatebra.com" className="social-icon">
						<FaTwitter />
					</a>
					<a href="https://Vatebra.com" className="social-icon">
						<FaInstagram />
					</a>
					<a href="https://Vatebra.com" className="social-icon">
						<FaPinterestP />
					</a>
				</div>
				<p>&#169; Copyright 2022 by Vatebra.com</p>
			</div>
		</footer>
	);
};

export default Footer;
