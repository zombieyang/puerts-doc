import Header from './Component/Header'
import Sidebar from './Component/Sidebar'
import './App.css';
import { Routes, Route, useNavigate, useLocation, useLinkClickHandler } from "react-router-dom";
import SubSite from './subsite';
import Article from './Component/Article';
import { useEffect } from 'react';

const articleList: { [path: string]: JSX.Element } = {
  "/": <Article path="/readme" />,
  "/unity/zhcn/": <Article path="/readme" />,
  "/unity/en/": <Article path="/readme" />,
  "/unreal/zhcn/": <Article path="/readme" />,
  "/unreal/en/": <Article path="/readme" />
}

function App() {
  // subsite init
  const navigate = useNavigate();
  const location = useLocation();
  const onLinkClick = useLinkClickHandler('/unity/zhcn/install');
  useEffect(()=> {
    if (!SubSite.inited) {
      const match = location.pathname.match(/^\/(\w*)\/(\w*)/) || [];
      const [, engine, lang] = match;
      if (SubSite.isValidEngine(engine) && SubSite.isValidLang(lang)) {
        SubSite.engine = engine as typeof SubSite.engine;
        SubSite.lang = lang as typeof SubSite.lang;
  
      } else if (
        SubSite.isValidEngine(localStorage.getItem('puerts_doc_last_engine')) &&
        SubSite.isValidLang(localStorage.getItem('puerts_doc_last_lang'))
      ) {
        SubSite.engine = localStorage.getItem('puerts_doc_last_engine') as typeof SubSite.engine
        SubSite.lang = localStorage.getItem('puerts_doc_last_lang') as typeof SubSite.lang
        navigate(SubSite.getPrefix())
  
      } else {
        SubSite.engine = 'unreal';
        SubSite.lang = 'en' //todo detect os lang
        navigate(SubSite.getPrefix())
      }
    }
    SubSite.init(() => {
      navigate(SubSite.getPrefix())
    });
  })

  if (!articleList[location.pathname]) {
    articleList[location.pathname] = <Article path={location.pathname} />
  }
  // subsite init end
  return (
    <div className="App">
      <Header lang={SubSite.lang} engine={SubSite.engine}/>
      <article className="App-body">
        <Sidebar lang={SubSite.lang} engine={SubSite.engine}/>
        <section className="App-content markdown-body">
          <Routes>
            {
              Object.keys(articleList).map(item => {
                return <Route key={item} path={item} element={articleList[item]} />
              })
            }
          </Routes>
        </section>
      </article>
    </div>
  );
}

export default App;
