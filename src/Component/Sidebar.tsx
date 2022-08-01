import './Sidebar.css';
import { Link } from 'react-router-dom';
import SubSite from '../subsite';
// @ts-ignore
import UnityCatalog from './catalog/Unity.yml'
const UnrealCatalog: any[] = [];

export default function Sidebar(props: { lang: typeof SubSite.lang, engine: typeof SubSite.engine }) {
    return (
        <section className="App-sidebar">
            <div className="App-install-bar">
                <Link to={SubSite.getPrefix() + "/install"}><span className="App-install">Install</span></Link>
            </div>
            <div className="sidebar-content">
                {(props.engine === 'unity' ? UnityCatalog : UnrealCatalog)
                    .map((item: any) => {
                        return (
                            <div key={item.en} className="catalog-block">
                                <h5><Link to="/">{item[props.lang]}</Link></h5>
                                {!item.child ? null : (
                                    <ul>
                                        {
                                            item.child.map((item: any) => {
                                                return <li key={item.en}>{item[props.lang]}</li>
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