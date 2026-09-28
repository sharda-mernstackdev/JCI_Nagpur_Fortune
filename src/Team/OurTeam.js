"use client";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const schemaMarkup = {
  "@context": "http://schema.org",
  "@type": "Organization",
  name: "JCI Nagpur Fortune",
  url: "https://www.jcinagpurfortune.in/",
  logo: "https://www.jcinagpurfortune.in/images/images/logo4.webp",
  image: "https://www.jcinagpurfortune.in/images/logo.webp",
  description:
    "Join JCI Nagpur Fortune to empower youth, develop leadership skills, and drive positive change in your community through impactful events, training, and social initiatives.",
  keyword:
    "best public speaking in Nagpur, JCI Nagpur Fortune, JCI Nagpur, JCI events Nagpur, JCI leadership training Nagpur, JCI training programs, JCI membership Nagpur, youth organization Nagpur, youth empowerment programs Nagpur, leadership training Nagpur, leadership development Nagpur, community development Nagpur, professional networking Nagpur, social entrepreneurship Nagpur, business skills for youth, personal development organization, JCI Nagpur projects, JCI Nagpur seminars, JCI Nagpur conferences, JCI Nagpur community projects, JCI Nagpur youth programs, communication skills training in Nagpur, public speaking classes in Sitabuldi Nagpur, personality development classes in Sitabuldi Nagpur, confidence building classes in Nagpur, soft skills training in Nagpur, stage fear removal classes in Nagpur, spoken English and public speaking Nagpur",

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
    telephone: "+91-9422123343",
    contactType: "customer support",
  },
};

