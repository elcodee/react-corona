import './App.css';
import Navbar from './component/navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
     <div className="font-app">
        <BrowserRouter>
           <Navbar />
           <footer className="footer mt-auto py-3 bg-light fixed-bottom">
            <div className="container">
               <span className="text-muted">&copy; 2020 ELCode</span>
            </div>
           </footer>
        </BrowserRouter>
      </div>
  );
}

export default App;
