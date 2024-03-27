function Body() {
  return (
    <>
      <div id="full-body" className=" w-screen h-auto flex">
        <div id="left-side" className=" w-3/5 px-24 pt-14 ">
          <h1 className=" text-8xl font-bold ">YOUR FEET DESERVE THE BEST</h1>
          <p className=" text-2xl font-medium mt-5">
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO TO HELP YOU WITH
            OUR SHOES.
          </p>


          {/* --------------change part after some learning react---------------- */}

          <div className="flex gap-10 mt-4">
            <button className=" bg-red-600 text-2xl font-bold text-white px-5 py-1 rounded-sm ">
              Shop Now
            </button>
            <button className="  text-2xl font-bold text-gray-600 border-2 border-gray-600 px-5 py-1 rounded-sm ">
              Category
            </button>
          </div>

          {/* --------------change part after some learning react---------------- */}


          <p className=" text-lg text-gray-600 mt-8">Also Available On</p>

          <div id="flipkart/amazonLogo" className="flex mt-2 gap-3">
                <img className="w-14" src="\public\images\flipkartLogo.webp" alt="" />
                <img className="w-14" src="\public\images\amazonLogo.webp" alt="" />
          </div>
        </div>

        <div id="right-side" className=" flex justify-center items-center">
            <img src="\public\images\Nike-Shoes.webp" alt="" />
        </div>
      </div>
    </>
  );
}

export default Body;
