"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function EpicImage() {
  const [imageData, setImageData] = useState(null);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const date = searchParams.get("date") || "2024-01-01";

  useEffect(() => {
    const fetchEpicImage = async () => {
      try {
        const API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY;
        const res = await fetch(
          `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${API_KEY}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setImageData(data[0]);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchEpicImage();
  }, [date]);
  if (error) {
    return <p>Error: {error}</p>;
  }
  if (!imageData) {
    return <p>Loading...</p>;
  }
  const formattedDate = date.replaceAll("-", "/");
  const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${formattedDate}/png/${imageData.image}.png`;

  return (
    <div>
      <h1>NASA EPIC Image for {date}</h1>
      <img src={imageUrl} alt={`EPIC image for ${date}`} />
      <p>Caption: {imageData.caption}</p>
    </div>
  );
}
