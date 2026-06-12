
const renderAlphabets = ()=>{
  return (
    <>
    {
      ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'].map((a,i)=>(
        <li key={i} className=" md:h-10 md:w-10 flex items-center justify-center rounded-full md:border-0 hover:border-2 duration-300 transition-all cursor-pointer uppercase text-lg md:text-lg ">{a}</li>
      ))
    }
    </>
  )
}
const Alphabets = () => {
  return (
    <div className="h-[10vh] border-t-b mt-20 overflow-x-auto">
      <ul className=" flex md:gap-3 gap-1.5 items-center h-full justify-center">
        <li className="md:text-3xl text-lg border-b-2 tracking-wider mr-2">All</li>
        {renderAlphabets()}

      </ul>
    </div>
  )
}

export default Alphabets