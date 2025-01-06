import React from 'react'
import Globe from 'react-globe.gl'
import Button from '/src/components/Button.jsx'
import {useState} from "react";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false)
    const handleCopy = () => {
        navigator.clipboard.writeText("naseecollection@gmail.com")
        setHasCopied(true)
        setTimeout(()=>{
            setHasCopied(false)
        }, 2000)
    }
    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6
           md:grid-cols-2 gric-cols-1gap-5 h-full">

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="about" className="w-full sm:h-[276px] h-fit
                        object-contain"/>
                        <div>
                            <p className="grid-headtext">
                                Hi I am Nasir
                            </p>
                            <p className="grid-subtext">
                                I am a Tech Enthusiast and a Creative Web Developer with background in Electronics
                                Engineering.
                                I have experience in JavaScript, React, ThreeJS, C# and Python.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="about"
                             className="w-full sm:2-[276px] h-fit objtect-contain "/>
                        <div>
                            <p className="grid-headtext"> Tech Stack</p>
                            <p className="grid-subtext"> I have interest and experience in Web Development and 3D Animations</p>
                        </div>

                    </div>

                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full
                        sm:h-[326px] h-fit flex justify-center items-center "
                        >
                            <Globe
                            height={326}
                            width={326}
                            backgroundColor="rgba(0,0,0,0)"
                            backgroundImageOpacity={0.5}
                            showAtmosphere={true}
                            showGraticules={true}
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

                            />
                        </div>
                            <div>
                                <p className="grid-subtext">
                                    I am based in the UK, and work across most timezones
                                </p>
                                <Button name="Contact Me" isBeam={true} containerClass="w-full mt-10" />
                            </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                       <img src="/assets/grid3.png" alt="about" className="w-full sm:h-[26 6px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext"> Problem Solving</p>
                            <p className="grid-subtext"> I love problem solving using codes</p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="about" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover
                        sm:object-top"/>
                        <div className="space-y-2">
                            <p className="grid-subtext text-center"> Contact me </p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy" className="w-6 h-6"/>
                                <p className="lg:text-l md:text-m font-medium text-gray_gradient text-white">
                                    naseecollection@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default About
