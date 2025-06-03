export default function() {
    return (
        <nav className="flex flex-row justify-between items-center mt-5 ml-14 mr-14">
            <h1 className="font-bold text-2xl space-x-2">
                <span>Event</span> 
                <span className="text-primary">Hive</span>
            </h1>
            <div className="space-x-2 text-sm">
                <button>Login</button> 
                <button className="bg-primary text-white">Signup</button>
            </div>
        </nav>
    );
}