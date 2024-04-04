import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (<section>
    <div className="container-xl lg:container m-auto">
      <div className="rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <InfoBox backgroundColor="bg-gray-100" heading="For Renters"
            buttonInfo={{link:"/properties", backgroundColor:"bg-black", text:"Browse Properties"}}>
                Find your dream rental property. Bookmark properties and contact owners.</InfoBox>
        <InfoBox backgroundColor="bg-blue-100" heading="For Property Owners"
            buttonInfo={{link:"/properties/add", backgroundColor:"bg-blue-800", text:"Add Property"}}>
                List your properties and reach potential tenants. Rent as an Airbnb or long term.
        </InfoBox></div></div></section>)}

export default InfoBoxes;