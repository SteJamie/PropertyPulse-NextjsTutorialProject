'use client';
import { useRouter } from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();
  console.log(router);
  return (<div>
    <button onClick={() => router.replace("/")} className="bg-blue-500 p-2">Return to Homepage</button>
  </div>)}

export default PropertyPage