/** @format */

import { Hero } from "@/components";
import { Navigationbar } from "@/components";
import { Categorycard, CategoryGrid } from "@/components/category";
import { Clueless, CollabBottom, Collabtop } from "@/components/collaboration";
import { DiscountSection } from "@/components/discount";
import { FooterSection } from "@/components/footer";
import { SectionInfinite } from "@/components/infiniteScrollAnimation";
import { Title } from "@/components/newdrop";
import { NewdropContainer } from "@/components/newdrop";
import { Card, TopSecond, Typer } from "@/components/second";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navigationbar />
      <section className="hero-section min-h-screen">
        <Hero />
        <SectionInfinite />
      </section>
      <section className="second-section h-auto w-full px-10 py-36 flex-col justify-center items-center">
        <TopSecond />
        <Card />
      </section>
      <section className="new-drop h-auto pb-32">
        <Title />
        <NewdropContainer />
      </section>
      <section className="category pb-10">
        <CategoryGrid />
      </section>
      <section className="w-full collaboration h-full p-10 flex flex-col content-center items-center justify-center gap-8">
        <Collabtop />
        <CollabBottom />
      </section>
      <DiscountSection />
      <footer>
        <FooterSection />
      </footer>
    </main>
  );
}
