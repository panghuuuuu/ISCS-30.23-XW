import React from "react";
import logo from "../assets/mithi_logo_colored.webp";

const ComingSoon = () => {
    return (
        <section className="flex flex-col h-screen bg-primaryBlue">
            <div className="login mx-auto my-auto flex flex-col items-center justify-center">
                <div className="login-form bg-primaryWhite w-[90%] sm:w-2/3 mt-50 bg-gray-200 rounded-lg shadow-md px-4 sm:px-8 py-12">
                    <div className="logo flex flex-col items-center justify-center">
                        <img className="img mb-6" src={logo} alt="Mithi Logo"></img>
                        <p className="text-center text-lg text-primaryBlue px-4 sm:px-12 tracking-tight font-medium mt-6 items-center justify-center">
                            The OrSem 2024 Mithi website will launch soon. Stay tuned, freshies!
                        </p>
                    </div>
                </div>
            </div>
            <div className="copyright-text text-center text-primaryWhite text-sm mt-8 mb-8">
                <p>
                    © OrSem 2024 Mithi. All rights reserved.
                </p>
            </div>
        </section>
    );
};

export default ComingSoon;
