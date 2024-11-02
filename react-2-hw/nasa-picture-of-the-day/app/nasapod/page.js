"use client";
//require("dotenv").config();
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

const API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY;

const NASA_URLs = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

export function NasaPictureOfTheDay() {
  const [image, setImage] = useState({});

  const fetchNasaPhotos = async () => {
    try {
      const nasaPhotoResponse = await fetch(NASA_URLs).then((response) =>
        response.json()
      );
      setImage(nasaPhotoResponse);
    } catch (error) {
      console.error("Error fetching Nasa Photo of The Day:", error);
    }
  };

  fetchNasaPhotos();

  return (
    <div>
      <Navbar />
      <h1>{image.title}</h1>
      <p>{image.caption}</p>
      <img src={image.url}></img>
    </div>
  );
}

export default NasaPictureOfTheDay;
