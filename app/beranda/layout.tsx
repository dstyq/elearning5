import React from "react";
import Navbar from "./components/Navbar";

export default function BerandaLayout({ children } : { children : React.ReactNode }){
    return(
        <main className="min-h-screen bg-[#F5F1E8] dark:bg-[#17151C] transition-colors duration-200">
            <Navbar />
            {children}
        </main>
    );
}