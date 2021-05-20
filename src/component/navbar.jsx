import { Switch, Route, Link } from 'react-router-dom'
import Covid from '../covid'
import Home from '../home'
import Shalat from '../shalat'
import ELCode from '../common/elcode-white.png'


export default function Navbar() {
   return (
      <>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark animate__animated animate__bounceInDown">
            <div className="container-fluid animate__animated animate__bounceInUp animate__delay-1s">
               <a className="navbar-brand" href="/">
                  <img src={ELCode} alt="" width="80" height="21" className="d-inline-block align-text-top" />
               </a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarText">
                  <ul className="navbar-nav mx-auto mb-lg-0 px-auto">
                  <li className="nav-item">
                     <a className="nav-link fw-bolder" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                     <Link to="/covid">
                        <div className="nav-link fw-bolder">Covid</div>
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/shalat">
                        <div className="nav-link fw-bolder">Shalat</div>
                     </Link>
                  </li>
                  </ul>
                  <span className="navbar-text">
                  API (soon)
                  </span>
               </div>
            </div>
         </nav>

         <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/covid" component={Covid} />
            <Route path="/shalat" component={Shalat} />
         </Switch>
      </>
   )
}
