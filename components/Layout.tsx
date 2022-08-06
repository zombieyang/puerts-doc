import useSWR from "swr";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

export interface LayoutProps {
    engine: string,
    lang: string,
    markdown: string
}
export default function Layout(props: LayoutProps) {
    if (typeof localStorage != 'undefined') {
        localStorage.setItem('puerts_doc_last_engine', props.engine);
        localStorage.setItem('puerts_doc_last_lang', props.lang);  
    }

    return (
        <div className="App">
            <Header engine={props.engine} lang={props.lang} />
            <article className="App-body">
                <Sidebar engine={props.engine} lang={props.lang} />
                <section className="App-content markdown-body">
                    <ReactMarkdown children={props.markdown} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} />
                </section>
            </article>
        </div>
    )
}