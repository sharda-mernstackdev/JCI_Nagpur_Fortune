import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ReactGA from "react-ga";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Aboutjci from "./About/Aboutjci";
import AboutJciIndia from "./About/AboutJciIndia";
import AboutJcinagpurFortune from "./About/AboutJcinagpurFortune";
import PdfDownloader from "./Components/Download";
import NPCorner from "./About/NPCorner";
import Events from "./Events/Events";
import OurTeam from "./Team/OurTeam";
import OurJciMembers from "./Team/OurJciMembers";
import Gallery from "./Components/Gallery";
import NotFound from "./NotFound";
import ImagePopUp from "./Components/ImagePopUp";
import LOEvents from "./Events/LOEvents";
const trackingId = "G-XQGMYG40J6";
ReactGA.initialize(trackingId);

// import Try from "./Components/Try";

function App() {
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <>
      <Router>
        {/* <div className="preloader"></div> */}
        <h1
          style={{
            position: "absolute",
            left: "-9999px",
            top: "auto",
            width: "1px",
            height: "1px",
            overflow: "hidden",
          }}
        >
          Welcome to JCI Nagpur Fortune - Empowering Youth
        </h1>
        <h2
          style={{
            position: "absolute",
            left: "-9999px",
            top: "auto",
            width: "1px",
            height: "1px",
            overflow: "hidden",
          }}
        >
          Empowering Leaders. Building Communities.
        </h2>

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutjci" element={<Aboutjci />} />
          <Route path="/aboutjciindia" element={<AboutJciIndia />} />
          <Route
            path="/aboutjcinagpurfortune"
            element={<AboutJcinagpurFortune />}
          />
          <Route path="/npcorner" element={<NPCorner />} />
          <Route path="/downloads" element={<PdfDownloader />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/try" element={<Try />} /> */}
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/ourjcimembers" element={<OurJciMembers />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/Loevents" element={<LOEvents />} />
          {/* Fallback route for 404 */}
          <Route component={NotFound} />
        </Routes>

        {/* <ImagePopUp/> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
