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

function Aboutjci() {
  const location = useLocation()

  useEffect(() => {
    window.gtag("config", "G-XQGMYG40J6", {
      page_path: location.pathname,
    })
  }, [location])

  return (
    <>
      <Helmet>
        <title>About JCI Nagpur Fortune - Empowering Youth for Positive Change</title>
        <meta
          name="description"
          content="Discover JCI Nagpur Fortune, a leading youth organization dedicated to empowering young leaders through development opportunities and community service."
        />
        <meta
          name="keywords"
          content="JCI India, youth empowerment, leadership, community service, JCI Nagpur Fortune, Nagpur, development, growth, Non-profit Organization, Maharashtra, India, Best Organization in Nagpur, Fortune, sitaburdi"
        />
        <link rel="canonical" href="https://www.jcinagpurfortune.in/aboutjci" />

        {/* Added OpenGraph meta tags */}
        <meta property="og:title" content="About JCI Nagpur Fortune - Empowering Youth for Positive Change" />
        <meta
          property="og:description"
          content="Discover JCI Nagpur Fortune, a leading youth organization dedicated to empowering young leaders through development opportunities and community service."
        />
        <meta property="og:image" content="https://www.jcinagpurfortune.in/images/logo.png" />
        <meta property="og:url" content="https://www.jcinagpurfortune.in/aboutjci" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="JCI Nagpur Fortune" />

        {/* Added Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About JCI Nagpur Fortune - Empowering Youth for Positive Change" />
        <meta
          name="twitter:description"
          content="Discover JCI Nagpur Fortune, a leading youth organization dedicated to empowering young leaders."
        />
        <meta name="twitter:image" content="https://www.jcinagpurfortune.in/images/logo.png" />
        <meta name="twitter:site" content="@jcinagpufortune" />

        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      <div>
        {/* Page Title */}
        <section
          className="page-title"
          style={{ backgroundImage: "url(images/background/12.jpg)", alt: "jcinagpurfortune" }}
        >
          <div className="auto-container">
            <div className="row clearfix">
              {/* Title */}
              <div className="title-column col-lg-6 col-md-12 col-sm-12">
                {/* Added H1 tag for SEO */}
                <h1>About Junior Chamber International (JCI)</h1>
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
                    <span className="icon fas fa-arrow-alt-circle-right"></span> About Us
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
              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  {/* Added H2 tag for SEO */}
                  <h2>
                    About
                    <span className="theme_color"> JCI</span>
                  </h2>
                  <h3>How it all began!</h3>
                  <div className="bold-text">
                    Junior Chamber International (JCI) is a worldwide federation of young leaders and entrepreneurs with
                    nearly five lakh active members and millions of alumni spread across more than 115 countries.
                    <div className="text">
                      <ul>
                        <li style={{ textAlign: "justify" }}>
                          <img src="images/AboutJci/favicon-32x32.png" alt="JCI" />
                          JCI's origin can be traced back to 1915 in St. Louis, Missouri, USA, where Sir Henry
                          Giessenbier and 32 other young men established the Young Men's Progressive Civic Association
                          (YMPCA).
                        </li>
                        <div style={{ padding: "2px" }}></div>
                        <li style={{ textAlign: "justify" }}>
                          <img src="images/AboutJci/favicon-32x32.png" alt="JCI" />
                          In 1916, the name was changed from YMPCA to "Junior Citizens," commonly called "JCs," which
                          later became "Jaycees."
                        </li>
                        <div style={{ padding: "2px" }}></div>
                        <li style={{ textAlign: "justify" }}>
                          <img src="images/AboutJci/favicon-32x32.png" alt="JCI" />
                          Their work so impressed the St. Louis Junior Chamber of Commerce that they asked these young
                          men in 1918 to adopt the name "Junior Chamber of Commerce," which later became "Junior
                          Chamber."
                        </li>
                        <div style={{ padding: "2px" }}></div>
                        <li style={{ textAlign: "justify" }}>
                          <img src="images/AboutJci/favicon-32x32.png" alt="JCI" />
                          By 1944, the movement had spread to 18 countries, officially forming "Junior Chamber
                          International," welcoming people between the ages of 18 and 40 years.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Column */}
              <div className="video-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <br />
                  <img src="images/AboutJci/jci-vector.gif" alt="JCI organization logo animation" />
                </div>
                <br />
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="auto-container">
            <div className="row clearfix">
              {/* Content Column */}
              <div className="video-column col-lg-3 col-md-12 col-sm-12">
                <div className="inner-column">
                  <img src="images/AboutJci/founder.jpg" alt="Founder Sir Henry Giessenbier" />
                </div>
              </div>

              {/* Video Column */}
              <div className="content-column col-lg-9 col-md-12 col-sm-12">
                <div className="inner-column">
                  {/* Added H2 tag for SEO */}
                  <h2>
                    Founder
                    <span className="theme_color"> Sir Henry Giessenbier</span>
                  </h2>
                  <p>
                    "From within the walls of the soul of this organization wherein the foundation of character and good
                    citizenship are laid, I hope a message will come in the sometime of tomorrow that will stir the
                    people towards the establishment of a permanent and everlasting world peace."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="auto-container">
            <div className="row clearfix">
              {/* Content Column */}
              <div className="content-column col-lg-3 col-md-12 col-sm-12">
                <div className="inner-column">
                  {/* Added H2 tag for SEO */}
                  <h2>
                    JCI Creed
                    <br />
                    <span className="theme_color">We Believe</span>
                  </h2>
                </div>
              </div>

              {/* Video Column */}
              <div className="video-column col-lg-9 col-md-12 col-sm-12">
                <div className="text">
                  <ul>
                    <li style={{ textAlign: "justify" }}>
                      <img src="images/AboutJci/favicon-32x32.png" alt="JCI bullet point" />
                      That faith in god gives meaning and purpose to human life,
                    </li>

                    <li style={{ textAlign: "justify" }}>
                      <img src="images/AboutJci/favicon-32x32.png" alt="JCI bullet point" />
                      That the brotherhood of man transcends the sovereignty of nations,
                    </li>

                    <li style={{ textAlign: "justify" }}>
                      <img src="images/AboutJci/favicon-32x32.png" alt="JCI bullet point" />
                      That economic justice can best be won by free men through free enterprise,
                    </li>

                    <li style={{ textAlign: "justify" }}>
                      <img src="images/AboutJci/favicon-32x32.png" alt="JCI bullet point" />
                      That government should be of laws rather than of men,
                    </li>
                    <li style={{ textAlign: "justify" }}>
                      <img src="images/AboutJci/favicon-32x32.png" alt="JCI bullet point" />
                      That earth's great treasure lies in human personality,
                    </li>
                    <li style={{ textAlign: "justify" }}>
                      <img src="images/AboutJci/favicon-32x32.png" alt="JCI bullet point" />
                      And that service to humanity is the best work of life.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Added Related Pages Section with Internal Links */}
          <div className="auto-container mt-5">
            <div className="sec-title centered">
              <h2>
                Explore More About <span className="theme_color">Our Organization</span>
              </h2>
            </div>
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <h3>Our Mission</h3>
                    <p>Learn about our mission to empower young people to create positive change.</p>
                    {/* <Link href="/mission" className="theme-btn btn-style-one">
                      Read More
                    </Link> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <h3>Our Vision</h3>
                    <p>Discover our vision to be the leading global network of young active citizens.</p>
                    {/* <Link href="/vision" className="theme-btn btn-style-one">
                      Read More
                    </Link> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <h3>Join Us</h3>
                    <p>Become a part of our community and help create positive change.</p>
                    {/* <Link href="/contact" className="theme-btn btn-style-one">
                      Contact Us
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Welcome Section */}
      </div>
    </>
  )
}

export default Aboutjci

