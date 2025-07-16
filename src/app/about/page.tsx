import Image from "next/image";
import Header from "@/components/header";
import Footer from '@/components/footer';
import SectionOne from '@/components/sectionone';

export default function Home() {
  return ( <div>
    <Header />
    <h1 className="text-white justify-center bg-black h-40 text-center p-20 text-lg font-extrabold">ABOUT</h1>
    <SectionOne />
<Footer />
    </div>
  );
}
