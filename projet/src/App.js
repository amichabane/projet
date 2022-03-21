import logo from './logo.svg';
import './App.css';
import Content from "./component/content";
import Page from "./component/page";
import Page2 from "./component/page2";
import Content2 from "./component/content2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Barre from "./component/barre";
import Entertainment from "./component/pages/entertainement";
import Business from "./component/pages/business";
import Footer from "./component/pages/footer";
import Article from "./component/pages/article";
function App() {
  return (
      <div>
       <Router>
           <Barre />
           <div className="container">
               <Routes>
                   <Route exact path="/business" element={<Business />}/>
                   <Route exact path="/entertainement" element={<Entertainment />}/>
                   <Route exact path="/mail" element={<Article />}/>
               </Routes>
           </div>
       </Router>
          <Footer />
      </div>


  );
}

export default App;
