// A self-contained JavaScript file to create the calendar application.
// This file uses JSX syntax and requires Babel to be included in the HTML file.

// Main App component for the Quorum Calendar
const App = () => {
    // Define the leaders and boys for Sunday lessons
    const sundayLeaders = ["Brother Ormond", "Brother Rydalch", "Brother Gardner", "Brother Harris", "Brother Mellen"];
    const sundayBoys = ["President Jaxson Gunsolley", "Brother Cody Mellen", "President Erik Harris"];

    // Define the lesson schedule for the remainder of the year.
    const lessons = [
        // August Lessons
        {
            title: "Doctrine and Covenants 85–87, “Stand Ye in Holy Places”",
            url: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-aaronic-priesthood-quorums-and-young-women-classes-2024?lang=eng"
        },
        {
            title: "Doctrine and Covenants 89–92, “A Principle with Promise”",
            url: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-aaronic-priesthood-quorums-and-young-women-classes-2024?lang=eng"
        },
        // September Lessons
        {
            title: "Doctrine and Covenants 98–101, “Be Still and Know That I Am God”",
            url: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-aaronic-priesthood-quorums-and-young-women-classes-2024?lang=eng"
        },
        {
            title: "Doctrine and Covenants 106–108, “The Order of the Son of God”",
            url: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-aaronic-priesthood-quorums-and-young-women-classes-2024?lang=eng"
        },
        // October Lessons
        {
            title: "Doctrine and Covenants 111–114, “I Will Order All Things for Your Good”",
            url: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-aaronic-priesthood-quorums-and-young-women-classes-2024?lang=eng"
        },
        {
            title: "Doctrine and Covenants 121–123, “O God, Where Art Thou?”",
            url: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-aaronic-priesthood-quorums-and-young-women-classes-2024?lang=eng"
        },
        // November Lessons
        {
            title: "Doctrine and Covenants 125–128, “A Voice of Gladness for the Living and the Dead”",
            url: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-aaronic-priesthood-quorums-and-young-women-classes-2024?lang=eng"
        },
        {
            title: "Doctrine and Covenants 133–134, “Prepare Ye for the Coming of the Bridegroom”",
            url: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-aaronic-priesthood-quorums-and-young-women-classes-2024?lang=eng"
        },
        // December Lessons
        {
            title: "The Articles of Faith and Official Declarations 1 and 2, “We Believe”",
            url: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-aaronic-priesthood-quorums-and-young-women-classes-2024?lang=eng"
        },
        {
            title: "Christmas, “The Matchless Gift of God’s Divine Son”",
            url: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-aaronic-priesthood-quorums-and-young-women-classes-2024?lang=eng"
        },
    ];

    // Specific activities, times, and locations.
    // The date is used as a key in the format "M-D-YYYY".
    const activitiesData = {
        // Existing non-Wednesday activities
        "8-22-2025": { name: "Lava Hot Springs", time: "5:00 PM", where: "Stake Center", eventLabel: "Campout" },
        "9-5-2025": { name: "Rifle and Shotgun Shooting", time: "5:00 PM", where: "Stake Center", eventLabel: "Campout" },
        // New Wednesday activities from the user's list, with a new 'group' property
        "8-6-2025": { name: "Yard Games", time: "7:00 PM", where: "Stake Center", eventLabel: "Activity", group: "All YM" },
        "8-13-2025": { name: "Water Games", time: "TBD", where: "TBD", eventLabel: "Activity", group: "Combined YW/YM" },
        "8-20-2025": { name: "TBD", time: "TBD", where: "TBD", eventLabel: "Activity", group: "Teacher's & Deacon's Quorum" },
        "8-27-2025": { name: "TBD", time: "TBD", where: "TBD", eventLabel: "Activity", group: "Combined YW/YM" },
        "9-3-2025": { name: "Family Search Escape Room", time: "TBD", where: "TBD", eventLabel: "Activity", group: "All YM" },
        "9-10-2025": { name: "Outdoor Games", time: "TBD", where: "TBD", eventLabel: "Activity", group: "Combined YW/YM" },
        "9-17-2025": { name: "TBD", time: "TBD", where: "TBD", eventLabel: "Activity", group: "Teacher's & Deacon's Quorum" },
        "9-24-2025": { name: "Hike", time: "TBD", where: "TBD", eventLabel: "Activity", group: "Combined YW/YM" },
        "10-1-2025": { name: "TBD", time: "TBD", where: "TBD", eventLabel: "Activity", group: "All YM" },
        "10-8-2025": { name: "TBD", time: "TBD", where: "TBD", eventLabel: "Activity", group: "Combined YW/YM" },
        "10-15-2025": { name: "TBD", time: "TBD", where: "TBD", eventLabel: "Activity", group: "Teacher's & Deacon's Quorum" },
        "10-22-2025": { name: "TBD", time: "TBD", where: "TBD", eventLabel: "Activity", group: "Combined YW/YM" },
        "10-29-2025": { name: "TBD", time: "TBD", where: "TBD", eventLabel: "Activity", group: "All YM" },
        "11-5-2025": { name: "TBD", time: "TBD", where: "TBD", eventLabel: "Activity", group: "All YM" },
        "11-12-2025": { name: "TBD", time: "TBD", where: "TBD", eventLabel: "Activity", group: "Combined YW/YM" },
        "11-19-2025": { name: "TBD", time: "TBD", where: "TBD", eventLabel: "Activity", group: "Teacher's & Deacon's Quorum" },
        "11-26-2025": { name: "Canceled: Thanksgiving Eve", time: "TBD", where: "None", eventLabel: "Activity", group: "Combined YW/YM" },
        "12-3-2025": { name: "TBD", time: "TBD", where: "TBD", eventLabel: "Activity", group: "All YM" },
        "12-10-2025": { name: "TBD", time: "TBD", where: "TBD", eventLabel: "Activity", group: "Combined YW/YM" },
        "12-17-2025": { name: "TBD", time: "TBD", where: "TBD", eventLabel: "Activity", group: "Teacher's & Deacon's Quorum" },
        "12-24-2025": { name: "Canceled: Christmas Eve", time: "TBD", where: "None", eventLabel: "Activity", group: "Combined YW/YM" },
        "12-31-2025": { name: "Canceled: New Years Eve", time: "TBD", where: "None", eventLabel: "Activity", group: "All YM" },
    };

    // State to manage the current date being displayed
    // This line of code initializes the calendar to the user's current month and year.
    const [currentDate, setCurrentDate] = React.useState(new Date());
    // State to store the generated schedule
    const [schedule, setSchedule] = React.useState([]);

    // Function to generate the full teaching and activity schedule for the rest of the year
    const generateSchedule = (year) => {
        const fullSchedule = [];
        let leaderIndex = 0;
        let boyIndex = 0;
        let lessonIndex = 0;

        // Loop through all 12 months of the year
        for (let month = 0; month < 12; month++) {
            let sundayCount = 0;
            // Loop through each day of the month
            let d = new Date(year, month, 1);
            while (d.getMonth() === month) {
                const currentDay = new Date(d);
                const dateKey = `${currentDay.getMonth() + 1}-${currentDay.getDate()}-${currentDay.getFullYear()}`;

                // Check for Sunday lessons
                if (currentDay.getDay() === 0) { // 0 is Sunday
                    sundayCount++;
                    if (sundayCount === 2 || sundayCount === 4) {
                        const conducting = sundayCount === 2 ? "Teacher's Quorum" : "Deacon's Quorum";
                        fullSchedule.push({
                            date: currentDay,
                            type: 'lesson',
                            teacher: `${sundayLeaders[leaderIndex % sundayLeaders.length]} & ${sundayBoys[boyIndex % sundayBoys.length]}`,
                            conducting: conducting,
                            lesson: lessons[lessonIndex % lessons.length]
                        });
                        leaderIndex++;
                        boyIndex++;
                        lessonIndex++;
                    }
                }

                // Check for all predefined activities from the activitiesData object
                if (activitiesData[dateKey]) {
                    const activityDetails = activitiesData[dateKey];
                    fullSchedule.push({
                        date: currentDay,
                        type: 'activity',
                        eventLabel: activityDetails.eventLabel,
                        activityName: activityDetails.name,
                        time: activityDetails.time || 'TBD',
                        whereToMeet: activityDetails.where || 'TBD',
                        group: activityDetails.group || null, // Include the group information
                    });
                }
                d.setDate(d.getDate() + 1);
            }
        }
        fullSchedule.sort((a, b) => a.date - b.date);
        return fullSchedule;
    };

    // useEffect hook to update the schedule whenever the year changes
    React.useEffect(() => {
        const year = currentDate.getFullYear();
        setSchedule(generateSchedule(year));
    }, [currentDate]);

    // Handle navigation to the previous or next month
    const handlePrevMonth = () => {
        setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        // Prevent navigating past December 2025
        if (currentDate.getFullYear() === 2025 && currentDate.getMonth() === 11) {
            return;
        }
        setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
    };

    // Get the current month and year for display
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();
    
    // Check if the current month is December 2025 to disable the next button
    const isDecember2025 = currentDate.getFullYear() === 2025 && currentDate.getMonth() === 11;

    // Filter the schedule to show only the current month's assignments
    const currentMonthSchedule = schedule.filter(item => item.date.getMonth() === currentDate.getMonth());

    return (
        <div className="p-4 sm:p-8">
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-10 border border-gray-200">
                <header className="text-center mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Teacher's and Deacon's Quorum Calendar</h1>
                </header>

                {/* Month Navigation */}
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={handlePrevMonth}
                        className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <span className="arrow-button">&larr;</span>
                    </button>
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                        {currentMonth} {currentYear}
                    </h2>
                    <button
                        onClick={handleNextMonth}
                        disabled={isDecember2025}
                        className={`p-2 rounded-full text-white transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400
                            ${isDecember2025 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                    >
                        <span className="arrow-button">&rarr;</span>
                    </button>
                </div>

                {/* Schedule Display */}
                <div className="space-y-6">
                    {currentMonthSchedule.length > 0 ? (
                        currentMonthSchedule.map((item, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-md transition-shadow hover:shadow-lg">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-lg font-bold text-gray-800">
                                        {item.date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                    </span>
                                    {/* Dynamic event label with custom colors */}
                                    {item.type === 'lesson' ? (
                                        <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                                            Conducting: {item.conducting}
                                        </span>
                                    ) : item.eventLabel === 'Activity' ? (
                                        <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                                            {item.eventLabel}
                                        </span>
                                    ) : item.eventLabel === 'Campout' ? (
                                        <span className="text-sm font-medium text-red-600 bg-red-100 px-3 py-1 rounded-full">
                                            {item.eventLabel}
                                        </span>
                                    ) : (
                                        <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                                            {item.eventLabel}
                                        </span>
                                    )}
                                </div>
                                {item.type === 'lesson' ? (
                                    <>
                                        <p className="text-gray-700 mb-2">
                                            <span className="font-semibold text-gray-900">Teachers:</span> {item.teacher}
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold text-gray-900">Lesson:</span> 
                                            {item.lesson.url ? (
                                                <a href={item.lesson.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200 ml-1">
                                                    {item.lesson.title}
                                                </a>
                                            ) : (
                                                <span className="ml-1">{item.lesson.title}</span>
                                            )}
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        {/* The activity name is now the title for campouts */}
                                        <p className="text-xl font-semibold text-gray-900">{item.activityName || item.eventLabel}</p>
                                        {item.group && (
                                            <p className="text-gray-700 mb-1">
                                                <span className="font-semibold text-gray-900">Group:</span> {item.group}
                                            </p>
                                        )}
                                        <p className="text-gray-700 mb-1">
                                            <span className="font-semibold text-gray-900">Time:</span> {item.time || "TBD"}
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold text-gray-900">Where to meet:</span> {item.whereToMeet || "TBD"}
                                        </p>
                                    </>
                                )}
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 italic">No meetings or activities scheduled for this month.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

// Use ReactDOM to render the App component into the 'root' div
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
