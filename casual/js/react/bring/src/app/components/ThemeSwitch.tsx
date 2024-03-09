"use client";

import {FiSun, FiMoon} from "react-icons/fi";
import {useState, useEffect} from "react";
import {useTheme} from "next-themes";

export const ThemeSwitcher = () => {
  const {setTheme, resolvedTheme} = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  if(!mounted){
    return null;
  }

  if(resolvedTheme === "dark"){
    return <FiSun onClick={() => setTheme("light")}/>
  }
  if(resolvedTheme === "light"){
    return <FiMoon onClick={() => setTheme("dark")}/>
  }
}
