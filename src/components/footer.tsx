import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; <Link href="/">2024 Responsive.io</Link></p>
    </footer>
  );
};

export default Footer;