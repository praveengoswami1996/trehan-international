"use client";
import React, {ReactNode, createContext, useContext, useState } from "react";

//Shape of Context State
interface NavbarContextProps {
    isNavbarOpen: boolean;
    toggleNavbar: () => void;
}

//Creating the context
const NavbarContext = createContext<NavbarContextProps | undefined>(undefined);

//Navbar Provider Component Props
interface NavbarProviderProps {
  children: ReactNode
}

//Creating the Provider Component
export const NavbarProvider: React.FC<NavbarProviderProps> = ({ children }) => {
    const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

    const toggleNavbar = () => {
        setIsNavbarOpen(prevState => !prevState);
    }

    return (
        <NavbarContext.Provider value={{ isNavbarOpen, toggleNavbar }}>
            { children }
        </NavbarContext.Provider>
    )
} 

//Custom hook for using the Navbar Context
export const useNavbarContext = () => {
    const context = useContext(NavbarContext);
    if(context === undefined) {
        throw new Error("useNavbarContext must be used within a NavbarContextProvider");
    }
    return context;
}