import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHome, FaEnvelope, FaPhone } from "react-icons/fa";
import { Helmet } from "react-helmet";

const schemaMarkup = {
  "@context": "http://schema.org",
  "@type": "Organization",
  name: "JCI Nagpur Fortune",
  url: "https://www.jcinagpurfortune.in/",
  logo: "https://www.jcinagpurfortune.in/images/images/logo4.png",
  image: "https://www.jcinagpurfortune.in/images/logo.png",
  description: "Join JCI Nagpur Fortune to empower youth, develop leadership skills, and drive positive change in your community through impactful events, training, and social initiatives.",
  keyword: "fortune, jci, jci nagpur, Best LO, jci LO, jci in Nagpur, jci  LO in Nagpur, Best jci LO in Nagpur, Best jci LO in India, Best jci LO in Maharashtra, Best JCI LO, jci in Maharashtra, jci Events in Nagpur, jci Leadership Training, jci Nagpur Projects,jci member,youthpower,empoweryouth,Youth Empowerment Organization,JCI Nagpur Fortune, JCI Nagpur Fortune social impact, JCI Nagpur Fortune networking, JCI Nagpur fortune leadership development, JCI Nagpur community service, JCI Nagpur fortune community,JCI Nagpur fortune chapter , JCI Nagpur fortune membership,JCI Nagpur fortune training programs, JCI chapters in Maharashtra,Youth organizations in Nagpur,Leadership training in Nagpur,Community development Nagpur,Professional networking Nagpur,Youth leadership Nagpur,Social entrepreneurship Nagpur,Youth empowerment programs Nagpur,Leadership skills development,Professional growth opportunities,Community impact initiatives,Young leaders network,Business skills for youth,Personal development organization,CI Nagpur workshops,JCI Nagpur training programs,JCI Nagpur conferences,JCI Nagpur seminars,JCI Nagpur community projects,JCI Nagpur youth programs,JCI Nagpur skill development,JCI Nagpur entrepreneurship programs",

  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1475",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Lower Ground Fortune Mall, behind Maharashtra bank, Sitabuldi, Nagpur",
    addressLocality: "Nagpur",
    addressRegion: "Maharashtra",
    postalCode: "440012",
    addressCountry: "India",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61566611071468",
    "https://www.instagram.com/jcinagpurfortune/",
    "https://x.com/jcinagpufortune",
    "https://www.linkedin.com/in/jci-nagpur-fortune-601620330/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+919975288300",
    contactType: "customer support",
  },
};

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* seo */}
      <Helmet>
        <title>JCI Nagpur Fortune - Youth Empowerment Organization</title>
        <meta
          name="description"
          content="Join JCI Nagpur Fortune to empower youth and create positive change in your community."
        />
        <meta
          name="keywords"
          content="JCI India, youth empowerment, leadership, community service,JCI Nagpur Fortune,Nagpur,developmet,growth,Non-profit Organization,Maharashtra,India,Best Organization in Nagpur,Fortune,sitaburdi"
        />
        <link rel="canonical" href="https://www.jcinagpurfortune.in//" />
      </Helmet>
      {/* seo end */}
      {/* Top Header - Hidden in Mobile View */}
      <div className="bg-white py-5 border-bottom d-none d-lg-block">
        <Container className="d-flex justify-content-between align-items-center">
          {/* Location Info */}
          <div className="upper-column d-flex align-items-center">
            <FaHome className="custom-icon me-2" />
            <span>
              <strong>Lower Ground Fortune Mall</strong>,
              <br /> Behind Maharashtra Bank, Sitabuldi
            </span>
          </div>

          {/* Email Info */}
          <div className="upper-column d-flex align-items-center">
            <FaEnvelope className="custom-icon me-2" />
            <span>
              <strong>Email ID:</strong>
              <br />
              jci.prashant@gmail.com
            </span>
          </div>

          {/* Contact Info */}
          <div className="upper-column d-flex align-items-center">
          <FaPhone className="custom-icon me-2" style={{ transform: "rotate(100deg)" }} />
          <span>
              <strong>Contact No:</strong>
              <br /> +91-9975288300
            </span>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <Navbar
        expand="lg"
        className="bg-white shadow-sm py-3 sticky-top"
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src="images/logo4.png" alt="JCI Nagpur Fortune" height="40" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarNav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto">
              <Nav.Link
                as={NavLink}
                to="/"
                exact
                className={({ isActive }) =>
                  isActive ? "nav-link active text-primary" : "nav-link"
                }
                onClick={() => setExpanded(false)}
              >
                Home
              </Nav.Link>
              <NavDropdown title="About" className="custom-dropdown">
                <NavDropdown.Item
                  as={NavLink}
                  to="/aboutjci"
                  className={({ isActive }) =>
                    isActive
                      ? "dropdown-item active text-primary"
                      : "dropdown-item"
                  }
                  onClick={() => setExpanded(false)}
                >
                  About JCI
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/aboutjciindia"
                  className={({ isActive }) =>
                    isActive
                      ? "dropdown-item active text-primary"
                      : "dropdown-item"
                  }
                  onClick={() => setExpanded(false)}
                >
                  About JCI India
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/NPCorner"
                  className={({ isActive }) =>
                    isActive
                      ? "dropdown-item active text-primary"
                      : "dropdown-item"
                  }
                  onClick={() => setExpanded(false)}
                >
                  NP Corner
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                as={NavLink}
                to="/ourteam"
                className={({ isActive }) =>
                  isActive ? "nav-link active text-primary" : "nav-link"
                }
                onClick={() => setExpanded(false)}
              >
                Team
              </Nav.Link>
              <NavDropdown title="Events" className="custom-dropdown">
                <NavDropdown.Item
                  as={NavLink}
                  to="/events"
                  className={({ isActive }) =>
                    isActive
                      ? "dropdown-item active text-primary"
                      : "dropdown-item"
                  }
                  onClick={() => setExpanded(false)}
                >
                  National Events
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/events"
                  className={({ isActive }) =>
                    isActive
                      ? "dropdown-item active text-primary"
                      : "dropdown-item"
                  }
                  onClick={() => setExpanded(false)}
                >
                  Zone Event
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                as={NavLink}
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? "nav-link active text-primary" : "nav-link"
                }
                onClick={() => setExpanded(false)}
              >
                Gallery
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/Downloads"
                className={({ isActive }) =>
                  isActive ? "nav-link active text-primary" : "nav-link"
                }
                onClick={() => setExpanded(false)}
              >
                Downloads
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active text-primary" : "nav-link"
                }
                onClick={() => setExpanded(false)}
              >
                Contact Us
              </Nav.Link>
              <Button
                variant="primary"
                className="w1"
                onClick={() =>
                  (window.location.href = "https://members.jciindia.in/#/login")
                }
              >
                Members Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* CSS Styling */}
      <style>
        {`
          /* Navbar Hover Effect */
          .custom-dropdown:hover .dropdown-menu {
            display: block !important;
          }

          /* Active Links */
          .nav-link.active, .dropdown-item.active {
            color: blue !important;
          }

          /* Icon Styling */
          .custom-icon {
            color: blue !important;
            font-size: 24px !important; /* Adjust size if needed */
          }
        `}
      </style>
    </>
  );
};

export default CustomNavbar;
