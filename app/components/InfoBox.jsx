import Link from "next/link";

const InfoBox = ({backgroundColor = "bg-gray-100", textColor = "text-gray-800", heading, children,
buttonInfo}) => {
  return (<div className={`shadow-md rounded-lg p-6 ${backgroundColor}`}>
    <h2 className={`text-2xl font-bold ${textColor}`}>{heading}</h2>
    <p className={`mt-2 mb-4 ${textColor}`}>{children}</p>
    <Link href={buttonInfo.link} className={`inline-block rounded-lg ${buttonInfo.backgroundColor}
        px-4 py-2 text-white hover:opacity-80`}>{buttonInfo.text}</Link></div>)}

export default InfoBox;