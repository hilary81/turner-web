import "./Results.css";

export default function Results({ address, name, snippet }) {
	return (
		<>
			<div className="container">
				<div className="inner-container">
					<a className="link" href={address}>
						<h3 className="heading">{name}</h3>
					</a>
					<p className="url-link">{address}</p>
					<p className="snippet">{snippet}</p>
				</div>
			</div>
		</>
	);
}
