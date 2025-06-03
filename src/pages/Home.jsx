import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Search } from "lucide-react";
import EventCard from "../components/EventCard";

export default function Home() {
    return (
        <>
        <Navbar />
        <section className="bg-[url(./assets/images/hero-bg.png)] h-[596px] bg-cover
         w-[95%] mx-auto relative">
        <h1 className="text-white text-big-heading w-[30%] mx-auto
         text-center pt-32">MADE FOR THOSE WHO DO</h1>
         <form className="bg-navy-blue w-[90%] mx-auto py-6 px-10 flex flex-row justify-between
          absolute -bottom-12 left-[5%]">
            <div className="flex flex-col w-[30%] ">
                <label className="text-white" htmlFor="type">Looking for</label>
                <select name="type" id="type" className="bg-white p-2 rounded-md">
                    <option selected disabled>Choose event type
                    </option>
                    <option value="drama">Drama</option>
                    <option value="tech">Tech</option>
                </select>
            </div>
            <div className="flex flex-col w-[30%] ">
                <label className="text-white" htmlFor="location">Location</label>
                <select name="location" id="Location" className="bg-white p-2 rounded-md">
                    <option selected disabled>Choose event type
                    </option>
                    <option value="accra">Drama</option>
                    <option value="kumasi">Kumasi</option>
                </select>
            </div>
            <div className="flex flex-col  w-[30%]">
                <label className="text-white" htmlFor="when">When</label>
                <input type="datetime-local" name="when" id="when"
                  className="bg-white p-1.5 rounded-md" />
            </div>
            <div className="bg-primary text-white size-[60px] flex flex-row justify-center
            items-center rounded-md">
                <Search />
            </div>
         </form>
        </section>
        <section>
            <div>
                <h1>
                    <span>Upcoming</span>
                    <span>Events</span>
                </h1>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {[1,2,3,4,5,6].map(n => <EventCard key={n} />)} 
            </div>
        </section>
        <section className="h-[500px]"></section>
        <Footer />
        </>
    );


}