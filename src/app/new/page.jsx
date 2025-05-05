import { ClienteForm } from "@/components/ClienteForm";
import Header from "@/components/Header";

const newPage = () => {
  return (
    <section>
      <Header />
      <div className="flex py-28 justify-center items-center h-full">
        {" "}
        <ClienteForm />
      </div>
    </section>
  );
};

export default newPage;
