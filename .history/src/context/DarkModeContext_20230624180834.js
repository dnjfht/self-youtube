import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {}, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function upadateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    // 토글링(업데이트)이 될 때마다 로컬 스토리지에도 저장을 해줌.
    // 로컬 스토리지에 저장을 해주면 새로고침을 해도 상태를 기억하고 있음.
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
}
