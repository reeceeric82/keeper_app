import React from "react";

export default function PageFooter() {
	const year = new Date().getFullYear();
	return (
		<footer>
			<p>Copyright {year}</p>
		</footer>
	);
}

