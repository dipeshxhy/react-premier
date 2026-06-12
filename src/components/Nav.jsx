const Nav = () => {
  return (
    <div className="mt-8 border-t-[1px] border-b-[1px] border-stone-300 ">
      <nav className="box  flex items-center  h-20">
        <div className="text-3xl font-black  relative w-[20vw] flex items-center h-full">
          <h2 className="logo w-full">premier</h2>
        </div>
        <div className="w-full h-full ">
          <ul className="flex items-center justify-around h-full">
            <li className="text-xl flex-1  justify-center h-full flex items-center">
              Models
            </li>
            <li className="text-xl flex-1  justify-center h-full flex items-center">
              Women / Man
            </li>
            <li className="text-xl flex-1  justify-center h-full flex items-center">
              Agency / Blog / Information
            </li>
            <li className="text-xl flex-1  justify-center h-full flex items-center ">
              <span>
                <i class="ri-search-line text-2xl"></i>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
