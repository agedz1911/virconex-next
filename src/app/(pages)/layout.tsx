import Footer from "@/components/Navigation/Footer";
import Navbar from "@/components/Navigation/Navbar";
import { ReactNode } from "react";

const PagesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full h-screen mx-auto">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default PagesLayout;
