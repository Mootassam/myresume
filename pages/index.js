import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Header } from "../components";
export default function Index() {
  return (
    <>
      <Header styles={styles} />
    </>
  );
}
