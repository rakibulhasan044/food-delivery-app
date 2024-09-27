import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen m-2 md:ms-0">
            <header>
                <Navbar />
            </header>
            <div className="flex-1">
            <Outlet />
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default MainLayout;