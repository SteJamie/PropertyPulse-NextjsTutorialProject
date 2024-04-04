const Hero = () => {
  return (<section className="mb-4 bg-blue-700 py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
            Find The Perfect Rental</h1>
        <p className="my-4 text-xl text-white">
            Discover the perfect property that suits your needs.</p></div>
      {/* Form Component */}
      <form className="mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center">
        <div className="mb-4 md:mb-0 w-full md:w-3/5 md:pr-2">
          <label htmlFor="location" className="sr-only">Location</label>
          <input id="location" type="text" placeholder="Enter Location (City, State, Zip, etc.)"
              className="w-full rounded-lg bg-white px-4 py-3 text-gray-800 focus:outline-none
              focus:ring focus:ring-blue-500"/></div>
        <div className="w-full md:w-2/5 md:pl-2">
          <label htmlFor="property-type" className="sr-only">Property Type</label>
          <select id="'property-type" className="w-full rounded-lg bg-white px-4 py-3
              text-gray-800 focus:outline-none focus:ring focus:ring-blue-500">
            <option value="All">All</option>
            <option value="House">House</option>
            <option value="Cabin Or Cottage">Cabin or Cottage</option>
            <option value="Apartment">Apartment</option>
            <option value="Loft">Loft</option>
            <option value="Condo">Condo</option>
            <option value="Studio">Studio</option>
            <option value="Room">Room</option>
            <option value="Other">Other</option></select></div>
        <button type="submit" className="mt-4 md:mt-0 md:ml-4 w-full md:w-auto rounded-lg
            bg-blue-500 px-6 py-3 text-white hover:bg-blue-600 focus:outline-none focus:ring
            focus:ring-blue-500">Search</button></form></div></section>)}

export default Hero;