import eventCardImage from "../assets/images/event-card.png";

export default function EventCard() {
    return (
        <div>
            <img src={eventCardImage} alt="Event Card" />
            <h1>BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow</h1>
            <h2>Saturday, March 18, 9.30PM</h2>
            <h3>ONLINE EVENT - Attend anywhere</h3>
        </div>
    );
}