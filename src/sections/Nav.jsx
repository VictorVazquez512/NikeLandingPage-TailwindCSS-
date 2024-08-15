import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";

const Nav = () => {
  return (
    <header class="padding-x py-8 absolute z-10 w-full text-wrap">
      <nav class="bg-black px-4 mx-auto container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
      </nav>
    </header>
  );
};

export default Nav;