function OurTeam() {
  const location = useLocation();
  useEffect(() => {
    window.gtag("config", "G-XQGMYG40J6", {
      page_path: location.pathname,
    });
  }, [location]);

  return (
    <>
      <Helmet>
        <title>
          Meet Our Team - JCI Nagpur Fortune Leadership | Youth Empowerment
        </title>
        <meta
          name="description"
          content="Meet the dedicated team behind JCI Nagpur Fortune. Our passionate leaders work tirelessly to empower youth and drive positive change in communities across Nagpur and beyond."
        />
        <meta
          name="keywords"
          content="JCI India, youth empowerment, leadership, community service, JCI Nagpur Fortune, Nagpur, development, growth, Non-profit Organization, Maharashtra, India, Best Organization in Nagpur, Fortune, sitaburdi"
        />
        <link rel="canonical" href="https://www.jcinagpurfortune.in/our-team" />

        {/* OpenGraph Meta Tags */}
        <meta
          property="og:title"
          content="Meet Our Team - JCI Nagpur Fortune Leadership | Youth Empowerment"
        />
        <meta
          property="og:description"
          content="Meet the dedicated team behind JCI Nagpur Fortune. Our passionate leaders work tirelessly to empower youth and drive positive change in communities."
        />
        <meta
          property="og:image"
          content="https://www.jcinagpurfortune.in/images/team-images/prashant kadhao.webp"
        />
        <meta
          property="og:url"
          content="https://www.jcinagpurfortune.in/our-team"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="JCI Nagpur Fortune" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Meet Our Team - JCI Nagpur Fortune Leadership"
        />
        <meta
          name="twitter:description"
          content="Meet the dedicated team behind JCI Nagpur Fortune. Our passionate leaders work tirelessly to empower youth."
        />
        <meta
          name="twitter:image"
          content="https://www.jcinagpurfortune.in/images/team-images/prashant kadhao.webp"
        />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <main>
        {/* Page Title */}
        <section
          className="page-title"
          style={{ backgroundImage: "url(images/background/12.jpg)" }}
        >
          <div className="auto-container">
            <div className="row clearfix">
              {/* Title */}
              <div className="title-column col-lg-6 col-md-12 col-sm-12">
                <h1>Our Leadership Team</h1>
              </div>
              {/* Bread Crumb */}
              <div className="breadcrumb-column col-lg-6 col-md-12 col-sm-12">
                <ul className="bread-crumb clearfix">
                  <li>
                    <a href="/">
                      <span className="icon fas fa-home"></span> Home
                    </a>
                  </li>
                  {/* <li>
                    <a href="/about">
                      <span className="icon fas fa-arrow-alt-circle-right"></span> About Us
                    </a>
                  </li> */}
                  <li className="active">
                    <span className="icon fas fa-arrow-alt-circle-right"></span>{" "}
                    Our Team
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* End Page Title */}

        {/* Team Introduction Section */}
        <section className="team-intro-section py-5">
          <div className="auto-container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2 className="changemakers-title">Meet the Changemakers</h2>
                <p className="section-subtitle">
                  Our dedicated team of leaders is committed to empowering youth
                  and creating positive change in Nagpur and beyond. Each member
                  brings unique skills and passion to our organization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Volunter Section */}
        <section className="volunter-section team-page-section">
          <div className="auto-container">
            <div className="row clearfix">

            {/* prashant kadhao Block */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-new/Prashant_sir.webp"
                      alt="JC Prashant Kadhao - Founder President"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-new/Prashant_sir.webp"
                          className="link-btn"
                        >
                          <span className="icon flaticon-web-link"></span>
                        </a>
                        {/* Social Box */}
                        <ul className="social-box">
                          <li>
                            <a href="https://www.facebook.com/prashant.kadhao" aria-label="Facebook">
                              <span className="fab fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="https://prashantkadhao.com/" aria-label="Google Plus">
                              <span className="fab fa-google-plus-g"></span>
                            </a>
                          </li>
                          {/* <li>
                            <a href="#" aria-label="Skype">
                              <span className="fab fa-skype"></span>
                            </a>
                          </li> */}
                          <li>
                            <a href="https://www.instagram.com/prashant_kadhao/" aria-label="Twitter">
                              <span className="fab fa-instagram"></span>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/in/prashant-kadhao-544600a9/" aria-label="LinkedIn">
                              <span className="fab fa-linkedin-in"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="/team-new/Prashant_sir.webp">
                        JFM Prashant Kadhao
                      </a>
                    </h3>
                    <div className="designation">
                      IPP
                    </div>
                  </div>
                </div>
              </div>


                {/* Abhishek Tumsare Block */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-new/President.webp"
                      alt="JC Abhishek Tumsare - Treasurer"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-new/President.webp"
                          className="link-btn"
                        >
                          <span className="icon flaticon-web-link"></span>
                        </a>
                        {/* Social Box */}
                        <ul className="social-box">
                          <li>
                            <a href="#" aria-label="Facebook">
                              <span className="fab fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Google Plus">
                              <span className="fab fa-google-plus-g"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Skype">
                              <span className="fab fa-skype"></span>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/developerabhishek9300/" aria-label="Twitter">
                              <span className="fab fa-instagram"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="LinkedIn">
                              <span className="fab fa-linkedin-in"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="/team-new/President.webp">
                        JC ABHISHEK TUMSARE
                      </a>
                    </h3>
                    <div className="designation">President 2026</div>
                  </div>
                </div>
              </div>
             

              {/* Gayatri Kadhao Block */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-new/secretary.webp"
                      alt="JC Gayatri Kadhao - Secretary"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-member/gayatri-kadhao"
                          className="link-btn"
                        >
                          <span className="icon flaticon-web-link"></span>
                        </a>
                        {/* Social Box */}
                        <ul className="social-box">
                          <li>
                            <a href="#" aria-label="Facebook">
                              <span className="fab fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Google Plus">
                              <span className="fab fa-google-plus-g"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Skype">
                              <span className="fab fa-skype"></span>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/gayatri_wasu_kadhao/" aria-label="Twitter">
                              <span className="fab fa-instagram"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="LinkedIn">
                              <span className="fab fa-linkedin-in"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="images/team-new/secretary.webp">
                        JC Gayatri Kadhao
                      </a>
                    </h3>
                    <div className="designation">SECRETARY</div>
                  </div>
                </div>
              </div>

                   {/* Tanushree Dhote Block */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-new/Tanushree.webp"
                      alt="JC Tanushree Dhote - Treasure"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-new/Tanushree.webp"
                          className="link-btn"
                        >
                          <span className="icon flaticon-web-link"></span>
                        </a>
                        {/* Social Box */}
                        <ul className="social-box">
                          <li>
                            <a href="https://www.facebook.com/sharda.waghamare.1" aria-label="Facebook">
                              <span className="fab fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="https://shardawaghmare.in/" aria-label="Google Plus">
                              <span className="fab fa-google-plus-g"></span>
                            </a>
                          </li>
                          <li>
                            <a href="https://join.skype.com/invite/pI3ObrrRF4uu" aria-label="Skype">
                              <span className="fab fa-skype"></span>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/webdev_sharda/?hl=en" aria-label="Twitter">
                              <span className="fab fa-instagram"></span>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/in/sharda-waghmare-805955218/" aria-label="LinkedIn">
                              <span className="fab fa-linkedin-in"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="/team-new/Tanushree.webp">
                        JC Tanushree Dhote
                      </a>
                    </h3>
                    <div className="designation">Treasure</div>
                  </div>
                </div>
              </div>
              

              {/* Vaibhav Phate Block */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-new/VPMO.webp"
                      alt="JC Vaibhav Phate - VPMO"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-new/VPMO.webp"
                          className="link-btn"
                        >
                          <span className="icon flaticon-web-link"></span>
                        </a>
                        {/* Social Box */}
                        <ul className="social-box">
                          <li>
                            <a href="https://www.facebook.com/sharda.waghamare.1" aria-label="Facebook">
                              <span className="fab fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="https://shardawaghmare.in/" aria-label="Google Plus">
                              <span className="fab fa-google-plus-g"></span>
                            </a>
                          </li>
                          <li>
                            <a href="https://join.skype.com/invite/pI3ObrrRF4uu" aria-label="Skype">
                              <span className="fab fa-skype"></span>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/webdev_sharda/?hl=en" aria-label="Twitter">
                              <span className="fab fa-instagram"></span>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/in/sharda-waghmare-805955218/" aria-label="LinkedIn">
                              <span className="fab fa-linkedin-in"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="/team-new/VPMO.webp">
                        JC Vaibhav Phate
                      </a>
                    </h3>
                    <div className="designation">VPMO</div>
                  </div>
                </div>
              </div>

              {/* Sharda Waghmare Block */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-new/VPCO.webp"
                      alt="JC SHARDA WAGHMARE - VPCO"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-new/VPCO.webp"
                          className="link-btn"
                        >
                          <span className="icon flaticon-web-link"></span>
                        </a>
                        {/* Social Box */}
                        <ul className="social-box">
                          <li>
                            <a href="https://www.facebook.com/Aditya.R.Sukhdeve" aria-label="Facebook">
                              <span className="fab fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="https://adityasukhdeve.in/" aria-label="Google Plus">
                              <span className="fab fa-google-plus-g"></span>
                            </a>
                          </li>
                          {/* <li>
                            <a href="#" aria-label="Skype">
                              <span className="fab fa-skype"></span>
                            </a>
                          </li> */}
                          <li>
                            <a href="https://www.instagram.com/jc_aditya.r.sukhdeve/" aria-label="Instagram">
                              <span className="fab fa-instagram"></span>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/in/aditya-sukhdeve-472493205/" aria-label="LinkedIn">
                              <span className="fab fa-linkedin-in"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="/team-new/VPCO.webp">
                        JC SHARDA WAGHMARE
                      </a>
                    </h3>
                    <div className="designation">VPCO</div>
                  </div>
                </div>
              </div>

              {/* JC Apeksha Tumsare Block */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-new/apeksha.webp"
                      alt="JC APEKSHA TUMSARE - VPG&D"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-new/apeksha.webp"
                          className="link-btn"
                        >
                          <span className="icon flaticon-web-link"></span>
                        </a>
                        {/* Social Box */}
                        <ul className="social-box">
                          <li>
                            <a href="#" aria-label="Facebook">
                              <span className="fab fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Google Plus">
                              <span className="fab fa-google-plus-g"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Skype">
                              <span className="fab fa-skype"></span>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/shrilekh.s/" aria-label="Twitter">
                              <span className="fab fa-instagram"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="LinkedIn">
                              <span className="fab fa-linkedin-in"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="/team-new/apeksha.webp">
                       JC APEKSHA TUMSARE 
                      </a>
                    </h3>
                    <div className="designation">VPG&D</div>
                  </div>
                </div>
              </div>

              {/* JC BHAVESH DABHALE Block */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-new/bhavesh.webp"
                      alt="JC BHAVESH DABHALE - VPPR & Marketing"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-new/bhavesh.webp"
                          className="link-btn"
                        >
                          <span className="icon flaticon-web-link"></span>
                        </a>
                        {/* Social Box */}
                        <ul className="social-box">
                          <li>
                            <a href="#" aria-label="Facebook">
                              <span className="fab fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Google Plus">
                              <span className="fab fa-google-plus-g"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Skype">
                              <span className="fab fa-skype"></span>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/mansi_mern/" aria-label="Twitter">
                              <span className="fab fa-instagram"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="LinkedIn">
                              <span className="fab fa-linkedin-in"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="/team-new/bhavesh.webp">JC BHAVESH DABHALE</a>
                    </h3>
                    <div className="designation">VPPR & Marketing</div>
                  </div>
                </div>
              </div>

              {/* Amod Chaudhari Block */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-new/VPTR.webp"
                      alt="JC AMOD CHAUDHARI - VPTR"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-new/VPTR.webp"
                          className="link-btn"
                        >
                          <span className="icon flaticon-web-link"></span>
                        </a>
                        {/* Social Box */}
                        <ul className="social-box">
                          <li>
                            <a href="#" aria-label="Facebook">
                              <span className="fab fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Google Plus">
                              <span className="fab fa-google-plus-g"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Skype">
                              <span className="fab fa-skype"></span>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/dhanshree_devs/" aria-label="Twitter">
                              <span className="fab fa-instagram"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="LinkedIn">
                              <span className="fab fa-linkedin-in"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="/team-new/VPTR.webp">
                        JC AMOD CHAUDHARI
                      </a>
                    </h3>
                    <div className="designation">VPTR</div>
                  </div>
                </div>
              </div>

              {/* JC RAHUL PAREKAR Block */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-new/VPBO.webp"
                      alt="JC RAHUL PAREKAR - VPBO"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">
                          <strong>Connect with them</strong>
                        </div>
                        <a
                          href="/team-new/VPBO.webp"
                          className="link-btn"
                        >
                          <span className="icon flaticon-web-link"></span>
                        </a>
                        {/* Social Box */}
                        <ul className="social-box">
                          <li>
                            <a href="https://www.facebook.com/profile.php?id=100008099328210" aria-label="Facebook">
                              <span className="fab fa-facebook-f"></span>
                            </a>
                          </li>
                          {/* <li>
                            <a href="#" aria-label="Google Plus">
                              <span className="fab fa-google-plus-g"></span>
                            </a>
                          </li> */}
                          {/* <li>
                            <a href="#" aria-label="Skype">
                              <span className="fab fa-skype"></span>
                            </a>
                          </li> */}
                          <li>
                            <a href="https://www.instagram.com/jc_amod/" aria-label="Twitter">
                              <span className="fab fa-twitter"></span>
                            </a>
                          </li>
                          <li>
                            <a href="https://x.com/home" aria-label="Instagram">
                              <span className="fab fa-instagram"></span>
                            </a>
                          </li>
                          <li>
                            <a href="http://www.linkedin.com/in/amod-chaudhari11" aria-label="LinkedIn">
                              <span className="fab fa-linkedin-in"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="/team-new/VPBO.webp">
                        JC RAHUL PAREKAR
                      </a>
                    </h3>
                    <div className="designation">VPBO</div>
                  </div>
                </div>
              </div>

              {/* JC JIGYASA SHEWARE Block */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-new/VPIO.webp"
                      alt="JC JIGYASA SHEWARE - VPIN"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-new/VPIO.webp"
                          className="link-btn"
                        >
                          <span className="icon flaticon-web-link"></span>
                        </a>
                        {/* Social Box */}
                        <ul className="social-box">
                          {/* <li>
                            <a href="#" aria-label="Facebook">
                              <span className="fab fa-facebook-f"></span>
                            </a>
                          </li> */}
                          <li>
                            <a href="https://sanjanakashimkar.in/" aria-label="Google Plus">
                              <span className="fab fa-google-plus-g"></span>
                            </a>
                          </li>
                          {/* <li>
                            <a href="#" aria-label="Skype">
                              <span className="fab fa-skype"></span>
                            </a>
                          </li> */}
                          <li>
                            <a href="https://www.instagram.com/webeyes_sanjana/" aria-label="Twitter">
                              <span className="fab fa-instagram"></span>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/in/sanjana-kashimkar-11609424a/" aria-label="LinkedIn">
                              <span className="fab fa-linkedin-in"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="/team-new/VPIO.webp">
                        JC JIGYASA SHEWARE
                      </a>
                    </h3>
                    <div className="designation">VPIO</div>
                  </div>
                </div>
              </div>

               {/* JC Bhavana Ma'am Block */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-new/Bhavana_mam.webp"
                      alt="JC Bhavana Talreja - Director Lady Jaycee"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-new/Bhavana_mam.webp"
                          className="link-btn"
                        >
                          <span className="icon flaticon-web-link"></span>
                        </a>
                      
                        <ul className="social-box">
                          <li>
                            <a href="#" aria-label="Facebook">
                              <span className="fab fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Google Plus">
                              <span className="fab fa-google-plus-g"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Skype">
                              <span className="fab fa-skype"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Twitter">
                              <span className="fab fa-instagram"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="LinkedIn">
                              <span className="fab fa-linkedin-in"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="/team-new/Bhavana_mam.webp"> </a>
                      JC BHAVANA TALREJA
                    </h3>
                    <div className="designation">Director Lady Jaycee</div>
                  </div>
                </div>
              </div>


              {/* JC Ruchita Ma'am Block */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-new/Ruchita_mam.webp"
                      alt="JC Ruchita Mohata - Lady Jaycee"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-new/Ruchita_mam.webp"
                          className="link-btn"
                        >
                          <span className="icon flaticon-web-link"></span>
                        </a>
                      
                        <ul className="social-box">
                          <li>
                            <a href="#" aria-label="Facebook">
                              <span className="fab fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Google Plus">
                              <span className="fab fa-google-plus-g"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Skype">
                              <span className="fab fa-skype"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Twitter">
                              <span className="fab fa-instagram"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="LinkedIn">
                              <span className="fab fa-linkedin-in"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="/team-new/Ruchita_mam.webp"> </a>
                      JC RUCHITA MOHATA
                    </h3>
                    <div className="designation">DIMO</div>
                  </div>
                </div>
              </div>


            
               {/* JC AKHILA PATIL  Block */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-new/Akhila.webp"
                      alt="AKHILA PATIL - DICO"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-new/Akhila.webp"
                          className="link-btn"
                        >
                          <span className="icon flaticon-web-link"></span>
                        </a>
                      
                        <ul className="social-box">
                          <li>
                            <a href="#" aria-label="Facebook">
                              <span className="fab fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Google Plus">
                              <span className="fab fa-google-plus-g"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Skype">
                              <span className="fab fa-skype"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Twitter">
                              <span className="fab fa-instagram"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="LinkedIn">
                              <span className="fab fa-linkedin-in"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="/team-new/Akhila.webp"> </a>
                      JC AKHILA PATIL
                    </h3>
                    <div className="designation">DICO</div>
                  </div>
                </div>
              </div>

              

              {/* JC Kirti Tagde mam Block */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-new/kirti_mam.webp"
                      alt="JC Kirtishubha Tagade - DITR"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-new/kirti_mam.webp"
                          className="link-btn"
                        >
                          <span className="icon flaticon-web-link"></span>
                        </a>
                      
                        <ul className="social-box">
                          <li>
                            <a href="#" aria-label="Facebook">
                              <span className="fab fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Google Plus">
                              <span className="fab fa-google-plus-g"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Skype">
                              <span className="fab fa-skype"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Twitter">
                              <span className="fab fa-instagram"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="LinkedIn">
                              <span className="fab fa-linkedin-in"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="/team-new/kirti_mam.webp"> </a>
                      JC KIRTISUBHA TAGADE
                    </h3>
                    <div className="designation">DITR</div>
                  </div>
                </div>
              </div>

               {/* JC Amol Chobutkar sir Block */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-new/amol_sir.webp"
                      alt="JC Amol Chobutkar - DIBO"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-new/amol_sir.webp"
                          className="link-btn"
                        >
                          <span className="icon flaticon-web-link"></span>
                        </a>
                      
                        <ul className="social-box">
                          <li>
                            <a href="#" aria-label="Facebook">
                              <span className="fab fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Google Plus">
                              <span className="fab fa-google-plus-g"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Skype">
                              <span className="fab fa-skype"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Twitter">
                              <span className="fab fa-instagram"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="LinkedIn">
                              <span className="fab fa-linkedin-in"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="/team-new/amol_sir.webp"> </a>
                      JC AMOL CHOBUTKAR
                    </h3>
                    <div className="designation">DIBO</div>
                  </div>
                </div>
              </div>

              {/* JC Rahul Sonule sir Block */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-new/rahul_sir.webp"
                      alt="JC Rahul Sonule - LO Officer"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-new/rahul_sir.webp"
                          className="link-btn"
                        >
                          <span className="icon flaticon-web-link"></span>
                        </a>
                      
                        <ul className="social-box">
                          <li>
                            <a href="#" aria-label="Facebook">
                              <span className="fab fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Google Plus">
                              <span className="fab fa-google-plus-g"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Skype">
                              <span className="fab fa-skype"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Twitter">
                              <span className="fab fa-instagram"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="LinkedIn">
                              <span className="fab fa-linkedin-in"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="/team-new/rahul_sir.webp"> </a>
                      JC RAHUL SONULE
                    </h3>
                    <div className="designation">LO Officer</div>
                  </div>
                </div>
              </div>

           {/* JC Yogesh Wagh sir Block */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-new/yogesh_sir.webp"
                      alt="JC Yogesh Wagh - Buttentin Editor"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-new/yogesh_sir.webp"
                          className="link-btn"
                        >
                          <span className="icon flaticon-web-link"></span>
                        </a>
                      
                        <ul className="social-box">
                          <li>
                            <a href="#" aria-label="Facebook">
                              <span className="fab fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Google Plus">
                              <span className="fab fa-google-plus-g"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Skype">
                              <span className="fab fa-skype"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Twitter">
                              <span className="fab fa-instagram"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="LinkedIn">
                              <span className="fab fa-linkedin-in"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="/team-new/yogesh_sir.webp"> </a>
                      JC YOGESH WAGH
                    </h3>
                    <div className="designation">Buttentin Editor</div>
                  </div>
                </div>
              </div>

            
             
             

               {/* JC Rameshwary Ma'am Block */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-new/rameshwari_mam.webp"
                      alt="JC Rameshwary Bamohare - Co-Buttentin Editor"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-new/rameshwari_mam.webp"
                          className="link-btn"
                        >
                          <span className="icon flaticon-web-link"></span>
                        </a>
                      
                        <ul className="social-box">
                          <li>
                            <a href="#" aria-label="Facebook">
                              <span className="fab fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Google Plus">
                              <span className="fab fa-google-plus-g"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Skype">
                              <span className="fab fa-skype"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Twitter">
                              <span className="fab fa-instagram"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="LinkedIn">
                              <span className="fab fa-linkedin-in"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="/team-new/rameshwari_mam.webp"> </a>
                      JC RAMESHWARY BAMOHARE
                    </h3>
                    <div className="designation">Co-Buttentin Editor</div>
                  </div>
                </div>
              </div>

               {/* JC JIVIKA KADHAO Block */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-new/Jivika.webp"
                      alt="JEEVIKA KADHAO - Junior Jacyee"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-new/Jivika.webp"
                          className="link-btn"
                        >
                          <span className="icon flaticon-web-link"></span>
                        </a>
                      
                        <ul className="social-box">
                          <li>
                            <a href="#" aria-label="Facebook">
                              <span className="fab fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Google Plus">
                              <span className="fab fa-google-plus-g"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Skype">
                              <span className="fab fa-skype"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Twitter">
                              <span className="fab fa-instagram"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="LinkedIn">
                              <span className="fab fa-linkedin-in"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="/team-new/Jivika.webp"> </a>
                      JC JEEVIKA KADHAO
                    </h3>
                    <div className="designation">Junior Jacyee</div>
                  </div>
                </div>
              </div>
              

                {/* JC KARTIK  DABHALE Block */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-new/dirmangement.webp"
                      alt="KARTIK DABHALE - Member"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-new/dirmangement.webp"
                          className="link-btn"
                        >
                          <span className="icon flaticon-web-link"></span>
                        </a>
                      
                        <ul className="social-box">
                          <li>
                            <a href="#" aria-label="Facebook">
                              <span className="fab fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Google Plus">
                              <span className="fab fa-google-plus-g"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Skype">
                              <span className="fab fa-skype"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Twitter">
                              <span className="fab fa-instagram"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="LinkedIn">
                              <span className="fab fa-linkedin-in"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="/team-new/dirmangement.webp"> </a>
                      JC KARTIK DABHALE
                    </h3>
                    <div className="designation">Member</div>
                  </div>
                </div>
              </div>

               {/* Kanchan Upase */}
               <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-new/person1.webp"
                      alt="KANCHAN UPASE - Member"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-new/dirmangement.webp"
                          className="link-btn"
                        >
                          <span className="icon flaticon-web-link"></span>
                        </a>
                      
                        <ul className="social-box">
                          <li>
                            <a href="#" aria-label="Facebook">
                              <span className="fab fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Google Plus">
                              <span className="fab fa-google-plus-g"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Skype">
                              <span className="fab fa-skype"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Twitter">
                              <span className="fab fa-instagram"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="LinkedIn">
                              <span className="fab fa-linkedin-in"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="/team-new/person1.webp"> </a>
                      KANCHAN UPASE
                    </h3>
                    <div className="designation">Member</div>
                  </div>
                </div>
              </div>


             
            </div>
          </div>
        </section>
        {/* End team Section */}

        {/* Team FAQ Section */}
        <section className="team-faq-section py-5">
          <div className="auto-container">
            <h2 className="text-center mb-4">Frequently Asked Questions</h2>
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="accordion" id="teamFaqAccordion">
                  {[
                    {
                      id: "collapseOne",
                      heading: "headingOne",
                      question: "How can I join the JCI Nagpur Fortune team?",
                      answer:
                        "You can join our team by connecting with our members on WhatsApp. We welcome passionate individuals who want to make a difference in the community.",
                    },
                    {
                      id: "collapseTwo",
                      heading: "headingTwo",
                      question:
                        "What are the benefits of joining JCI Nagpur Fortune?",
                      answer:
                        "Joining JCI Nagpur Fortune provides opportunities for leadership development, networking with like-minded individuals, community service, and personal growth. To learn more about the benefits, you can talk with our members on WhatsApp.",
                    },
                  ].map((faq, index) => {
                    const sendWhatsAppMessage = (question) => {
                      const message = encodeURIComponent(
                        `Hello Sir/Ma'am, I have a query regarding: ${question}`
                      );
                      window.open(
                        `https://wa.me/919422123343?text=${message}`,
                        "_blank"
                      );
                    };

                    return (
                      <div className="card mb-3" key={faq.id}>
                        <div className="card-header" id={faq.heading}>
                          <h3 className="mb-0">
                            <button
                              id={`${faq.id}-question`} // ✅ Unique ID for each question
                              className="btn btn-link btn-block text-left"
                              type="button"
                              data-toggle="collapse"
                              data-target={`#${faq.id}`}
                              aria-expanded={index === 0 ? "true" : "false"}
                              aria-controls={faq.id}
                              onClick={() => sendWhatsAppMessage(faq.question)}
                            >
                              {faq.question}
                            </button>
                          </h3>
                        </div>
                        <div
                          id={faq.id}
                          className={`collapse ${index === 0 ? "show" : ""}`}
                          aria-labelledby={faq.heading}
                          data-parent="#teamFaqAccordion"
                        >
                          <div
                            className="card-body"
                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default OurTeam;
