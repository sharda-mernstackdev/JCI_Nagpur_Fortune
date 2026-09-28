
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
  keyword: "fortune, jci, jci nagpur, Best LO, jci LO, jci in Nagpur, jci  LO in Nagpur, Best jci LO in Nagpur, Best jci LO in India, Best jci LO in Maharashtra, Best JCI LO, jci in Maharashtra, jci Events in Nagpur, jci Leadership Training, jci Nagpur Projects,jci member,youthpower,empoweryouth,Youth Empowerment Organization,JCI Nagpur Fortune, JCI Nagpur Fortune social impact, JCI Nagpur Fortune networking, JCI Nagpur fortune leadership development, JCI Nagpur community service, JCI Nagpur fortune community,JCI Nagpur fortune chapter , JCI Nagpur fortune membership,JCI Nagpur fortune training programs, JCI chapters in Maharashtra,Youth organizations in Nagpur,Leadership training in Nagpur,Community development Nagpur,Professional networking Nagpur,Youth leadership Nagpur,Social entrepreneurship Nagpur,Youth empowerment programs Nagpur,Leadership skills development,Professional growth opportunities,Community impact initiatives,Young leaders network,Business skills for youth,Personal development organization,CI Nagpur workshops,JCI Nagpur training programs,JCI Nagpur conferences,JCI Nagpur seminars,JCI Nagpur community projects,JCI Nagpur youth programs,JCI Nagpur skill development,JCI Nagpur entrepreneurship programs, public speaking classes in Sitabuldi Nagpur, personality development classes in Sitabuldi Nagpur, communication skills training in Nagpur, confidence building classes in Nagpur, public speaking training for students in Nagpur, personality development course for professionals Nagpur, stage fear removal classes in Nagpur, soft skills training in Nagpur, spoken English and public speaking Nagpur, best public speaking institute in Nagpur",

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

