import Head from "next/head";
import React from "react";
import Link from "next/link";
import Navbar from "../components/navbar";
import AboutMe from "../components/aboutMe";
import BlogList from "../components/blogList";
import Footer from "../components/footer";

export default function Index() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />
			<main className={"l-flex l-main-container"}>
				<AboutMe />
				<BlogList />
			</main>

			<Footer />
		</div>
	);
}
