function About() {
	function makeAjaxCall(): any {
		let url = "http://localhost:3001/api";
		fetch(url, { method: "GET" }).then((response) => {
			let el = document.getElementById("output");
			if (el) {
				if (response.ok) {
					response.text().then((text) => {
						// @ts-ignore
						el.innerText = text;
					});
				} else {
					el.innerText = "Response not 2XX";
				}
			}
		});
	}

	return (
		<div>
			<button onClick={() => makeAjaxCall()}>Click Me for Ajax call!</button>
			<div id={"output"} />
		</div>
	);
}

export default About;
