import Header from './Component/Header'
import Sidebar from './Component/Sidebar'
import './App.css';
import { Routes, Route } from "react-router-dom";
/* eslint-disable import/no-webpack-loader-syntax */
import Readme from '!@mdx-js/loader!./doc/README.md'
import Install from '!@mdx-js/loader!./doc/unity/install.md'

function App() {
  return (
    <div className="App">
      <Header />
      <article className="App-body">
        <Sidebar />
        <section className="App-content markdown-body">
          <Routes>
            <Route path="/" element={<Readme />} />
            <Route path="install" element={<Install />} />
          </Routes>
        </section>
      </article>
    </div>
  );
}

export default App;
