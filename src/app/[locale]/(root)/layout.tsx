import { NextPage } from "next";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

interface Props {
  children: React.ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <main className="max-w-[1000px] mx-auto min-h-screen flex flex-col px-4">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
