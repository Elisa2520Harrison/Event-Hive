import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Search } from "lucide-react";
import EventCard from "../components/EventCard";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
    const [events, setEvents] = useState([]);
    //  Declare state variable in React

    // Define a function to fetch events from API
    const getEvents = () => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    // Run fetcher based on side-effects
    useEffect(getEvents, []);

    return (
        <>
            <Navbar />
            <section className="bg-[url(./assets/images/hero-bg.png)] h-[596px] bg-cover
         w-[95%] mx-auto relative mt-4">
                <h1 className="text-white text-big-heading w-[30%] mx-auto
         text-center pt-32">MADE FOR THOSE WHO DO</h1>
                <form className="bg-navy-blue w-[90%] mx-auto py-6 px-10 flex flex-row justify-between
          absolute -bottom-12 left-[5%] rounded-md">
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
            <section className="mt-30 w-[90%] mx-auto  px-10   left-[5%]  ">
                <div>
                    <h1>
                        <span>Upcoming</span>
                        <span>Events</span>
                    </h1>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    {events.map(item => {
                        return (
                            <EventCard
                             key={item.id} 
                             event={item} />
                        );
                    })}
                </div>
            </section>
            <section className="h-[500px]">

            </section>
            <Footer />

        </>
    );


}