import React from "react";
import Hero_sec from "./hero_sec";

const Contact = () => {
  return (
    <>
      <div>
        <div className="flex justify-center p-2">
          <h1 className="text-2xl font-medium">Contact us</h1>
        </div>
        <p className="p-2 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          aliquam in omnis obcaecati odio praesentium molestiae qui ullam, quas
          necessitatibus ex, error voluptatum temporibus commodi blanditiis iste
          inventore aut ad laboriosam cumque distinctio laborum officiis.
          Temporibus veritatis soluta tenetur? Laborum.
        </p>
       </div>

       <div className="flex justify-between p-11">
        <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5786314843904!2d77.60920317470023!3d12.934781815685215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144d859731bb%3A0x7be523c4ee2a1b09!2sNexus%20Mall%20Koramangala!5e0!3m2!1sen!2sin!4v1703735711137!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>

      <div className="flex flex-col w-full pl-10">
        <h1 className="text-lg font-medium pb-5">Leave a message/feedback</h1>
        <form action="https://formspree.io/f/xyyrygge" method="POST">
          <div className="pb-5 w-100%">
            <input
              type="name"
              name="UserName"
              placeholder="Username"
              required
              autoComplete="off"
              className="w-3/4 p-2 rounded-none shadow-md border"
            />
          
          </div>

          <div className="pb-5">
            <input
              type="email"
              name="email"
              placeholder="Email-Id"
              required
              autoComplete="off"
              className="w-3/4 p-2 rounded-none shadow-md border"
            />
          </div>

          <div className="pb-5">
            <textarea
              type="text"
              name="feedback"
              placeholder="FeedBack"
              required
              autoComplete="off"
              rows={8}
              className="w-3/4 p-2 rounded-none shadow-md border"
            ></textarea>
          </div>

          <div className="pt-2">
            <button className="bg-slate-300 p-1">Submit</button>
          </div>
        </form>
      </div>
       </div>
      
        
    </>
  );
};

export default Contact;
