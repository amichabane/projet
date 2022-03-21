import React, {Component} from 'react';
import 'tailwindcss/tailwind.css'
class Page2 extends Component {
    render() {
        return (
            <div>
                <div
                    className="md:flex flex-col max-w-md mx-auto bg-white shadow-md rounded-2xl overflow-hidden md:w-full my-5">

                    <div className="flex py-4 mx-12">
                        <img src="https://picsum.photos/50/50" alt=""
                             className="rounded-full mx-5 my-2"/>
                        <div className="flex flex-col items-start justify-center">
                            <h6 className="text-black-700 text-lg font-medium font-bold mr-10 flex">brandi9</h6>
                            <h5 className="font-sans text-gray-300 font-semibold mr-10">ux designer</h5>
                        </div>
                    </div>
                    <div className="flex pb-7 p-2 items-center">
                        <div className="mx-16 text-gray-500 font-semibold">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, excepturi hic impedit
                                incidunt, minus necessitatibus, nisi nostrum qui recusandae sed similique veniam. Aut
                                dicta doloribus ducimus, quasi quis sapiente voluptates.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page2;