function NPCorner() {
  const location = useLocation()

  useEffect(() => {
    window.gtag("config", "G-XQGMYG40J6", {
      page_path: location.pathname,
    })
  }, [location])

  return (
    <>
      <Helmet>
        <title>NP Corner - Empowering Youth for Positive Change | JCI Nagpur Fortune</title>
        <meta
          name="description"
          content="Discover JCI Nagpur Fortune's National President Corner. Learn about our leadership and vision for empowering youth through community service and development."
        />
        <meta
          name="keywords"
          content="JCI India, youth empowerment, leadership, community service, JCI Nagpur Fortune, Nagpur, development, growth, Non-profit Organization, Maharashtra, India, Best Organization in Nagpur, Fortune, sitaburdi"
        />
        <link rel="canonical" href="https://www.jcinagpurfortune.in/npcorner" />

        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="NP Corner - Empowering Youth for Positive Change | JCI Nagpur Fortune" />
        <meta
          property="og:description"
          content="Discover JCI Nagpur Fortune's National President Corner. Learn about our leadership and vision for empowering youth through community service and development."
        />
        <meta
          property="og:image"
          content="https://www.jcinagpurfortune.in/images/AboutJci/JFS ANKUR JHUNJHUNWALA.jpg"
        />
        <meta property="og:url" content="https://www.jcinagpurfortune.in/npcorner" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="JCI Nagpur Fortune" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NP Corner - JCI Nagpur Fortune" />
        <meta
          name="twitter:description"
          content="Discover JCI Nagpur Fortune's National President Corner. Learn about our leadership and vision for empowering youth."
        />
        <meta
          name="twitter:image"
          content="https://www.jcinagpurfortune.in/images/AboutJci/JFS ANKUR JHUNJHUNWALA.jpg"
        />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      <main>
        {/* Page Title */}
        <section className="page-title" style={{ backgroundImage: "url(images/background/12.jpg)" }}>
          <div className="auto-container">
            <div className="row clearfix">
              {/* Title */}
              <div className="title-column col-lg-6 col-md-12 col-sm-12">
                <h1>National President Corner</h1>
              </div>
              {/* Bread Crumb */}
              <div className="breadcrumb-column col-lg-6 col-md-12 col-sm-12">
                <ul className="bread-crumb clearfix">
                  <li>
                    <a href="/">
                      <span className="icon fas fa-home"></span>
                      Home
                    </a>
                  </li>
                  {/* <li>
                    <a href="/about">
                      <span className="icon fas fa-arrow-alt-circle-right"></span>
                      About Us
                    </a>
                  </li> */}
                  <li className="active">
                    <span className="icon fas fa-arrow-alt-circle-right"></span>
                    NP Corner
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
              <div className="col-12 mb-5">
                <h2 className="section-title text-center">
                  <span className="theme_color">National President's Vision</span>
                </h2>
                <p className="section-subtitle text-center">
                  Empowering youth to create positive change in communities across India
                </p>
              </div>

              {/* Content Column */}
              <div className="video-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                <h3 className="national-president-heading">
                    <span className="theme_color">Our National President</span>
                </h3>
                  <figure>
                    <img
                      className="president-image"
                      src="images/AboutJci/JFG Bharath N Acharya.webp"
                      alt="JFG Bharath N Acharya - JCI India National President"
                    />
                     <figcaption className="president-caption">JFG Bharath N Acharya</figcaption>
                   </figure>
                </div>
              </div>

              {/* Video Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                <h3 className="national-president-message">
                     <span className="theme_color" >JFG Bharath N Acharya</span>
                </h3>

                  <div className="text">
                    <p style={{ textAlign: "justify" }}>My Dear Brothers and Sisters of JCI India,</p>
                    <p style={{ textAlign: "justify" }}>
                    It is a pleasure to share my thoughts as we begin this new journey together. The year 2026 marks
                     “The Year of Legacy Reimagined”—a time to raise our standards, redefine leadership, and showcase
                      the true strength of JCI India.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                     To keep our organization vibrant, I encourage everyone to actively welcome new members and expand
                      the JCI family. Let us also aim to make our mark globally by participating in international platforms
                       like ASPAC and the World Congress, where we can learn, grow, and proudly represent India.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                    Our appearance and conduct matter. Wearing our JCI uniforms with pride and maintaining a professional
                     presence reflects our discipline and attracts aspiring leaders. Let our meetings and projects be carried
                      out with excellence and a distinctive style that sets us apart.
                    </p>
                     <p style={{ textAlign: "justify" }}>
                   Service remains our core. I urge your wholehearted support for the JCI India Foundation to help needy children through scholarships. We will continue strengthening JCOM, engaging our Alumni, and focusing on impactful, large-scale projects that create lasting change.

Remember, I stand with you—not just as your National President, but as your friend and partner in service. Let us LEAD with purpose, CONNECT with people, and EVOLVE for impact.
                   </p>
                
                    <p style={{ textAlign: "justify" }}>
                      <strong>JFG Bharath N Acharya</strong>
                      <br />
                      National President
                      <br />
                      JCI India
                    </p>
                  </div>
                </div>
              </div>

              <div className="video-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                <h3 className="national-president-logo-heading">
                    <span className="theme_color">National President Logo</span>
                </h3>

                  <figure>
                    <img
                      className="president-logo"
                      src="images/AboutJci/2026_JCI India Theme Logo.png"
                      alt="JCI India National President Logo - Rise Up"
                    />
                       <figcaption className="theme-caption">Lead connect evolve - 2026 Theme</figcaption>
                 </figure>
                </div>
              </div>

              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="text">
                    <p style={{ textAlign: "justify" }}>
                      United by a shared vision and a common purpose, we stand as a beacon of hope and inspiration in a
                      world filled with challenges and opportunities. Together, let us harness the collective strength
                      of JCI India to transcend boundaries, ignite passion, and create sustainable change in our lives
                      and in the communities around us.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      I am confident that with commitment, collaboration, and unwavering dedication to the principles of
                      active citizenship, we will leave a lasting legacy of positive impact that resonates for
                      generations to come.
                    </p>
                    <p style={{ textAlign: "justify" }}>Let us make a difference.</p>
                    <p style={{ textAlign: "justify" }}>
                      <strong>JFG Bharath N Acharya</strong>
                      <br />
                      National President
                      <br />
                      JCI India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links Section */}
        <section className="related-links-section py-5 bg-light move-up">
  <div className="auto-container">
    <h2 className="text-center mb-4">Explore More</h2>
    <div className="row">
      <div className="col-md-4 mb-3">
        <div className="card h-100">
          <div className="card-body">
            <h3 className="card-title h5">About JCI India</h3>
            <p className="card-text">
              Learn about our organization's mission, vision, and impact across India.
            </p>
            <Link to="/aboutjciindia" className="btn btn-primary">
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="card h-100">
          <div className="card-body">
            <h3 className="card-title h5">Our Programs</h3>
            <p className="card-text">Discover the various initiatives and programs we run to empower youth.</p>
            <Link to="/gallery" className="btn btn-primary">
              Explore Programs
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="card h-100">
          <div className="card-body">
            <h3 className="card-title h5">Join JCI Nagpur Fortune</h3>
            <p className="card-text">Become a part of our community and make a difference.</p>
            <Link to="/contact" className="btn btn-primary">
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      </main>
    </>
  )
}

export default NPCorner

