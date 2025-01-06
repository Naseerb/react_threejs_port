import React from 'react'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
const Contact = () => {
    const formRef = useRef()
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    })
    const handleChange = ({target : {name, value}}) => {
        setForm({...form, [name]: value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
           await emailjs.send('service_hk0k93k',
                'template_ipy1289',
                {
                    from_name: form.name,
                    to_name: "Nasir",
                    from_email: form.email,
                    to_email: "naseecollection@gmail.com",
                    message: form.message,
                },
               'uexiJRS73WwMa5hhK'
               )
            setLoading(false)
            alert("Your message has been sent!")
            setForm({
                name: "",
                email: "",
                message: "",
            })
        } catch (error) {
            setLoading(false)
            console.log(error)
            alert("Something went wrong, message not sent")
        }


    }
    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal" className="absolute inset-0 min-h-screen"/>
                <div className="contact-container">
                    <h3 className="head-text">Contact Me</h3>
                    <p className="text-lg text-white-600"></p>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label"> Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="John Doe"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label"> Email</span>
                            <input
                                type="text"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="johndoe@gmail.com"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label"> Message </span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Write your message here..."
                            />
                        </label>
                        <button type="submit" className="field-btn" disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                            <img src="/assets/arrow-up.png" alt="arrow" className="field-btn_arrow"/>
                        </button>
                    </form>
                </div>
            </div>

        </section>
    )
}
export default Contact
