import Image from 'next/image';

export default function Header(props: { lang: string, engine: string }) {
    function OnEngineChange(e: any) {
        // SubSite.changeEngine(e.target.value);
        location.href = `/${e.target.value}/${props.lang}/readme`
    }
    function OnLangChange(e: any) {
        location.href = location.href.replace(props.lang, e.target.value);
    }

    return (
        <header className="App-header">
            <Image src="/puerts-logo.png" width="80" height="80" className="App-logo" alt="logo" />
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