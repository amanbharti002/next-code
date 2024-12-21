'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  console.log("hello world");

  return (
    <>
      <h1>Hey Aman How are you </h1>
      <ul>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
      </ul>
    </>
  )
}
