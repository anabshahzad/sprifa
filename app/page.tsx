import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Products } from "@/components/Products";
import { Process } from "@/components/Process";
import { WhySprifa } from "@/components/WhySprifa";
import { Technology } from "@/components/Technology";
import { Industries } from "@/components/Industries";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Products />
        <Process />
        <WhySprifa />
        <Technology />
        <Industries />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
