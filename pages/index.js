import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { ResultCard } from "@/components/ResultCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex flex-col max-w-2xl m-auto px-4 py-4">
        <Header />
        <div>
          <SearchBar />
        </div>
        <ResultCard />
      </div>
    </>
  );
}
