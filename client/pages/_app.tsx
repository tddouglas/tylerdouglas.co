// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";
import "../styles/home.css";

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

// @ts-ignore
export function reportWebVitals(metric) {
	metric.label === "web-vital" && console.log(metric);

	//	Send to Google Analytics instead of logging to browser
	// 	ga("send", "event", {
	// 		eventCategory:
	// 			label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
	// 		eventAction: name,
	// 		eventValue: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
	// 		eventLabel: id, // id unique to current page load
	// 		nonInteraction: true, // avoids affecting bounce rate.
	// 	});
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
