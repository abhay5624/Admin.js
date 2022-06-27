import React from "react";
import Avatar from "../Assets/myAvatar.jfif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { NavLinkAction } from "../Actions";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Aside = () => {
  const Dispatch = useDispatch();
  const ActiveLink = useSelector((state) => state.NavLink);
  const [ActiveCurrent, setActiveCurrent] = useState(ActiveLink.ActiveLink);
  const TooggleHangler = () => {
    const listcollection = document.getElementsByClassName("linkList");
    const list = listcollection[0].children;
    if (ActiveLink.ActiveLink === "Dashboard") {
      list[0].className = "ActiveLink";
    } else if (ActiveLink.ActiveLink === "Profile") {
      list[1].className = "ActiveLink";
    } else if (ActiveLink.ActiveLink === "Forms") {
      list[2].className = "ActiveLink";
    } else if (ActiveLink.ActiveLink === "orders") {
      list[3].className = "ActiveLink";
    } else if (ActiveLink.ActiveLink === "salles") {
      list[4].className = "ActiveLink";
    } else if (ActiveLink.ActiveLink === "Books") {
      list[5].className = "ActiveLink";
    }
    setActiveCurrent(ActiveLink.ActiveLink);
  };
  const unTooggleHangler = () => {
    const listcollection = document.getElementsByClassName("linkList");
    const list = listcollection[0].children;
    if (ActiveLink.ubActiveLink === "Dashboard") {
      list[0].className = "UnActiveLink";
    } else if (ActiveLink.ubActiveLink === "Profile") {
      list[1].className = "UnActiveLink";
    } else if (ActiveLink.ubActiveLink === "Forms") {
      list[2].className = "UnActiveLink";
    } else if (ActiveLink.ubActiveLink === "orders") {
      list[3].className = "UnActiveLink";
    } else if (ActiveLink.ubActiveLink === "salles") {
      list[4].className = "UnActiveLink";
    } else if (ActiveLink.ubActiveLink === "Books") {
      list[5].className = "UnActiveLink";
    }
  };
  useEffect(() => {
    TooggleHangler();
    unTooggleHangler();
  }, [ActiveLink.ActiveLink]);

  return (
    <aside>
      <div className="AdminPannel flexbox">
        <div>
          <img src={Avatar} alt="Avatar" />
        </div>

        <div>
          <h3>Abhay</h3>
          <div className="flexbox">
            <h4 className="lowlight">Administrator</h4>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </div>
      </div>
      <div className="linkList flexbox">
        <Link
          to="/"
          className="ActiveLink"
          onClick={() => {
            const state = {
              ActiveLink: "Dashboard",
              ubActiveLink: ActiveCurrent,
            };
            Dispatch(NavLinkAction(state));
          }}
        >
          Dashboard
        </Link>
        <Link
          to="/Profiles"
          className="UnActiveLink"
          onClick={() => {
            const state = {
              ActiveLink: "Profile",
              ubActiveLink: ActiveCurrent,
            };
            Dispatch(NavLinkAction(state));
          }}
        >
          Profile
        </Link>
        <Link
          to="/Forms"
          className="UnActiveLink"
          onClick={() => {
            const state = {
              ActiveLink: "Forms",
              ubActiveLink: ActiveCurrent,
            };
            Dispatch(NavLinkAction(state));
          }}
        >
          Forms Responses
        </Link>
        <Link
          to="/orders"
          className="UnActiveLink"
          onClick={() => {
            const state = {
              ActiveLink: "orders",
              ubActiveLink: ActiveCurrent,
            };
            Dispatch(NavLinkAction(state));
          }}
        >
          Orders
        </Link>
        <Link
          to="/salles"
          className="UnActiveLink"
          onClick={() => {
            const state = {
              ActiveLink: "salles",
              ubActiveLink: ActiveCurrent,
            };
            Dispatch(NavLinkAction(state));
          }}
        >
          Growth
        </Link>
        <Link
          to="Books"
          className="UnActiveLink"
          onClick={() => {
            const state = {
              ActiveLink: "Books",
              ubActiveLink: ActiveCurrent,
            };
            Dispatch(NavLinkAction(state));
          }}
        >
          Books
        </Link>
      </div>
    </aside>
  );
};

export default Aside;
