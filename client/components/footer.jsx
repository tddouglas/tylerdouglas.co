import React, { Component } from "react";
import Image from "next/image";

class Footer extends Component {
	state = {};

	render() {
		return (
			<div id={"footer-container"}>
				<div className={"l-footer"}>
					<div className={"c-footer-grid-container c-border-right"}>
						<Image src={"https://picsum.photos/20"} alt={""} />
						<Image src={"https://picsum.photos/20"} alt={""} />
						<Image src={"https://picsum.photos/20"} alt={""} />
						<Image src={"https://picsum.photos/20"} alt={""} />
					</div>
					<Image
						src={"https://picsum.photos/100"}
						onClick={(event) => (window.location.href = "/aboutMe")}
						className={"c-img c-border-right"}
						alt=""
					/>
					<span>
						<div className="c-footer-grid-container c-border-left">
							<div className="grid-item">Home</div>
							<div className="grid-item">Blog</div>
							<div className="grid-item">About</div>
							<div className="grid-item">Fourth Thing</div>
						</div>
					</span>
				</div>
				<div id={"bottom_footer"}>
					<span>TylerDouglas (C) 2021</span>
				</div>
			</div>
		);
	}
}

export default Footer;
