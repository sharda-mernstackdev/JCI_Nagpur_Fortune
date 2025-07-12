import React from 'react'

const schemaMarkup = {
  "@context": "http://schema.org",
  "@type": "Organization",
  "name": "JCI Nagpur Fortune",
  "url": "https://www.jcinagpurfortune.in/",
  "logo": "https://www.jcinagpurfortune.in/images/images/logo4.png",
  "image": "https://www.jcinagpurfortune.in/images/logo.png",
  description: "Join JCI Nagpur Fortune to empower youth, develop leadership skills, and drive positive change in your community through impactful events, training, and social initiatives.",
  keyword: "fortune, jci, jci nagpur, Best LO, jci LO, jci in Nagpur, jci  LO in Nagpur, Best jci LO in Nagpur, Best jci LO in India, Best jci LO in Maharashtra, Best JCI LO, jci in Maharashtra, jci Events in Nagpur, jci Leadership Training, jci Nagpur Projects,jci member,youthpower,empoweryouth,Youth Empowerment Organization,JCI Nagpur Fortune, JCI Nagpur Fortune social impact, JCI Nagpur Fortune networking, JCI Nagpur fortune leadership development, JCI Nagpur community service, JCI Nagpur fortune community,JCI Nagpur fortune chapter , JCI Nagpur fortune membership,JCI Nagpur fortune training programs, JCI chapters in Maharashtra,Youth organizations in Nagpur,Leadership training in Nagpur,Community development Nagpur,Professional networking Nagpur,Youth leadership Nagpur,Social entrepreneurship Nagpur,Youth empowerment programs Nagpur,Leadership skills development,Professional growth opportunities,Community impact initiatives,Young leaders network,Business skills for youth,Personal development organization,CI Nagpur workshops,JCI Nagpur training programs,JCI Nagpur conferences,JCI Nagpur seminars,JCI Nagpur community projects,JCI Nagpur youth programs,JCI Nagpur skill development,JCI Nagpur entrepreneurship programs",

  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1475"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Lower Ground Fortune Mall, behind Maharashtra bank, Sitabuldi, Nagpur",
    "addressLocality": "Nagpur",
    "addressRegion": "Maharashtra",
    "postalCode": "440012",
    "addressCountry": "India"
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61566611071468",
    "https://www.instagram.com/jcinagpurfortune/",
    "https://x.com/jcinagpufortune",
    "https://www.linkedin.com/in/jci-nagpur-fortune-601620330/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+919975288300",
    "contactType": "customer support"
  }
};

function AboutJcinagpurFortune() {
  return (
    <div>
    {/* <!--Page Title--> */}
    <section
      class="page-title"
      style={{ backgroundImage: "url(images/background/12.jpg)" , alt:"jcinagpurfortune"}}
    >
      <div class="auto-container">
        <div class="row clearfix">
          {/* <!--Title --> */}
          <div class="title-column col-lg-6 col-md-12 col-sm-12">
            <h1>About JCI Nagpur Fortune</h1>
          </div>
          {/* <!--Bread Crumb --> */}
          <div class="breadcrumb-column col-lg-6 col-md-12 col-sm-12">
            <ul class="bread-crumb clearfix">
              <li>
                <a href="index.html">
                  <span class="icon fas fa-home"></span>
                  Home
                </a>
              </li>
              <li class="active">
                <span class="icon fas fa-arrow-alt-circle-right"></span> About
                Us
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* <!--End Page Title--> */}

    {/* <!-- Welcome Section --> */}
    <section class="welcome-section">
      <div class="auto-container">
        <div class="row clearfix">
          {/* <!-- Content Column --> */}

          <div class="video-column col-lg-6 col-md-12 col-sm-12">
            <div class="inner-column">
              <br />
              <br />
              <br /> <br />
              <img src="images/AboutJci/logo.png" alt="jciindia"/>
            </div>
            <br />
            {/* <h6>115</h6>
          <p className="text">Spread across in countries</p> */}
          </div>

          {/* <!-- Video Column --> */}
          <div class="content-column col-lg-6 col-md-12 col-sm-12">
            <div class="inner-column">
              <h2>
                About
                <span class="theme_color"> JCI Nagpur Fortune</span>
              </h2>
              <br/>
              <h3>
                Welcome to India's largest organization with young and active
                leaders
              </h3>
              {/* <div class="text ">
                <ul style={{ fontWeight: "bold",textAlign:"justify" }}>
                  <li>
                    <img src="images/AboutJci/favicon-32x32.png" />
                    JCI India is a voluntary organization, membership based
                    NGO working in India since 1949 for developing the
                    leadership skills of young men and women of this country.
                    It is affiliated to Junior Chamber International(JCI),a
                    worldwide federation of young leaders and entrepreneurs
                    founded in 1944, having headquarter at Chester Field USA.
                    Currently it has over 200,000 active members and more than
                    one million graduates, in over 100 countries and 6,000
                    communities.
                  </li>
<br/>
                  <li>
                    <img src="images/AboutJci/favicon-32x32.png" />
                    JCI India is the Second largest Member Nation of Junior
                    Chamber International. Currently we are active in more
                    than 26 states and union territories across India.
                  </li>
                  <br/>
                  <li>
                    <img src="images/AboutJci/favicon-32x32.png" />
                    The membership is offered to everybody regardless of
                    color, cast and creed between the age of 18 -40 years.
                    Junior Chamber International India is registered under
                    Societies Registration Act, Bombay Public Trust Act and
                    Income Tax Act of India.
                  </li>
                  <br/>
                  <li>
                    <img src="images/AboutJci/favicon-32x32.png" />
                    In the last 64 years we are able to produce thousands of
                    social and business leaders all over the country through
                    our intensive project based training activities
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- End Welcome Section --> */}
  </div>
  )
}

export default AboutJcinagpurFortune
