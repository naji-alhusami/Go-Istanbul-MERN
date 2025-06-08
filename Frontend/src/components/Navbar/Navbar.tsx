import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import SmallNavbar from "./SmallNavbar";
import MiddleUserNavbar from "./MiddleUserNavbar";
import MiddleGuestNavbar from "./MiddleGuestNavbar";
import LargeUserNavbar from "./LargeUserNavbar";

function Navbar() {


  const location = useLocation();
  const isUserPage = location.pathname === "/user";

  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1110 });
  const isLargeScreen = useMediaQuery({ minWidth: 1110 });

  return (
    <>
      {isSmallScreen && <SmallNavbar />}
      {isMediumScreen && isUserPage && <MiddleUserNavbar />}
      {(isMediumScreen || isLargeScreen) && !isUserPage && (
        <MiddleGuestNavbar />
      )}
      {isLargeScreen && isUserPage && <LargeUserNavbar />}
    </>
  );
}

export default Navbar;
