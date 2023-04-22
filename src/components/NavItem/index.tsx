import { Link } from "react-router-dom";
import cx from "classnames";
import "./index.css";

import { FC } from "react";

interface NavItemProps {
  itemName: string;
  pathname: string;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  linkTo: string;
}

const NavItem: FC<NavItemProps> = ({
  itemName,
  pathname,
  setState,
  linkTo,
}) => {
  return (
    <li>
      <Link
        className={cx("nav__item", {
          "nav__item--active": pathname === linkTo,
        })}
        to={linkTo}
        onClick={() => {
          setState(false);
        }}
      >
        {itemName}
      </Link>
    </li>
  );
};

export default NavItem;
