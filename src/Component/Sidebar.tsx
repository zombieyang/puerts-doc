import './Sidebar.css';
import {Link} from 'react-router-dom';

export default function Sidebar() {
  return (
    <section className="App-sidebar">
      <div className="App-install-bar">
      <Link to="/install"><span className="App-install">Install</span></Link>
      </div>
      <div className="sidebar-content">
        <div className="catalog-block">
          <h5><Link to="/">Introduce to PuerTS</Link></h5>
        </div>
        <div className="catalog-block">
          <h5>Usage</h5>
          <ul>
            <li>Run JS in Unity</li>
            <li>Call C# in JS</li>
            <li>Call JS in C#</li>
          </ul>
        </div>
        <div className="catalog-block">
          <h5>Deep in</h5>
          <ul>
            <li>JS Inspector</li>
            <li>Generate Wrapper</li>
            <li>Generate Filter</li>
            <li>Blittable Copy</li>
            <li>Extention</li>
            <li>Other JS Backend</li>
          </ul>
        </div>
        <div className="catalog-block">
          <h5>Contribute</h5>
          <ul>
            <li>PuerTS Arch</li>
            <li>Build Yourself</li>
            <li>UnitTest</li>
          </ul>
        </div>
        <div className="catalog-block">
          <h5>JS Guide</h5>
        </div>
      </div>
    </section>
  )
}