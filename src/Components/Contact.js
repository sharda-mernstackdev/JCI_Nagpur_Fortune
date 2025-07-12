import React, { useState } from "react";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

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


function Contact() {

  const location = useLocation();

  useEffect(() => {
    window.gtag('config', 'G-XQGMYG40J6', {
      page_path: location.pathname,
    });
  }, [location]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    const whatsappNumber = "919975288300";
    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
    <Helmet>
        <title>Contact Us - JCI Nagpur Fortune</title>
        <meta name="description" content="Get in touch with JCI Nagpur Fortune! Reach out for inquiries, collaboration opportunities, or to learn more about our initiatives. We’d love to hear from you!" />
        <meta name="keywords" content="JCI India, youth empowerment, leadership, community service,JCI Nagpur Fortune,Nagpur,developmet,growth,Non-profit Organization,Maharashtra,India,Best Organization in Nagpur,Fortune,sitaburdi" />
        <link rel="canonical" href="http://www.jcinagpurfortune.in/contact" />
      </Helmet>


    <div>
        {/* <!--Page Title--> */}
    <section class="page-title" style={{backgroundImage:'url(images/background/12.jpg)' , alt:"jcinagpurfortune"}}>
    	<div class="auto-container">
        	<div class="row clearfix">
            	{/* <!--Title --> */}
            	<div class="title-column col-lg-6 col-md-12 col-sm-12">
                	<h1>Contact Us</h1>
                </div>
                {/* <!--Bread Crumb --> */}
                <div class="breadcrumb-column col-lg-6 col-md-12 col-sm-12">
                    <ul class="bread-crumb clearfix">
                        <li><a href="/"><span class="icon fas fa-home"></span> Home</a></li>
                        <li class="active"><span class="icon fas fa-arrow-alt-circle-right"></span> Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    {/* <!--End Page Title--> */}
      {/* <!-- Map Section --> */}
      <section className="map-section">
        <div className="auto-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.29364828424!2d79.07898447477214!3d21.140709083925067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c11d142e6ac9%3A0xbb23c4288c53121c!2sPSK%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1727347402239!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{
              border: "0",
              allowfullscreen: "",
              loading: "lazy",
              referrerpolicy: "no-referrer-when-downgrade",
            }}
          ></iframe>
        </div>
      </section>
      {/* <!-- End Map Section --> */}

      {/* <!-- Contact Section --> */}
      <section
        className="contact-section"
        style={{ backgroundImage: "url(images/background/map-pattern-1.png)" }}
      >
        <div className="auto-container">
          {/* <!-- Sec Title --> */}
          <div className="sec-title centered">
            <h2>
              <span className="theme_color">Contact </span> Us
            </h2>
            <div className="text">
              Thank you very much for your interest in our website
            </div>
          </div>
          <div className="row clearfix">
            {/* <!-- Column --> */}
            <div className="info-column col-lg-4 col-md-6 col-sm-12">
              <div className="inner-column">
                <div className="icon-box">
                  <span className="icon flaticon-location"></span>
                </div>
                <h3>Address:</h3>
                <div className="text">
                  Lower Ground Fortune Mall, behind Maharashtra bank, Sitabuldi,
                  Nagpur
                </div>
              </div>
            </div>

            {/* <!-- Column --> */}
            <div className="info-column col-lg-4 col-md-6 col-sm-12">
              <div className="inner-column">
                <div className="icon-box">
                  <span className="icon flaticon-call"></span>
                </div>
                <h3>Phone:</h3>
                <div className="text">+91-9975288300</div>
              </div>
            </div>

            {/* <!-- Column --> */}
            <div className="info-column col-lg-4 col-md-6 col-sm-12">
              <div className="inner-column">
                <div className="icon-box">
                  <span className="icon flaticon-email-1"></span>
                </div>
                <h3>Email:</h3>
                <div className="text">jci.prashant@gmail.com</div>
              </div>
            </div>
          </div>

          {/* <!-- Default Form --> */}
          <div className="default-form contact-form">
            <form onSubmit={handleSubmit}>
              <div className="row clearfix">
                {/* <!-- Column --> */}
                <div className="column col-lg-6 col-md-12 col-sm-12">
                  {/* <!-- Form Group --> */}
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      placeholder="Username"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* <!-- Form Group --> */}
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      placeholder="Email Address"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* <!-- Form Group --> */}
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      placeholder="Phone"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* <!-- Column --> */}
                <div className="column col-lg-6 col-md-12 col-sm-12">
                  {/* <!-- Form Group --> */}
                  <div className="form-group">
                    <textarea
                      name="message"
                      value={formData.message}
                      placeholder="Message"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="form-group text-center col-lg-12 col-md-12 col-sm-12">
                <button type="submit" className="theme-btn btn-style-three">
                  <span className="txt">SEND NOW</span>
                </button>
              </div>
            </form>
          </div>
          {/* <!--End Default Form--> */}
        </div>
      </section>
      {/* <!-- End Contact Section --> */}
    </div>
    </>
  );
}

export default Contact;
