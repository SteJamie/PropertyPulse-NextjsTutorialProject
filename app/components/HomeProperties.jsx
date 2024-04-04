import Link from 'next/link';
import properties from "@/properties.json";
import PropertyCard from "../components/PropertyCard";

const HomeProperties = () => {
  /* Function to shuffle an array 'arr' (by me and ChatGPT; we only work with integers instead of the
    'properties' objects and I find our function clearer than the one provided in the class) */
  function shuffleArray(arr) {
    // Creates 'indices' = [0, 1, 2, ..., arr.length - 1]
    const indices = Array.from(Array(arr.length).keys());
    // Generates 'randomValues' with a random value for each index
    const randomValues = indices.map(() => Math.random());
    // Sort 'indices' based on the sorting of 'randomValues'
    const shuffledIndices = indices.sort((a, b) => randomValues[a] - randomValues[b]);
    // Returns a shuffled version of the original array
    return shuffledIndices.map((index) => arr[index])}
  
  const randomProperties = shuffleArray(properties);
  /* In the end we only keep the first 3 properties (so it would have been more efficient to randomly
    choose 3 different integers in {0, ..., arr.length - 1}) */
  const homePageProperties = randomProperties.slice(0,3);

  return (<>
    <section className="px-4 py-6">
      <div className="m-auto container-xl lg:container">
        <h2 className="mb-6 text-center text-3xl font-bold text-blue-500">Recent Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {homePageProperties.map((property, index) =>
                (<PropertyCard key={index} property={property} />))}</div></div></section>
    <section className="m-auto my-10 max-w-lg px-6">
      <Link href="/properties" className="block rounded-xl bg-blue-700 px-6 py-4 text-center
          text-white hover:bg-violet-600">View All Properties</Link></section></>)}

export default HomeProperties