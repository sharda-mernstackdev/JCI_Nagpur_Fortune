import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const schemaMarkup = {
  "@context": "http://schema.org",
  "@type": "Organization",
  name: "JCI Nagpur Fortune",
  url: "https://www.jcinagpurfortune.in/",
  logo: "https://www.jcinagpurfortune.in/images/images/logo4.png",
  image: "https://www.jcinagpurfortune.in/images/logo.png",
  description:
    "Join JCI Nagpur Fortune to empower youth, develop leadership skills, and drive positive change in your community through impactful events, training, and social initiatives.",

  keyword:
    "fortune, jci, jci nagpur, Best LO, jci LO, jci in Nagpur, jci  LO in Nagpur, Best jci LO in Nagpur, Best jci LO in India, Best jci LO in Maharashtra, Best JCI LO, jci in Maharashtra, jci Events in Nagpur, jci Leadership Training, jci Nagpur Projects,jci member,youthpower,empoweryouth,Youth Empowerment Organization,JCI Nagpur Fortune, JCI Nagpur Fortune social impact, JCI Nagpur Fortune networking, JCI Nagpur fortune leadership development, JCI Nagpur community service, JCI Nagpur fortune community,JCI Nagpur fortune chapter , JCI Nagpur fortune membership,JCI Nagpur fortune training programs, JCI chapters in Maharashtra,Youth organizations in Nagpur,Leadership training in Nagpur,Community development Nagpur,Professional networking Nagpur,Youth leadership Nagpur,Social entrepreneurship Nagpur,Youth empowerment programs Nagpur,Leadership skills development,Professional growth opportunities,Community impact initiatives,Young leaders network,Business skills for youth,Personal development organization,CI Nagpur workshops,JCI Nagpur training programs,JCI Nagpur conferences,JCI Nagpur seminars,JCI Nagpur community projects,JCI Nagpur youth programs,JCI Nagpur skill development,JCI Nagpur entrepreneurship programs",

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

function Footer() {
  const location = useLocation();

  useEffect(() => {
    window.gtag("config", "G-XQGMYG40J6", {
      page_path: location.pathname,
    });
  }, [location]);
  return (
    <>
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

      <footer
        className="main-footer"
        style={{
          backgroundImage: "url(images/background/map-pattern.png)",
          alt: "jcinagpurfortune",
        }}
      >
        <div class="auto-container">
          {/* <!--Widgets Section--> */}
          <div class="widgets-section">
            <div class="row clearfix">
              {/* <!--Footer Column--> */}
              <div class="footer-column col-lg-5 col-md-6 col-sm-12">
                <div class="footer-widget logo-widget">
                  <div class="logo">
                    <a href="/">
                      <img
                        // src="images/logo4.png" width={"300px"}
                        src="images/logo4.png"
                        width={"300px"}
                        alt="jciindia"
                        title=""
                      />
                    </a>
                  </div>
                  <div class="text">
                    JCI India is the Second largest Member Nation of Junior
                    Chamber International. Currently we are active in more than
                    26 states and union territories across India.
                  </div>
                  {/* <!--Social Box--> */}
                  <ul class="social-box">
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=61566611071468">
                        <span class="fab fa-facebook-f"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/jcinagpurfortune_zone_9/">
                        <span class="fab fa-instagram"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/@JCINagpurFortune">
                        <span class="fab fa-youtube"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/jcinagpufortune">
                        <span class="fab fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/jci-nagpur-fortune-601620330/">
                        <span class="fab fa-linkedin-in"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!--Footer Column--> */}
              <div class="footer-column col-lg-2 col-md-6 col-sm-12">
                <div class="footer-widget news-widget">
                  <h2>Quick Linkss</h2>
                  <ul style={{ color: "#ffff" }}>
                    <li>
                      <h6>
                        <a href="/">Home</a>
                      </h6>
                    </li>
                    <li>
                      <h6>
                        <a href="/aboutjci">About</a>
                      </h6>
                    </li>
                    <li>
                      <h6>
                        <a href="/ourteam">Team</a>
                      </h6>
                    </li>
                    {/* <li>
                    <h6><a href="#">Events</a></h6>
                  </li> */}
                    {/* <li>
                    <h6><a href="#">Programs</a></h6>
                  </li> */}
                    <li>
                      <h6>
                        <a href="/gallery">LO Events</a>
                      </h6>
                    </li>
                    <li>
                      <h6>
                        <a href="/downloads">Downloads</a>
                      </h6>
                    </li>
                    <li>
                      <h6>
                        <a href="/contact">Contact</a>
                      </h6>
                    </li>
                  </ul>
                  {/* <article class="post">
                  <figure class="post-thumb">
                    <a href="blog-single.html">
                      <img src="images/resource/news-thumb-1.jpg" alt="" />
                      <ul>
  <li><h6>Home</h6></li>
  <li><h6>About</h6></li>
  <li><h6>Home</h6></li>
  <li><h6>About</h6></li>
  <li><h6>Home</h6></li>
  <li><h6>About</h6></li>
  <li><h6>Home</h6></li>
  <li><h6>About</h6></li>
</ul>
                    </a>
                  </figure>
                  <div class="text">
                    <a href="blog-single.html">
                      p1
                    </a>
                  </div>
                  <div class="post-info">12 Dec, 2023</div>
                </article> */}

                  {/* <article class="post">
                  <figure class="post-thumb">
                    <a href="blog-single.html">
                      <img src="images/resource/news-thumb-2.jpg" alt="" />
                      <h6>About</h6>
                    </a>
                  </figure>
                  <div class="text">
                    <a href="blog-single.html">
                      Take care of children for the greate serving
                    </a>
                  </div>
                  <div class="post-info">12 Dec, 2023</div>
                </article> */}
                </div>
              </div>

              {/* <!--Footer Column--> */}
              <div class="footer-column col-lg-5 col-md-6 col-sm-12">
                <div class="footer-widget info-widget">
                  <h2>Contact Us</h2>
                  <ul class="list-style-one">
                    <li>
                      <span class="icon fas fa-map-marker-alt"></span>Lower
                      Ground Fortune Mall, behind Maharashtra bank, Sitabuldi,
                      Nagpur
                    </li>
                    <li>
                      {/* <span class="icon fas fa-phone"></span>Support:{" "} */}
                      <span class="icon fas fa-phone phone-icon"></span>Support:{" "}
                      <a
                        href="tel:+91-9975288300"
                        style={{ textDecoration: "none" }}
                      >
                        +91-9975288300
                      </a>
                    </li>
                    <li>
                      <span class="icon fas fa-envelope-open"></span>Email:{" "}
                      <a
                        href="mailto:jci.prashant@gmail.com"
                        style={{ textDecoration: "none" }}
                      >
                        jci.prashant@gmail.com
                      </a>
                    </li>
                  </ul>
                  {/* <!--Emailed Form--> */}
                  {/* <div class="emailed-form">
                  <form
                    method="post"
                    action="https://expert-themes.com/html/khidmat/contact.html"
                  >
                    <div class="form-group">
                      <input
                        type="email"
                        name="email"
                        value=""
                        placeholder="Enter Email"
                        required
                      />
                      <button type="submit" class="theme-btn">
                        submit
                      </button>
                    </div>
                  </form>
                </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Footer Bottom --> */}
          <div class="footer-bottom">
            <div class="clearfix">
              <div class="pull-left">
                <div class="copyright">
                  Copyrights © 2025 Design By{" "}
                  <a
                    href="https://pskitservices.com/"
                    style={{ textDecoration: "none" }}
                  >
                    Psk Technologies Pvt. Ltd
                  </a>
                </div>
              </div>
              {/* <div class="pull-right">
              <ul class="footer-nav">
                <li>
                  <a href="/"style={{textDecoration:"none"}}>Home</a>
                </li>
                <li>
                  <a href="/aboutjci"style={{textDecoration:"none"}}>About</a>
                </li>
                
              </ul>
            </div> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
