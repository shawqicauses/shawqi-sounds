import Document, { Head, Html, Main, NextScript } from "next/document"

const font = [
  "https://fonts.googleapis.com/css",
  [
    ["family", "Poppins:100,200,300,400,500,600,700,800,900"].join("="),
    ["display", "swap"].join("=")
  ].join("&")
].join("?")

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href={font} rel="stylesheet" />
        </Head>
        <body className="bg-zinc-900 font-poppins">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
