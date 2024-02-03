import React from "react";

const Feedback = () => {
    return (
        <div className="mt-[2rem] mb-[7rem]">
            <div className="container mx-auto">
                <div className="flex">
                    <div className="w-1/2 text-left">
                        <h1 className="text-4xl mt-8 font-bold">
                            <span className="text-green-500">Confused</span> about career choices?
                        </h1>
                        <h2 className="text-lg mt-8 text-gray-500">
                            Avail Career Counselling from India's best <br /> Career Experts
                        </h2>
                        
                        <div className="border border-green-500 rounded mt-7 p-4">
                            <h3 className="text-green-500 text-lg mb-4">
                                Request a Callback
                            </h3>
                            <div className="">
                                <input
                                    type="text"
                                    className="mt-4 p-1 outline-none  w-[100%] border border-blue-200 focus:border-blue-500"
                                    placeholder="Full name"
                                    aria-label="Full name"
                                />
                                <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="mt-4 p-1 outline-none  w-[100%] border border-blue-200 focus:border-blue-500"
                                        id="inputEmail"
                                />
                                <input
                                    type="number"
                                    placeholder="Mobile Number"
                                    className="mt-4 p-1 outline-none  w-[100%] border border-blue-200 focus:border-blue-500"
                                    id="inputMobile"
                                />
                                <button
                                    className="bg-[#243e36] text-white border border-600 p-2  rounded  mt-4"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <img
                            src="https://mindlerimages.imgix.net/new-landing-pages/campaign_page/bannerImg.png?fm=jpg&q=80"
                            alt="career consult"
                            className="w-4/5 ml-20 mt-16"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
