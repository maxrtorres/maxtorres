import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TopBar from "./TopBar/TopBar";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import MyParticles from "./MyParticles";

function App() {
  return (
    <div>
      <Router>
        <TopBar />
        <div
          className="background-image"
          style={{
            backgroundImage: "url(./Images/background.jpg)",
          }}
        />
        <main>
          <MyParticles />
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </div>
        </main>
      </Router>
    </div>
  );
}

export default App;
