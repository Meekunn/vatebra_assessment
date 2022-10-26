import { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { TiTimes } from "react-icons/ti";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<header className="header">
			<nav className="navbar">
				<div className="logo-wrapper">
					<span className="logo">
						<IoMdCheckmarkCircleOutline />
					</span>
					<p>cast-a-vote</p>
				</div>
				<div className={isOpen ? "mobile-nav" : "nav"}>
					<Link to="#" className={isOpen ? "nav-links mobile" : "nav-links"}>
						Solutions
					</Link>
					<Link to="#" className={isOpen ? "nav-links mobile" : "nav-links"}>
						About
					</Link>
					<Link to="#" className={isOpen ? "nav-links mobile" : "nav-links"}>
						Contact Us
					</Link>
					<button className={isOpen ? "register-btn mobile" : "register-btn"}>Register</button>
				</div>
				<button className="toggle-nav" onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? <TiTimes /> : <MdMenu />}
				</button>
			</nav>
		</header>
	);
};

export default Navbar;
