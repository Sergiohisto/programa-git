import { About } from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Work from "@/components/Work";

const page = () => {
  return (
    <section>
      <header>
        <Header />
      </header>
      <Hero />
      <About />
      <Work />
    </section>
  );
};

export default page;
