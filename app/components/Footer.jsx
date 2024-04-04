import Link from "next/link";
import Image from 'next/image';
import logo from '@/assets/images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (<footer className="mt-24 bg-gray-200 py-4">
    <div className="mx-auto container px-4 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <Image src={logo} alt="Logo" className="w-auto h-8" /></div>
      <div className="mb-4 md:mb-0 flex flex-wrap justify-center md:justify-start">
        <ul className="flex space-x-8">
          <li><Link href="/properties">Properties</Link></li>
          <li><Link href="/terms">Terms of Service</Link></li></ul></div>
      <div>
        <p className="mt-2 md:mt-0 text-sm text-gray-500">
            &copy; {currentYear} PropertyPulse. All rights reserved.</p></div></div></footer>)}

export default Footer;