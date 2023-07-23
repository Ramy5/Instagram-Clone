import Logo from "./Logo";
import SearchBox from "./SearchBox";
import Signin from "./Signin";

const HomeHeader = () => {
  return (
    <header className="flex items-center flex-wrap justify-between max-w-6xl m-auto px-2 sm:px-8">
      {/* LOGO */}
      <Logo />

      {/* SEARCH BOX */}
      <SearchBox />

      {/* SIGN IN AND ACCOUNT */}
      <Signin />
    </header>
  );
};

export default HomeHeader;
