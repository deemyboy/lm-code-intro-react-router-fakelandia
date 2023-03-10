import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { Nav } from "../nav/nav";
export const Layout: React.FC = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="p-6 flex-1 overflow-y-auto" style={{ flex: "1" }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
