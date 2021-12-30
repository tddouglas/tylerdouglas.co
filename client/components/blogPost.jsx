import React, { Component } from "react";
import Image from "next/image";

class BlogPost extends Component {
	render() {
		const { id, blogpost, onDelete } = this.props; //This is called destructuring arguments
		return (
			<div
				className={
					"l-flex l-left-margin l-right-margin l-small-padding-top l-small-padding-bottom c-border-bottom"
				}
			>
				<Image src={blogpost.img_src} alt={""} />
				<div className={"l-small-padding-left l-detailed-info-column"}>
					<h1>{blogpost.title}</h1>
					<p>Some interesting text snipped of this article I like or wrote</p>
					<div>{blogpost.date}</div>
				</div>
				<div className={"l-detailed-info-column"}>
					<p>
						This is a short description of the article or post that I just
						linked. It should provide the thesis and a tiny bit of true
						clickbait. I&apos;ll probably want to fetch this stuff from the db
						eventually
					</p>
					<button onClick={() => onDelete(blogpost.id)}>
						Remove from feed
					</button>
				</div>
			</div>
		);
	}
}

export default BlogPost;
