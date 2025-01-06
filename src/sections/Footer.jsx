import React from 'react'

const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-end items-center
        flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Copyright &copy; 2024 Nasir</p>
            </div>
            <div className="flex gap-3">
                <div className="social-icon">
                    <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2"/>
                </div>
            </div>
            <div className="flex gap-3">
                <div className="social-icon">
                    <img src="/assets/linkedin.svg" alt="Linkedin" className="w-1/2 h-1/2"/>
                </div>
            </div>

        </section>
    )
}
export default Footer
