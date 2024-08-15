import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";

const Nav = () => {
  return (
    <header class="padding-x absolute z-10 w-full text-wrap py-8">
      <nav class="container mx-auto bg-black px-4">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
      </nav>
    </header>
  );
};

export default Nav;
