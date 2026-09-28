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
import "../Events/EventImageComponent.css"; // Import custom CSS for hover effect
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
    "Join JCI Nagpur Fortune to empower youth and create positive change in your community",
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
  <title> JCI Nagpur Fortune Events and Activities</title>
  <meta
    name="description"
    content="Explore our gallery showcasing JCI Nagpur Fortune events, community service activities, and youth leadership initiatives. Witness the impact we create together!."
  />
  <meta
    name="keywords"
    content="JCI India, youth empowerment, leadership, community service,JCI Nagpur Fortune,Nagpur,developmet,growth,Non-profit Organization,Maharashtra,India,Best Organization in Nagpur,Fortune,sitaburdi"
  />
  <link rel="canonical" href="http://www.jcinagpurfortune.in/gallery" />
</Helmet>;

const ImageTabs = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [modal, setModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const location = useLocation();
  useEffect(() => {
    window.gtag("config", "G-XQGMYG40J6", {
      page_path: location.pathname,
    });
  }, [location]);

  const images = {
    all: [
      // first
      {
        src: "images/eventimages/2026/Day 7 ENP (9 July)/Day 7 ENP 1.webp",
        alt: "Day 7 | Empowering Nagpur Police Training 2026",
        text: "Day 7 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 7 ENP (9 July)/Day 7 ENP 2.webp",
        alt: "Day 7 | Empowering Nagpur Police Training 2026",
        text: "Day 7 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 7 ENP (9 July)/Day 7 ENP 3.webp",
        alt: "Day 7 | Empowering Nagpur Police Training 2026",
        text: "Day 7 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 6 ENP (7 July)/Day 6 ENP 1.webp",
        alt: "Day 6 | Empowering Nagpur Police Training 2026",
        text: "Day 6 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 6 ENP (7 July)/Day 6 ENP 2.webp",
        alt: "Day 6 | Empowering Nagpur Police Training 2026",
        text: "Day 6 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 6 ENP (7 July)/Day 6 ENP 3.webp",
        alt: "Day 6 | Empowering Nagpur Police Training 2026",
        text: "Day 6 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/International Collaboration 2026/IC1 2026.webp",
        alt: "International Collaboration 2026",
        text: "International collaboration 2026 with JCI Philippines and JCI Bacolod ",
      },
      {
        src: "images/eventimages/2026/International Collaboration 2026/IC2 2026.webp",
        alt: "International Collaboration 2026",
        text: "International collaboration 2026 with JCI Philippines and JCI Bacolod",
      },
      {
        src: "images/eventimages/2026/International Collaboration 2026/IC3 2026.webp",
        alt: "International Collaboration 2026",
        text: "International collaboration 2026 with JCI Philippines and JCI Bacolod",
      },
      {
        src: "images/eventimages/2026/Day 5 ENP (2 July)/Day 5 ENP 1.webp",
        alt: "Day 5 | Empowering Nagpur Police Training 2026",
        text: "Day 5 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 5 ENP (2 July)/Day 5 ENP 2.webp",
        alt: "Day 5 | Empowering Nagpur Police Training 2026",
        text: "Day 5 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 5 ENP (2 July)/Day 5 ENP 3.webp",
        alt: "Day 5 | Empowering Nagpur Police Training 2026",
        text: "Day 5 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 4 ENP (30 June)/Day 4 ENP 1.webp",
        alt: "Day 4 | Empowering Nagpur Police Training 2026",
        text: "Day 4 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 4 ENP (30 June)/Day 4 ENP 2.webp",
        alt: "Day 4 | Empowering Nagpur Police Training 2026",
        text: "Day 4 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 4 ENP (30 June)/Day 4 ENP 3.webp",
        alt: "Day 4 | Empowering Nagpur Police Training 2026",
        text: "Day 4 | Empowering Nagpur Police Training 2026",
      },
       {
        src: "images/eventimages/2026/EPS Junior JCs (28 June)/EPS Junior JCs 1.webp",
        alt: "EPS Junior JCs Training 2026",
        text: "EPS Junior JCs Training 2026",
      },
      {
        src: "images/eventimages/2026/EPS Junior JCs (28 June)/EPS Junior JCs 2.webp",
        alt: "EPS Junior JCs Training 2026",
        text: "EPS Junior JCs Training 2026",
      },
      {
        src: "images/eventimages/2026/EPS Junior JCs (28 June)/EPS Junior JCs 3.webp",
        alt: "EPS Junior JCs Training 2026",
        text: "EPS Junior JCs Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 3 ENP (25 June)/Day 3 ENP 1.webp",
        alt: "Day 3 | Empowering Nagpur Police Training 2026",
        text: "Day 3 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 3 ENP (25 June)/Day 3 ENP 2.webp",
        alt: "Day 3 | Empowering Nagpur Police Training 2026",
        text: "Day 3 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 3 ENP (25 June)/Day 3 ENP 3.webp",
        alt: "Day 3 | Empowering Nagpur Police Training 2026",
        text: "Day 3 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 2 ENP (23 June)/Day 2 ENP 1.webp",
        alt: "Day 2 | Empowering Nagpur Police Training 2026",
        text: "Day 2 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 2 ENP (23 June)/Day 2 ENP 2.webp",
        alt: "Day 2 | Empowering Nagpur Police Training 2026",
        text: "Day 2 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 2 ENP (23 June)/Day 2 ENP 3.webp",
        alt: "Day 2 | Empowering Nagpur Police Training 2026",
        text: "Day 2 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 1 ENP (20 June)/Day 1 ENP 1.webp",
        alt: "Day 1 | Empowering Nagpur Police Training 2026",
        text: "Day 1 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 1 ENP (20 June)/Day 1 ENP 2.webp",
        alt: "Day 1 | Empowering Nagpur Police Training 2026",
        text: "Day 1 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 1 ENP (20 June)/Day 1 ENP 3.webp",
        alt: "Day 1 | Empowering Nagpur Police Training 2026",
        text: "Day 1 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Ignite the Leader Within (14 June)/Ignite the Leader Within 1.webp",
        alt: "Ignite the Leader Within Training 2026",
        text: "Ignite the Leader Within Training 2026",
      },
       {
        src: "images/eventimages/2026/Ignite the Leader Within (14 June)/Ignite the Leader Within 2.webp",
        alt: "Ignite the Leader Within Training 2026",
        text: "Ignite the Leader Within Training 2026",
      },
       {
        src: "images/eventimages/2026/Ignite the Leader Within (14 June)/Ignite the Leader Within 3.webp",
        alt: "Ignite the Leader Within Training 2026",
        text: "Ignite the Leader Within Training 2026",
      },
      {
        src: "images/eventimages/2026/Business Training (14 June)/Business Training 1.webp",
        alt: "Business Training 2026",
        text: "Business Training 2026",
      },
      {
        src: "images/eventimages/2026/Business Training (14 June)/Business Training 2.webp",
        alt: "Business Training 2026",
        text: "Business Training 2026",
      },
      {
        src: "images/eventimages/2026/Business Training (14 June)/Business Training 3.webp",
        alt: "Business Training 2026",
        text: "Business Training 2026",
      },
      {
        src: "images/eventimages/2026/CAPP (13 June)/CAPP 1.webp",
        alt: "CAPP Training 2026",
        text: "CAPP Training 2026",
      },
       {
        src: "images/eventimages/2026/CAPP (13 June)/CAPP 2.webp",
        alt: "CAPP Training 2026",
        text: "CAPP Training 2026",
      },
       {
        src: "images/eventimages/2026/CAPP (13 June)/CAPP 3.webp",
        alt: "CAPP Training 2026",
        text: "CAPP Training 2026",
      },
      {
        src: "images/eventimages/2026/Wheat & Clothes Donation (6 June)/Wheat & Clothes Donation 1.webp",
        alt: "Wheat & Clothes Donation Drive 2026",
        text: "Wheat & Clothes Donation Drive 2026",
      },
      {
        src: "images/eventimages/2026/Wheat & Clothes Donation (6 June)/Wheat & Clothes Donation 2.webp",
        alt: "Wheat & Clothes Donation Drive 2026",
        text: "Wheat & Clothes Donation Drive 2026",
      },
      {
        src: "images/eventimages/2026/Wheat & Clothes Donation (6 June)/Wheat & Clothes Donation 3.webp",
        alt: "Wheat & Clothes Donation Drive 2026",
        text: "Wheat & Clothes Donation Drive 2026",
      },
      {
        src: "images/eventimages/2026/Business Ka GPS (May 24)/Business Ka GPS 1.webp",
        alt: "Business Ka GPS Training 2026",
        text: "Business Ka GPS Training 2026",
      },
      {
        src: "images/eventimages/2026/Business Ka GPS (May 24)/Business Ka GPS 2.webp",
        alt: "Business Ka GPS Training 2026",
        text: "Business Ka GPS Training 2026",
      },
      {
        src: "images/eventimages/2026/Business Ka GPS (May 24)/Business Ka GPS 3.webp",
        alt: "Business Ka GPS Training 2026",
        text: "Business Ka GPS Training 2026",
      },
      {
        src: "images/eventimages/2026/NLP (May 23)/NLP1.webp",
        alt: "NLP Training 2026",
        text: "NLP Training 2026",
      },
      {
        src: "images/eventimages/2026/NLP (May 23)/NLP2.webp",
        alt: "NLP Training 2026",
        text: "NLP Training 2026",
      },
      {
        src: "images/eventimages/2026/NLP (May 23)/NLP3.webp",
        alt: "NLP Training 2026",
        text: "NLP Training 2026",
      },
       {
        src: "images/eventimages/2026/new1.webp",
        alt: "Bussines Training 2026",
        text: "Bussines Training 2026",
      },
      {
        src: "images/eventimages/2026/new2.webp",
        alt: "Bussines Training 2026",
        text: "Bussines Training 2026",
      },
      {
        src: "images/eventimages/2026/new.webp",
        alt: "Bussines Training 2026",
        text: "Bussines Training 2026",
      },

       {
        src: "images/eventimages/2026/ambedkarjayanti2.webp",
        alt: "Dr.B.R. Ambedkar Jayanti Celebration 2026",
        text: "Dr.B.R. Ambedkar Jayanti Celebration 2026",
      },
      {
        src: "images/eventimages/2026/ambedkarjayati1.webp",
        alt: "Dr.B.R. Ambedkar Jayanti Celebration 2026",
        text: "Dr.B.R. Ambedkar Jayanti Celebration 2026",
      },
       {
        src: "images/eventimages/2026/eps03.webp",
        alt: "EPS 2.O 2026",
        text: "EPS 2.O 2026",
      },
      {
        src: "images/eventimages/2026/eps02.webp",
        alt: "EPS 2.O 2026",
        text: "EPS 2.O 2026",
      },
        {
        src: "images/eventimages/2026/eps01.webp",
        alt: "EPS 2.O 2026",
        text: "EPS 2.O 2026",
      },
      {
        src: "images/eventimages/2026/buss3.webp",
        alt: "Bussiness Network Meetup",
        text: "Bussiness Network Meetup",
      },
       {
        src: "images/eventimages/2026/buss2.webp",
        alt: "Bussiness Network Meetup",
        text: "Bussiness Network Meetup",
      },
      {
        src: "images/eventimages/2026/buss1.webp",
        alt: "Bussiness Network Meetup",
        text: "Bussiness Network Meetup",
      },
       {
        src: "images/eventimages/2026/ram1.webp",
        alt: "Ram Navmi Celebration 2026",
        text: "Ram Navmi Celebration 2026",
      },
       {
        src: "images/eventimages/2026/ram2.webp",
        alt: "Ram Navmi Celebration 2026",
        text: "Ram Navmi Celebration 2026",
      },
       {
        src: "images/eventimages/2026/zvp1.webp",
        alt: "1st ZVP Visit 2026",
        text: "1st ZVP Visit 2026",
      },
       {
        src: "images/eventimages/2026/zvp2.webp",
        alt: "1st ZVP Visit 2026",
        text: "1st ZVP Visit 2026",
      },
       {
        src: "images/eventimages/2026/per1.webp",
        alt: "Personality Development Training 2026",
        text: "Personality Development Training 2026",
      },
       {
        src: "images/eventimages/2026/per2.webp",
        alt: "Personality Development Training 2026",
        text: "Personality Development Training 2026",
      },
      {
        src: "images/eventimages/2026/bran1.webp",
        alt: "Personal Branding Training 2026",
        text: "Personal Branding Training 2026",
      },
      {
        src: "images/eventimages/2026/brand2.webp",
        alt: "Personal Branding Training 2026",
        text: "Personal Branding Training 2026",
      },
      {
        src: "images/eventimages/2026/framework1.webp",
        alt: "JCI Action Framework 2026",
        text: "JCI Action Framework 2026",
      },
      {
        src: "images/eventimages/2026/framework2.webp",
        alt: "JCI Action Framework 2026",
        text: "JCI Action Framework 2026",
      },
      {
        src: "images/eventimages/2026/wo1.webp",
        alt: "Women's Day Celebration 2026",
        text: "Women's Day Celebration 2026",
      },
       {
        src: "images/eventimages/2026/eps1.webp",
        alt: "Effective Public Speaking 2026",
        text: "Effective Public Speaking 2026",
      },
      {
        src: "images/eventimages/2026/eps2.webp",
        alt: "Effective Public Speaking 2026",
        text: "Effective Public Speaking 2026",
      },
     {
        src: "images/eventimages/2026/shiv1.webp",
        alt: "Shivaji Jayanti 2026",
        text: "Shivaji Jayanti 2026",
      },
       {
        src: "images/eventimages/2026/shiv2.webp",
        alt: "Shivaji Jayanti 2026",
        text: "Shivaji Jayanti 2026",
      },
       {
        src: "images/eventimages/2026/prashantsir2.webp",
        alt: "Empowering Youth Training 2026 - Life Skills",
        text: "Empowering Youth Training 2026 - Life Skills",
      },
       {
        src: "images/eventimages/2026/prashantsir1.webp",
        alt: "Empowering Youth Training 2026 - Life Skills",
        text: "Empowering Youth Training 2026 - Life Skills",
      },
       {
        src: "images/eventimages/2026/pallavimam2.webp",
        alt: "Empowering Youth Training 2026 - Communication",
        text: "Empowering Youth Training 2026 - Communication",
      },
      {
        src: "images/eventimages/2026/pallavimam1.webp",
        alt: "Empowering Youth Training 2026 - Communication",
        text: "Empowering Youth Training 2026 - Communication",
      },
      {
        src: "images/eventimages/2026/dilipsir2.webp",
        alt: "Empowering Youth Training 2026 - Leadership",
        text: "Empowering Youth Training 2026 - Leadership",
      },
      {
        src: "images/eventimages/2026/dilipsir1.webp",
        alt: "Empowering Youth Training 2026 - Leadership",
        text: "Empowering Youth Training 2026 - Leadership",
      },
      {
        src: "images/eventimages/2026/suvitsir2.webp",
        alt: "Empowering Youth Training 2026 - Emotions Management",
        text: "Empowering Youth Training 2026 - Emotions Management",
      },
       {
        src: "images/eventimages/2026/suvitsir1.webp",
        alt: "Empowering Youth Training 2026 - Emotions Management",
        text: "Empowering Youth Training 2026 - Emotions Management",
      },
      {
        src: "images/eventimages/2026/2.webp",
        alt: "PIOC 2026",
        text: "PIOC 2026",
      },
     {
        src: "images/eventimages/2026/1.webp",
        alt: "PIOC 2026",
        text: "PIOC 2026",
      },
      {
        src: "images/gallery/republicday2.webp",
        alt: "Republic Day Celebration 2026",
        text: "Republic Day Celebration 2026",
      },
      {
        src: "images/gallery/republicday1.webp",
        alt: "Republic Day Celebration 2026",
        text: "Republic Day Celebration 2026",
      },
        {
        src: "images/gallery/Clothes Donation 2026/5.png",
        alt: "Clothes Donation Drive 2026",
        text: "Clothes Donation Drive 2026",
      },
      {
        src: "images/gallery/Clothes Donation 2026/4.png",
        alt: "Clothes Donation Drive 2026",
        text: "Clothes Donation Drive 2026",
      },
      {
        src: "images/gallery/Clothes Donation 2026/3.png",
        alt: "Clothes Donation Drive 2026",
        text: "Clothes Donation Drive 2026",
      },
     {
        src: "images/gallery/Clothes Donation 2026/2.png",
        alt: "Clothes Donation Drive 2026",
        text: "Clothes Donation Drive 2026",
      },
      {
        src: "images/eventimages/youth3.png",
        alt: "Empowering Youth Training",
        text: "Empowering Youth Training 2025",
      },
      {
        src: "images/eventimages/youth2.png",
        alt: "Empowering Youth Training", 
        text: "Empowering Youth Training 2025",
      },
       {
        src: "images/eventimages/youth1.png",
        alt: "Empowering Youth Training",
        text: "Empowering Youth Training 2025",
      },
      {
        src: "images/eventimages/mange2.png",
        alt: "No More Drama (Conflict Management) Training",
        text: "No More Drama (Conflict Management) Training 2025",
      },
       {
        src: "images/eventimages/mange1.png",
        alt: "No More Drama (Conflict Management) Training",
        text: "No More Drama (Conflict Management) Training 2025",
      },
      {
        src: "images/eventimages/work3.png",
        alt: "The Future of Work and Workforce Transformation Training",
        text: "The Future of Work and Workforce Transformation Training 2025",
      },
      {
        src: "images/eventimages/work2.png",
        alt: "The Future of Work and Workforce Transformation Training",
        text: "The Future of Work and Workforce Transformation Training 2025",
      },
      {
        src: "images/eventimages/work1.png",
        alt: "The Future of Work and Workforce Transformation Training",
        text: "The Future of Work and Workforce Transformation Training 2025",
      },
       {
        src: "images/eventimages/Int2.png",
        alt: "Interpersonal Relationship Training",
        text: "Interpersonal Relationship Training 2025",
      },
      {
        src: "images/eventimages/Int1.png",
        alt: "Interpersonal Relationship Training",
        text: "Interpersonal Relationship Training 2025",
      },
      {
        src: "images/eventimages/emp2.png",
        alt: "Presenting Empowering Youth Topic Communication skills Training",
        text: "Presenting Empowering Youth Topic Communication skills Training 2025",
      },
       {
        src: "images/eventimages/emp1.png",
        alt: "Presenting Empowering Youth Topic Communication skills Training",
        text: "Presenting Empowering Youth Topic Communication skills Training 2025",
      },
       {
        src: "images/gallery/Independence Day/ind4.png",
        alt: "Independence Day Celebration",
        text: "Independence Day Celebration 2025",
      },
       {
        src: "images/gallery/Independence Day/ind3.png",
        alt: "Independence Day Celebration",
        text: "Independence Day Celebration 2025",
      },
      {
        src: "images/gallery/Independence Day/ind2.png",
        alt: "Independence Day Celebration",
        text: "Independence Day Celebration 2025",
      },
      {
        src: "images/gallery/Independence Day/ind1.png",
        alt: "Independence Day Celebration",
        text: "Independence Day Celebration 2025",
      },
     {
        src: "images/eventimages/stra2.png",
        alt: "Strategic Decision Making Training",
        text: "Strategic Decision Making Training 2025",
      },
      {
        src: "images/eventimages/stra1.png",
        alt: "Strategic Decision Making Training",
        text: "Strategic Decision Making Training 2025",
      },
      {
        src: "images/eventimages/suit2.png",
        alt: "Suit Up, skill up Training",
        text: "Suit Up, Skill Up Training 2025",
      },
      {
        src: "images/eventimages/suit1.png",
        alt: "Suit Up, skill up Training",
        text: "Suit Up, Skill Up Training 2025",
      },
      {
        src: "images/gallery/Tree Plantation/tree4.png ",
        alt: "Tree Plantation",
        text: "Tree Plantation 2025",
      },
      {
        src: "images/gallery/Tree Plantation/tree3.png ",
        alt: "Tree Plantation",
        text: "Tree Plantation 2025",
      },
      {
        src: "images/gallery/Tree Plantation/tree2.png ",
        alt: "Tree Plantation",
        text: "Tree Plantation 2025",
      },
       {
        src: "images/gallery/Tree Plantation/tree1.png ",
        alt: "Tree Plantation",
        text: "Tree Plantation 2025",
      },
      {
        src: "images/eventimages/shiftgeartraining1.png",
        alt: "Shift your Gear Training",
        text: "Shift your Gear Training 2025",
      },
      {
        src: "images/eventimages/shiftgeartraining2.png",
        alt: "Shift your Gear Training",
        text: "Shift your Gear Training 2025",
      },
       {
        src: "images/eventimages/communicationskillday72.png",
        alt: "Communication skills training",
        text: "Communication Skills Training 2025 Day7",
      },
      {
        src: "images/eventimages/communicationskillday71.png",
        alt: "Communication skills training",
        text: "Communication Skills Training 2025 Day7",
      },
      {
        src: "images/eventimages/criticalthinkday62.png",
        alt: "Critical Thinking Training",
        text: "Critical Thinking Training 2025 Day6",
      },
      {
        src: "images/eventimages/criticalthinkday61.png",
        alt: "Critical Thinking Training",
        text: "Critical Thinking Training 2025 Day6",
      },
       {
        src: "images/gallery/Yoga Day/yogaday1.png ",
        alt: "Yoga Day Celebration",
        text: "Yoga Day Celebration 2025",
      },
      {
        src: "images/gallery/Yoga Day/yogaday2.png ",
        alt: "Yoga Day Celebration",
        text: "Yoga Day Celebration 2025",
      },
      //  {
      //   src: "images/eventimages/leadershipteambuildday52.png",
      //   alt: "Leadership & Team Building Training",
      //   text: "Leadership & Team Building Training 2025 Day5",
      // },
      //  {
      //   src: "images/eventimages/leadershipteambuildday51.png",
      //   alt: "Leadership & Team Building Training",
      //   text: "Leadership & Team Building Training 2025 Day5",
      // },
      // {
      //   src: "images/eventimages/interviewcareerskiillday42.png",
      //   alt: "Interview & Career Skills Training",
      //   text: "Interview & Career Skills Training 2025 Day4",
      // },
      // {
      //   src: "images/eventimages/interviewcareerskiillday41.png",
      //   alt: "Interview & Career Skills Training",
      //   text: "Interview & Career Skills Training 2025 Day4",
      // },
      //   {
      //   src: "images/eventimages/Personalitydevelopementday3.png",
      //   alt: "Personality Development Training",
      //   text: "Personality Development Training 2025 Day3",
      // },
      //  {
      //   src: "images/eventimages/personalitydevelopmentday31.png",
      //   alt: "Personality Development Training",
      //   text: "Personality Development Training 2025 Day3",
      // },
      //  {
      //   src: "images/eventimages/interpersonalskillsday2.png",
      //   alt: "Interpersonal Skills Training",
      //   text: "Interpersonal Skills Training 2025 Day2",
      // },
      //    {
      //   src: "images/eventimages/interpersonalskillsday21.png",
      //   alt: "Interpersonal Skills Training",
      //   text: "Interpersonal Skills Training 2025 Day2",
      //  },
      //  {
      //   src: "images/eventimages/timemanagementday1.png",
      //   alt: "Time & Stress Management Training",
      //   text: "Time & Stress Management Training 2025 Day1",
      // },
      // {
      //   src: "images/gallery/Beyond Words Elevating Corporate Communications/Beyond Words Elevating Corporate Communications.png",
      //   alt: "Beyond Words Elevating Corporate Communications -2025",
      //   text: "Beyond Words Elevating Corporate Communications -2025",
      // },
      // {
      //   src: "images/gallery/Values & ethics -2025/Values & ethics -2025 (1).png",
      //   alt: "Values & ethics -2025",
      //   text: "Values & ethics -2025",
      // },
      // {
      //   src: "images/gallery/Clothes and Fruits Donation Drive/Clothes and Fruits Donation Drive.png",
      //   alt: "Clothes and Fruits Donation Drive",
      //   text: "Clothes and Fruits Donation Drive 2025",
      // },
      // {
      //   src: "images/gallery/Salute the Silent Stars/Untitled design (2).png",
      //   alt: "Salute the Silent Stars",
      //   text: "Salute the Silent Stars 2025",
      // },
      // {
      //   src: "images/gallery/Salute the Silent Stars/Untitled design (1).png",
      //   alt: "Salute the Silent Stars",
      //   text: "Salute the Silent Stars 2025",
      // },
      // {
      //   src: "images/gallery/stress management Training/Untitled design (3).png",
      //   alt: "Stress Management Training",
      //   text: "Stress Management Training 2025",
      // },
      // {
      //   src: "images/gallery/stress management Training/Untitled design (2).png",
      //   alt: "Stress Management Training",
      //   text: "Stress Management Training 2025",
      // },
      // {
      //   src: "images/eventimages/workloadbalance1.png",
      //   alt: "Work Life Balance",
      //   text: "Work Life Balance Training 2025",
      // },
      // {
      //   src: "images/eventimages/workloadbalance.png",
      //   alt: "Work Life Balance",
      //   text: "Work Life Balance Training 2025",
      // },
      // {
      //   src: "images/eventimages/startup1.png",
      //   alt: "Dr. Babasaheb Ambedkar Jayanti Celebration",
      //   text: "Sucessful Startup Training 2025",
      // },
      // {
      //   src: "images/eventimages/startup.png",
      //   alt: "Dr. Babasaheb Ambedkar Jayanti Celebration",
      //   text: "Sucessful Startup Training 2025",
      // },
      // {
      //   src: "images/eventimages/Drbabasahebjayanti1.png",
      //   alt: "Dr. Babasaheb Ambedkar Jayanti Celebration",
      //   text: "Food distribution on Dr. Babasaheb Ambedkar Jayanti 2025",
      // },
      // {
      //   src: "images/eventimages/Drbabasahebjyanti.png",
      //   alt: "Dr. Babasaheb Ambedkar Jayanti Celebration",
      //   text: "Food distribution on Dr. Babasaheb Ambedkar Jayanti 2025",
      // },
      // {
      //   src: "images/eventimages/eyecheckup2.png",
      //   alt: "Eye Checkup Camp",
      //   text: "Eye Check-Up Camp 2025",
      // },
      // {
      //   src: "images/eventimages/eyecheckup1.png",
      //   alt: "Eye Checkup Camp",
      //   text: "Eye Check-Up Camp 2025",
      // },
      // {
      //   src: "images/eventimages/eyecheckup.png",
      //   alt: "Eye Checkup Camp",
      //   text: "Eye Check-Up Camp 2025",
      // },
      // {
      //   src: "images/eventimages/ramnavmi1.png",
      //   alt: "Shree Ram Navam",
      //   text: "Food distribution on Shree Ram Navami 2025",
      // },
      // {
      //   src: "images/eventimages/ramnavmi.png",
      //   alt: "Shree Ram Navam",
      //   text: "Food distribution on Shree Ram Navami 2025",
      // },
      // {
      //   src: "images/eventimages/Eid1.png",
      //   alt: "Eid Celebration",
      //   text: "Eid Celebration 2025",
      // },
      // {
      //   src: "images/eventimages/Eid.png",
      //   alt: "Eid Celebration",
      //   text: "Eid Celebration 2025",
      // },
      // {
      //   src: "images/eventimages/DentalCamp1.png",
      //   alt: "Mega Dental CheckUp Camp",
      //   text: "Mega Dental CheckUp Camp",
      // },
      // {
      //   src: "images/eventimages/DentalCamp1.png",
      //   alt: "Mega Dental CheckUp Camp",
      //   text: "Mega Dental CheckUp Camp",
      // },
      // {
      //   src: "images/eventimages/DentalCamp.png",
      //   alt: "Mega Dental CheckUp Camp",
      //   text: "Mega Dental CheckUp Camp",
      // },
      // {
      //   src: "images/eventimages/LDMT1.webp",
      //   alt: "LO Development Training",
      //   text: "LO Development Training",
      // },
      // {
      //   src: "images/eventimages/LDMT.webp",
      //   alt: "LO Development Training",
      //   text: "LO Development Training",
      // },
      // {
      //   src: "images/eventimages/Womens_day2.png",
      //   alt: "Womens Day",
      //   text: "Womens Day Celebrations 2025",
      // },
      // {
      //   src: "images/eventimages/Womens_day1.png",
      //   alt: "Womens Day",
      //   text: "Womens Day Celebrations 2025",
      // },
      // {
      //   src: "images/eventimages/Womens_day.png",
      //   alt: "Womens Day",
      //   text: "Womens Day Celebrations 2025",
      // },
      // {
      //   src: "images/eventimages/mental_Health1.png",
      //   alt: "Mental Health Awareness",
      //   text: "Mental Health Awareness",
      // },
      // {
      //   src: "images/eventimages/mental_Health.png",
      //   alt: "Mental Health Awareness",
      //   text: "Mental Health Awareness",
      // },
      // {
      //   src: "images/eventimages/Innovation_MadePratical1.png",
      //   alt: "Innovation made pratical",
      //   text: "Innovation Made Practical",
      // },
      // {
      //   src: "images/eventimages/Innovation_MadePratical.png",
      //   alt: "Innovation made pratical",
      //   text: "Innovation Made Practical",
      // },
      // {
      //   src: "images/eventimages/AI_Tools1.png",
      //   alt: "AI Training",
      //   text: "AI for Workplace Success",
      // },
      // {
      //   src: "images/eventimages/AI_Tools.png",
      //   alt: "AI Training",
      //   text: "AI for Workplace Success",
      // },
      // {
      //   src: "images/eventimages/international2.webp",
      //   alt: "International Collaboration",
      //   text: "International collaboration with JCI Philippines and JCI Malaysia",
      // },
      // // {
      // //   src: "images/eventimages/international2.webp",
      // //   alt: "International Collaboration",
      // //   text: "International collaboration with JCI Philippines and JCI Malaysia",
      // // },
      // {
      //   src: "images/eventimages/international.webp",
      //   alt: "International Collaboration",
      //   text: "International collaboration with JCI Philippines and JCI Malaysia",
      // },
      // {
      //   src: "images/eventimages/leader11.png",
      //   alt: "Leader Training",
      //   text: "Leader tranning Day6 2025",
      // },
      // {
      //   src: "images/eventimages/leader10.png",
      //   alt: "Leader Training",
      //   text: "Leader tranning Day6 2025",
      // },
      // {
      //   src: "images/eventimages/leader9.png",
      //   alt: "Leader Training",
      //   text: "Leader tranning Day5 2025",
      // },
      // {
      //   src: "images/eventimages/leader8.png",
      //   alt: "Leader Training",
      //   text: "Leader tranning Day5 2025",
      // },
      // {
      //   src: "images/eventimages/leader7.png",
      //   alt: "Leader Training",
      //   text: "Leader tranning Day4 2025",
      // },
      // {
      //   src: "images/eventimages/leader6.png",
      //   alt: "Leader Training",
      //   text: "Leader tranning Day4 2025",
      // },
      // {
      //   src: "images/eventimages/leader5.png",
      //   alt: "Leader Training",
      //   text: "Leader tranning Day3 2025",
      // },
      // {
      //   src: "images/eventimages/leader4.png",
      //   alt: "Leader Training",
      //   text: "Leader tranning Day3 2025",
      // },
      // {
      //   src: "images/eventimages/leader3.png",
      //   alt: "Leader Training",
      //   text: "Leader tranning Day2 2025",
      // },
      // {
      //   src: "images/eventimages/leader2.png",
      //   alt: "Leader Training",
      //   text: "Leader tranning Day2 2025",
      // },
      // {
      //   src: "images/eventimages/leader1.png",
      //   alt: "Leader Training",
      //   text: "Leader tranning Day1 2025",
      // },
      // {
      //   src: "images/eventimages/leader.png",
      //   alt: "Leader Training",
      //   text: "Leader tranning Day1 2025",
      // },
      // {
      //   src: "images/eventimages/OBTpullactivity.png",
      //   alt: "Outbound Training",
      //   text: "Outbound Training(OBT) Activity 2025",
      // },
      // {
      //   src: "images/eventimages/OBTgame.png",
      //   alt: "Outbound Training",
      //   text: "Outbound Training(OBT) Activity 2025",
      // },
      // {
      //   src: "images/eventimages/OBT1.png",
      //   alt: "Outbound Training",
      //   text: "Outbound Training(OBT) 2025",
      // },
      // {
      //   src: "images/eventimages/OBT3.png",
      //   alt: "Outbound Training",
      //   text: "Outbound Training(OBT) 2025",
      // },
      // {
      //   src: "images/eventimages/valentinesday1.png",
      //   alt: "valentines day celebration 2025",
      //   text: "Valentines Day Celebration 2025",
      // },
      // {
      //   src: "images/eventimages/valentinesday.png",
      //   alt: "valentines day celebration 2025",
      //   text: "Valentines Day Celebration 2025",
      // },
      // {
      //   src: "images/eventimages/fooddistribuation1.png",
      //   alt: "Food distribution on Chhatrapati Shivaji Maharaj Jayanti",
      //   text: "Food distribution on Chhatrapati Shivaji Maharaj Jayanti 2025",
      // },
      // {
      //   src: "images/eventimages/fooddistribuation.png",
      //   alt: "Food distribution on Chhatrapati Shivaji Maharaj Jayanti",
      //   text: "Food distribution on Chhatrapati Shivaji Maharaj Jayanti 2025",
      // },
      // {
      //   src: "images/eventimages/shivajimaharajjayanti.png",
      //   alt: "Food distribution on Chhatrapati Shivaji Maharaj Jayanti",
      //   text: "Food distribution on Chhatrapati Shivaji Maharaj Jayanti 2025",
      // },
      // {
      //   src: "images/eventimages/EPS.png",
      //   alt: "EPS Training 2025",
      //   text: "EPS Training 2025",
      // },
      // {
      //   src: "images/eventimages/EPS1.png",
      //   alt: "EPS Training 2025",
      //   text: "EPS Training 2025",
      // },
      // {
      //   src: "images/eventimages/CAPP2.png",
      //   alt: "CAPP Training 2025",
      //   text: "CAPP Training 2025",
      // },
      // {
      //   src: "images/eventimages/PIOC1.png",
      //   alt: "PIOC Training 2025",
      //   text: "PIOC Training 2025",
      // },
      // // {
      // //   src: "images/eventimages/PIOC2.png",
      // //   alt: "PIOC Training 2025",
      // //   text: "PIOC Training 2025",cr
      // // },
      // {
      //   src: "images/eventimages/who.png",
      //   alt: "Who I am in JCI 2025",
      //   text: "Who I am in JCI?",
      // },
      // {
      //   src: "images/eventimages/who1.png",
      //   alt: "Who I am in JCI 2025",
      //   text: "Who I am in JCI?",
      // },
      // {
      //   src: "images/eventimages/who2.png",
      //   alt: "Who I am in JCI 2025",
      //   text: "Who I am in JCI?",
      // },
      // {
      //   src: "images/eventimages/17.webp",
      //   alt: "Be leader ! Make Leaders ! Empower people ",
      //   text: "Be leader ! Make Leaders ! Empower people  ",
      // },
      // {
      //   src: "images/eventimages/16.webp",
      //   alt: "JCI LO Officer Training  Seminar",
      //   text: "JCI LO Officer Training  Seminar",
      // },
      // {
      //   src: "images/eventimages/15.webp",
      //   alt: "AOS Training",
      //   text: "AOS Training",
      // },
      // {
      //   src: "images/eventimages/14.webp",
      //   alt: "JCOM Business Meeting  ",
      //   text: "JCOM Business Meeting         ",
      // },
      // {
      //   src: "images/eventimages/13.webp",
      //   alt: "JC Kohei Oya from JAPAN Multi LO JCI Vice President Visit At Nagpur !",
      //   text: "JC Kohei Oya from JAPAN Multi LO JCI Vice President Visit At Nagpur !",
      // },
      // {
      //   src: "images/eventimages/11.webp",
      //   alt: "JCI Speech Craft 2024",
      //   text: "JCI Speech Craft 2024 ",
      // },
      // {
      //   src: "images/eventimages/12.webp",
      //   alt: "JCI Speech Craft 2024",
      //   text: "JCI Speech Craft 2024 ",
      // },
      // {
      //   src: "images/eventimages/10.webp",
      //   alt: "Nagpur JCOM TABLE 2.0",
      //   text: "Nagpur JCOM TABLE 2.0",
      // },
      // {
      //   src: "images/eventimages/7.webp",
      //   alt: "CAPP Training",
      //   text: "CAPP Training",
      // },
      // {
      //   src: "images/eventimages/8.webp",
      //   alt: "CAPP Training",
      //   text: "CAPP Training         ",
      // },
      // {
      //   src: "images/eventimages/9.webp",
      //   alt: "CAPP Training",
      //   text: "CAPP Training",
      // },
      // {
      //   src: "images/eventimages/22.webp",
      //   alt: "Corporate Training(IPO Individual  Peformance Outcome)",
      //   text: "Corporate Training(IPO Individual  Peformance Outcome) ",
      // },
      // {
      //   src: "images/eventimages/23.webp",
      //   alt: "Corporate Training(Is Your Mind Hijacked)",
      //   text: "Corporate Training(Is Your Mind Hijacked) ",
      // },
      // {
      //   src: "images/eventimages/24.webp",
      //   alt: "Corporate Training(Change begins with me)",
      //   text: "Corporate Training(Change begins with me) ",
      // },
      // {
      //   src: "images/eventimages/20.webp",
      //   alt: "Corporate Training",
      //   text: "Corporate Training",
      // },
      // {
      //   src: "images/eventimages/21.webp",
      //   alt: "Corporate Training",
      //   text: "Corporate Training",
      // },
      // {
      //   src: "images/eventimages/19.webp",
      //   alt: "Yoga Training",
      //   text: "Yoga Training ",
      // },
      // {
      //   src: "images/eventimages/18.webp",
      //   alt: "Blood Donation Camp",
      //   text: "Blood Donation Camp",
      // },
      // {
      //   src: "images/eventimages/6.webp",
      //   alt: "Biz-9 - 2024  Hosted by JCI Raipur Metro Successfully Done",
      //   text: "Biz-9 - 2024  Hosted by JCI Raipur Metro Successfully Done",
      // },
      // {
      //   src: "images/eventimages/5.webp",
      //   alt: "Biz-9 - 2024  Hosted by JCI Raipur Metro Successfully Done",
      //   text: "Biz-9 - 2024  Hosted by JCI Raipur Metro Successfully Done",
      // },
      // {
      //   src: "images/eventimages/4.webp",
      //   alt: "MIDCON 2024",
      //   text: "MIDCON 2024",
      // },
      // {
      //   src: "images/eventimages/2.webp",
      //   alt: "28 & 29 September 2024 JCI Zone 9 Dimond Zonecon 2024 Successfully Done ",
      //   text: "28 & 29 September 2024 JCI Zone 9 Dimond Zonecon 2024 Successfully Done         ",
      // },
      // {
      //   src: "images/eventimages/3.webp",
      //   alt: "28 & 29 September 2024 JCI Zone 9 Dimond Zonecon 2024 Successfully Done ",
      //   text: "28 & 29 September 2024 JCI Zone 9 Dimond Zonecon 2024 Successfully Done !",
      // },
      // {
      //   src: "images/eventimages/1.webp",
      //   alt: "JCI Nagpur Fortune Orientation",
      //   text: "JCI Nagpur Fortune Orientation",
      // },
      // {
      //   src: "images/eventimages/25.webp",
      //   alt: "Effective Public speaking Training Successfully Done By JCI Nagpur Fortune",
      //   text: "Effective Public speaking Training Successfully Done By JCI Nagpur Fortune",
      // },
      // {
      //   src: "images/eventimages/26.webp",
      //   alt: "Training On stress Relief Strategies:Finding Calm In Chaos",
      //   text: "Training On stress Relief Strategies:Finding Calm In Chaos",
      // },
      // {
      //   src: "images/eventimages/30.webp",
      //   alt: "MIDCON 2024",
      //   text: "JCI Nagpur Fortune Installation Ceremony",
      // },
      // {
      //   src: "images/eventimages/31.webp",
      //   alt: "MIDCON 2024",
      //   text: "JCI Nagpur Fortune Installation Ceremony",
      // },
    ],

    training: [
      // fist image
      {
        src: "images/eventimages/2026/Day 7 ENP (9 July)/Day 7 ENP 1.webp",
        alt: "Day 7 | Empowering Nagpur Police Training 2026",
        text: "Day 7 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 7 ENP (9 July)/Day 7 ENP 2.webp",
        alt: "Day 7 | Empowering Nagpur Police Training 2026",
        text: "Day 7 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 7 ENP (9 July)/Day 7 ENP 3.webp",
        alt: "Day 7 | Empowering Nagpur Police Training 2026",
        text: "Day 7 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 6 ENP (7 July)/Day 6 ENP 1.webp",
        alt: "Day 6 | Empowering Nagpur Police Training 2026",
        text: "Day 6 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 6 ENP (7 July)/Day 6 ENP 2.webp",
        alt: "Day 6 | Empowering Nagpur Police Training 2026",
        text: "Day 6 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 6 ENP (7 July)/Day 6 ENP 3.webp",
        alt: "Day 6 | Empowering Nagpur Police Training 2026",
        text: "Day 6 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 5 ENP (2 July)/Day 5 ENP 1.webp",
        alt: "Day 5 | Empowering Nagpur Police Training 2026",
        text: "Day 5 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 5 ENP (2 July)/Day 5 ENP 2.webp",
        alt: "Day 5 | Empowering Nagpur Police Training 2026",
        text: "Day 5 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 5 ENP (2 July)/Day 5 ENP 3.webp",
        alt: "Day 5 | Empowering Nagpur Police Training 2026",
        text: "Day 5 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 4 ENP (30 June)/Day 4 ENP 1.webp",
        alt: "Day 4 | Empowering Nagpur Police Training 2026",
        text: "Day 4 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 4 ENP (30 June)/Day 4 ENP 2.webp",
        alt: "Day 4 | Empowering Nagpur Police Training 2026",
        text: "Day 4 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 4 ENP (30 June)/Day 4 ENP 3.webp",
        alt: "Day 4 | Empowering Nagpur Police Training 2026",
        text: "Day 4 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/EPS Junior JCs (28 June)/EPS Junior JCs 1.webp",
        alt: "EPS Junior JCs Training 2026",
        text: "EPS Junior JCs Training 2026",
      },
      {
        src: "images/eventimages/2026/EPS Junior JCs (28 June)/EPS Junior JCs 2.webp",
        alt: "EPS Junior JCs Training 2026",
        text: "EPS Junior JCs Training 2026",
      },
      {
        src: "images/eventimages/2026/EPS Junior JCs (28 June)/EPS Junior JCs 3.webp",
        alt: "EPS Junior JCs Training 2026",
        text: "EPS Junior JCs Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 3 ENP (25 June)/Day 3 ENP 1.webp",
        alt: "Day 3 | Empowering Nagpur Police Training 2026",
        text: "Day 3 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 3 ENP (25 June)/Day 3 ENP 2.webp",
        alt: "Day 3 | Empowering Nagpur Police Training 2026",
        text: "Day 3 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 3 ENP (25 June)/Day 3 ENP 3.webp",
        alt: "Day 3 | Empowering Nagpur Police Training 2026",
        text: "Day 3 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 2 ENP (23 June)/Day 2 ENP 1.webp",
        alt: "Day 2 | Empowering Nagpur Police Training 2026",
        text: "Day 2 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 2 ENP (23 June)/Day 2 ENP 2.webp",
        alt: "Day 2 | Empowering Nagpur Police Training 2026",
        text: "Day 2 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 2 ENP (23 June)/Day 2 ENP 3.webp",
        alt: "Day 2 | Empowering Nagpur Police Training 2026",
        text: "Day 2 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 1 ENP (20 June)/Day 1 ENP 1.webp",
        alt: "Day 1 | Empowering Nagpur Police Training 2026",
        text: "Day 1 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 1 ENP (20 June)/Day 1 ENP 2.webp",
        alt: "Day 1 | Empowering Nagpur Police Training 2026",
        text: "Day 1 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Day 1 ENP (20 June)/Day 1 ENP 3.webp",
        alt: "Day 1 | Empowering Nagpur Police Training 2026",
        text: "Day 1 | Empowering Nagpur Police Training 2026",
      },
      {
        src: "images/eventimages/2026/Ignite the Leader Within (14 June)/Ignite the Leader Within 1.webp",
        alt: "Ignite the Leader Within Training 2026",
        text: "Ignite the Leader Within Training 2026",
      },
       {
        src: "images/eventimages/2026/Ignite the Leader Within (14 June)/Ignite the Leader Within 2.webp",
        alt: "Ignite the Leader Within Training 2026",
        text: "Ignite the Leader Within Training 2026",
      },
       {
        src: "images/eventimages/2026/Ignite the Leader Within (14 June)/Ignite the Leader Within 3.webp",
        alt: "Ignite the Leader Within Training 2026",
        text: "Ignite the Leader Within Training 2026",
      },
      {
        src: "images/eventimages/2026/Business Training (14 June)/Business Training 1.webp",
        alt: "Business Training 2026",
        text: "Business Training 2026",
      },
      {
        src: "images/eventimages/2026/Business Training (14 June)/Business Training 2.webp",
        alt: "Business Training 2026",
        text: "Business Training 2026",
      },
      {
        src: "images/eventimages/2026/Business Training (14 June)/Business Training 3.webp",
        alt: "Business Training 2026",
        text: "Business Training 2026",
      },
      {
        src: "images/eventimages/2026/CAPP (13 June)/CAPP 1.webp",
        alt: "CAPP Training 2026",
        text: "CAPP Training 2026",
      },
       {
        src: "images/eventimages/2026/CAPP (13 June)/CAPP 2.webp",
        alt: "CAPP Training 2026",
        text: "CAPP Training 2026",
      },
       {
        src: "images/eventimages/2026/CAPP (13 June)/CAPP 3.webp",
        alt: "CAPP Training 2026",
        text: "CAPP Training 2026",
      },
      {
        src: "images/eventimages/2026/Business Ka GPS (May 24)/Business Ka GPS 1.webp",
        alt: "Business Ka GPS Training 2026",
        text: "Business Ka GPS Training 2026",
      },
      {
        src: "images/eventimages/2026/Business Ka GPS (May 24)/Business Ka GPS 2.webp",
        alt: "Business Ka GPS Training 2026",
        text: "Business Ka GPS Training 2026",
      },
      {
        src: "images/eventimages/2026/Business Ka GPS (May 24)/Business Ka GPS 3.webp",
        alt: "Business Ka GPS Training 2026",
        text: "Business Ka GPS Training 2026",
      },
      {
        src: "images/eventimages/2026/NLP (May 23)/NLP1.webp",
        alt: "NLP Training 2026",
        text: "NLP Training 2026",
      },
      {
        src: "images/eventimages/2026/NLP (May 23)/NLP2.webp",
        alt: "NLP Training 2026",
        text: "NLP Training 2026",
      },
      {
        src: "images/eventimages/2026/NLP (May 23)/NLP3.webp",
        alt: "NLP Training 2026",
        text: "NLP Training 2026",
      },
       {
        src: "images/eventimages/2026/new1.webp",
        alt: "Bussines Training 2026",
        text: "Bussines Training 2026",
      },
      {
        src: "images/eventimages/2026/new2.webp",
        alt: "Bussines Training 2026",
        text: "Bussines Training 2026",
      },
      {
        src: "images/eventimages/2026/new.webp",
        alt: "Bussines Training 2026",
        text: "Bussines Training 2026",
      },
      {
        src: "images/eventimages/2026/eps03.webp",
        alt: "EPS 2.O 2026",
        text: "EPS 2.O 2026",
      },
       {
        src: "images/eventimages/2026/eps02.webp",
        alt: "EPS 2.O 2026",
        text: "EPS 2.O 2026",
      },
        {
        src: "images/eventimages/2026/eps01.webp",
        alt: "EPS 2.O 2026",
        text: "EPS 2.O 2026",
      },
       {
        src: "images/eventimages/2026/buss3.webp",
        alt: "Bussiness Network Meetup",
        text: "Bussiness Network Meetup",
      },
      {
        src: "images/eventimages/2026/buss2.webp",
        alt: "Bussiness Network Meetup",
        text: "Bussiness Network Meetup",
      },
      {
        src: "images/eventimages/2026/buss1.webp",
        alt: "Bussiness Network Meetup",
        text: "Bussiness Network Meetup",
      },
      
       {
        src: "images/eventimages/2026/per1.webp",
        alt: "Personality Development Training 2026",
        text: "Personality Development Training 2026",
      },
      {
        src: "images/eventimages/2026/per2.webp",
        alt: "Personality Development Training 2026",
        text: "Personality Development Training 2026",
      },
      {
        src: "images/eventimages/2026/bran1.webp",
        alt: "Personal Branding Training 2026",
        text: "Personal Branding Training 2026",
      },
        {
        src: "images/eventimages/2026/brand2.webp",
        alt: "Personal Branding Training 2026",
        text: "Personal Branding Training 2026",
      },
       {
        src: "images/eventimages/2026/framework1.webp",
        alt: "JCI Action Framework 2026",
        text: "JCI Action Framework 2026",
      },
       {
        src: "images/eventimages/2026/framework2.webp",
        alt: "JCI Action Framework 2026",
        text: "JCI Action Framework 2026",
      },
       {
        src: "images/eventimages/2026/eps1.webp",
        alt: "Effective Public Speaking 2026",
        text: "Effective Public Speaking 2026",
      },
       {
        src: "images/eventimages/2026/eps2.webp",
        alt: "Effective Public Speaking 2026",
        text: "Effective Public Speaking 2026",
      },
      
       {
        src: "images/eventimages/2026/prashantsir2.webp",
        alt: "Empowering Youth Training 2026 - Life Skills",
        text: "Empowering Youth Training 2026 - Life Skills",
      },
      {
        src: "images/eventimages/2026/prashantsir1.webp",
        alt: "Empowering Youth Training 2026 - Life Skills",
        text: "Empowering Youth Training 2026 - Life Skills",
      },
       {
        src: "images/eventimages/2026/pallavimam2.webp",
        alt: "Empowering Youth Training 2026 - Communication",
        text: "Empowering Youth Training 2026 - Communication",
      },
      {
        src: "images/eventimages/2026/pallavimam1.webp",
        alt: "Empowering Youth Training 2026 - Communication",
        text: "Empowering Youth Training 2026 - Communication",
      },
       {
        src: "images/eventimages/2026/dilipsir2.webp",
        alt: "Empowering Youth Training 2026 - Leadership",
        text: "Empowering Youth Training 2026 - Leadership",
      },
      {
        src: "images/eventimages/2026/dilipsir1.webp",
        alt: "Empowering Youth Training 2026 - Leadership",
        text: "Empowering Youth Training 2026 - Leadership",
      },
      {
        src: "images/eventimages/2026/suvitsir2.webp",
        alt: "Empowering Youth Training 2026 - Emotions Management",
        text: "Empowering Youth Training 2026 - Emotions Management",
      },
       {
        src: "images/eventimages/2026/suvitsir1.webp",
        alt: "Empowering Youth Training 2026 - Emotions Management",
        text: "Empowering Youth Training 2026 - Emotions Management",
      },
       
      {
        src: "images/eventimages/youth3.png",
        alt: "Empowering Youth Training",
        text: "Empowering Youth Training 2025",
      },
      {
        src: "images/eventimages/youth2.png",
        alt: "Empowering Youth Training",
        text: "Empowering Youth Training 2025",
      },
      {
        src: "images/eventimages/youth1.png",
        alt: "Empowering Youth Training",
        text: "Empowering Youth Training 2025",
      },
      {
        src: "images/eventimages/mange2.png",
        alt: "No More Drama (Conflict Management) Training",
        text: "No More Drama (Conflict Management) Training 2025",
      },
      {
        src: "images/eventimages/mange1.png",
        alt: "No More Drama (Conflict Management) Training",
        text: "No More Drama (Conflict Management) Training 2025",
      },
      {
        src: "images/eventimages/work3.png",
        alt: "The Future of Work and Workforce Transformation Training",
        text: "The Future of Work and Workforce Transformation Training 2025",
      },
      {
        src: "images/eventimages/work2.png",
        alt: "The Future of Work and Workforce Transformation Training",
        text: "The Future of Work and Workforce Transformation Training 2025",
      },
      {
        src: "images/eventimages/work1.png",
        alt: "The Future of Work and Workforce Transformation Training",
        text: "The Future of Work and Workforce Transformation Training 2025",
      },
      {
        src: "images/eventimages/Int2.png",
        alt: "Interpersonal Relationship Training",
        text: "Interpersonal Relationship Training 2025",
      },
      {
        src: "images/eventimages/Int1.png",
        alt: "Interpersonal Relationship Training",
        text: "Interpersonal Relationship Training 2025",
      },
      {
        src: "images/eventimages/emp2.png",
        alt: "Presenting Empowering Youth Topic Communication skills Training",
        text: "Presenting Empowering Youth Topic Communication skills Training 2025",
      },
      {
        src: "images/eventimages/emp1.png",
        alt: "Presenting Empowering Youth Topic Communication skills Training",
        text: "Presenting Empowering Youth Topic Communication skills Training 2025",
      },
      {
        src: "images/eventimages/stra2.png",
        alt: "Strategic Decision Making Training",
        text: "Strategic Decision Making Training 2025",
      },
      {
        src: "images/eventimages/stra1.png",
        alt: "Strategic Decision Making Training",
        text: "Strategic Decision Making Training 2025",
      },
      {
        src: "images/eventimages/suit2.png",
        alt: "Suit Up, skill up Training",
        text: "Suit Up, Skill Up Training 2025",
      },
      {
        src: "images/eventimages/suit1.png",
        alt: "Suit Up, skill up Training",
        text: "Suit Up, Skill Up Training 2025",
      },
      {
        src: "images/eventimages/shiftgeartraining1.png",
        alt: "Shift your Gear Training",
        text: "Shift your Gear Training 2025",
      },
      {
        src: "images/eventimages/shiftgeartraining2.png",
        alt: "Shift your Gear Training",
        text: "Shift your Gear Training 2025",
      },
       {
        src: "images/eventimages/communicationskillday72.png",
        alt: "Communication skills training",
        text: "Communication Skills Training 2025 Day7",
      },
      {
        src: "images/eventimages/communicationskillday71.png",
        alt: "Communication skills training",
        text: "Communication Skills Training 2025 Day7",
      },
      {
        src: "images/eventimages/criticalthinkday62.png",
        alt: "Critical Thinking Training",
        text: "Critical Thinking Training 2025 Day6",
      },
      {
        src: "images/eventimages/criticalthinkday61.png",
        alt: "Critical Thinking Training",
        text: "Critical Thinking Training 2025 Day6",
      },
      //  {
      //   src: "images/eventimages/leadershipteambuildday52.png",
      //   alt: "Leadership & Team Building Training",
      //   text: "Leadership & Team Building Training 2025 Day5",
      // },
      // {
      //   src: "images/eventimages/leadershipteambuildday51.png",
      //   alt: "Leadership & Team Building Training",
      //   text: "Leadership & Team Building Training 2025 Day5",
      // },
      // {
      //   src: "images/eventimages/interviewcareerskiillday42.png",
      //   alt: "Interview & Career Skills Training",
      //   text: "Interview & Career Skills Training 2025 Day4",
      // },
      // {
      //   src: "images/eventimages/interviewcareerskiillday41.png",
      //   alt: "Interview & Career Skills Training",
      //   text: "Interview & Career Skills Training 2025 Day4",
      // },
      // {
      //   src: "images/eventimages/Personalitydevelopementday3.png",
      //   alt: "Personality Development Training",
      //   text: "Personality Development Training 2025 Day3",
      // },
      //  {
      //   src: "images/eventimages/personalitydevelopmentday31.png",
      //   alt: "Personality Development Training",
      //   text: "Personality Development Training 2025 Day3",
      // },
      //  {
      //   src: "images/eventimages/interpersonalskillsday2.png",
      //   alt: "Interpersonal Skills Training",
      //   text: "Interpersonal Skills Training 2025 Day2",
      // },
      //  {
      //   src: "images/eventimages/interpersonalskillsday21.png",
      //   alt: "Interpersonal Skills Training",
      //   text: "Interpersonal Skills Training 2025 Day2",
      //  },
      //  {
      //   src: "images/eventimages/timemanagementday1.png",
      //   alt: "Time & Stress Management Training",
      //   text: "Time & Stress Management Training 2025 Day1",
      // },
      // {
      //   src: "images/gallery/Beyond Words Elevating Corporate Communications/Beyond Words Elevating Corporate Communications.png",
      //   alt: "Beyond Words Elevating Corporate Communications -2025",
      //   text: "Beyond Words Elevating Corporate Communications -2025",
      // },
      // {
      //   src: "images/gallery/Values & ethics -2025/Values & ethics -2025 (1).png",
      //   alt: "Values & ethics -2025",
      //   text: "Values & ethics -2025",
      // },
      // {
      //   src: "images/gallery/stress management Training/Untitled design (2).png",
      //   alt: "Stress Management Training",
      //   text: "Stress Management Training 2025",
      // },
      // {
      //   src: "images/gallery/stress management Training/Untitled design (3).png",
      //   alt: "Stress Management Training",
      //   text: "Stress Management Training 2025",
      // },
      // {
      //   src: "images/eventimages/workloadbalance.png",
      //   alt: "Work Life Balance",
      //   text: "Work Life Balance Training 2025",
      // },
      // {
      //   src: "images/eventimages/workloadbalance1.png",
      //   alt: "Work Life Balance",
      //   text: "Work Life Balance Training 2025",
      // },
      // {
      //   src: "images/eventimages/startup.png",
      //   alt: "Sucessful Startup Training 2025",
      //   text: "Sucessful Startup Training 2025",
      // },
      // {
      //   src: "images/eventimages/startup1.png",
      //   alt: "Sucessful Startup Training 2025",
      //   text: "Sucessful Startup Training 2025",
      // },
      // {
      //   src: "images/eventimages/JCI_ActionFramework.png",
      //   alt: "JCI Action Framework",
      //   text: "JCI Action Framework",
      // },
      // {
      //   src: "images/eventimages/mental_Health1.png",
      //   alt: "Mental Health Awareness",
      //   text: "Mental Health Awareness",
      // },
      // {
      //   src: "images/eventimages/Innovation_MadePratical1.png",
      //   alt: "Innovation made pratical",
      //   text: "Innovation Made Practical",
      // },
      // {
      //   src: "images/eventimages/AI_Tools1.png",
      //   alt: "AI Training",
      //   text: "AI for Workplace Success",
      // },
      // {
      //   src: "images/eventimages/leader11.png",
      //   alt: "Leader Training",
      //   text: "Leader tranning Day6 2025",
      // },
      // {
      //   src: "images/eventimages/leader9.png",
      //   alt: "Leader Training",
      //   text: "Leader tranning Day5 2025",
      // },
      // {
      //   src: "images/eventimages/leader7.png",
      //   alt: "Leader Training",
      //   text: "Leader tranning Day4 2025",
      // },
      // {
      //   src: "images/eventimages/leader5.png",
      //   alt: "Leader Training",
      //   text: "Leader tranning Day3 2025",
      // },
      // {
      //   src: "images/eventimages/leader3.png",
      //   alt: "Leader Training",
      //   text: "Leader tranning Day2 2025",
      // },
      // {
      //   src: "images/eventimages/leader1.png",
      //   alt: "Leader Training",
      //   text: "Leader tranning Day1 2025",
      // },
      // {
      //   src: "images/eventimages/EPS1.png",
      //   alt: "EPS Training 2025",
      //   text: "EPS Training 2025",
      // },
      // {
      //   src: "images/eventimages/CAPP2.png",
      //   alt: "CAPP Training 2025",
      //   text: "CAPP Training 2025",
      // },
      //  {
      //   src: "images/eventimages/PIOC1.png",
      //   alt: "PIOC Training 2025",
      //   text: "PIOC Training 2025",
      // },
      // {
      //   src: "images/eventimages/PIOC2.png",
      //   alt: "PIOC Training 2025",
      //   text: "PIOC Training 2025",
      // },
      // {
      //   src: "images/eventimages/who2.png",
      //   alt: "Who I am in JCI 2025",
      //   text: "Who I am in JCI?",
      // },
      // {
      //   src: "images/eventimages/7.webp",
      //   alt: "CAPP Training",
      //   text: "CAPP Training",
      // },
      // {
      //   src: "images/eventimages/16.webp",
      //   alt: "JCI LO Officer Training  Seminar",
      //   text: "JCI LO Officer Training  Seminar",
      // },
      // {
      //   src: "images/eventimages/15.webp",
      //   alt: "AOS Training",
      //   text: "AOS Training",
      // },
      // {
      //   src: "images/eventimages/24.webp",
      //   alt: "Corporate Training(Change begins with me)",
      //   text: "Corporate Training(Change begins with me) ",
      // },
      // {
      //   src: "images/eventimages/23.webp",
      //   alt: "Corporate Training(Is Your Mind Hijacked)",
      //   text: "Corporate Training(Is Your Mind Hijacked) ",
      // },
      // {
      //   src: "images/eventimages/22.webp",
      //   alt: "Corporate Training(IPO Individual  Peformance Outcome)",
      //   text: "Corporate Training(IPO Individual  Peformance Outcome) ",
      // },
      // {
      //   src: "images/eventimages/21.webp",
      //   alt: "Corporate Training",
      //   text: "Corporate Training",
      // },
      // {
      //   src: "images/eventimages/20.webp",
      //   alt: "Corporate Training",
      //   text: "Corporate Training",
      // },
      // {
      //   src: "images/eventimages/19.webp",
      //   alt: "Yoga Training",
      //   text: "Yoga Training ",
      // },
      // {
      //   src: "images/eventimages/25.webp",
      //   alt: "Effective Public speaking Training Successfully Done By JCI Nagpur Fortune",
      //   text: "Effective Public speaking Training Successfully Done By JCI Nagpur Fortune",
      // },
      // {
      //   // last image
      //   src: "images/eventimages/26.webp",
      //   alt: "Training On stress Relief Strategies:Finding Calm In Chaos",
      //   text: "Training On stress Relief Strategies:Finding Calm In Chaos",
      // },
    ],

    Community: [
      // fisrt image
      {
        src: "images/eventimages/2026/Wheat & Clothes Donation (6 June)/Wheat & Clothes Donation 1.webp",
        alt: "Wheat & Clothes Donation Drive 2026",
        text: "Wheat & Clothes Donation Drive 2026",
      },
      {
        src: "images/eventimages/2026/Wheat & Clothes Donation (6 June)/Wheat & Clothes Donation 2.webp",
        alt: "Wheat & Clothes Donation Drive 2026",
        text: "Wheat & Clothes Donation Drive 2026",
      },
      {
        src: "images/eventimages/2026/Wheat & Clothes Donation (6 June)/Wheat & Clothes Donation 3.webp",
        alt: "Wheat & Clothes Donation Drive 2026",
        text: "Wheat & Clothes Donation Drive 2026",
      },
       {
        src: "images/eventimages/2026/ambedkarjayanti2.webp",
        alt: "Dr.B.R. Ambedkar Jayanti Celebration 2026",
        text: "Dr.B.R. Ambedkar Celebration 2026",
      },
      {
        src: "images/eventimages/2026/ambedkarjayati1.webp",
        alt: "Dr.B.R. Ambedkar Jayanti Celebration 2026",
        text: "Dr.B.R. Ambedkar Celebration 2026",
      },
       {
        src: "images/eventimages/2026/ram1.webp",
        alt: "Ram Navmi Celebration 2026",
        text: "Ram Navmi Celebration 2026",
      },
       {
        src: "images/eventimages/2026/ram2.webp",
        alt: "Ram Navmi Celebration 2026",
        text: "Ram Navmi Celebration 2026",
      },
      {
        src: "images/eventimages/2026/wo1.webp",
        alt: "Women's Day Celebration 2026",
        text: "Women's Day Celebration 2026",
      },
      {
        src: "images/eventimages/2026/shiv1.webp",
        alt: "Shivaji Jayanti 2026",
        text: "Shivaji Jayanti 2026",
      },
      {
        src: "images/eventimages/2026/shiv2.webp",
        alt: "Shivaji Jayanti 2026",
        text: "Shivaji Jayanti 2026",
      },
       {
        src: "images/gallery/republicday2.webp",
        alt: "Republic Day Celebration 2026",
        text: "Republic Day Celebration 2026",
      },
      {
        src: "images/gallery/republicday1.webp",
        alt: "Republic Day Celebration 2026",
        text: "Republic Day Celebration 2026",
      },
      {
        src: "images/gallery/Clothes Donation 2026/5.png",
        alt: "Clothes Donation Drive 2026",
        text: "Clothes Donation Drive 2026",
      },
      {
        src: "images/gallery/Clothes Donation 2026/4.png",
        alt: "Clothes Donation Drive 2026",
        text: "Clothes Donation Drive 2026",
      },
      {
        src: "images/gallery/Clothes Donation 2026/3.png",
        alt: "Clothes Donation Drive 2026",
        text: "Clothes Donation Drive 2026",
      },
      {
        src: "images/gallery/Clothes Donation 2026/2.png",
        alt: "Clothes Donation Drive 2026",
        text: "Clothes Donation Drive 2026",
      },
      {
        src: "images/gallery/Independence Day/ind4.png",
        alt: "Independence Day Celebration",
        text: "Independence Day Celebration 2025",
      },
      {
        src: "images/gallery/Independence Day/ind3.png",
        alt: "Independence Day Celebration",
        text: "Independence Day Celebration 2025",
      },
      {
        src: "images/gallery/Independence Day/ind2.png",
        alt: "Independence Day Celebration",
        text: "Independence Day Celebration 2025",
      },
      {
        src: "images/gallery/Independence Day/ind1.png",
        alt: "Independence Day Celebration",
        text: "Independence Day Celebration 2025",
      },
      {
        src: "images/gallery/Tree Plantation/tree4.png ",
        alt: "Tree Plantation",
        text: "Tree Plantation 2025",
      },
      {
        src: "images/gallery/Tree Plantation/tree3.png ",
        alt: "Tree Plantation",
        text: "Tree Plantation 2025",
      },
      {
        src: "images/gallery/Tree Plantation/tree2.png ",
        alt: "Tree Plantation",
        text: "Tree Plantation 2025",
      },
      {
        src: "images/gallery/Tree Plantation/tree1.png ",
        alt: "Tree Plantation",
        text: "Tree Plantation 2025",
      },
      {
        src: "images/gallery/Yoga Day/yogaday1.png ",
        alt: "Yoga Day Celebration",
        text: "Yoga Day Celebration 2025",
      },
      {
        src: "images/gallery/Yoga Day/yogaday2.png ",
        alt: "Yoga Day Celebration",
        text: "Yoga Day Celebration 2025",
      },
      {
        src: "images/gallery/Clothes and Fruits Donation Drive/Clothes and Fruits Donation Drive.png",
        alt: "Clothes and Fruits Donation Drive",
        text: "Clothes and Fruits Donation Drive 2025",
      },
      {
        src: "images/gallery/Salute the Silent Stars/Untitled design (1).png",
        alt: "Salute the Silent Stars",
        text: "Salute the Silent Stars 2025",
      },
      {
        src: "images/gallery/Salute the Silent Stars/Untitled design (2).png",
        alt: "Salute the Silent Stars",
        text: "Salute the Silent Stars 2025",
      },
      {
        src: "images/eventimages/Drbabasahebjyanti.png",
        alt: "Dr. Babasaheb Ambedkar Jayanti Celebration",
        text: "Food distribution on Dr. Babasaheb Ambedkar Jayanti 2025",
      },
      {
        src: "images/eventimages/Drbabasahebjayanti1.png",
        alt: "Dr. Babasaheb Ambedkar Jayanti Celebration",
        text: "Food distribution on Dr. Babasaheb Ambedkar Jayanti 2025",
      },
      {
        src: "images/eventimages/eyecheckup.png",
        alt: "Eye Checkup Camp",
        text: "Eye Check-Up Camp 2025",
      },
      {
        src: "images/eventimages/eyecheckup1.png",
        alt: "Eye Checkup Camp",
        text: "Eye Check-Up Camp 2025",
      },
      {
        src: "images/eventimages/eyecheckup2.png",
        alt: "Eye Checkup Camp",
        text: "Eye Check-Up Camp 2025",
      },

      {
        src: "images/eventimages/ramnavmi.png",
        alt: "Shree Ram Navam",
        text: "Food distribution on Shree Ram Navami 2025",
      },
      {
        src: "images/eventimages/ramnavmi1.png",
        alt: "Shree Ram Navam",
        text: "Food distribution on Shree Ram Navami 2025",
      },
      {
        src: "images/eventimages/Eid.png",
        alt: "Eid Celebration",
        text: "Eid Celebration 2025",
      },
      {
        src: "images/eventimages/Eid1.png",
        alt: "Eid Celebration",
        text: "Eid Celebration 2025",
      },
      {
        src: "images/eventimages/DentalCamp.png",
        alt: "Mega Dental CheckUp Camp",
        text: "Mega Dental CheckUp Camp",
      },
      {
        src: "images/eventimages/DentalCamp1.png",
        alt: "Mega Dental CheckUp Camp",
        text: "Mega Dental CheckUp Camp",
      },
      {
        src: "images/eventimages/holi milan.webp",
        alt: "Holi Milan",
        text: "Holi Milan 2025",
      },
      {
        src: "images/eventimages/Womens_day2.png",
        alt: "Womens Day",
        text: "Womens Day Celebrations 2025",
      },
      {
        src: "images/eventimages/Womens_day1.png",
        alt: "Womens Day",
        text: "Womens Of Worth Aword (WOW) 2025",
      },
      {
        src: "images/eventimages/Womens_day.png",
        alt: "Womens Day",
        text: "Beauty Competition 2025",
      },
      {
        src: "images/eventimages/valentinesday1.png",
        alt: "valentines day celebration 2025",
        text: "Valentines Day Celebration 2025",
      },
      {
        src: "images/eventimages/mental_Health.png",
        alt: "Mental Health Awareness",
        text: "Mental Health Awareness",
      },
      {
        src: "images/eventimages/fooddistribuation.png",
        alt: "Food distribution on Chhatrapati Shivaji Maharaj Jayanti",
        text: "Food distribution on Chhatrapati Shivaji Maharaj Jayanti 2025",
      },
      {
        src: "images/eventimages/republic day.webp",
        alt: "Republic Day Celebration 2025",
        text: "Republic Day Celebration 2025",
      },

      {
        src: "images/eventimages/18.webp",
        alt: "Blood Donation Camp",
        text: "Blood Donation Camp - 2024",
      },
    ],

    management: [
       {
        src: "images/eventimages/2026/zvp1.webp",
        alt: "1st ZVP Visit 2026",
        text: "1st ZVP Visit 2026",
      },
       {
        src: "images/eventimages/2026/zvp2.webp",
        alt: "1st ZVP Visit 2026",
        text: "1st ZVP Visit 2026",
      },
      {
        // fisrt image
        src: "images/eventimages/LDMT.webp",
        alt: "LO Development Training",
        text: "LO Development Training",
      },
      {
        src: "images/eventimages/LDMT1.webp",
        alt: "LO Development Training",
        text: "LO Development Training",
      },
      {
        src: "images/eventimages/Presidential Academy.webp",
        alt: "Presidential Academy",
        text: "Presidential Academy",
      },
      {
        src: "images/eventimages/LO Governing Board Meeting.webp",
        alt: "LO Governing Board Meeting",
        text: "LO Governing Board Meeting",
      },
      {
        src: "images/eventimages/Governing Board Meeting  (1).webp",
        alt: "Governing Board Meeting",
        text: "Governing Board Meeting",
      },
      {
        src: "images/eventimages/Governing Board Meeting .webp",
        alt: "Governing Board Meeting",
        text: "Governing Board Meeting",
      },
      {
        src: "images/eventimages/31.webp",
        alt: "JCI Nagpur Fortune  Installation Ceremony",
        text: "JCI Nagpur Fortune Installation Ceremony",
      },
    ],

    gd: [
      
       {
        src: "images/eventimages/2026/2.webp",
        alt: "PIOC 2026",
        text: "PIOC 2026",
      },
     {
        src: "images/eventimages/2026/1.webp",
        alt: "PIOC 2026",
        text: "PIOC 2026",
      },
      {
        // image fist
        src: "images/eventimages/PIOC2.webp",
        alt: "PIOC Training 2025",
        text: "PIOC Training 2025",
      },
      {
        src: "images/eventimages/JCI orientation.webp",
        alt: "JCI Orientation Program",
        text: "JCI Orientation Program",
      },
      {
        src: "images/eventimages/mega orientation.webp",
        alt: "JCI Mega Orientation",
        text: "JCI Mega Orientation",
      },
      {
        src: "images/eventimages/non jc's orientation.webp",
        alt: "Non JC's Orientation Program",
        text: "Non JC's Orientation Program",
      },
    ],
    International: [
      {
        src: "images/eventimages/2026/International Collaboration 2026/IC1 2026.webp",
        alt: "International Collaboration 2026",
        text: "International collaboration 2026 with JCI Philippines and JCI Bacolod ",
      },
      {
        src: "images/eventimages/2026/International Collaboration 2026/IC2 2026.webp",
        alt: "International Collaboration 2026",
        text: "International collaboration 2026 with JCI Philippines and JCI Bacolod",
      },
      {
        src: "images/eventimages/2026/International Collaboration 2026/IC3 2026.webp",
        alt: "International Collaboration 2026",
        text: "International collaboration 2026 with JCI Philippines and JCI Bacolod",
      },
       {
        src: "images/eventimages/international2.webp",
        alt: "International Collaboration",
        text: "International collaboration with JCI Philippines and JCI Malaysia",
      },
      {
        src: "images/eventimages/international.webp",
        alt: "International Collaboration",
        text: "International collaboration with JCI Philippines and JCI Malaysia",
      },
    ],

    InstallationCeremony: [
      {
        src: "images/eventimages/Installation/2.webp",
        alt: " 2nd Installation Ceremony",
        text: "JCI Nagpur Fortune 2nd Installation Ceremony",
      },
      {
        src: "images/eventimages/Installation/4.webp",
        alt: " 2nd Installation Ceremony",
        text: "JCI Nagpur Fortune 2nd Installation Ceremony",
      },
        {
        src: "images/eventimages/Installation/3.webp",
        alt: " 2nd Installation Ceremony",
        text: "JCI Nagpur Fortune 2nd Installation Ceremony",
      },
       {
        src: "images/eventimages/Installation/5.webp",
        alt: " 2nd Installation Ceremony",
        text: "JCI Nagpur Fortune 2nd Installation Ceremony",
      },
    
      {
        src: "images/eventimages/Installation/8.webp",
        alt: " 2nd Installation Ceremony",
        text: "JCI Nagpur Fortune 2nd Installation Ceremony",
      },
      {
        src: "images/eventimages/Installation/7.webp",
        alt: " 2nd Installation Ceremony",
        text: "JCI Nagpur Fortune 2nd Installation Ceremony",
      },
      {
        src: "images/eventimages/Installation/6.webp",
        alt: " 2nd Installation Ceremony",
        text: "JCI Nagpur Fortune 2nd Installation Ceremony",
      },
    
     
      {
        src: "images/eventimages/27.webp",
        alt: " Installation Ceremony",
        text: "JCI Nagpur Fortune  Installation Ceremony",
      },
      {
        src: "images/eventimages/28.webp",
        alt: " Installation Ceremony",
        text: "JCI Nagpur Fortune Installation Ceremony",
      },
      {
        src: "images/eventimages/29.webp",
        alt: " Installation Ceremony",
        text: "JCI Nagpur Fortune  Installation Ceremony",
      },
      {
        src: "images/eventimages/30.webp",
        alt: " Installation Ceremony",
        text: "JCI Nagpur Fortune Installation Ceremony",
      },
      {
        src: "images/eventimages/31.webp",
        alt: " Installation Ceremony",
        text: "JCI Nagpur Fortune  Installation Ceremony",
      },
      {
        src: "images/eventimages/32.webp",
        alt: " Installation Ceremony",
        text: "JCI Nagpur Fortune  Installation Ceremony",
      },
      {
        src: "images/eventimages/33.webp",
        alt: " Installation Ceremony",
        text: "JCI Nagpur Fortune  Installation Ceremony",
      },
      {
        src: "images/eventimages/34.webp",
        alt: " Installation Ceremony",
        text: "JCI Nagpur Fortune  Installation Ceremony",
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
        style={{
          backgroundImage: "url(images/background/12.jpg) ",
          alt: "jcinagpurfortune",
        }}
      >
        <div class="auto-container">
          <div class="row clearfix">
            {/* <!--Title --> */}
            <div class="title-column col-lg-6 col-md-12 col-sm-12">
              <h1>LO Events</h1>
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
                  <span class="icon fas fa-arrow-alt-circle-right"></span> LO
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
              className={activeTab === "training" ? "active" : ""}
              onClick={() => toggleTab("training")}
            >
              <strong>Training</strong>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "Community" ? "active" : ""}
              onClick={() => toggleTab("Community")}
            >
              <strong>Community</strong>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "management" ? "active" : ""}
              onClick={() => toggleTab("management")}
            >
              <strong>Management</strong>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={activeTab === "gd" ? "active" : ""}
              onClick={() => toggleTab("gd")}
            >
              <strong>Growth & Development</strong>
            </NavLink>
          </NavItem>

          {/* added */}
          <NavItem>
            <NavLink
              className={activeTab === "International" ? "active" : ""}
              onClick={() => toggleTab("International")}
            >
              <strong>International Collaboration</strong>
            </NavLink>
          </NavItem>

          {/*  */}

          <NavItem>
            <NavLink
              className={
                activeTab === "InstallationCeremony" ? "active" : ""
              }
              onClick={() => toggleTab("InstallationCeremony")}
            >
              <strong> Installation Ceremony</strong>
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
