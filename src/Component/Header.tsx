import logo from './puerts-logo.png';
import './Header.css'
import SubSite from '../subsite';

export default function Header(props: { lang: typeof SubSite.lang, engine: typeof SubSite.engine }) {
    function OnEngineChange(e: any) {
        SubSite.changeEngine(e.target.value);
    }
    function OnLangChange(e: any) {
        SubSite.changeLang(e.target.value);
    }
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <section className="App-title">
                <div><h1>PuerTS</h1><span> - Write your UE/Unity game with TypeScript.</span></div>
                <span className="subtitle">can be pronounced as pu-erh TS（普洱TS）</span>
            </section>
            <section className="App-doc-version">
                <select name="engine" id="engine" value={props.engine} onChange={OnEngineChange}>
                    <option value="unreal">Unreal</option>
                    <option value="unity">Unity</option>
                </select>
                <select name="language" id="language" value={props.lang} onChange={OnLangChange}>
                    <option value="en">English</option>
                    <option value="zhcn">简体中文</option>
                </select>
            </section>
            <section className="App-link">
                <a target="_blank" href="https://github.com/tencent/puerts"><img src="https://img.shields.io/github/stars/tencent/puerts?style=social" alt="" /></a>
                {/* <img src="https://img.shields.io/badge/QQGroup-942696334-blue" alt="" />
                <img src="https://img.shields.io/badge/QQGroup_UE-689643903-blue" alt="" /> */}
            </section>
        </header>
    )
}