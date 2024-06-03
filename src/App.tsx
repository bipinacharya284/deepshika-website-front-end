import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <NavBar
          navs={[
            { navLink: "/home", menuName: "Home" },
            { navLink: "/gallery", menuName: "Gallery" },
            { navLink: "/contactus", menuName: "Contact Us" },
            { navLink: "/aboutus", menuName: "About Us" },
          ]}
        />
      </Router>
    </>
  );
}
