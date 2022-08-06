import Link from 'next/link';
// @ts-ignore
import UnityCatalog from '!yaml-loader!./catalog/Unity.yml'
// @ts-ignore
import UnrealCatalog from '!yaml-loader!./catalog/Unreal.yml'

function ALink(item, engine, lang) {
    if (item.md) {
        return <Link href={`/${engine}/${lang}/${item.md}`}><a href={`/${engine}/${lang}/${item.md}`} onClick={(e) => { e.preventDefault }}>{item[lang]}</a></Link>;

    } else {
        return <span>{item[lang]}</span>;
    }
}

export default function Sidebar(props: { lang: string, engine: string }) {
    const { lang, engine } = props;
    return (
        <section className="App-sidebar">
            <div className="App-install-bar">
                <Link href={`/${engine}/${lang}/install`}><span className="App-install">Install</span></Link>
            </div>
            <div className="sidebar-content">
                {(engine === 'unity' ? UnityCatalog : UnrealCatalog)
                    .map((item: any) => {
                        return (
                            <div key={item.en} className="catalog-block">
                                <h5>{ALink(item, engine, lang)}</h5>
                                {!item.child ? null : (
                                    <ul>
                                        {
                                            item.child.map((item: any) => {
                                                return <li key={item.en}>{ALink(item, engine, lang)}</li>
                                            })
                                        }
                                    </ul>
                                )}
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}