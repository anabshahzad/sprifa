import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Statement } from "@/components/Statement";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { Products } from "@/components/Products";
import { Process } from "@/components/Process";
import { WhySprifa } from "@/components/WhySprifa";
import { Technology } from "@/components/Technology";
import { Industries } from "@/components/Industries";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Statement />
        <Services />
        <Work />
        <Products />
        <Process />
        <WhySprifa />
        <Technology />
        <Industries />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
