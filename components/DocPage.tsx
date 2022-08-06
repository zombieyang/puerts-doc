import { useRouter } from 'next/router'
import Layout from './Layout';
import useSWR from 'swr';

interface DocPageProps {
    lang: string,
    doc: string,
    markdown: string
}
export default function (engine: string): (props: DocPageProps) => JSX.Element {

    const fetcher = (url: string) => fetch(url).then((res) => {
        if (res.status == 200) return res.text();
        else throw res.statusText;
    })

    return function Doc(props: DocPageProps) {
        let { lang, doc, markdown } = props;

        const { query } = useRouter()

        if (
            !(query.lang instanceof Array) &&
            !(query.doc instanceof Array) &&
            ['zhcn', 'en', 'zhtw'].indexOf(query.lang) == -1
        ) {
            doc = query.doc;
            lang = query.lang;
        }
        let { data, error } = useSWR(`/doc/${engine}/${props.lang}/${props.doc}.md`, fetcher)
        
        if (!markdown) {
            if (!lang || !doc) {
                markdown = "# Loading"

            } else if (error) {
                markdown = `# Failed to load "${props.doc}" content: ${error}`

            } else if (data) {
                markdown = data;
            }

        } else if (!error && data) {
            markdown = data;
        }

        return <Layout
            lang={lang}
            engine="unity"
            markdown={markdown}
        />;
    }
}