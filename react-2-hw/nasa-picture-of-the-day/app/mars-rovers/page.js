"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

const API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY;

const marsRoverPhoto = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`;

const RoverPhoto = ({ src, caption, roverName }) => {
  return (
    <div>
      <h4>{roverName}</h4>
      <img src={src} alt={`${roverName} Rover Photo`} />
      <p>{caption}</p>
    </div>
  );
};

export default function MarsPhotoOfTheDay() {
  const [marsPhotos, setMarsPhotos] = useState({});

  useEffect(() => {
    const fetchMarsPhotos = async () => {
      try {
        const marsPhotoResponse = await fetch(marsRoverPhoto);
        const marsPhotos = await marsPhotoResponse.json();
        setMarsPhotos(marsPhotos);
      } catch (error) {
        console.error("Error fetching Mars Rover photos:", error);
      }
    };
    console.log(marsPhotos);
    fetchMarsPhotos();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Mars Photo of the Day</h1>
      {marsPhotos?.photos?.length ? (
        marsPhotos.photos.map((photo, index) => (
          <RoverPhoto
            key={index}
            roverName={photo.rover.name}
            caption={photo.rover.explanation}
            src={photo.img_src}
          />
        ))
      ) : (
        <p>Loading rover photos...</p>
      )}
    </div>
  );
}
