import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "+94785701646",
  email = "hello.cvlabs@gmail.com",
  web = { label: "cloudvistalabs.com", url: "https://cloudvistalabs.web.app/" },
}: Contact2Props) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = () => {
    const { firstName, lastName, email, subject, message } = formData;
    const body = `Name: ${firstName} ${lastName}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = `mailto:hello.cvlabs@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-32" id="contact-us">
      <div className="container">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl text-[#000]">
                {title}
              </h1>
              <p className="text-[#444]">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left text-[#444]">
                Contact Details
              </h3>
              <Typography component="div" variant="body2">
                <Box component="ul" sx={{ pl: 2 }}>
                  <li>
                    <span className="font-bold text-[#444]">Phone: </span>
                    <span className="text-[#444]">+94785701646</span>
                  </li>
                  <li>
                    <span className="font-bold text-[#444]">Email: </span>
                    <a href="mailto:hello.cvlabs@gmail.com" className="underline text-[#444]">
                      hello.cvlabs@gmail.com
                    </a>
                  </li>
                  <li>
                    <span className="font-bold text-[#444]">Web: </span>
                    <a href="https://cloudvistalabs.web.app/" target="_blank" className="underline text-[#444]">
                      cloudvistalabs.com
                    </a>
                  </li>
                </Box>
              </Typography>
            </div>
          </div>
          <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10">
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstName" className="text-[#444]">First Name</Label>
                <Input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="text-[#444]"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastName" className="text-[#444]">Last Name</Label>
                <Input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="text-[#444]"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject" className="text-[#444]">Subject</Label>
              <Input
                type="text"
                id="subject"
                placeholder="Subject"
                className="text-[#444]"
                value={formData.subject}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message" className="text-[#444]">Message</Label>
              <Textarea
                placeholder="Type your message here."
                id="message"
                className="text-[#444]"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
            <Button
              className="w-full text-[#fff]"
              onClick={handleSubmit}
            >
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
