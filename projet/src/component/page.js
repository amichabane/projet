import React, {Component} from 'react';
import {Row} from "antd";

class Page extends Component {
    render() {
        return (
            <div>
                <div className="p-6 max-w-sm max-h-auto mx-auto bg-white border border-1 rounded-2xl shadow-lg flex justify-start items-center space-x-4 my-5">
                    <div className="flex -space-x-1 overflow-hidden">
                        <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white"
                             src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                             alt=""/>
                            <img className="inline-block h-9 w-9 rounded-full drop-shadow-2xl ring-4 ring-white"
                                 src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                 alt=""/>
                    </div>
                    <div>
                        <div className="text-xl flex items-start font-medium text-black-700 font-bold">Birthday</div>
                        <p className="text-gray-300 font-semibold">anderson,Kelly</p>
                    </div>
                </div>
                <div className="md:flex flex-col items-center justify-center max-w-md mx-auto bg-white shadow-md rounded-2xl border border-1 overflow-hidden md:w-full my-5">
                    <div className="flex py-3">
                        <img src="https://picsum.photos/50/50" alt=""
                             className="rounded-full mx-5 my-5"/>
                        <div className="flex flex-col items-start justify-center">
                            <h6 className="text-black-700 text-lg font-medium font-bold mr-10 flex">brandi9</h6>
                            <h5 className="font-sans text-gray-300 font-semibold mr-10">89.8K Followers</h5>
                        </div>
                        <div className="my-4">
                            <button type="button" className="ml-2 bg-white-500 hover:bg-white-700 text-red-500 font-bold md:ml-20 py-2 px-4 border border-red-500 rounded-2xl">Follow</button>
                        </div>
                    </div>
                    <div className="flex flex-row py-3 px-4">
                        <div className="flex flex-col">
                            <h6 className="text-black-300 font-bold mr-8 flex ml-5">198</h6>
                            <h5 className="font-sans text-gray-300 font-semibold flex">Comments</h5>
                        </div>
                        <div className="flex flex-col border border-top ml-4 mr-5 bg-red-900 md:w-1 md:h-auto">
                                <hr/>
                        </div>
                        <div className="flex flex-col">
                            <h6 className="text-black-300 font-bold mr-8 flex ml-5 flex-wrap">398 people</h6>
                            <h5 className="font-sans text-gray-300 font-semibold flex ml-auto mr-2">watching video</h5>
                        </div>
                        <div className="flex -space-x-1 overflow-hidden ml-2 my-2">
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                 src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                 alt=""/>
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                 src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                 alt=""/>
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                 alt=""/>
                            <img src="https://picsum.photos/45/45" alt=""
                                 className="inline-block h-6 w-6 rounded-full ring-2 ring-white"/>

                        </div>
                    </div>
                </div>
                <Row>
                <div className="p-6 max-w-sm mx-auto border border-1 flex flex-col bg-white rounded-3xl shadow-lg flex items-start space-x-4 my-5">
                    <h1 className="font-bold text-black-700 text-xl ml-8">Activités</h1>
                    <div className="flex p-3">
                        <img src="https://picsum.photos/50/50" className="rounded-full" alt=""/>
                        <div className="flex flex-col items-start">
                            <h6 className="text-black-700 text-lg font-medium font-bold ml-3 flex">Trainers</h6>
                            <h5 className="font-sans text-gray-400 font-semibold ml-3 flex">personal trainers</h5>
                        </div>
                    </div>
                    <hr className="border bg-red flex-grow w-4/5 border-dashed my-"/>
                    <div className="flex p-3">
                        <img src="https://picsum.photos/50/50" className="rounded-full" alt=""/>
                        <div className="flex flex-col items-start">
                            <h6 className="text-black-700 text-lg font-medium font-bold ml-3">Yoga</h6>
                            <h5 className="font-sans text-gray-400 font-semibold ml-3">specialist instructor</h5>
                        </div>
                    </div>
                    <hr className="border bg-red flex-grow w-4/5 border-dashed my-"/>
                    <div className="flex p-3">
                        <img src="https://picsum.photos/50/50" className="rounded-full" alt=""/>
                        <div className="flex flex-col items-start">
                            <h6 className="text-black-700 text-lg font-bold mx-3">Run</h6>
                            <h5 className="font-sans text-gray-400 font-semibold mx-3">best stamina trainers</h5>
                        </div>
                    </div>
                </div>
                </Row>
            </div>
        );
    }
}

export default Page;