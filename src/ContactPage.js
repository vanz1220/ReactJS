import React from 'react'

export default function ContactPage() {
  return (
    <div class="About-Height">
        <div class="wewe">
            <input type="text" id="fname" placeholder="Enter Your Name..."/><br/>
            <input type="text" id="email" placeholder="Email..."/><br/>
            <input type="text" id="subject" placeholder="Subject..."/><br/>
            <textarea id="msg" cols="23" rows="5" placeholder="Message.." required></textarea><br/>
            <button>Send Message</button>
        </div>
    </div>
  )
}
