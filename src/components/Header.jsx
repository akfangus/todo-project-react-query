import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ThemeChange } from "../redux/modules/darkMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import styles from "./Header.module.css";
export default function Header() {
  const dispatch = useDispatch();

  const Theme = useSelector((state) => state.darkMode.theme);

  const updateDarkMode = (darkMode) => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  };
  useEffect(() => {
    updateDarkMode(Theme);
  }, [Theme]);

  const btnThemeChange = () => {
    dispatch(ThemeChange());
  };

  /// style width
  const [divwidth, setDivwitdh] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setDivwitdh(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [divwidth]);

  return (
    <header className={styles.header} style={{ width: divwidth }}>
      <div>
        <IconButton aria-label="delete" size="large">
          <Link to="/">
            <HomeIcon />
          </Link>
        </IconButton>
      </div>
      <div>ALL TODO LIST</div>
      <div>
        <IconButton
          aria-label="delete"
          size="large"
          onClick={btnThemeChange}
          className={styles.toggle}
        >
          {!Theme ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </div>
    </header>
  );
}
