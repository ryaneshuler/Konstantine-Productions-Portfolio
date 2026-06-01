import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

// ─── Paste your EmailJS credentials here ───────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_8yrb57i'
const EMAILJS_TEMPLATE_ID = 'template_qd2r2pi'
const EMAILJS_PUBLIC_KEY  = 'SdUTjiBN9QwReNJiS'
// ───────────────────────────────────────────────────────────────────────────

const EMPTY_FORM = { firstName: '', lastName: '', email: '', subject: '', message: '' }

function ContactPage() {
  const [form, setForm]       = useState(EMPTY_FORM)
  const [status, setStatus]   = useState('idle') // 'idle' | 'sending' | 'success' | 'error'
  const formRef               = useRef(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    const templateParams = {
      from_name:  `${form.firstName} ${form.lastName}`,
      from_email: form.email,
      subject:    form.subject,
      message:    form.message,
      to_email:   'info@konstantineproductions.com',
    }

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('success')
        setForm(EMPTY_FORM)
      })
      .catch(() => {
        setStatus('error')
      })
  }

  return (
    <main className="contact-page">
      {/* Hero banner */}
      <div className="contact-hero home-banner-fixed">
        <p className="contact-hero-text">LET'S COLLABORATE</p>
      </div>

      {/* Intro */}
      <div className="contact-intro">
        <p className="contact-intro-headline">Drop us a line!</p>
        <p className="contact-intro-sub">We look forward to connecting with you and discussing your next project.</p>
      </div>

      {/* Form */}
      <div className="contact-form-wrap">
        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field">
            <span className="contact-label">Name</span>
            <span className="contact-required"> (required)</span>
            <div className="contact-inputs contact-inputs--row">
              <input className="contact-input-name" type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} required />
              <input className="contact-input-name" type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} required />
            </div>
          </div>

          <div className="contact-field">
            <span className="contact-label">Email</span>
            <span className="contact-required"> (required)</span>
            <div className="contact-inputs">
              <input className="contact-input" type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            </div>
          </div>

          <div className="contact-field">
            <span className="contact-label">Subject</span>
            <span className="contact-required"> (required)</span>
            <div className="contact-inputs">
              <input className="contact-input" type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />
            </div>
          </div>

          <div className="contact-field">
            <span className="contact-label">Message</span>
            <span className="contact-required"> (required)</span>
            <div className="contact-inputs">
              <textarea className="contact-textarea" name="message" value={form.message} onChange={handleChange} required />
            </div>
          </div>

          <div className="contact-submit-wrap">
            <button type="submit" className="contact-submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Submit'}
            </button>
          </div>

          {status === 'success' && (
            <p className="contact-status contact-status--success">
              Your message was sent! We'll be in touch soon.
            </p>
          )}
          {status === 'error' && (
            <p className="contact-status contact-status--error">
              Something went wrong. Please try again or email us directly at info@konstantineproductions.com.
            </p>
          )}
        </form>
      </div>
    </main>
  )
}

export default ContactPage
