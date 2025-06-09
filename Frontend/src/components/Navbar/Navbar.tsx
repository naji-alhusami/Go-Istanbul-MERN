import { useLocation } from "react-router-dom";

import NavbarUser from "./NavbarUser";
import NavbarGuest from "./NavbarGuest";
import { useState } from "react";

function Navbar() {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const [showSideNavbar, setShowSideNavbar] = useState<boolean>(false);

  function toggleButtonHandler() {
    setIsToggled(!isToggled);
    setShowSideNavbar(!showSideNavbar);
  }

  const location = useLocation();
  const isUserPage = location.pathname === "/user";

  return (
    <>
      {isUserPage ? (
        <NavbarUser
          isToggled={isToggled}
          showSideNavbar={showSideNavbar}
          toggleButtonHandler={toggleButtonHandler}
          isUserPage={isUserPage}
        />
      ) : (
        <NavbarGuest
          isToggled={isToggled}
          showSideNavbar={showSideNavbar}
          toggleButtonHandler={toggleButtonHandler}
          isUserPage={isUserPage}
        />
      )}
    </>
  );
}

export default Navbar;
