import React from 'react';

const About = () => {
    return (
        <div className="py-16 bg-white">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div className="md:5/12 lg:w-5/12">
                    <img
                        src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                        alt="image"
                    />
                </div>
            </div>

            <h1>About Us</h1>
            <p className="mt-6 text-gray-600">We are a leading technology company specializing in creating innovative and user-friendly products.</p>
            <p className="mt-6 text-gray-600">Our team consists of highly skilled professionals with a diverse range of expertise.</p>
        </div>
    );
};

export default About;