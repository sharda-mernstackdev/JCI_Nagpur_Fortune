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
                      src="images/team-images/prashant kadhao.webp"
                      alt="JC Prashant Kadhao - Founder President"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-member/prashant-kadhao"
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
                      <a href="/team-member/prashant-kadhao">
                        JFM Prashant Kadhao
                      </a>
                    </h3>
                    <div className="designation">
                      FOUNDER PRESIDENT & PRESIDENT 2025
                    </div>
                  </div>
                </div>
              </div>

              {/* Gayatri Kadhao Block */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-images/gayatri kadhao (2).webp"
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
                      <a href="/team-member/gayatri-kadhao">
                        JC Gayatri Kadhao
                      </a>
                    </h3>
                    <div className="designation">SECRETARY</div>
                  </div>
                </div>
              </div>

              {/* Abhishek Tumsare Block */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-images/abhishekh tumsare.webp"
                      alt="JC Abhishek Tumsare - Treasurer"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-member/abhishek-tumsare"
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
                      <a href="/team-member/abhishek-tumsare">
                        JC ABHISHEK TUMSARE
                      </a>
                    </h3>
                    <div className="designation">TREASURER</div>
                  </div>
                </div>
              </div>

              {/* Sharda Waghmare Block */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-images/sharda.png"
                      alt="JC Sharda Waghmare - VPMO"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-member/sharda-waghmare"
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
                      <a href="/team-member/sharda-waghmare">
                        JC Sharda Waghmare
                      </a>
                    </h3>
                    <div className="designation">VPMO</div>
                  </div>
                </div>
              </div>

              {/* ADITYA SUKHDEVE Block */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-images/Aditya_sukhdeve.png"
                      alt="JC ADITYA SUKHDEVE - VPCO"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-member/aditya-sukhdeve"
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
                      <a href="/team-member/aditya-sukhdeve">
                        JC ADITYA SUKHDEVE
                      </a>
                    </h3>
                    <div className="designation">VPCO</div>
                  </div>
                </div>
              </div>

              {/* JC SHRILEKH SHRIKHANDE Block */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-images/Shrilekh  shrikhande.webp"
                      alt="JC SHRILEKH SHRIKHANDE - VPG&D"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-member/shrilekh-shrikhande"
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
                      <a href="/team-member/shrilekh-shrikhande">
                        JC SHRILEKH SHRIKHANDE
                      </a>
                    </h3>
                    <div className="designation">VPG&D</div>
                  </div>
                </div>
              </div>

              {/* JC MANSI BOPCHE Block */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-images/mansi bopche.webp"
                      alt="JC MANSI BOPCHE - VPPR"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-member/mansi-bopche"
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
                      <a href="/team-member/mansi-bopche">JC MANSI BOPCHE</a>
                    </h3>
                    <div className="designation">VPPR</div>
                  </div>
                </div>
              </div>

              {/* Dhanshree Joshi Block */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-images/Dhanshree_Joshi.png"
                      alt="JC Dhanshree Joshi - VPTR"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-member/dhanshree-joshi"
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
                      <a href="/team-member/dhanshree-joshi">
                        JC Dhanshree Joshi
                      </a>
                    </h3>
                    <div className="designation">VPTR</div>
                  </div>
                </div>
              </div>

              {/* JC AMOD CHAUDHARI Block */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-images/Amod (2).png"
                      alt="JC AMOD CHAUDHARI - VPBO"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">
                          <strong>Connect with them</strong>
                        </div>
                        <a
                          href="/team-member/amod-chaudhari"
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
                      <a href="/team-member/amod-chaudhari">
                        JC AMOD CHAUDHARI
                      </a>
                    </h3>
                    <div className="designation">VPBO</div>
                  </div>
                </div>
              </div>

              {/* JC SANJANA KASHIMKAR Block */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-images/sanjana.jpg"
                      alt="JC SANJANA KASHIMKAR - VPIN"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-member/sanjana-kashimkar"
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
                      <a href="/team-member/sanjana-kashimkar">
                        JC SANJANA KASHIMKAR
                      </a>
                    </h3>
                    <div className="designation">VPIN</div>
                  </div>
                </div>
              </div>

              {/* JC ASHWINI THAKARE Block */}
              {/* <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-images/person1.png"
                      alt="JC ASHWINI THAKARE - DITR"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-member/ashwini-thakare"
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
                      <a href="/team-member/ashwini-thakare"> </a>
                    </h3>
                    <div className="designation">DITR</div>
                  </div>
                </div>
              </div> */}

              {/* JC PRANAV BELORKAR */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    {/* <img src="images/team-images/pranav.png" alt="JC PRANAV BELORKAR - DIG&D" /> */}
                    <img
                      src="images/team-images/Pranav.png"
                      alt="JC PRANAV BELORKAR - DIG&D"
                    />

                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-member/pranav-belorkar"
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
                            <a href="https://pranavbelorkar.in/" aria-label="Google Plus">
                              <span className="fab fa-google-plus-g"></span>
                            </a>
                          </li>
                          {/* <li>
                            <a href="#" aria-label="Skype">
                              <span className="fab fa-skype"></span>
                            </a>
                          </li> */}
                          <li>
                            <a href="https://www.instagram.com/pranavbelorkar.16/" aria-label="Instagram">
                              <span className="fab fa-instagram"></span>
                            </a>
                          </li>
                          <li>
                            <a href="http://x.com/PranavB38116" aria-label="Twitter">
                              <span className="fab fa-twitter"></span>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/in/pranav-belorkar-27a66324b/" aria-label="LinkedIn">
                              <span className="fab fa-linkedin-in"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="/team-member/pranav-belorkar">
                        JC PRANAV BELORKAR
                      </a>
                    </h3>
                    <div className="designation">DIG&D</div>
                  </div>
                </div>
              </div>

              {/* JC SHUBHANGI TIJARE */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-images/shubhangi_tijare.png"
                      alt="JC SHUBHANGI TIJARE - DICO"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-member/shubhangi-tijare"
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
                            <a href="https://shubhangitijare.in/" aria-label="Google Plus">
                              <span className="fab fa-google-plus-g"></span>
                            </a>
                          </li>
                          {/* <li>
                            <a href="#" aria-label="Skype">
                              <span className="fab fa-skype"></span>
                            </a>
                          </li> */}
                          <li>
                            <a href="https://www.instagram.com/shubhangi_tijare/" aria-label="Instagram">
                              <span className="fab fa-instagram"></span>
                            </a>
                          </li>
                          <li>
                            <a href="https://x.com/ShubhangiT72993" aria-label="Twitter">
                              <span className="fab fa-twitter"></span>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/in/shubhangi-tijare/" aria-label="LinkedIn">
                              <span className="fab fa-linkedin-in"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="/team-member/shubhangi-tijare">
                        JC SHUBHANGI TIJARE
                      </a>
                    </h3>
                    <div className="designation">DICO</div>
                  </div>
                </div>
              </div>

              {/* JC KHUSHI DIWAN */}
              {/* <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-images/person1.png"
                      alt="JC KHUSHI DIWAN - DIMO"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-member/khushi-diwan"
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
                      <a href="/team-member/khushi-diwan"> </a>
                    </h3>
                    <div className="designation">DIMO</div>
                  </div>
                </div>
              </div> */}

              {/* JC DEVANSHU GOTE */}
              {/* <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-images/person1.png"
                      alt="JC DEVANSHU GOTE - DIBO"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-member/devanshu-gote"
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
                      <a href="/team-member/devanshu-gote"> </a>
                    </h3>
                    <div className="designation">DIBO</div>
                  </div>
                </div>
              </div> */}

              {/* JC tanushri dhote */}
              <div className="volunter-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="images/team-images/tanushri.webp"
                      alt="JC tanushri dhote - DIRECTOR LADY JAYCEE"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="text">Connect with them</div>
                        <a
                          href="/team-member/tanushri-dhote"
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
                            <a href="https://tanushri.vercel.app/" aria-label="Google Plus">
                              <span className="fab fa-google-plus-g"></span>
                            </a>
                          </li>
                          <li>
                            <a href="https://join.skype.com/invite/vWBkY6uCsNdT" aria-label="Skype">
                              <span className="fab fa-skype"></span>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/tanushri__22/" aria-label="Twitter">
                              <span className="fab fa-instagram"></span>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/in/tanushri-dhote-b4ab15298/" aria-label="LinkedIn">
                              <span className="fab fa-linkedin-in"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="lower-box">
                    <h3>
                      <a href="/team-member/tanushri-dhote">
                        JC TANUSHRI DHOTE
                      </a>
                    </h3>
                    <div className="designation">DIRECTOR LADY JAYCEE</div>
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
                        `https://wa.me/919975288300?text=${message}`,
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
