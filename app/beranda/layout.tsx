import React from "react";
import Navbar from "./components/Navbar";

export default function BerandaLayout({ children } : { children : React.ReactNode }){
    return(
        <main>
            <Navbar />
            {children}
        </main>
    );
}   