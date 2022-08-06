import { useRouter } from 'next/router'
import Layout from '../../../components/Layout';

export default function Doc() {
  const { query } = useRouter()
  if (
    query.lang instanceof Array
    || query.doc instanceof Array
    || ['zhcn', 'en', 'zhtw'].indexOf(query.lang) == -1
  ) {
    return <div>Loading ...</div>
  }
  
  return <Layout
    lang={query.lang}
    engine="unreal"
    doc={query.doc}
  />;
}