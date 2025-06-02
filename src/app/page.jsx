import { About } from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const page = () => {
  return (
    <section>
     <header>
       <Header />
     </header>
      <Hero />
      <About />
    </section>
  );
};

export default page;
