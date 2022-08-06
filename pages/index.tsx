export default function Index() {
  if (typeof localStorage != 'undefined') {
    let engine = localStorage.getItem('puerts_doc_last_engine');
    let lang = localStorage.getItem('puerts_doc_last_lang');  
    if (!lang || ['zhcn', 'zhtw', 'en'].indexOf(lang) == -1) {
      lang = 'zhcn';
    }
    if (!engine || ['unreal', 'unity'].indexOf(engine) == -1) {
      engine = 'unity'
    }
    location.href = `/${engine}/${lang}/readme`
  }
  return <div />;
}
