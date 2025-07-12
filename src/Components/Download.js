import React from "react";
import axios from "axios";
import { saveAs } from "file-saver";
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

<Helmet>
  <title>JCI India Resources and Materials</title>
  <meta
    name="description"
    content="Access a variety of resources from JCI Nagpur Fortune, including brochures, reports, training materials, and more. Download valuable information to support your journey in youth empowerment and community service."
  />
  <meta
    name="keywords"
    content="JCI India, youth empowerment, leadership, community service,JCI Nagpur Fortune,Nagpur,developmet,growth,Non-profit Organization,Maharashtra,India,Best Organization in Nagpur,Fortune,sitaburdi"
  />
  <link rel="canonical" href="https://www.jcinagpurfortune.in//" />
</Helmet>;

const PdfDownloader = () => {
  const downloadPdf = async (url, filename) => {
    try {
      const response = await axios.get(url, {
        responseType: "blob", // Important for handling binary data
      });

      const blob = new Blob([response.data], { type: "application/pdf" });
      saveAs(blob, filename); // Specify the filename here
    } catch (error) {
      console.error("Error downloading the PDF:", error);
    }
  };

  return (
    <>
      <section
        className="page-title"
        style={{ backgroundImage: "url(images/background/12.jpg)" }}
      >
        <div className="auto-container">
          <div className="row clearfix">
            {/* Title */}
            <div className="title-column col-lg-6 col-md-12 col-sm-12">
              <h1>Download</h1>
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
                <li className="active">
                  <span className="icon fas fa-arrow-alt-circle-right"></span>
                  Download
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-3">
        <div className="mt-4 p-5 bg-basic text-white rounded">
          <div className="row">
            <div className="col-lg-4">
              <h6 style={{ color: "black" }}>Constitution & Policy Manual-2025</h6>
              <button
                onClick={() =>
                  downloadPdf(
                    "/images/Dawnloads/CONSTITUTION-AND-POLICY-MANUAL-2025.pdf"
                  )
                }
                className="btn btn-primary"
              >
                Download PDF
              </button>
            </div>

            <div className="col-lg-4">
              <h6 style={{ color: "black" }}>PLAN-OF-ACTION-2025</h6>
              <button
                onClick={() =>
                  downloadPdf(
                    "/images/Dawnloads/Plan-of-Action_JCI-India-2025 (1).pdf",
                    "PLAN-OF-ACTION-2025.pdf"
                  )
                }
                className="btn btn-primary"
              >
                Download PDF
              </button>
            </div>

            <div className="col-lg-4">
              <h6 style={{ color: "black" }}>PRESIDENTIAL-TOOLKIT</h6>
              {/* <button
                onClick={() =>
                  downloadPdf(
                    "/images/Dawnloads/1712223219-PRESIDENTIAL-TOOLKIT-FINAL.pdf",
                    "PRESIDENTIAL-TOOLKIT.pdf"
                  )
                }
                className="btn btn-primary"
              >
                Download PDF
              </button> */}
              <button className="btn btn-primary">NA</button>
            </div>

            {/* <div className="col-lg-4">
              <h6 style={{ color: "black" }}>Constitution & Policy Manual</h6>
              <button
                onClick={() => downloadPdf("/images/Dawnloads/1712223151-JCI-India-Constitution-and-Policy-Manual-Part-I-&-II---2024.pdf")}
                className="btn btn-primary"
              >
                Download PDF
              </button>
            </div> */}
          </div>
        </div>
        <br /> <br />
      </div>
    </>
  );
};

export default PdfDownloader;
