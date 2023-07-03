import React, { useState } from "react";
import style from "./MobileView.module.css";
import { RiMenu4Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Nav } from "../../Data/Data";
import { Link as ScrollLink } from "react-scroll";
const MobileView = () => {
  const [openMenu, setOpenMenu] = useState(false);
  function OpenMenu() {
    setOpenMenu(true);
  }

  return (
    <>
      {openMenu ? (
        <div className={style.mobile_view}>
          <RxCross2
            className={style.close_menu}
            onClick={() => setOpenMenu(false)}
          />
          {Nav.slice(1).map((list, index) => (
            <div key={index}>
              <ScrollLink
                activeClass={style.active}
                to={list.path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                onClick={() => setOpenMenu(false)}
              >
                {list.name}
              </ScrollLink>
            </div>
          ))}
        </div>
      ) : (
        <div className={style.wrapper}>
          <div className={style.wrapper_mobileNav}>
            <nav className={style.logo_nge}>
              NGE<span className={style.gym}>GYM</span>
              <span className={style.hand_logo}>&#128170;</span>
            </nav>
            <nav className={style.menu}>
              <RiMenu4Fill onClick={OpenMenu} />
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileView;
