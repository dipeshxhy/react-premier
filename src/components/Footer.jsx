
const Footer = () => {
  return (
    <div className="md:h-[20vh] h-full w-full mt-40 border-t-b">
      <div className="h-full">
    <div className="flex  flex-col md:flex-row justify-between h-full  ">
      <h2 className=" text-6xl font-black md:flex-2 md:px-[8vw]">Premier</h2>
      <h3 className="text-xl flex-1 flex justify-center md:border-r-2 md:border-l-2 border md:border-0">Models</h3>
      <h3 className="text-xl flex-1 flex justify-center md:border-r-2 border md:border-0">Women / Men</h3>
      <div className="h-[20vh]">
        <h3 className="text-xl flex-2 justify-center  flex md:border-b-2 h-[10vh] border md:border-0">Agency / blog / information / contact us</h3>
        <div className="flex flex-col px-5 justify-center h-[10vh]">
          <ul className="flex gap-6 items-center">
            <li>instagram</li>
            <li>facebook</li>
            <li>twitter</li>
            <li>linkedin</li>
          </ul>
          <p className="text-lg text-gray-500">&copy; 2023 Premier. All rights reserved.</p>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Footer