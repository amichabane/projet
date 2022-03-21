import React, {Component} from 'react';
import './article.css'
import img from './1.jpg'
import imag from './2.png'
import {Col, Row} from "antd";

class Article extends Component {
    render() {
        return (
            <div>
                <h1 className="mx-auto mb-6 text-xl text-center my-5 font-bold text-black lg:text-5xl">African nationals mistreated,</h1>
                <h5 className="mx-auto mb-7 text-sm text-center mt-12 font-semibold text-gray-500">
                    by Brenda Nuwasiima , AfricaOne-Updated August 7,2020
                </h5>
                <div className="mx-auto w-auto h-auto flex items-center justify-center lg:w-3/5 lg:flex items-center h-auto lg:w-2/5">
                <div className="flex flex-col items-center justify-center w-screen mb-12 text-left ml-2 mr-1 text-justify">
                    <div className="w-full mx-auto lg:w-1/2">
                        <img className="rounded-md w-full my-2"
                             src={imag} width={100}/>
                        <p className="mx-auto text-base font-medium my-8 leading-relaxed text-gray-800">Lorem Ipsum is simply
                            dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five centuries, but also
                            the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                            recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                            Ipsum.</p>
                        <img className="rounded-sm my-8 mx-auto"
                             src="https://picsum.photos/278/253"/>
                        <p className="mx-auto my-6 text-base font-medium leading-relaxed text-gray-800">It is a long
                            established fact that a reader will be distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using 'Content here, content here', making it look
                            like readable English. Many desktop publishing packages and web page editors now use Lorem
                            Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web
                            sites still in their infancy. Various versions have evolved over the years, sometimes by
                            accident, sometimes on purpose (injected humour and the like).</p>
                        <img className="rounded-sm mb-6 mt-6 w-full"
                             src={imag} width={100}/>
                        <h6 className="mx-auto mb-9 text-base font-medium leading-relaxed text-gray-400">Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Alias aliquid doloremque ea error esse et illum libero non reprehenderit temporibus?
                            Delectus id labore libero quaerat quidem sed sit voluptatem voluptatum!</h6>
                        <p className="mx-auto text-base font-medium leading-relaxed text-gray-800">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
                        </p>
                    </div>
            </div>
                </div>
            </div>
        );
    }
}

export default Article;