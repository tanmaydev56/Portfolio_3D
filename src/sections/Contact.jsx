import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import useAlert from '../hooks/useAlert';


const Contact = () => {
    const formRef = useRef();

    const { alert, showAlert, hideAlert } = useAlert();
    const [loading, setLoading] = useState(false);
  
    const [form, setForm] = useState({ name: '', email: '', message: '' });
  
    const handleChange = ({ target: { name, value } }) => {
      setForm({ ...form, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      
      try {
        await emailjs.send('service_7awii0w','template_kkqk4gq',
            {
              from_name: form.name,
              to_name: "Tanmay",
              from_email: form.email,
              to_email: "tanmaysharma763@gmail.com",
              message: form.message,
            },
            "fkzdabU30aMib0Wgd"
          )
          setLoading(false)
          alert("your msg hase been sent")
          setForm({ name: '', email: '', message: '' })
          
        
      } catch (error) {
        
        setLoading(false)
      console.log(error)
        
      }
  
     
  
     
    };
  return (
    <section className='c-space lg:translate-y-[-70px] translate-y-[1700px]' id='contact'>
        <div className='relative min-h-screen flex items-center justify-center flex-col'>
            <img src="/assets/terminal.png" alt="" className='absolute inset-0 lg:min-h-screen h-[900px] lg:w-full sm:w-[500px]  '/>
            <div className={`max-w-xl relative z-10 sm:px-10 px-5 mt-[100px] `}>
                <h3 className='sm:text-4xl text-3xl font-semibold text-gray_gradient'>Let's Talk</h3>
                <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>

            </div>
        </div>

      
    </section>
  )
}

export default Contact
