import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    // 스토리지가 다크 모드인지, 웹사이트가 다크 모드인지 등
    // 사용자의 브라우저 세팅 값을 판단한 다음에
    // 다크 모드인지 아닌지를 확인
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

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
