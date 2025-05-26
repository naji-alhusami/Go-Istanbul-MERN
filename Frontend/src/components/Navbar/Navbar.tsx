import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";

import SmallNavbar from "./SmallNavbar";
import MiddleNavbar from "./MiddleNavbar";
import LargeNavbar from "./LargeNavbar";

function Navbar() {
  const location = useLocation();
  const isUserPage = location.pathname === "/test";

  const isSmall = useMediaQuery({ maxWidth: 767 });
  const isMedium = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isLarge = useMediaQuery({ minWidth: 1024 });

  return (
    <>
      {isSmall && isUserPage && <SmallNavbar />}
      {isMedium && <MiddleNavbar />}
      {isLarge && <LargeNavbar />}
    </>
  );
}

export default Navbar;
