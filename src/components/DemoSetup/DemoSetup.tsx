import Image1 from "../../assets/image1.jpg";
import Image2 from "../../assets/image2.jpg";
import "./demosetup.css";

const DemoSetup = () => {
	return (
		<div className="demosetup-wrapper">
			<div className="demo-setup" id="first">
				<div className="setup-detail">
					<h2>Setup your Online voting system with ease</h2>
					<p>
						Simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
						industry's standard dummy text ever since the 1500s, when an unknown printer took a
						galley of type and scrambled it make a type specimen book. It has survived not only five
						centuries, but also the leap into electronic typesetting, remaining essentially
						unchanged. It was popularised in the 1960s with the release of Letraset sheets
						containing Lorem Ipsum.
					</p>
					<button>Get Started</button>
				</div>
				<img src={Image1} alt="group of people" />
			</div>
			<div className="demo-setup" id="second">
				<img src={Image2} alt="group of people" />
				<div className="setup-detail">
					<h2>Setup your Online voting system with ease</h2>
					<p>
						Simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
						industry's standard dummy text ever since the 1500s, when an unknown printer took a
						galley of type and scrambled it make a type specimen book. It has survived not only five
						centuries, but also the leap into electronic typesetting, remaining essentially
						unchanged. It was popularised in the 1960s with the release of Letraset sheets
						containing Lorem Ipsum.
					</p>
					<button>Request a Demo</button>
				</div>
			</div>
		</div>
	);
};

export default DemoSetup;
