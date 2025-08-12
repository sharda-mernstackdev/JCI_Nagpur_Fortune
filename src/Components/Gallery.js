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
       {
        src: "images/eventimages/leadershipteambuildday52.png",
        alt: "Leadership & Team Building Training",
        text: "Leadership & Team Building Training 2025 Day5",
      },
       {
        src: "images/eventimages/leadershipteambuildday51.png",
        alt: "Leadership & Team Building Training",
        text: "Leadership & Team Building Training 2025 Day5",
      },
      {
        src: "images/eventimages/interviewcareerskiillday42.png",
        alt: "Interview & Career Skills Training",
        text: "Interview & Career Skills Training 2025 Day4",
      },
      {
        src: "images/eventimages/interviewcareerskiillday41.png",
        alt: "Interview & Career Skills Training",
        text: "Interview & Career Skills Training 2025 Day4",
      },
        {
        src: "images/eventimages/personalitydevelopementday3.png",
        alt: "Personality Development Training",
        text: "Personality Development Training 2025 Day3",
      },
       {
        src: "images/eventimages/personalitydevelopmentday31.png",
        alt: "Personality Development Training",
        text: "Personality Development Training 2025 Day3",
      },
       {
        src: "images/eventimages/interpersonalskillsday2.png",
        alt: "Interpersonal Skills Training",
        text: "Interpersonal Skills Training 2025 Day2",
      },
         {
        src: "images/eventimages/interpersonalskillsday21.png",
        alt: "Interpersonal Skills Training",
        text: "Interpersonal Skills Training 2025 Day2",
       },
       {
        src: "images/eventimages/timemanagementday1.png",
        alt: "Time & Stress Management Training",
        text: "Time & Stress Management Training 2025 Day1",
      },
      {
        src: "images/gallery/Beyond Words Elevating Corporate Communications/Beyond Words Elevating Corporate Communications.png",
        alt: "Beyond Words Elevating Corporate Communications -2025",
        text: "Beyond Words Elevating Corporate Communications -2025",
      },
      {
        src: "images/gallery/Values & ethics -2025/Values & ethics -2025 (1).png",
        alt: "Values & ethics -2025",
        text: "Values & ethics -2025",
      },
      {
        src: "images/gallery/Clothes and Fruits Donation Drive/Clothes and Fruits Donation Drive.png",
        alt: "Clothes and Fruits Donation Drive",
        text: "Clothes and Fruits Donation Drive 2025",
      },
      {
        src: "images/gallery/Salute the Silent Stars/Untitled design (2).png",
        alt: "Salute the Silent Stars",
        text: "Salute the Silent Stars 2025",
      },
      {
        src: "images/gallery/Salute the Silent Stars/Untitled design (1).png",
        alt: "Salute the Silent Stars",
        text: "Salute the Silent Stars 2025",
      },
      {
        src: "images/gallery/stress management Training/Untitled design (3).png",
        alt: "Stress Management Training",
        text: "Stress Management Training 2025",
      },
      {
        src: "images/gallery/stress management Training/Untitled design (2).png",
        alt: "Stress Management Training",
        text: "Stress Management Training 2025",
      },
      {
        src: "images/eventimages/workloadbalance1.png",
        alt: "Work Life Balance",
        text: "Work Life Balance Training 2025",
      },
      {
        src: "images/eventimages/workloadbalance.png",
        alt: "Work Life Balance",
        text: "Work Life Balance Training 2025",
      },
      {
        src: "images/eventimages/startup1.png",
        alt: "Dr. Babasaheb Ambedkar Jayanti Celebration",
        text: "Sucessful Startup Training 2025",
      },
      {
        src: "images/eventimages/startup.png",
        alt: "Dr. Babasaheb Ambedkar Jayanti Celebration",
        text: "Sucessful Startup Training 2025",
      },
      {
        src: "images/eventimages/Drbabasahebjayanti1.png",
        alt: "Dr. Babasaheb Ambedkar Jayanti Celebration",
        text: "Food distribution on Dr. Babasaheb Ambedkar Jayanti 2025",
      },
      {
        src: "images/eventimages/Drbabasahebjyanti.png",
        alt: "Dr. Babasaheb Ambedkar Jayanti Celebration",
        text: "Food distribution on Dr. Babasaheb Ambedkar Jayanti 2025",
      },
      {
        src: "images/eventimages/eyecheckup2.png",
        alt: "Eye Checkup Camp",
        text: "Eye Check-Up Camp 2025",
      },
      {
        src: "images/eventimages/eyecheckup1.png",
        alt: "Eye Checkup Camp",
        text: "Eye Check-Up Camp 2025",
      },
      {
        src: "images/eventimages/eyecheckup.png",
        alt: "Eye Checkup Camp",
        text: "Eye Check-Up Camp 2025",
      },
      {
        src: "images/eventimages/ramnavmi1.png",
        alt: "Shree Ram Navam",
        text: "Food distribution on Shree Ram Navami 2025",
      },
      {
        src: "images/eventimages/ramnavmi.png",
        alt: "Shree Ram Navam",
        text: "Food distribution on Shree Ram Navami 2025",
      },
      {
        src: "images/eventimages/Eid1.png",
        alt: "Eid Celebration",
        text: "Eid Celebration 2025",
      },
      {
        src: "images/eventimages/Eid.png",
        alt: "Eid Celebration",
        text: "Eid Celebration 2025",
      },
      {
        src: "images/eventimages/DentalCamp1.png",
        alt: "Mega Dental CheckUp Camp",
        text: "Mega Dental CheckUp Camp",
      },
      {
        src: "images/eventimages/DentalCamp1.png",
        alt: "Mega Dental CheckUp Camp",
        text: "Mega Dental CheckUp Camp",
      },
      {
        src: "images/eventimages/DentalCamp.png",
        alt: "Mega Dental CheckUp Camp",
        text: "Mega Dental CheckUp Camp",
      },
      {
        src: "images/eventimages/LDMT1.png",
        alt: "LO Development Training",
        text: "LO Development Training",
      },
      {
        src: "images/eventimages/LDMT.png",
        alt: "LO Development Training",
        text: "LO Development Training",
      },
      {
        src: "images/eventimages/Womens_day2.png",
        alt: "Womens Day",
        text: "Womens Day Celebrations 2025",
      },
      {
        src: "images/eventimages/Womens_day1.png",
        alt: "Womens Day",
        text: "Womens Day Celebrations 2025",
      },
      {
        src: "images/eventimages/Womens_day.png",
        alt: "Womens Day",
        text: "Womens Day Celebrations 2025",
      },
      {
        src: "images/eventimages/mental_Health1.png",
        alt: "Mental Health Awareness",
        text: "Mental Health Awareness",
      },
      {
        src: "images/eventimages/mental_Health.png",
        alt: "Mental Health Awareness",
        text: "Mental Health Awareness",
      },
      {
        src: "images/eventimages/Innovation_MadePratical1.png",
        alt: "Innovation made pratical",
        text: "Innovation Made Practical",
      },
      {
        src: "images/eventimages/Innovation_MadePratical.png",
        alt: "Innovation made pratical",
        text: "Innovation Made Practical",
      },
      {
        src: "images/eventimages/AI_Tools1.png",
        alt: "AI Training",
        text: "AI for Workplace Success",
      },
      {
        src: "images/eventimages/AI_Tools.png",
        alt: "AI Training",
        text: "AI for Workplace Success",
      },
      {
        src: "images/eventimages/international2.png",
        alt: "International Collaboration",
        text: "International collaboration with JCI Philippines and JCI Malaysia",
      },
      {
        src: "images/eventimages/international1.png",
        alt: "International Collaboration",
        text: "International collaboration with JCI Philippines and JCI Malaysia",
      },
      {
        src: "images/eventimages/international.png",
        alt: "International Collaboration",
        text: "International collaboration with JCI Philippines and JCI Malaysia",
      },
      {
        src: "images/eventimages/international.png",
        alt: "International Collaboration",
        text: "International collaboration with JCI Philippines and JCI Malaysia",
      },
      {
        src: "images/eventimages/leader11.png",
        alt: "Leader Training",
        text: "Leader tranning Day6 2025",
      },
      {
        src: "images/eventimages/leader10.png",
        alt: "Leader Training",
        text: "Leader tranning Day6 2025",
      },
      {
        src: "images/eventimages/leader9.png",
        alt: "Leader Training",
        text: "Leader tranning Day5 2025",
      },
      {
        src: "images/eventimages/leader8.png",
        alt: "Leader Training",
        text: "Leader tranning Day5 2025",
      },
      {
        src: "images/eventimages/leader7.png",
        alt: "Leader Training",
        text: "Leader tranning Day4 2025",
      },
      {
        src: "images/eventimages/leader6.png",
        alt: "Leader Training",
        text: "Leader tranning Day4 2025",
      },
      {
        src: "images/eventimages/leader5.png",
        alt: "Leader Training",
        text: "Leader tranning Day3 2025",
      },
      {
        src: "images/eventimages/leader4.png",
        alt: "Leader Training",
        text: "Leader tranning Day3 2025",
      },
      {
        src: "images/eventimages/leader3.png",
        alt: "Leader Training",
        text: "Leader tranning Day2 2025",
      },
      {
        src: "images/eventimages/leader2.png",
        alt: "Leader Training",
        text: "Leader tranning Day2 2025",
      },
      {
        src: "images/eventimages/leader1.png",
        alt: "Leader Training",
        text: "Leader tranning Day1 2025",
      },
      {
        src: "images/eventimages/leader.png",
        alt: "Leader Training",
        text: "Leader tranning Day1 2025",
      },
      {
        src: "images/eventimages/OBTpullactivity.png",
        alt: "Outbound Training",
        text: "Outbound Training(OBT) Activity 2025",
      },
      {
        src: "images/eventimages/OBTgame.png",
        alt: "Outbound Training",
        text: "Outbound Training(OBT) Activity 2025",
      },
      {
        src: "images/eventimages/OBT1.png",
        alt: "Outbound Training",
        text: "Outbound Training(OBT) 2025",
      },
      {
        src: "images/eventimages/OBT3.png",
        alt: "Outbound Training",
        text: "Outbound Training(OBT) 2025",
      },
      {
        src: "images/eventimages/valentinesday1.png",
        alt: "valentines day celebration 2025",
        text: "Valentines Day Celebration 2025",
      },
      {
        src: "images/eventimages/valentinesday.png",
        alt: "valentines day celebration 2025",
        text: "Valentines Day Celebration 2025",
      },
      {
        src: "images/eventimages/fooddistribuation1.png",
        alt: "Food distribution on Chhatrapati Shivaji Maharaj Jayanti",
        text: "Food distribution on Chhatrapati Shivaji Maharaj Jayanti 2025",
      },
      {
        src: "images/eventimages/fooddistribuation.png",
        alt: "Food distribution on Chhatrapati Shivaji Maharaj Jayanti",
        text: "Food distribution on Chhatrapati Shivaji Maharaj Jayanti 2025",
      },
      {
        src: "images/eventimages/shivajimaharajjayanti.png",
        alt: "Food distribution on Chhatrapati Shivaji Maharaj Jayanti",
        text: "Food distribution on Chhatrapati Shivaji Maharaj Jayanti 2025",
      },
      {
        src: "images/eventimages/EPS.png",
        alt: "EPS Training 2025",
        text: "EPS Training 2025",
      },
      {
        src: "images/eventimages/EPS1.png",
        alt: "EPS Training 2025",
        text: "EPS Training 2025",
      },
      {
        src: "images/eventimages/CAPP2.png",
        alt: "CAPP Training 2025",
        text: "CAPP Training 2025",
      },
      {
        src: "images/eventimages/PIOC1.png",
        alt: "PIOC Training 2025",
        text: "PIOC Training 2025",
      },
      {
        src: "images/eventimages/PIOC2.png",
        alt: "PIOC Training 2025",
        text: "PIOC Training 2025",
      },
      {
        src: "images/eventimages/who.png",
        alt: "Who I am in JCI 2025",
        text: "Who I am in JCI?",
      },
      {
        src: "images/eventimages/who1.png",
        alt: "Who I am in JCI 2025",
        text: "Who I am in JCI?",
      },
      {
        src: "images/eventimages/who2.png",
        alt: "Who I am in JCI 2025",
        text: "Who I am in JCI?",
      },
      {
        src: "images/eventimages/17.webp",
        alt: "Be leader ! Make Leaders ! Empower people ",
        text: "Be leader ! Make Leaders ! Empower people  ",
      },
      {
        src: "images/eventimages/16.webp",
        alt: "JCI LO Officer Training  Seminar",
        text: "JCI LO Officer Training  Seminar",
      },
      {
        src: "images/eventimages/15.webp",
        alt: "AOS Training",
        text: "AOS Training",
      },
      {
        src: "images/eventimages/14.webp",
        alt: "JCOM Business Meeting  ",
        text: "JCOM Business Meeting         ",
      },
      {
        src: "images/eventimages/13.webp",
        alt: "JC Kohei Oya from JAPAN Multi LO JCI Vice President Visit At Nagpur !",
        text: "JC Kohei Oya from JAPAN Multi LO JCI Vice President Visit At Nagpur !",
      },
      {
        src: "images/eventimages/11.webp",
        alt: "JCI Speech Craft 2024",
        text: "JCI Speech Craft 2024 ",
      },
      {
        src: "images/eventimages/12.webp",
        alt: "JCI Speech Craft 2024",
        text: "JCI Speech Craft 2024 ",
      },
      {
        src: "images/eventimages/10.webp",
        alt: "Nagpur JCOM TABLE 2.0",
        text: "Nagpur JCOM TABLE 2.0",
      },
      {
        src: "images/eventimages/7.webp",
        alt: "CAPP Training",
        text: "CAPP Training",
      },
      {
        src: "images/eventimages/8.webp",
        alt: "CAPP Training",
        text: "CAPP Training         ",
      },
      {
        src: "images/eventimages/9.webp",
        alt: "CAPP Training",
        text: "CAPP Training",
      },
      {
        src: "images/eventimages/22.webp",
        alt: "Corporate Training(IPO Individual  Peformance Outcome)",
        text: "Corporate Training(IPO Individual  Peformance Outcome) ",
      },
      {
        src: "images/eventimages/23.webp",
        alt: "Corporate Training(Is Your Mind Hijacked)",
        text: "Corporate Training(Is Your Mind Hijacked) ",
      },
      {
        src: "images/eventimages/24.webp",
        alt: "Corporate Training(Change begins with me)",
        text: "Corporate Training(Change begins with me) ",
      },
      {
        src: "images/eventimages/20.webp",
        alt: "Corporate Training",
        text: "Corporate Training",
      },
      {
        src: "images/eventimages/21.webp",
        alt: "Corporate Training",
        text: "Corporate Training",
      },
      {
        src: "images/eventimages/19.webp",
        alt: "Yoga Training",
        text: "Yoga Training ",
      },
      {
        src: "images/eventimages/18.webp",
        alt: "Blood Donation Camp",
        text: "Blood Donation Camp",
      },
      {
        src: "images/eventimages/6.webp",
        alt: "Biz-9 - 2024  Hosted by JCI Raipur Metro Successfully Done",
        text: "Biz-9 - 2024  Hosted by JCI Raipur Metro Successfully Done",
      },
      {
        src: "images/eventimages/5.webp",
        alt: "Biz-9 - 2024  Hosted by JCI Raipur Metro Successfully Done",
        text: "Biz-9 - 2024  Hosted by JCI Raipur Metro Successfully Done",
      },
      {
        src: "images/eventimages/4.webp",
        alt: "MIDCON 2024",
        text: "MIDCON 2024",
      },
      {
        src: "images/eventimages/2.webp",
        alt: "28 & 29 September 2024 JCI Zone 9 Dimond Zonecon 2024 Successfully Done ",
        text: "28 & 29 September 2024 JCI Zone 9 Dimond Zonecon 2024 Successfully Done         ",
      },
      {
        src: "images/eventimages/3.webp",
        alt: "28 & 29 September 2024 JCI Zone 9 Dimond Zonecon 2024 Successfully Done ",
        text: "28 & 29 September 2024 JCI Zone 9 Dimond Zonecon 2024 Successfully Done !",
      },
      {
        src: "images/eventimages/1.webp",
        alt: "JCI Nagpur Fortune Orientation",
        text: "JCI Nagpur Fortune Orientation",
      },
      {
        src: "images/eventimages/25.webp",
        alt: "Effective Public speaking Training Successfully Done By JCI Nagpur Fortune",
        text: "Effective Public speaking Training Successfully Done By JCI Nagpur Fortune",
      },
      {
        src: "images/eventimages/26.webp",
        alt: "Training On stress Relief Strategies:Finding Calm In Chaos",
        text: "Training On stress Relief Strategies:Finding Calm In Chaos",
      },
      {
        src: "images/eventimages/30.webp",
        alt: "MIDCON 2024",
        text: "JCI Nagpur Fortune First Installation Ceremony",
      },
      {
        src: "images/eventimages/31.webp",
        alt: "MIDCON 2024",
        text: "JCI Nagpur Fortune First Installation Ceremony",
      },
    ],

    training: [
      // fist image\
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
       {
        src: "images/eventimages/leadershipteambuildday52.png",
        alt: "Leadership & Team Building Training",
        text: "Leadership & Team Building Training 2025 Day5",
      },
      {
        src: "images/eventimages/leadershipteambuildday51.png",
        alt: "Leadership & Team Building Training",
        text: "Leadership & Team Building Training 2025 Day5",
      },
      {
        src: "images/eventimages/interviewcareerskiillday42.png",
        alt: "Interview & Career Skills Training",
        text: "Interview & Career Skills Training 2025 Day4",
      },
      {
        src: "images/eventimages/interviewcareerskiillday41.png",
        alt: "Interview & Career Skills Training",
        text: "Interview & Career Skills Training 2025 Day4",
      },
      {
        src: "images/eventimages/personalitydevelopementday3.png",
        alt: "Personality Development Training",
        text: "Personality Development Training 2025 Day3",
      },
       {
        src: "images/eventimages/personalitydevelopmentday31.png",
        alt: "Personality Development Training",
        text: "Personality Development Training 2025 Day3",
      },
       {
        src: "images/eventimages/interpersonalskillsday2.png",
        alt: "Interpersonal Skills Training",
        text: "Interpersonal Skills Training 2025 Day2",
      },
       {
        src: "images/eventimages/interpersonalskillsday21.png",
        alt: "Interpersonal Skills Training",
        text: "Interpersonal Skills Training 2025 Day2",
       },
       {
        src: "images/eventimages/timemanagementday1.png",
        alt: "Time & Stress Management Training",
        text: "Time & Stress Management Training 2025 Day1",
      },
      {
        src: "images/gallery/Beyond Words Elevating Corporate Communications/Beyond Words Elevating Corporate Communications.png",
        alt: "Beyond Words Elevating Corporate Communications -2025",
        text: "Beyond Words Elevating Corporate Communications -2025",
      },
      {
        src: "images/gallery/Values & ethics -2025/Values & ethics -2025 (1).png",
        alt: "Values & ethics -2025",
        text: "Values & ethics -2025",
      },
      {
        src: "images/gallery/stress management Training/Untitled design (2).png",
        alt: "Stress Management Training",
        text: "Stress Management Training 2025",
      },
      {
        src: "images/gallery/stress management Training/Untitled design (3).png",
        alt: "Stress Management Training",
        text: "Stress Management Training 2025",
      },
      {
        src: "images/eventimages/workloadbalance.png",
        alt: "Work Life Balance",
        text: "Work Life Balance Training 2025",
      },
      {
        src: "images/eventimages/workloadbalance1.png",
        alt: "Work Life Balance",
        text: "Work Life Balance Training 2025",
      },
      {
        src: "images/eventimages/startup.png",
        alt: "Sucessful Startup Training 2025",
        text: "Sucessful Startup Training 2025",
      },
      {
        src: "images/eventimages/startup1.png",
        alt: "Sucessful Startup Training 2025",
        text: "Sucessful Startup Training 2025",
      },
      {
        src: "images/eventimages/JCI_ActionFramework.png",
        alt: "JCI Action Framework",
        text: "JCI Action Framework",
      },
      {
        src: "images/eventimages/mental_Health1.png",
        alt: "Mental Health Awareness",
        text: "Mental Health Awareness",
      },
      {
        src: "images/eventimages/Innovation_MadePratical1.png",
        alt: "Innovation made pratical",
        text: "Innovation Made Practical",
      },
      {
        src: "images/eventimages/AI_Tools1.png",
        alt: "AI Training",
        text: "AI for Workplace Success",
      },
      {
        src: "images/eventimages/leader11.png",
        alt: "Leader Training",
        text: "Leader tranning Day6 2025",
      },
      {
        src: "images/eventimages/leader9.png",
        alt: "Leader Training",
        text: "Leader tranning Day5 2025",
      },
      {
        src: "images/eventimages/leader7.png",
        alt: "Leader Training",
        text: "Leader tranning Day4 2025",
      },
      {
        src: "images/eventimages/leader5.png",
        alt: "Leader Training",
        text: "Leader tranning Day3 2025",
      },
      {
        src: "images/eventimages/leader3.png",
        alt: "Leader Training",
        text: "Leader tranning Day2 2025",
      },
      {
        src: "images/eventimages/leader1.png",
        alt: "Leader Training",
        text: "Leader tranning Day1 2025",
      },
      {
        src: "images/eventimages/EPS1.png",
        alt: "EPS Training 2025",
        text: "EPS Training 2025",
      },
      {
        src: "images/eventimages/CAPP2.png",
        alt: "CAPP Training 2025",
        text: "CAPP Training 2025",
      },
      {
        src: "images/eventimages/PIOC2.png",
        alt: "PIOC Training 2025",
        text: "PIOC Training 2025",
      },
      {
        src: "images/eventimages/who2.png",
        alt: "Who I am in JCI 2025",
        text: "Who I am in JCI?",
      },
      {
        src: "images/eventimages/7.webp",
        alt: "CAPP Training",
        text: "CAPP Training",
      },
      {
        src: "images/eventimages/16.webp",
        alt: "JCI LO Officer Training  Seminar",
        text: "JCI LO Officer Training  Seminar",
      },
      {
        src: "images/eventimages/15.webp",
        alt: "AOS Training",
        text: "AOS Training",
      },
      {
        src: "images/eventimages/24.webp",
        alt: "Corporate Training(Change begins with me)",
        text: "Corporate Training(Change begins with me) ",
      },
      {
        src: "images/eventimages/23.webp",
        alt: "Corporate Training(Is Your Mind Hijacked)",
        text: "Corporate Training(Is Your Mind Hijacked) ",
      },
      {
        src: "images/eventimages/22.webp",
        alt: "Corporate Training(IPO Individual  Peformance Outcome)",
        text: "Corporate Training(IPO Individual  Peformance Outcome) ",
      },
      {
        src: "images/eventimages/21.webp",
        alt: "Corporate Training",
        text: "Corporate Training",
      },
      {
        src: "images/eventimages/20.webp",
        alt: "Corporate Training",
        text: "Corporate Training",
      },
      {
        src: "images/eventimages/19.webp",
        alt: "Yoga Training",
        text: "Yoga Training ",
      },
      {
        src: "images/eventimages/25.webp",
        alt: "Effective Public speaking Training Successfully Done By JCI Nagpur Fortune",
        text: "Effective Public speaking Training Successfully Done By JCI Nagpur Fortune",
      },
      {
        // last image
        src: "images/eventimages/26.webp",
        alt: "Training On stress Relief Strategies:Finding Calm In Chaos",
        text: "Training On stress Relief Strategies:Finding Calm In Chaos",
      },
    ],

    Community: [
      // fisrt image
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
        // fisrt image
        src: "images/eventimages/LDMT.png",
        alt: "LO Development Training",
        text: "LO Development Training",
      },
      {
        src: "images/eventimages/LDMT1.png",
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
        alt: "JCI Nagpur Fortune First Installation Ceremony",
        text: "JCI Nagpur Fortune First Installation Ceremony",
      },
    ],

    gd: [
      {
        // image fist
        src: "images/eventimages/PIOC2.png",
        alt: "PIOC Training 2025",
        text: "PIOC Training 2025",
      },
      {
        src: "images/eventimages/JCI orientation.png",
        alt: "JCI Orientation Program",
        text: "JCI Orientation Program",
      },
      {
        src: "images/eventimages/mega orientation.png",
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
        src: "images/eventimages/international.png",
        alt: "International Collaboration",
        text: "International collaboration with JCI Philippines and JCI Malaysia",
      },
    ],

    FirstInstallationCeremony: [
      {
        src: "images/eventimages/27.webp",
        alt: "MIDCON 2024",
        text: "JCI Nagpur Fortune First Installation Ceremony",
      },
      {
        src: "images/eventimages/28.webp",
        alt: "MIDCON 2024",
        text: "JCI Nagpur Fortune First Installation Ceremony",
      },
      {
        src: "images/eventimages/29.webp",
        alt: "MIDCON 2024",
        text: "JCI Nagpur Fortune First Installation Ceremony",
      },
      {
        src: "images/eventimages/30.webp",
        alt: "MIDCON 2024",
        text: "JCI Nagpur Fortune First Installation Ceremony",
      },
      {
        src: "images/eventimages/31.webp",
        alt: "MIDCON 2024",
        text: "JCI Nagpur Fortune First Installation Ceremony",
      },
      {
        src: "images/eventimages/32.webp",
        alt: "MIDCON 2024",
        text: "JCI Nagpur Fortune First Installation Ceremony",
      },
      {
        src: "images/eventimages/33.webp",
        alt: "MIDCON 2024",
        text: "JCI Nagpur Fortune First Installation Ceremony",
      },
      {
        src: "images/eventimages/34.webp",
        alt: "MIDCON 2024",
        text: "JCI Nagpur Fortune First Installation Ceremony",
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
                activeTab === "FirstInstallationCeremony" ? "active" : ""
              }
              onClick={() => toggleTab("FirstInstallationCeremony")}
            >
              <strong>First Installation Ceremony</strong>
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
