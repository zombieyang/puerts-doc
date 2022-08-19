import DocPage from "../../../components/DocPage";
// @ts-ignore
import UnityCatalog from '!yaml-loader!../../../components/catalog/Unity.yml'
import { readFileSync } from "fs";
import { join } from "path";

export default DocPage('unity')

export async function getStaticProps({ params }) {
    if (params.doc instanceof Array) {
        params.doc = params.doc.join('/')
    }

    let markdown = '';
    try {
        markdown = readFileSync(join(process.cwd(), 'public', `/doc/unity/${params.lang}/${params.doc}.md`), 'utf-8');
    } catch (e) { }

    return { props: { markdown, ...params } }
}

export async function getStaticPaths() {
    const paths = [
    ];
    UnityCatalog.forEach(iter)
    function iter(item) {
        if (item.md) {
            paths.push({ params: { lang: 'en', doc: item.md.split('/') } })
            paths.push({ params: { lang: 'zhcn', doc: item.md.split('/') } })
        }
        if (item.child) {
            item.child.forEach(iter);
        }
    }
    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    }
}