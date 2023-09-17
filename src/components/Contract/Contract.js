import React from 'react';

const Contract = () => {
    return (
        <div className="container w-full mx-auto pt-16 mb-16 md:mb-24">
            <div className="w-full md:w-1/2 mx-auto">
                <div className="bg-gray-200 h-full pt-5 pb-5 xl:pr-5 xl:pl-5  mx-8">
                    <form id="contact" className="bg-white py-4 px-8 ">
                        <h1 className="text-4xl text-gray-800 font-extrabold mb-6">Write Details .Which You Need.</h1>
                        <div className="w-full  mt-6">
                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                                    Name
                                </label>
                                <input required id="email" name="email" type="email" className="w-full focus:outline-none focus:border focus:border-indigo-700 font-normal h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder />
                            </div>
                        </div>
                        <div className="flex w-full  justify-between mb-6 gap-3">
                            <div className="w-full md:w-1/2 mt-6">
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Phone
                                    </label>
                                    <input required id="email" name="email" type="email" className="w-full focus:outline-none focus:border focus:border-indigo-700 font-normal h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 mt-6">
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Email
                                    </label>
                                    <input required id="email" name="email" type="email" className="w-full focus:outline-none focus:border focus:border-indigo-700 font-normal h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder />
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold text-gray-800 mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea placeholder name="message" className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700" rows={8} id="message" />
                            </div>
                            <button type="submit" className="focus:outline-none bg-teal-500 transition duration-150 ease-in-out hover:bg-teal-600 rounded text-white px-8 py-3 text-sm leading-6">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contract;