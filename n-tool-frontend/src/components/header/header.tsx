"use client";

import React, { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input"; 
import { Switch } from "@/components/ui/switch"; 
import "./header.css";

interface HeaderProps {
  orderedFolders: { name: string; index: number }[];
}

export default function Header({ orderedFolders }: HeaderProps) {
  const [isRootMode, setIsRootMode] = useState(true);

  useEffect(() => {
    const rootElement = document.documentElement;
    if (isRootMode) {
      rootElement.classList.remove("light");
      rootElement.classList.add("root");
    } else {
      rootElement.classList.remove("root");
      rootElement.classList.add("light");
    }
  }, [isRootMode]);

  const toggleTheme = () => {
    setIsRootMode((prevMode) => !prevMode);
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <NavigationMenu>
          <NavigationMenuList className="nav-list w-full">
            {orderedFolders.map((folder) => (
              <NavigationMenuItem key={folder.name} className="nav-item">
                <NavigationMenuLink href={`/${folder.name}`} className="nav-link">
                  {folder.name.charAt(0).toUpperCase() + folder.name.slice(1)}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
       
        <div className="dark-light-switch">
          <Switch checked={!isRootMode} onCheckedChange={toggleTheme} />
        </div>
      </nav>
    </header>
  );
}
