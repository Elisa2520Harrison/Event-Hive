import { Linkedin, Instagram, Facebook,  } from "lucide-react";

export default function Footer() {
    return(
        <footer className="bg-navy-blue text-white absolute w-full bottom-0">
            <h1 className="text-center text-2xl font-bold"><span>Event</span> <span className="text-primary">Hive</span></h1>
            <form className="flex justify-center pt-4">
                <input className="bg-white" type="email" placeholder="Enter your mail" name="email" />
                <button className="bg-primary" type="submit">Subscribe</button>
            </form>
            <div className="flex justify-center text-center space-x-4 pt-6 pb-5">
            <span>Home</span>
            <span>About</span>
            <span>Services</span>
            <span>Get in touch</span>
            <span>FAQs</span>
            </div>
            <hr className=""/>
            <div className="flex flex-row justify-around pt-3 pb-3">
                <div className="space-x-2">
                    <button className="bg-primary">English</button>
                    <button>French</button>
                    <button>Hindi</button>
                </div>
                <div className="flex flex-row space-x-2">
                    <Linkedin />
                    <Instagram />
                    <Facebook />
                </div>
                <p>Non Copyrighted©2025 Upload by EventHive</p>
            </div>

        </footer>
    );
}