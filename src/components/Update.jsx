
const Update = () => {
  return (
    <div className="my-40">
      <h2 className="text-6xl font-semibold tracking-tight text-center">Updates</h2>

      {/* list show */}
      <div className="box py-8">
        {/* list1 */}
        <div className="flex py-4 border-t-b items-center justify-between relative h-[10vh] group">
          <div className="md:text-lg text-sm px-3">Mens <br /> Fashion</div>
          <div className=" h-full p-2 absolute left-[15%] md:opacity-0 group-hover:opacity-100 opacity-0 group-hover:left-[30%] transition-all duration-500">
            <img className="w-full h-full object-cover  rounded-full" src="https://images.unsplash.com/photo-1649485124861-1802bfd7c75c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxmYXNoaW9uJTIwbW9kZWx8ZW58MHwyfDB8fHww" alt="" />
          </div>
          <div className="w-1/2 ">
            <h2 className="md:text-3xl text-lg font-bold md:mb-2 mb-1">Khadim & Tom Ford</h2>
            <p className="uppercase tracking-tight">25th march 2026</p>
          </div>
        </div>
        {/* list1 */}

        {/* list2 */}
        <div className="flex py-4 border-b-2 items-center justify-between relative h-[10vh] group">
          <div className="md:text-lg text-sm px-3">Women <br /> Fashion</div>
          <div className=" h-full p-2 absolute left-[40%] md:opacity-0 group-hover:opacity-100 opacity-0 group-hover:left-[20%] transition-all duration-500">
            <img className="w-full h-full object-cover  rounded-full" src="https://images.unsplash.com/photo-1581459931275-2fb0f4e85679?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxmYXNoaW9uJTIwbW9kZWx8ZW58MHwyfDB8fHww" alt="" />
          </div>
          <div className="w-1/2 ">
            <h2 className="md:text-3xl text-lg font-bold md:mb-2 mb-1">Arena Homme</h2>
            <p className="uppercase tracking-tight">3rd february 2020</p>
          </div>
        </div>
        {/* list2*/}
         {/* list3 */}
        <div className="flex py-4 border-b-2 items-center justify-between relative h-[10vh] group">
          <div className="md:text-lg text-sm px-3">Special <br /> View</div>
          <div className=" h-full p-2 absolute left-[15%] md:opacity-0 group-hover:opacity-100 opacity-0 group-hover:left-[30%] transition-all duration-500 flex flex-col  justify-center">
            <h3 className="md:text-xl text-lg font-bold">Exclusive</h3>
            <p className="uppercase">2020 Redesign</p>
          </div>
          <div className="w-1/2  ">
            <h2 className="md:text-3xl text-lg font-bold mb-2">Jing for Wonderland</h2>
            <p className="uppercase tracking-tight">14th january 2020</p>
          </div>
        </div>
        {/* list3*/}
         {/* list4 */}
        <div className="flex py-4 border-b-2 items-center justify-between relative h-[10vh] group">
          <div className="md:text-lg text-sm px-3 ">Models <br /> Talk</div>
          <div className=" h-full p-2 absolute left-[40%] md:opacity-0 group-hover:opacity-100 opacity-0 group-hover:left-[20%] transition-all duration-500 flex md:flex-col   justify-center">
            <h3 className="text-xl font-bold">Exclusive</h3>
            <p className="uppercase">2020 Redesign</p>
          </div>
          <div className="w-1/2  ">
            <h2 className="md:text-3xl text-lg font-bold md:mb-2 mb-1">Glass x Belle</h2>
            <p className="uppercase tracking-tight">08th january 2020</p>
          </div>
        </div>
        {/* list4*/}
       
      </div>
    </div>
  )
}

export default Update