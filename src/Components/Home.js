import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const schemaMarkup = {
  "@context": "http://schema.org",
  "@type": "Organization",
  name: "JCI Nagpur Fortune",
  url: "https://www.jcinagpurfortune.in/",
  logo: "https://www.jcinagpurfortune.in/images/images/logo4.png",
  image: "https://www.jcinagpurfortune.in/images/logo.png",
  description:
    "Join JCI Nagpur Fortune to empower youth and create positive change in your community",
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

const counters = [
  {
    id: 1,
    icon: "flaticon-lightbulb",
    title: "Donator",
    start: 0,
    stop: 10,
    speed: 2500,
  },
  {
    id: 2,
    icon: "flaticon-startup-1",
    title: "Fundrising",
    start: 0,
    stop: 5,
    speed: 5000,
  },
  {
    id: 3,
    icon: "flaticon-process",
    title: "Volunteer",
    start: 0,
    stop: 30,
    speed: 2000,
  },
  {
    id: 4,
    icon: "flaticon-sketch",
    title: "Complete Projects",
    start: 0,
    stop: 50,
    speed: 2500,
  },
];

function Index() {
  const location = useLocation();
  const [counts, setCounts] = useState(
    counters.map((counter) => counter.start)
  );

  useEffect(() => {
    window.gtag("config", "G-XQGMYG40J6", {
      page_path: location.pathname,
    });
  }, [location]);

  useEffect(() => {
    const intervalIds = counters.map((counter, index) => {
      const increment = Math.ceil(counter.stop / (counter.speed / 50)); // Adjust increment speed
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < counter.stop) {
            newCounts[index] = Math.min(
              newCounts[index] + increment,
              counter.stop
            );
          }
          return newCounts;
        });
      }, 50);
    });

    return () => intervalIds.forEach(clearInterval);
  }, []);

  return (
    <>
      <Helmet>
        <title>JCI Nagpur Fortune - Youth Empowerment Organization</title>
        <meta
          name="description"
          content="Join JCI Nagpur Fortune to empower youth and create positive change in your community. We develop leadership skills and provide sustainable solutions for a better tomorrow."
        />
        <meta
          name="keywords"
          content="JCI India, youth empowerment, leadership, community service, JCI Nagpur Fortune, Nagpur, development, growth, Non-profit Organization, Maharashtra, India, Best Organization in Nagpur, Fortune, sitaburdi"
        />
        <link rel="canonical" href="https://www.jcinagpurfortune.in/" />

        {/* Added OpenGraph meta tags */}
        <meta
          property="og:title"
          content="JCI Nagpur Fortune - Youth Empowerment Organization"
        />
        <meta
          property="og:description"
          content="Join JCI Nagpur Fortune to empower youth and create positive change in your community. We develop leadership skills and provide sustainable solutions for a better tomorrow."
        />
        <meta
          property="og:image"
          content="https://www.jcinagpurfortune.in/images/logo.png"
        />
        <meta property="og:url" content="https://www.jcinagpurfortune.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="JCI Nagpur Fortune" />

        {/* Added Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="JCI Nagpur Fortune - Youth Empowerment Organization"
        />
        <meta
          name="twitter:description"
          content="Join JCI Nagpur Fortune to empower youth and create positive change in your community."
        />
        <meta
          name="twitter:image"
          content="https://www.jcinagpurfortune.in/images/logo.png"
        />
        <meta name="twitter:site" content="@jcinagpufortune" />

        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div>
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

        {/* Main Slider */}
        <div id="demo" className="carousel slide p-3" data-bs-ride="carousel">
          {/* Indicators/dots */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="2"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="3"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="4"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="5"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="6"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="7"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="8"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="9"
            ></button>
          </div>

          {/* The slideshow/carousel */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="images/main-slider/7.webp"
                alt="JCI Zone 9 Dimond Zonecon 2024"
                className="d-block carousel-image"
                style={{ width: "100%" }}
              />
              <div
                className="carousel-caption d-flex align-items-center"
                style={{
                  position: "absolute",
                  bottom: "50%",
                  left: "0",
                  transform: "translateY(50%)",
                }}
              >
                <div className="text-start" style={{ paddingLeft: "15px" }}>
                  {/* Added H1 tag in carousel caption */}
                  <h1 className="display-4 text-white shadow-text"></h1>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="images/main-slider/6.webp"
                alt="JCI Zone 9 Dimond Zonecon 2024"
                className="d-block carousel-image"
                style={{ width: "100%" }}
              />
              <div
                className="carousel-caption d-flex align-items-center"
                style={{
                  position: "absolute",
                  bottom: "50%",
                  left: "0",
                  transform: "translateY(50%)",
                }}
              >
                <div className="text-start" style={{ paddingLeft: "15px" }}>
                  {/* Caption content */}
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="images/main-slider/5.webp"
                alt="JCI Zone 9 Dimond Zonecon 2024"
                className="d-block carousel-image"
                style={{ width: "100%" }}
              />
              <div
                className="carousel-caption d-flex align-items-center"
                style={{
                  position: "absolute",
                  bottom: "50%",
                  left: "0",
                  transform: "translateY(50%)",
                }}
              >
                <div className="text-start" style={{ paddingLeft: "15px" }}>
                  {/* Caption content */}
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="images/main-slider/8.webp"
                alt="JCI Zone 9 Dimond Zonecon 2024"
                className="d-block carousel-image"
                style={{ width: "100%" }}
              />
              <div
                className="carousel-caption d-flex align-items-center"
                style={{
                  position: "absolute",
                  bottom: "50%",
                  left: "0",
                  transform: "translateY(50%)",
                }}
              >
                <div className="text-start" style={{ paddingLeft: "15px" }}>
                  {/* Caption content */}
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="images/main-slider/9.webp"
                alt="JCI Zone 9 Dimond Zonecon 2024"
                className="d-block carousel-image"
                style={{ width: "100%" }}
              />
              <div
                className="carousel-caption d-flex align-items-center"
                style={{
                  position: "absolute",
                  bottom: "50%",
                  left: "0",
                  transform: "translateY(50%)",
                }}
              >
                <div className="text-start" style={{ paddingLeft: "15px" }}>
                  {/* Caption content */}
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="images/main-slider/1.webp"
                alt="JCI Zone 9 Dimond Zonecon 2024"
                className="d-block carousel-image"
                style={{ width: "100%" }}
              />
              <div
                className="carousel-caption d-flex align-items-center"
                style={{
                  position: "absolute",
                  bottom: "50%",
                  left: "0",
                  transform: "translateY(50%)",
                }}
              >
                <div className="text-start" style={{ paddingLeft: "15px" }}>
                  {/* Caption content */}
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="images/main-slider/2.webp"
                alt="JCI Zone 9 Dimond Zonecon 2024 "
                className="d-block carousel-image"
                style={{ width: "100%" }}
              />
              <div
                className="carousel-caption d-flex align-items-center"
                style={{
                  position: "absolute",
                  bottom: "50%",
                  left: "0",
                  transform: "translateY(50%)",
                }}
              >
                <div className="text-start" style={{ paddingLeft: "15px" }}>
                  {/* Caption content */}
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="images/main-slider/3.webp"
                alt="JCI Speech Craft 2024"
                className="d-block carousel-image"
                style={{ width: "100%" }}
              />
              <div
                className="carousel-caption d-flex align-items-center"
                style={{
                  position: "absolute",
                  bottom: "50%",
                  left: "0",
                  transform: "translateY(50%)",
                }}
              >
                <div className="text-start" style={{ paddingLeft: "15px" }}>
                  {/* Caption content */}
                </div>
              </div>
            </div>

            {/* New Images */}
            <div className="carousel-item">
              <img
                src="images/main-slider/4.webp"
                alt="CAPP Training"
                className="d-block carousel-image"
                style={{ width: "100%" }}
              />
              <div
                className="carousel-caption d-flex align-items-center"
                style={{
                  position: "absolute",
                  bottom: "50%",
                  left: "0",
                  transform: "translateY(50%)",
                }}
              >
                <div className="text-start" style={{ paddingLeft: "15px" }}>
                  {/* Caption content */}
                </div>
              </div>
            </div>
          </div>

          {/* Left and right controls/icons */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>

        {/* Goal Section */}
        <section
          className="goal-section"
          style={{ backgroundImage: "url(images/background/2.jpg )" }}
        >
          <div className="auto-container">
            {/* Sec Title */}
            <div className="sec-title centered">
              <div className="text">
                {/* Changed from h1 to h2 since we already have an H1 in the carousel */}
                <h1 className="main-heading">Welcome To JCI Nagpur Fortune</h1>
              </div>
              <h2>
                <span className="theme_color">Mission & </span>{" "}
                <span style={{ color: "#f2ad45" }}>Goals</span>
              </h2>
            </div>

            <div className="row clearfix">
              {/* Goal Block */}
              <div className="goal-block col-lg-4 col-md-6 col-sm-12">
                <div
                  className="inner-box wow fadeInUp"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="hover-one"></div>
                  <div className="hover-two"></div>
                  <div className="icon-box">
                    <span className="icon flaticon-donation-1"></span>
                  </div>
                  <h3>
                    <Link href="/about-jci" style={{ textDecoration: "none" }}>
                      Why JCI
                    </Link>
                  </h3>
                  <div className="text">
                    Junior Chamber International (JCI) is a worldwide federation
                    of young leaders and entrepreneurs.
                  </div>
                </div>
              </div>

              {/* Goal Block */}
              <div className="goal-block col-lg-4 col-md-6 col-sm-12">
                <div
                  className="inner-box wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="hover-one"></div>
                  <div className="hover-two"></div>
                  <div className="icon-box">
                    <span className="icon flaticon-donation-2"></span>
                  </div>
                  <h3>
                    <Link href="/vision" style={{ textDecoration: "none" }}>
                      JCI Vision
                    </Link>
                  </h3>
                  <div className="text">
                    To be the leading global network of Young Active Citizens.
                  </div>
                </div>
              </div>

              {/* Goal Block */}
              <div className="goal-block col-lg-4 col-md-6 col-sm-12">
                <div
                  className="inner-box wow fadeInUp"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="hover-one"></div>
                  <div className="hover-two"></div>
                  <div className="icon-box">
                    <span className="icon flaticon-house-1"></span>
                  </div>
                  <h3>
                    <Link href="/mission" style={{ textDecoration: "none" }}>
                      JCI Mission
                    </Link>
                  </h3>
                  <div className="text">
                    To Provide Development Opportunities that empower young
                    people to create positive changes.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="welcome-section">
          <div className="auto-container">
            <div className="row clearfix">
              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <h2>
                    What is <span className="theme_color">JCI</span>
                  </h2>
                  <div className="bold-text">
                    Developing Leaders for a Changing World
                  </div>
                  <div className="text">
                    Junior Chamber International (JCI) is a worldwide federation
                    of young leaders and entrepreneurs with nearly five lakh
                    active members and millions of alumni spread across more
                    than 115 countries. We are young active citizens all over
                    the world, living, communicating, taking action and creating
                    impact in our communities.
                  </div>

                  <Link
                    to="/aboutjci"
                    className="theme-btn btn"
                    style={{
                      textDecoration: "none",
                      backgroundColor: "#0074D9",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Know more
                  </Link>
                  <br />
                  <br />
                  <br />
                </div>
              </div>

              {/* Video Column */}
              <div className="video-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  {/* Video Box */}
                  <div
                    className="video-box wow fadeInRight"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <figure className="video-image">
                      <img
                        src="images/resource/video-img.jpeg"
                        alt="JCI India"
                      />
                    </figure>
                    <a
                      href="https://www.youtube.com/watch?v=unZPbEp17sY"
                      className="lightbox-image overlay-box"
                    >
                      <span className="flaticon-play-button">
                        <i className="ripple"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Counter Section */}
        <section
          className="counter-section"
          style={{ backgroundImage: "url(images/background/1.jpg)" }}
        >
          <div className="auto-container">
            <div className="fact-counter">
              <div className="row clearfix">
                {counters.map((counter, index) => (
                  <div
                    key={counter.id}
                    className="column counter-column col-lg-3 col-md-6 col-sm-12"
                  >
                    <div
                      className="inner wow fadeInLeft"
                      data-wow-delay={`${index * 300}ms`}
                      data-wow-duration="1500ms"
                    >
                      <div className="content">
                        <div className={`icon ${counter.icon}`}></div>
                        <div className="count-outer count-box">
                          <span className="count-text">{counts[index]}</span>
                          {counter.id !== 1 && "+"}
                        </div>
                        <h4 className="counter-title">{counter.title}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          className="services-section"
          style={{ backgroundImage: "url(images/background/2.jpg)" }}
        >
          <div className="auto-container">
            <div className="row clearfix">
              {/* Service Block */}
              <div className="service-block col-lg-4 col-md-6 col-sm-12">
                <div
                  className="inner-box wow fadeInUp"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="icon-box">
                    <span className="icon flaticon-donation-1"></span>
                  </div>
                  <h3>
                    <Link href="/leadership">Leadership Organization</Link>
                  </h3>
                  <div className="text">
                    We develop leaders for a better tomorrow
                  </div>
                </div>
              </div>

              {/* Service Block */}
              <div className="service-block col-lg-4 col-md-6 col-sm-12">
                <div
                  className="inner-box wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="icon-box">
                    <span className="icon flaticon-money-bag"></span>
                  </div>
                  <h3>
                    <Link href="/solutions">Sustainable Solutions</Link>
                  </h3>
                  <div className="text">
                    Our members provide sustainable solutions in their region
                  </div>
                </div>
              </div>

              {/* Service Block */}
              <div className="service-block col-lg-4 col-md-6 col-sm-12">
                <div
                  className="inner-box wow fadeInUp"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="icon-box">
                    <span className="icon flaticon-heart-3"></span>
                  </div>
                  <h3>
                    <Link href="/active-leaders">Young active leaders</Link>
                  </h3>
                  <div className="text">
                    We are the largest organization with young and active
                    leaders
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fluid Section One */}
        <section
          className="popular-causes-section"
          style={{
            backgroundImage: "url(images/background/10.jpg)",
            alt: "jcinagpurfortune",
          }}
        >
          <div className="auto-container">
            <div className="row clearfix">
              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-column wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="image">
                    <img
                      src="images/resource/president.jpg"
                      alt="Mr.Prashant Kadhao"
                    />
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  {/* Sec Title */}
                  <div className="sec-title light">
                    <h2>
                      <span className="theme_color">Mr.Prashant Kadhao</span>
                    </h2>
                    <div className="text">
                      <ul>
                        <li>
                          <h4>Founder President Of JCI Nagpur Fortune</h4>
                        </li>
                        <li>
                          <h4>
                            Founder and Director Of PSK Technologies Pvt.LTD IT
                            Company
                          </h4>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="text">
                    <p align="justify">
                      With over 17+ years of experience in the IT field and 13+
                      years of successfully running his own company, Prashant is
                      a expertize and certified in LINUX (RHCSA/RHEL), Microsoft
                      technologies, and AWS Solutions,Computer solution and
                      infrastructure. He has completed over 500 projects and
                      facilitated the placement of more than 2000 interns in
                      leading companies, showcasing his commitment to talent
                      development. Prashant holds an MBA in Marketing and is a
                      certified professional with credentials including BIZ XI,
                      Speech Craft 2024, AOS 2024, EPS, and more. As a public
                      speaker and self-mastery coach, he empowers individuals
                      and supports interns in startups, focusing on personal and
                      professional growth through mindset shifts and holistic
                      well-being. In 2023, Prashant joined JCI, where he quickly
                      rose to prominence, serving as VPPR and later as VPBO in
                      2024. On September 25, 2024, he founded JCI Nagpur
                      Fortune, where he currently serves as the Founder
                      President, continuing his mission to inspire youth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call To Action Section */}
        <section
          className="call-to-action-section-two"
          style={{
            backgroundImage: "url(images/background/7.jpg)",
            alt: "jcinagpurfortune",
          }}
        >
          <div className="auto-container">
            <h2>What we do</h2>
            <div className="text">
              We develop skills, knowledge and leadership abilities of young
              citizens who go on to provide sustainable solutions that creates a
              positive impact
            </div>
            <Link
              to="/contact"
              className="theme-btn btn-style-five"
              style={{ textDecoration: "none", color: "white" }}
            >
              <strong> Join Us Now</strong>
            </Link>
          </div>
        </section>

        {/* Scroll to top */}
        <div className="scroll-to-top scroll-to-target" data-target="html">
          <span className="fa fa-arrow-up"></span>
        </div>

        {/* Color Palate */}
        <div className="color-palate">
          <div className="color-palate-head">
            <h1>Choose Your Color</h1>
          </div>
          <div className="various-color clearfix">
            <div className="colors-list">
              <span
                className="palate default-color active"
                data-theme-file="css/color-themes/default-theme.css"
              ></span>
              <span
                className="palate green-color"
                data-theme-file="css/color-themes/green-theme.css"
              ></span>
              <span
                className="palate blue-color"
                data-theme-file="css/color-themes/blue-theme.css"
              ></span>
              <span
                className="palate orange-color"
                data-theme-file="css/color-themes/orange-theme.css"
              ></span>
              <span
                className="palate purple-color"
                data-theme-file="css/color-themes/purple-theme.css"
              ></span>
              <span
                className="palate teal-color"
                data-theme-file="css/color-themes/teal-theme.css"
              ></span>
              <span
                className="palate brown-color"
                data-theme-file="css/color-themes/brown-theme.css"
              ></span>
              <span
                className="palate yellow-color"
                data-theme-file="css/color-themes/yellow-color.css"
              ></span>
            </div>
          </div>

          <ul className="box-version option-box">
            {" "}
            <li className="box">Boxed</li> <li>Full width</li>
          </ul>
          <ul className="rtl-version option-box">
            {" "}
            <li className="rtl">RTL Version</li> <li>LTR Version</li>{" "}
          </ul>

          <a href="#" className="purchase-btn">
            Purchase now $17
          </a>

          <div className="palate-foo">
            <span>
              You will find much more options for colors and styling in admin
              panel. This color picker is used only for demonstation purposes.
            </span>
          </div>
        </div>

        {/* sidebar cart item */}
        <div className="xs-sidebar-group info-group">
          <div className="xs-overlay xs-bg-black"></div>
          <div className="xs-sidebar-widget">
            <div className="sidebar-widget-container">
              <div className="widget-heading">
                <a href="#" className="close-side-widget"></a>
              </div>
              <div className="sidebar-textwidget">
                {/* Sidebar Info Content */}
                <div className="sidebar-info-contents">
                  <div className="content-inner">
                    <div className="logo">
                      <Link href="/">
                        <img src="images/logo-2.png" alt="JCI Nagpur Fortune" />
                      </Link>
                    </div>
                    <div className="content-box">
                      <h2>About Us</h2>
                      <p className="text">
                        Core values are the fundamental beliefs of a person or
                        organization. The core values are the guiding principles
                        that dictate behavior and action suas labore saperet has
                        there any quote for write lorem percit latineu.
                      </p>
                      <Link
                        href="/consultation"
                        className="theme-btn btn-style-three"
                      >
                        <i>Consultation</i>
                      </Link>
                    </div>
                    <div className="contact-info">
                      <h2>Contact Info</h2>
                      <ul className="list-style-one">
                        <li>
                          <span className="icon flaticon-map-1"></span>
                          Lower Ground Fortune Mall, behind Maharashtra bank,
                          Sitabuldi, Nagpur
                        </li>
                        <li>
                          <span className="icon flaticon-telephone"></span>
                          +919975288300
                        </li>
                        <li>
                          <span className="icon flaticon-message-1"></span>
                          info@jcinagpurfortune.in
                        </li>
                        <li>
                          <span className="icon flaticon-timetable"></span>
                          Week Days: 09.00 to 18.00 Sunday: Closed
                        </li>
                      </ul>
                    </div>
                    {/* Social Box */}
                    <ul className="social-box">
                      <li className="facebook">
                        <a
                          href="https://www.facebook.com/profile.php?id=61566611071468"
                          className="fab fa-facebook-f"
                        ></a>
                      </li>
                      <li className="twitter">
                        <a
                          href="https://x.com/jcinagpufortune"
                          className="fab fa-twitter"
                        ></a>
                      </li>
                      <li className="linkedin">
                        <a
                          href="https://www.linkedin.com/in/jci-nagpur-fortune-601620330/"
                          className="fab fa-linkedin-in"
                        ></a>
                      </li>
                      <li className="instagram">
                        <a
                          href="https://www.instagram.com/jcinagpurfortune/"
                          className="fab fa-instagram"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END sidebar widget item */}

        {/* xs modal */}
        <div
          className="zoom-anim-dialog mfp-hide modal-searchPanel"
          id="modal-popup-2"
        >
          <div className="xs-search-panel">
            <form action="#" method="POST" className="xs-search-group">
              <input
                type="search"
                className="form-control"
                name="search"
                id="search"
                placeholder="Search"
              />
              <button type="submit" className="search-button">
                <i className="icon icon-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
