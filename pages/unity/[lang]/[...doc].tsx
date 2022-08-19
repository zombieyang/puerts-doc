import DocPage from "../../../components/DocPage";
// @ts-ignore
import UnityCatalog from '!yaml-loader!../../../components/catalog/Unity.yml'
import { readFileSync } from "fs";
import { join } from "path";

export default DocPage('unity')

// export async function getStaticProps({ params }) {
//     if (process.env.NODE_ENV && process.env.NODE_ENV == "development") {
//         return { props: { params } };
//     }

//     let markdown = '';
//     try {
//         markdown = readFileSync(join(process.cwd(), 'public', `/doc/unity/${params.lang}/${params.doc}.md`), 'utf-8');
//     } catch (e) { }

//     return { props: { markdown, ...params } }
// }

// export async function getStaticPaths() {
//     if (process.env.NODE_ENV && process.env.NODE_ENV == "development") {
//         return { paths: [], fallback: true };
//     }

//     const paths = [
//         { params: { lang: 'en', doc: 'install' } },
//         { params: { lang: 'zhcn', doc: 'install' } }
//     ];
//     UnityCatalog.forEach(iter)
//     function iter(item) {
//         if (item.md) {
//             paths.push({ params: { lang: 'en', doc: item.md } })
//             paths.push({ params: { lang: 'zhcn', doc: item.md } })
//         }
//         if (item.child) {
//             item.child.forEach(iter);
//         }
//     }
//     return {
//         paths,
//         fallback: false, // can also be true or 'blocking'
//     }
// }