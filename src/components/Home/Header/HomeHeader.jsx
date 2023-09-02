import Logo from "./Logo";
import SearchBox from "./SearchBox";
import Signin from "./Signin";

const HomeHeader = () => {
  return (
    <div className=" bg-white sticky top-0 shadow-sm border-b z-50">
      <header className="flex items-center flex-wrap justify-between max-w-7xl pb-4 sm:pb-0 m-auto px-4 sm:px-8">
        {/* LOGO */}
        <Logo />

        {/* SEARCH BOX */}
        <SearchBox />

        {/* SIGN IN AND ACCOUNT */}
        <Signin />
      </header>
    </div>
  );
};

export default HomeHeader;
