"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Home Page</h1>
      </main>
    </div>
  );
}
