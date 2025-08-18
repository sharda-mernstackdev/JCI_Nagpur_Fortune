import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Modal,
  ModalHeader,
} from "reactstrap";
import { FaSearchPlus } from "react-icons/fa"; // Import a zoom icon
import "./EventImageComponent.css"; // Import custom CSS for hover effect

const ImageTabs = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [modal, setModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = {
    all: [
      {
        src: "images/eventimages/nal5.png",
        alt: "NALANDA 2025",
        text: "NALANDA 2025",
      },
        {
        src: "images/eventimages/nal3.png",
        alt: "NALANDA 2025",
        text: "NALANDA 2025",
      },
        {
        src: "images/eventimages/nal4.png",
        alt: "NALANDA 2025",
        text: "NALANDA 2025",
      },
       {
        src: "images/eventimages/nal2.png",
        alt: "NALANDA 2025",
        text: "NALANDA 2025",
      },
       {
        src: "images/eventimages/nal1.png",
        alt: "NALANDA 2025",
        text: "NALANDA 2025",
      },
      {
        src: "images/zone-events/pal3.png",
        alt: "Parliamentarian 2025",
        text: "Parliamentarian 2025",
      },
      {
        src: "images/zone-events/pal2.png",
        alt: "Parliamentarian 2025",
        text: "Parliamentarian 2025",
      },
      {
        src: "images/zone-events/pal1.png",
        alt: "Parliamentarian 2025",
        text: "Parliamentarian 2025",
      },
       {
        src: "images/zone-events/rr3.png",
        alt: "Review 2 React 2025",
        text: "Review 2 React 2025",
      },
      {
        src: "images/zone-events/rr2.png",
        alt: "Review 2 React 2025",
        text: "Review 2 React 2025",
      },
      {
        src: "images/zone-events/rr1.png",
        alt: "Review 2 React 2025",
        text: "Review 2 React 2025",
      },
      {
        src: "images/zone-events/ztws3.png",
        alt: "ZTWS 2025",
        text: "ZTWS 2025",
      },
      {
        src: "images/zone-events/ztws1.png",
        alt: "ZTWS 2025",
        text: "ZTWS 2025",
      },
      {
        src: "images/zone-events/ztws2.png",
        alt: "ZTWS 2025",
        text: "ZTWS 2025",
      },
      {
        src: "images/zone-events/midcon4.png",
        alt: "Zonefare Midcon 2025",
        text: "Zonefare Midcon 2025",
      },
      {
        src: "images/zone-events/midcon3.png",
        alt: "Zonefare Midcon 2025",
        text: "Zonefare Midcon 2025",
      },
      {
        src: "images/zone-events/midcon2.png",
        alt: "Zonefare Midcon 2025",
        text: "Zonefare Midcon 2025",
      },
     {
        src: "images/zone-events/midcon1.png",
        alt: "Zonefare Midcon 2025",
        text: "Zonefare Midcon 2025",
      },
      {
        src: "images/eventimages/LOST.png",
        alt: "LOST",
        text: "LOTS",
      },
      {
        src: "images/eventimages/PA.png",
        alt: "Presidential Academy",
        text: "Presidential Academy",
      },
      {
        src: "images/zone-events/flag walkthone.webp",
        alt: "Mission in Motion – Flag Walkathon",
        text: "Mission in Motion – Flag Walkathon-2025",
      },
      {
        src: "images/zone-events/national president visit.png",
        alt: "National President Visit",
        text: "National President Visit-2025",
      },
    ],
    nationalevents: [
      {
        src: "images/eventimages/nal5.png",
        alt: "NALANDA 2025",
        text: "NALANDA 2025",
      },
        {
        src: "images/eventimages/nal3.png",
        alt: "NALANDA 2025",
        text: "NALANDA 2025",
      },
       {
        src: "images/eventimages/nal4.png",
        alt: "NALANDA 2025",
        text: "NALANDA 2025",
      },
      {
        src: "images/eventimages/nal2.png",
        alt: "NALANDA 2025",
        text: "NALANDA 2025",
      },
      {
        src: "images/eventimages/nal1.png",
        alt: "NALANDA 2025",
        text: "NALANDA 2025",
      },
      {
        src: "images/eventimages/PA.png",
        alt: "Presidential Academy",
        text: "Presidential Academy-2025",
      },
    ],
    zoneevents: [
      {
        src: "images/zone-events/pal3.png",
        alt: "Parliamentarian 2025",
        text: "Parliamentarian 2025",
      },
      {
        src: "images/zone-events/pal2.png",
        alt: "Parliamentarian 2025",
        text: "Parliamentarian 2025",
      },
      {
        src: "images/zone-events/pal1.png",
        alt: "Parliamentarian 2025",
        text: "Parliamentarian 2025",
      },
      {
        src: "images/zone-events/rr3.png",
        alt: "Review 2 React 2025",
        text: "Review 2 React 2025",
      },
      {
        src: "images/zone-events/rr2.png",
        alt: "Review 2 React 2025",
        text: "Review 2 React 2025",
      },
      {
        src: "images/zone-events/rr1.png",
        alt: "Review 2 React 2025",
        text: "Review 2 React 2025",
      },
      {
        src: "images/zone-events/ztws3.png",
        alt: "ZTWS 2025",
        text: "ZTWS 2025",
      },
      {
        src: "images/zone-events/ztws1.png",
        alt: "ZTWS 2025",
        text: "ZTWS 2025",
      },
      {
        src: "images/zone-events/ztws2.png",
        alt: "ZTWS 2025",
        text: "ZTWS 2025",
      },
       {
        src: "images/zone-events/midcon4.png",
        alt: "Zonefare Midcon 2025",
        text: "Zonefare Midcon 2025",
      },
         {
        src: "images/zone-events/midcon3.png",
        alt: "Zonefare Midcon 2025",
        text: "Zonefare Midcon 2025",
      },
      {
        src: "images/zone-events/midcon2.png",
        alt: "Zonefare Midcon 2025",
        text: "Zonefare Midcon 2025",
      },
       {
        src: "images/zone-events/midcon1.png",
        alt: "Zonefare Midcon 2025",
        text: "Zonefare Midcon 2025",
      },
      {
        src: "images/eventimages/LOST.png",
        alt: "LOST",
        text: "LOTS-2025",
      },
      {
        src: "images/zone-events/flag walkthone.webp",
        alt: "Mission in Motion – Flag Walkathon",
        text: "Mission in Motion – Flag Walkathon-2025",
      },
      {
        src: "images/zone-events/national president visit.png",
        alt: "National President Visit",
        text: "National President Visit-2025",
      },
    ],
  };

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const toggleModal = () => setModal(!modal);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    toggleModal();
  };

  return (
    <>
      {/* <!--Page Title--> */}
      <section
        class="page-title"
        style={{ backgroundImage: "url(images/background/12.jpg)" }}
      >
        <div class="auto-container">
          <div class="row clearfix">
            {/* <!--Title --> */}
            <div class="title-column col-lg-6 col-md-12 col-sm-12">
              <h1>Events</h1>
            </div>
            {/* <!--Bread Crumb --> */}
            <div class="breadcrumb-column col-lg-6 col-md-12 col-sm-12">
              <ul class="bread-crumb clearfix">
                <li>
                  <a href="/">
                    <span class="icon fas fa-home"></span> Home
                  </a>
                </li>
                <li class="active">
                  <span class="icon fas fa-arrow-alt-circle-right"></span>{" "}
                  Events
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!--End Page Title--> */}
      <br />
      <div className="container">
        <Nav tabs className="justify-content-center">
          <NavItem>
            <NavLink
              className={activeTab === "all" ? "active" : ""}
              onClick={() => toggleTab("all")}
            >
              <strong>All</strong>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "nationalevents" ? "active" : ""}
              onClick={() => toggleTab("nationalevents")}
            >
              <strong>National Events</strong>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "zoneevents" ? "active" : ""}
              onClick={() => toggleTab("zoneevents")}
            >
              <strong>Zone Events</strong>
            </NavLink>
          </NavItem>
        </Nav>
        <br />
        <TabContent activeTab={activeTab}>
          {Object.keys(images).map((tab) => (
            <TabPane tabId={tab} key={tab}>
              <div className="row">
                {images[tab].map((image, index) => (
                  <div className="col-md-4 mb-4" key={index}>
                    <Card
                      className="position-relative"
                      onClick={() => handleImageClick(image)}
                    >
                      <CardImg
                        top
                        src={image.src}
                        alt={image.alt}
                        style={{ cursor: "pointer" }}
                      />
                      <div className="zoom-icon">
                        <FaSearchPlus />
                      </div>
                      <CardBody className="text-center">
                        <CardTitle>{image.text}</CardTitle>
                      </CardBody>
                    </Card>
                  </div>
                ))}
              </div>
            </TabPane>
          ))}
        </TabContent>

        {/* Modal for displaying the zoomed image */}
        <Modal
          isOpen={modal}
          toggle={toggleModal}
          centered
          className="modal-lg"
        >
          <ModalHeader toggle={toggleModal} className="border-0">
            {/* Only show dismiss icon, you can customize this further */}
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={toggleModal}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </ModalHeader>
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="img-fluid w-100"
            />
          )}
        </Modal>
      </div>
    </>
  );
};

export default ImageTabs;
