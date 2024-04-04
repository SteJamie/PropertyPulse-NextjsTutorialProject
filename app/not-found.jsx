import Link from "next/link";
import {FaExclamationTriangle} from "react-icons/fa";

const NotFoundPage = () => {
  return (<section className="min-h-screen bg-blue-50 flex-grow">
    <div className="m-auto container max-w-2xl py-24">
      <div className="m-4 md:m-0 mb-4 border rounded-md shadow-md bg-white px-6 py-24">
        <div className="flex justify-center">
          {/*fa-5x sets the FontAwesome icon size to 5 times larger than its default size */}
          <FaExclamationTriangle className="text-yellow-400 text-8xl fa-5x" /></div>
        <div className="text-center">
          <h1 className="mt-4 mb-2 text-3xl font-bold">Page Not Found</h1>
          <p className="mb-10 text-xl text-gray-500">The page you are looking for does not exist.</p>
          <Link href="/" className="rounded bg-blue-700 px-6 py-4 font-bold text-white
              hover:bg-blue-800">Go Home</Link></div></div></div>
    <div className='flex-grow'></div></section>)}

export default NotFoundPage;