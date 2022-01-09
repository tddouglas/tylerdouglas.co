import React, { Component } from "react";
import Image from "next/image";

export default class AboutMe extends Component {
	state = {
		count: 1,
		tags: ["tag1", "tag2", "tag3"],
	};

	render() {
		return (
			<div className={"c-about-me"}>
				<h1>Something, Full-stack Developer & Enthusiast</h1>
				<h3>
					I design and code beautifully simple things, and I love what I do.
				</h3>
				<Image
					src={"https://picsum.photos/200"}
					onClick={(event) => (window.location.href = "/aboutMe")}
					className={"c-img l-large-padding-top"}
					id={"main-graphic"}
					layout={"intrinsic"}
					alt=""
					width={200}
					height={200}
				/>
				<div className={"c-info l-small-padding-top l-small-margin-top"}>
					<h2>Hi, I&apos;m Tyler. Welcome to my website.</h2>
					<p className={"l-small-padding-top l-left-margin l-right-margin"}>
						Hello This is some text about myself and what I like to do. Thanks
						for visiting bla bla blah. I build stuff for things and am
						interested in stuff so this is really nice for me to have you on my
						site.
					</p>
				</div>
				<div
					className={
						"l-flex c-detailed-info l-left-margin l-right-margin l-small-padding-top" +
						" l-small-padding-bottom" +
						" l-negative-margin"
					}
				>
					<div className={"l-detailed-info-column c-border-right"}>
						Column 1
					</div>
					<div className={"l-detailed-info-column"}>Column 2</div>
					<div className={"l-detailed-info-column c-border-left"}>Column 3</div>
				</div>
				<div className={"l-flex c-info l-negative-margin"}>
					<h1 id={"recent"} className={"l-left-margin"}>
						Recent
					</h1>
				</div>
			</div>
		);
	}

	getAboutMeClass() {
		let classes = "testClass";
		classes += this.state.count === 0 ? "1" : "2";
		return classes;
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? "Zero" : "Other";
	}
}
