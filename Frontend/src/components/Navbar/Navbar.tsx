import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import NavbarUser from "./NavbarUser";
import NavbarGuest from "./NavbarGuest";

function Navbar() {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const [showSideNavbar, setShowSideNavbar] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  function toggleButtonHandler() {
    setIsToggled(!isToggled);
    setShowSideNavbar(!showSideNavbar);
  }

  const location = useLocation();
  const isUserPage = location.pathname === "/user";

  useEffect(() => {
    const triggerPoint = isUserPage ? 50 : 200;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isUserPage]);

  return (
    <>
      {isUserPage ? (
        <NavbarUser
          isToggled={isToggled}
          showSideNavbar={showSideNavbar}
          isUserPage={isUserPage}
          isScrolled={isScrolled}
          toggleButtonHandler={toggleButtonHandler}
        />
      ) : (
        <NavbarGuest
          isToggled={isToggled}
          showSideNavbar={showSideNavbar}
          isScrolled={isScrolled}
          toggleButtonHandler={toggleButtonHandler}
        />
      )}
    </>
  );
}

export default Navbar;
