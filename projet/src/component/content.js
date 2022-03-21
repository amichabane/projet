import React, {Component} from 'react';
import {Col,Row} from "antd";

class Content extends Component {
    render() {
        return (
            <div>
                <Row gutter={[16, 24]}>
                <Col>

                        <div className="max-w-md mx-auto bg-white shadow-md overflow-hidden md:max-w-2xl my-5">
                            <div className="md:flex flex-row">
                                <div className="md:shrink-0">
                                    <img className="h-48 w-full object-cover md:h-full md:w-50"
                                         src="https://picsum.photos/400/200"
                                         alt="Man looking at item at a store"/>
                                </div>
                                <div className="p-2 m-2">
                                    <div className="font-bold" >
                                        <h5>Lorem ipsum dolor sit amet, consetetur sadips</h5>
                                    </div>
                                    <p className="mt-2 text-gray-400 text-sm-start">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                        diam nonumy…</p>
                                </div>
                            </div>
                        </div>

                </Col>
                    <Col>
                        <div className="md:flex flex-col max-w-md mx-auto bg-white shadow-md overflow-hidden md:w-full my-5">
                            <div className="">
                                <div className="md:shrink-0">
                                    <img className="h-48 w-full object-cover md:h-full md:w-50"
                                         src="https://picsum.photos/400/200"
                                         alt="Man looking at item at a store"/>
                                </div>
                                <div className="p-2 m-2">
                                    <div className="font-bold">
                                        <h1>Lorem ipsum dolor sit amet, consetetur sadips</h1>
                                    </div>
                                    <p className="mt-2 text-gray-300 text-sm-start text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                        diam nonumy…</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                    <div className="md:flex flex-col max-w-md mx-auto bg-white shadow-md rounded-2xl overflow-hidden md:w-full my-5">

                        <div className="flex py-3">

                            <img src="https://picsum.photos/60/60" alt=""
                                 className="rounded-xl mx-3"/>

                                <div className="flex flex-col items-center justify-center">
                                    <h6 className="text-green-300 mr-8">Begginers</h6>
                                    <h5 className="font-sans font-bold">PHP With Fun</h5>
                                </div>
                        </div>
                        <div className="flex py-3 px-4 items-center">
                            <div className="text-gray-400 font-semibold">
                                by
                            </div>

                            <img src="https://picsum.photos/27/27" alt=""
                                 className="rounded-circle-border rounded-full mx-2"
                            />

                                <div className="mx-2 font-semibold">
                                    Darrel Steward
                                </div>
                        </div>
                        <div className="flex pt-3 items-center border border-0 border-top">
                            <div className="font-semibold mx-3">
                                39%
                            </div>
                            <div className="flex-grow mx-3 md:h-1 bg-purple-500 border">
                                <hr/>
                            </div>
                            <div className="font-semibold mx-3">
                                3/8
                            </div>
                            <img src="https://picsum.photos/27/27" alt=""
                                 className="rounded-circle-border rounded-full mx-2"
                            />

                        </div>
                    </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Content;