import "./enterprise.css";

const Enterprise = () => {
	return (
		<div className="enterprises-wrapper">
			<div className="enterprises">
				<div className="enterprises-heading">
					<p>Find the right solution for your enterprise</p>
					<span className="white-rule"></span>
				</div>
				<div className="enterprise-cards">
					<div className="enterprise-card">
						<h3>SaaS Enterprise</h3>
						<p>
							Simply dummy text of the pricing and typesetting ndustry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s, when an
						</p>
						<button>Get Started</button>
					</div>
					<div className="enterprise-card">
						<h3>B2B Enterprise</h3>
						<p>
							Simply dummy text of the pricing and typesetting ndustry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s, when an
						</p>
						<button>Get Quote</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Enterprise;
