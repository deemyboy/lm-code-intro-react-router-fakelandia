import React, { useState, useContext } from "react";

import { Misdemeanour } from "../../../types/misdemeanours.types";
export const Misdemeanours: React.FC = () => {
    const [misdemeanours, setMisdemeanours] = useState();

    const getMisdemeanours = async (): Promise<Misdemeanour[]> => {
        return fetch;
    };

    return (
        <>
            <h3 className="text-2xl font-normal leading-normal mt-0 mb-2 ">
                All Misdemeanours
            </h3>
            <p className="mt-4">What have you done!</p>
        </>
    );
};
