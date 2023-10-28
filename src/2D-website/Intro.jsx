import React, { Component } from 'react';
import Typist from 'react-typist'; // You'll need to install this library

class Intro extends Component {
    render() {
        return (
            <div className="bg-gray-900 text-white h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Hi, I'm Himanshu</h1>
                    <Typist>
                        <span>Im Developer</span>
                        <Typist.Backspace count={10} delay={1000} />
                        <span>Im open source contributor</span>
                    </Typist>
                </div>
            </div>
        );
    }
}

export default Intro;
