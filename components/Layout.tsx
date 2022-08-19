import useSWR from "swr";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

export interface LayoutProps {
    engine: string,
    lang: string,
    markdown: string,
    doc: string
}
export default function Layout(props: LayoutProps) {
    if (typeof localStorage != 'undefined') {
        localStorage.setItem('puerts_doc_last_engine', props.engine);
        localStorage.setItem('puerts_doc_last_lang', props.lang);  
    }

    const PRText = {
        'zhcn': '本页有问题？点我修改！',
        'en': 'I found a problem in this page!'
    }[props.lang] || ''

    return (
        <div className="App">
            <Header engine={props.engine} lang={props.lang} />
            <article className="App-body">
                <Sidebar engine={props.engine} lang={props.lang} />
                <section className="App-content markdown-body">
                    <a className="App-doc-pr" target="_blank" href={"https://github.com/Tencent/puerts/edit/master/doc/" + [props.engine, props.lang, props.doc].join('/') + ".md"}>{PRText}</a>
                    <ReactMarkdown children={props.markdown} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} />
                </section>
            </article>
        </div>
    )
}