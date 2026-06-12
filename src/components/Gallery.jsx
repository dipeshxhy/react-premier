
const Gallery = () => {
  return (
    <div className="mt-20">
      {/* sect1 */}
      <div className="md:box grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4 grid-rows-[1fr_auto_auto]">
        {/* first part */}
        <div className="bg-img "></div>
        {/*end first part */}
        {/* second part */}
        <div className="md:w-[80%] w-full row-start-3 md:row-start-1 col-start-1 md:col-start-2">
          <div className="w-full">
            <img className="w-full h-[60vh] object-cover" src="https://images.unsplash.com/photo-1536640217560-1085f2c1bcdb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE2fHxmYXNoaW9uJTIwbW9kZWx8ZW58MHwyfDB8fHww" alt="" />
          </div>
          {/* text */}
          <div className="flex row-start-3 flex-col md:flex-row w-full  gap-6 md:h-[20vh]  py-4">
            <div className="md:w-[40%] w-full">
              <h2 className="md:text-lg text-sm text-center md:text-left font-bold">Hannah Motler feature in a fashion story by the lake for vogue shot</h2>
            </div>
            <div className="md:w-[70%] h-full ">
              <p className="md:text-lg text-sm text-center md:text-left font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus libero esse, ex adipisci molestias corporis?</p>
            </div>
          </div>
          {/*end  text */}

        </div>
        {/*end second part */}

       {/* sec2 */}
      <div className="md:box mt-3 w-full row-start-2">
        <h3 className="uppercase w-full space-x-1.5 text-5xl font-semibold text-center md:text-left">
          <span>vogue</span>
          <span>/</span>
          <span>shot</span>
        </h3>
      </div>
      {/* end sec2 */}
      </div>
      {/*end sect1 */}

      {/* sec2 */}
      <div className="grid pb-30 box gap-4 grid-cols-1 md:grid-cols-2 ">
        {/* first */}
        <div className="self-center h-full flex flex-col gap-6">
          <div className="w-65 self-center flex items-center  h-[50vh] ">
            <img className="w-full " src="/circle-text.jpg" alt="" />
          </div>
          <div className="self-end mt-auto">
            <p className="text-xl font-bold leading-6 tracking-wide">Maison ARTC:memories and culture, the base of futuristic fashion awareness.Tilila Oulhaj look</p>
          </div>
        </div>
        {/* end first */}

        {/* second part */}

        <div>
          <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1623577284502-d65cdc6ba0b6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkyfHxmYXNoaW9uJTIwbW9kZWx8ZW58MHwyfDB8fHww" alt="" />
        </div>
        {/*end  second part */}

      </div>
      {/*end  sec2 */}

      {/* third section */}
      <div className="box">
        <div className="bg-[url('https://images.unsplash.com/photo-1603448460771-a67bd49ed5ca?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHxmYXNoaW9uJTIwbW9kZWx8ZW58MHwyfDB8fHww')] w-full h-[60vh] bg-cover bg-[10%_40%]"></div>
      </div>
      {/* end third section */}
     

    </div>
  )
}

export default Gallery