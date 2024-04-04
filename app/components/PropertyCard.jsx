import Link from 'next/link';
import {FaBed, FaBath, FaRulerCombined, FaMoneyBill, FaMapMarker} from "react-icons/fa";
import Image from 'next/image';

const PropertyCard = ({ property }) => {  
  const {rates} = property;

  const getRateDisplay = () => {
    if (rates.monthly) {return `${rates.monthly.toLocaleString()}$/mo`}
      else if (rates.weekly) {return `${rates.weekly.toLocaleString()}$/wk`}
      else {return `${rates.nightly.toLocaleString()}$/night`}}
  
  return (<div className="relative rounded-xl shadow-md">
    <Image src={`/images/properties/${property.images[0]}`} alt="" width="1280" height="720"
        className="w-full h-auto rounded-t-xl"/>
    <div className="p-4">
      <div className="mb-6 text-left md:text-center lg:text-left">
        <div className="text-gray-600">{property.type}</div>
        <h3 className="text-xl font-bold">{property.name}</h3></div>
      <h3 className="absolute right-1 top-1 rounded-lg bg-white px-1 text-right
          md:text-center lg:text-right text-sm font-bold text-blue-500">{getRateDisplay()}</h3>
      <div className="mb-4 flex justify-center gap-6 text-gray-500">
        <p><FaBed className="inline mr-1"/>{property.beds}<span className="ml-0.5 md:hidden lg:inline">
            Beds</span></p>
        <p><FaBath className="inline mr-1"/>{property.baths}<span className="ml-0.5 md:hidden lg:inline">
            Baths</span></p>
        <p><FaRulerCombined className="inline mr-1"/>{property.square_feet}
            <span className="ml-0.5 md:hidden lg:inline">sqft</span></p></div>
      <div className="mb-4 flex justify-center gap-6 text-sm text-green-900">
        {rates.monthly && (<p><FaMoneyBill className="inline mr-1"/>Monthly</p>)}
        {rates.weekly && (<p><FaMoneyBill className="inline mr-1"/>Weekly</p>)}
        {rates.nightly && (<p><FaMoneyBill className="inline mr-1"/>Nightly</p>)}</div>
      <div className="mb-5 border border-gray-100"></div>
      <div className="mb-4 flex flex-col lg:flex-row justify-between">
        <div className="mb-4 lg:mb-0 flex align-middle gap-1">
          <FaMapMarker className="text-lg text-orange-700"/>
          <span className="text-orange-700 ml-0.5">
              {property.location.city}, {property.location.state}</span></div>
        <Link href={`/properties/${property._id}`} className="h-9 rounded-lg bg-blue-500 px-4 py-2
            text-center text-sm text-white hover:bg-blue-600">Details</Link></div></div></div>)}

export default PropertyCard;