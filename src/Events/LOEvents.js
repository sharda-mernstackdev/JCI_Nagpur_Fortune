import React from "react";


const artists = [
  {
    name: "Chhatrapati Shivaji Maharaj Jayanti  celebrated .",
    img: "images/eventimages/shivajimaharajjayanti.png",
  },
  {
    name: "Chhatrapati Shivaji Maharaj Jayanti  celebrated .",
    img: "images/eventimages/shivajimaharajjayanti.png",
  },
  {
    name: "Chhatrapati Shivaji Maharaj Jayanti  celebrated .",
    img: "images/eventimages/shivajimaharajjayanti.png",
  },
  
];


const LOEvents = () => {
  return (
   
    <div className="gallery-container">
      <h1 className="gallery-title">Our LO Upcoming Events</h1>
      <div className="gallery-grid">
        {artists.map((artist, index) => (
          <div key={index} className="gallery-card">
            <img src={artist.img} alt={artist.name} className="gallery-image" />
            <h2 className="artist-name">{artist.name}</h2>
            <p className="artist-role">{artist.role}</p>
            <p className="artist-contact">{artist.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LOEvents;
