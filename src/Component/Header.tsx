import logo from './puerts-logo.png';
import './Header.css'

export default function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <section className="App-title">
                <div><h1>PuerTS</h1><span> - Write your UE/Unity game with TypeScript.</span></div>
                <span className="subtitle">can be pronounced as pu-erh TS（普洱TS）</span>
            </section>
            <section className="App-doc-version">
                <select name="engine" id="engine">
                <option value="Unreal">Unreal</option>
                <option value="Unity">Unity</option>
                </select>
                <select name="language" id="language">
                <option value="English">English</option>
                <option value="中文">中文</option>
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