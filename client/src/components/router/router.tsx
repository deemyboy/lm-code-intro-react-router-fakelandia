import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import { Home } from "../home/home";
import { Misdemeanour } from "../misdemeanour/misdemeanour";
import { Confession } from "../confession/confession";
import { Four0Four } from "../four0four/four0four";
import { Layout } from "../layout/layout";

export const Router = () => {
    //

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="misdemeanour" element={<Misdemeanour />} />
                <Route path="confession" element={<Confession />} />
                <Route path="*" element={<Four0Four />} />
            </Route>
        </Routes>
    );
};
