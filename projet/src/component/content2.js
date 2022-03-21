import React, {Component} from 'react';
import 'tailwindcss/tailwind.css'

class Content2 extends Component {
    render() {
        return (
            <div>
                <div
                    className="md:flex flex flex-wrap flex-col max-w-sm mx-auto bg-white-500 border shadow-md rounded-2xl overflow-hidden md:w-full my-5">
                    <div className="py-5 ml-8 flex-wrap flex">
                        <div className="flex flex-col">
                            <h1 className="text-6xl font-semibold">32</h1>
                            <h1 className="text-gray-500 font-semibold ml-3">Mon 28/04</h1>
                        </div>
                        <div className="flex flex-row ml-40 pb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="orange"
                                 className="bi bi-sun" viewBox="0 0 16 16">
                                <path
                                    d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                            </svg>
                        </div>
                        <div className="flex flex-col items-center mx-6">
                            <h5 className="text-2xl my-2 mx font-bold py-2">Weather is good today</h5>
                        </div>
                        <div className="flex flex-row py-3 px-4">
                            <div className="flex flex-col">
                                <h6 className="text-black-300 text-3xl mr-8 flex ml-auto">68</h6>
                                <h5 className="font-sans text-gray-400 font-semibold flex ml-auto">humidity</h5>
                            </div>
                            <div className="flex flex-col border border-top ml-6 mr-8 bg-red-900 md:w-1 md:h-auto">
                                <hr/>
                            </div>
                            <div className="flex flex-col">
                                <h6 className="text-black-300 text-3xl mr-auto flex flex-wrap">36</h6>
                                <h5 className="font-sans text-gray-400 font-semibold flex">wind speed</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content2;