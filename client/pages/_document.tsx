import Document, {DocumentContext, Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)

		return initialProps
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="icon" href="%PUBLIC_URL%/favicon.ico"/>
					{/*<meta charSet="utf-8"/>*/}
					{/*<meta name="viewport" content="width=device-width, initial-scale=1"/>*/}
					{/*<meta name="theme-color" content="#000000"/>*/}
					{/*<meta*/}
					{/*	name="Welcome to tylerdouglas.co - Tyler Douglas' personal website"*/}
					{/*	content="Web site created using create-react-app"*/}
					{/*/>*/}
					{/*<title>tylerdouglas.co</title>*/}
				</Head>
				<body>
				<Main/>
				<NextScript/>
				</body>
			</Html>
		)
	}
}

export default MyDocument
