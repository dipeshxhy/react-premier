const Nav = () => {
  return (
    <div className="mt-8 border-t-[2px] border-b-[2px] ">
      <nav className="box  flex items-center  h-20">
        <div className="text-3xl font-black flex items-center  md:w-[30vw] w-full justify-center  h-full relative md:justify-start border-r-2 md:border-r-0">
          <h2 className="logo ">premier</h2>
        </div>
        <div className="w-full h-full hidden md:inline-block">
          <ul className="flex items-center justify-around h-full">
            <li className="lg:text-xl md:text-[18px] flex-1  justify-center h-full  flex items-center">
              Models
            </li>
            <li className="lg:text-xl md:text-[18px] flex-1  justify-center h-full flex items-center border-l-2 border-r-2">
              Women / Man
            </li>
            <li className="lg:text-xl md:text-[18px] flex-2  justify-center h-full flex items-center border-r-2">
              Agency / Blog / Information
            </li>
            <li className="lg:text-xl md:text-[18px] flex-1  justify-center h-full flex items-center ">
              <span>
                <i class="ri-search-line text-2xl"></i>
              </span>
            </li>
          </ul>
        </div>
        {/* mobile */}
        <div className="w-full h-full inline-block md:hidden">
          <ul className="flex items-center justify-end h-full">
            <li className="lg:text-xl md:text-[18px] flex-1   h-full flex justify-end items-center ">
              <span>
                <i class="ri-search-line text-2xl"></i>
              </span>
              <span>
                <i class="ri-menu-line text-2xl ml-4"></i>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
