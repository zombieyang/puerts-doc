import useSWR from "swr";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

const fetcher = (url: string) => fetch(url).then((res) => {
    if (res.status == 200) return res.text();
    else throw res.statusText;
})
export interface LayoutProps {
    engine: string,
    lang: string,
    doc: string
}
export default function Layout(props: LayoutProps) {
    if (typeof localStorage != 'undefined') {
        localStorage.setItem('puerts_doc_last_engine', props.engine);
        localStorage.setItem('puerts_doc_last_lang', props.lang);  
    }

    let { data, error } = useSWR(`/doc/unity/${props.lang}/${props.doc}.md`, fetcher)
    if (error) data = `# Failed to load "${props.doc}" content: ${error}`
    else if (!data) data = ''

    return (
        <div className="App">
            <Header engine={props.engine} lang={props.lang} />
            <article className="App-body">
                <Sidebar engine={props.engine} lang={props.lang} />
                <section className="App-content markdown-body">
                    <ReactMarkdown children={data} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} />
                </section>
            </article>
        </div>
    )
}