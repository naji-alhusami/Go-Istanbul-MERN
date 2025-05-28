import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";

import SmallNavbar from "./SmallNavbar";
import MiddleUserNavbar from "./MiddleUserNavbar";
import MiddleGuestNavbar from "./MiddleGuestNavbar";
import LargeUserNavbar from "./LargeUserNavbar";

function Navbar() {
  const location = useLocation();
  const isUserPage = location.pathname === "/test";

  const isSmallScreen = useMediaQuery({ maxWidth: 837 });
  const isMediumScreen = useMediaQuery({ minWidth: 838, maxWidth: 1110 });
  const isLargeScreen = useMediaQuery({ minWidth: 1110 });

  return (
    <>
      {isSmallScreen && <SmallNavbar />}
      {isMediumScreen && isUserPage && <MiddleUserNavbar />}
      {(isMediumScreen || isLargeScreen) && !isUserPage && (
        <MiddleGuestNavbar />
      )}
      {isLargeScreen && <LargeUserNavbar />}
    </>
  );
}

export default Navbar;
