import Document, { Html, Head, Main, NextScript } from 'next/document'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <title>PuerTS Document</title> */}
        </Head> 
        <body style={{ margin: 0 }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
