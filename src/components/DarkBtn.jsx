import React, { useEffect, useState } from "react";
import "../DarkBtn.style.css";

const DarkBtn = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <>
      <input
        type="checkbox"
        id="switch"
        checked={isDark}
        onChange={() => setIsDark(!isDark)}
      />
      <label htmlFor="switch"></label>
    </>
  );
};

export default DarkBtn;
