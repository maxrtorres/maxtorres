import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBar from "./TopBar/TopBar";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import MyParticles from "./MyParticles";

function App() {
  const images = ["./Images/background3.jpg"];

  const [currentImg, setCurrentImg] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImg((cur) => (cur + 1) % images.length);
  //   }, 10000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div>
      <Router>
        <TopBar />
        <div
          className="background-image"
          style={{
            backgroundImage: "url(" + images[currentImg] + ")",
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
            </Switch>
          </div>
        </main>
      </Router>
    </div>
  );
}

export default App;
