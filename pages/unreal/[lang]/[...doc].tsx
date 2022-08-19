import DocPage from "../../../components/DocPage";
// @ts-ignore
import UnrealCatalog from '!yaml-loader!../../../components/catalog/Unreal.yml'
import { join } from "path";
import { readFileSync } from "fs";

export default DocPage('unreal')

const fetcher = (url: string) => fetch(url).then((res) => {
  if (res.status == 200) return res.text();
  else throw res.statusText;
})

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
  UnrealCatalog.forEach(iter)
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