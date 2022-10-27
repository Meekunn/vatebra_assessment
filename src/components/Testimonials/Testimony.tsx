import "./testimonies.css";

const Testimony = ({ clientName, role, image, summary }: ITestimonies) => {
	return (
		<div className="client">
			<img src={image} alt={clientName} />
			<div className="client-details">
				<div className="name-role">
					<h3>{clientName}</h3>
					<p>{role}</p>
				</div>
				<p className="client-summary">{summary}</p>
			</div>
		</div>
	);
};

export default Testimony;
