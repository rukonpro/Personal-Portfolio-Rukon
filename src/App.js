import './App.css';
import "tailwindcss/tailwind.css"
import "@material-tailwind/react/tailwind.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home/Home";
import Sidebar from "./components/Sidebar";
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from './pages/Blog/Blog';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';


function App() {

  return (
    <>
      <Router>
        <Sidebar />
        <div className="md:ml-64">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="*">
              <NotFoundPage></NotFoundPage>
            </Route>
          </Switch>
          <Footer></Footer>
        </div>
      </Router>

    </>
  );
}

export default App;
