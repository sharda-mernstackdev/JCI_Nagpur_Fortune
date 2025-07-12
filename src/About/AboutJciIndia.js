import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

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
    streetAddress: "Lower Ground Fortune Mall, behind Maharashtra bank, Sitabuldi, Nagpur",
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
}

function AboutJciIndia() {
  const location = useLocation()

  useEffect(() => {
    window.gtag("config", "G-XQGMYG40J6", {
      page_path: location.pathname,
    })
  }, [location])

  return (
    <div>
      <Helmet>
        <title>About JCI India - Empowering Youth for Positive Change</title>
        <meta
          name="description"
          content="Discover JCI India, India's largest organization of young active leaders dedicated to developing leadership skills and creating positive change since 1949."
        />
        <meta
          name="keywords"
          content="JCI India, youth empowerment, leadership, community service, JCI Nagpur Fortune, Nagpur, development, growth, Non-profit Organization, Maharashtra, India, Best Organization in Nagpur, Fortune, sitaburdi"
        />
        <link rel="canonical" href="https://www.jcinagpurfortune.in/aboutjciindia" />

        {/* Added OpenGraph meta tags */}
        <meta property="og:title" content="About JCI India - Empowering Youth for Positive Change" />
        <meta
          property="og:description"
          content="Discover JCI India, India's largest organization of young active leaders dedicated to developing leadership skills and creating positive change since 1949."
        />
        <meta property="og:image" content="https://www.jcinagpurfortune.in/images/logo.png" />
        <meta property="og:url" content="https://www.jcinagpurfortune.in/aboutjciindia" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="JCI Nagpur Fortune" />

        {/* Added Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About JCI India - Empowering Youth for Positive Change" />
        <meta
          name="twitter:description"
          content="Discover JCI India, India's largest organization of young active leaders."
        />
        <meta name="twitter:image" content="https://www.jcinagpurfortune.in/images/logo.png" />
        <meta name="twitter:site" content="@jcinagpufortune" />

        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      {/* Page Title */}
      <section
        className="page-title"
        style={{ backgroundImage: "url(images/background/12.jpg)", alt: "jcinagpurfortune" }}
      >
        <div className="auto-container">
          <div className="row clearfix">
            {/* Title */}
            <div className="title-column col-lg-6 col-md-12 col-sm-12">
              <h1>About JCI India</h1>
            </div>
            {/* Bread Crumb */}
            <div className="breadcrumb-column col-lg-6 col-md-12 col-sm-12">
              <ul className="bread-crumb clearfix">
                <li style={{ textAlign: "justify" }}>
                  <Link href="/">
                    <span className="icon fas fa-home"></span>
                    Home
                  </Link>
                </li>
                <li className="active">
                  <span className="icon fas fa-arrow-alt-circle-right"></span> About JCI India
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* End Page Title */}

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Image Column */}
            <div className="video-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <img src="images/AboutJci/jci-india.png" alt="JCI India Logo and Organization" />
              </div>
              <br />
            </div>

            {/* Content Column */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <h2>
                  About
                  <span className="theme_color"> JCI India</span>
                </h2>
                <h3>Welcome to India's largest organization with young and active leaders</h3>
                <div className="text">
                  <ul>
                    <li style={{ textAlign: "justify", marginBottom: "15px" }}>
                      <img src="images/AboutJci/favicon-32x32.png" alt="JCI bullet point" />
                      JCI India is a voluntary organization, membership based NGO working in India since 1949 for
                      developing the leadership skills of young men and women of this country. It is affiliated to
                      Junior Chamber International(JCI), a worldwide federation of young leaders and entrepreneurs
                      founded in 1944, having headquarter at Chester Field USA. Currently it has over 200,000 active
                      members and more than one million graduates, in over 100 countries and 6,000 communities.
                    </li>
                    <li style={{ textAlign: "justify", marginBottom: "15px" }}>
                      <img src="images/AboutJci/favicon-32x32.png" alt="JCI bullet point" />
                      JCI India is the Second largest Member Nation of Junior Chamber International. Currently we are
                      active in more than 26 states and union territories across India.
                    </li>
                    <li style={{ textAlign: "justify", marginBottom: "15px" }}>
                      <img src="images/AboutJci/favicon-32x32.png" alt="JCI bullet point" />
                      The membership is offered to everybody regardless of color, cast and creed between the age of
                      18-40 years. Junior Chamber International India is registered under Societies Registration Act,
                      Bombay Public Trust Act and Income Tax Act of India.
                    </li>
                    <li style={{ textAlign: "justify", marginBottom: "15px" }}>
                      <img src="images/AboutJci/favicon-32x32.png" alt="JCI bullet point" />
                      In the last 64 years we are able to produce thousands of social and business leaders all over the
                      country through our intensive project based training activities.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Welcome Section */}

      {/* Added Key Achievements Section */}
      <section className="services-section" style={{ backgroundImage: "url(images/background/2.jpg)" }}>
        <div className="auto-container">
          <div className="sec-title centered">
            <h2>
              Key <span className="theme_color">Achievements</span>
            </h2>
            <div className="text">
              JCI India has made significant contributions to leadership development and community service
            </div>
          </div>

          <div className="row clearfix">
            <div className="service-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="icon-box">
                  <span className="icon flaticon-donation-1"></span>
                </div>
                <h3>
                  <Link href="/leadership-programs">Leadership Development</Link>
                </h3>
                <div className="text">
                  Trained thousands of young leaders through specialized programs and hands-on project management
                </div>
              </div>
            </div>

            <div className="service-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div className="icon-box">
                  <span className="icon flaticon-money-bag"></span>
                </div>
                <h3>
                  <Link href="/community-impact">Community Impact</Link>
                </h3>
                <div className="text">
                  Implemented sustainable community development projects across 26 states in India
                </div>
              </div>
            </div>

            <div className="service-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                <div className="icon-box">
                  <span className="icon flaticon-heart-3"></span>
                </div>
                <h3>
                  <Link href="/global-network">Global Network</Link>
                </h3>
                <div className="text">
                  Connected Indian youth leaders with a global network spanning over 100 countries
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Added Related Links Section */}
      <section className="call-to-action-section-two" style={{ backgroundImage: "url(images/background/7.jpg)" }}>
        <div className="auto-container">
          <h2>Explore More About JCI</h2>
          <div className="text">Discover how you can be part of this global movement for positive change</div>
          <div className="btn-box mt-4">
            <Link
              to="/aboutjci"
              className="theme-btn btn-style-five mx-2"
              style={{ textDecoration: "none", color: "white" }}
            >
              <strong>About JCI Global</strong>
            </Link>
            <Link
              to="/contact"
              className="theme-btn btn-style-five mx-2"
              style={{ textDecoration: "none", color: "white" }}
            >
              <strong>Join JCI Nagpur Fortune</strong>
            </Link>
            <Link
              to="/Loevents"
              className="theme-btn btn-style-five mx-2"
              style={{ textDecoration: "none", color: "white" }}
            >
              <strong>Upcoming Events</strong>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutJciIndia

