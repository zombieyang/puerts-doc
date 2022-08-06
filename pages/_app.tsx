import { AppProps } from "next/app"
import "../styles/App.css"
import '../styles/Header.css'
import '../styles/Sidebar.css'
import 'github-markdown-css/github-markdown.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} /> 
}
   