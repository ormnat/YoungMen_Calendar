// Teacher lists for Sunday lessons
const sundayLeaders = ["Brother Ormond", "Brother Rydalch", "Brother Gardner", "Brother Harris", "Brother Mellen"];
const sundayBoys = ["President Jaxson Gunsolley", "Brother Cody Mellen", "President Erik Harris"];

// Data for the calendar, organized by month
const calendarData = {
    '2025-08': {
        name: "August 2025",
        events: [
            { date: 6, day: 'Wednesday', type: 'activity', activity: "Yard Games", group: "All YM", location: "Stake Center", time: "7:00 PM" },
            { date: 10, day: 'Sunday', type: 'lesson', lesson: "D&C 85–87: “Stand Ye in Holy Places”", link: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025/32-doctrine-and-covenants-85-87?lang=eng" },
            { date: 13, day: 'Wednesday', type: 'activity', activity: "Water Games", group: "Combined YW/YM", location: "TBD", time: "TBD" },
            { date: 20, day: 'Wednesday', type: 'activity', activity: "TBD", group: "Quorum", location: "TBD", time: "TBD" },
            { date: 22, day: 'Friday', type: 'campout', activity: "Lava Hot Springs Campout", group: "All YM", location: "Lava Hot Springs", time: "TBD", description: "Dinner: Bring your own Tin Foil Dinner<br>Breakfast: Baggie Omelet<br>Lunch: Sandwiches" },
            { date: 24, day: 'Sunday', type: 'lesson', lesson: "D&C 89–92: “A Principle with Promise”", link: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025/34-doctrine-and-covenants-89-92?lang=eng" },
            { date: 27, day: 'Wednesday', type: 'activity', activity: "TBD", group: "Combined YW/YM", location: "TBD", time: "TBD" },
        ]
    },
    '2025-09': {
        name: "September 2025",
        events: [
            { date: 3, day: 'Wednesday', type: 'activity', activity: "Family Search Escape Room", group: "All YM", location: "TBD", time: "TBD" },
            { date: 5, day: 'Friday', type: 'campout', activity: "Rifle and Shotgun Shooting", group: "All YM", location: "Heber", time: "TBD", description: "Dinner: TBD<br>Breakfast: TBD<br>Lunch: TBD" },
            { date: 10, day: 'Wednesday', type: 'activity', activity: "Outdoor Games", group: "Combined YW/YM", location: "TBD", time: "TBD" },
            { date: 14, day: 'Sunday', type: 'lesson', lesson: "D&C 98–101: “Be Still and Know That I Am God”", link: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025/36-doctrine-and-covenants-98-101?lang=eng" },
            { date: 17, day: 'Wednesday', type: 'activity', activity: "TBD", group: "Quorum", location: "TBD", time: "TBD" },
            { date: 24, day: 'Wednesday', type: 'activity', activity: "Hike", group: "Combined YW/YM", location: "TBD", time: "TBD" },
            { date: 28, day: 'Sunday', type: 'lesson', lesson: "D&C 106–108: “The Order of the Son of God”", link: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025/38-doctrine-and-covenants-106-108?lang=eng" },
        ]
    },
    '2025-10': {
        name: "October 2025",
        events: [
            { date: 1, day: 'Wednesday', type: 'activity', activity: "TBD", group: "All YM", location: "TBD", time: "TBD" },
            { date: 8, day: 'Wednesday', type: 'activity', activity: "TBD", group: "Combined YW/YM", location: "TBD", time: "TBD" },
            { date: 12, day: 'Sunday', type: 'lesson', lesson: "D&C 111–114: “I Will Order All Things for Your Good”", link: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025/40-doctrine-and-covenants-111-114?lang=eng" },
            { date: 15, day: 'Wednesday', type: 'activity', activity: "TBD", group: "Quorum", location: "TBD", time: "TBD" },
            { date: 22, day: 'Wednesday', type: 'activity', activity: "TBD", group: "Combined YW/YM", location: "TBD", time: "TBD" },
            { date: 26, day: 'Sunday', type: 'lesson', lesson: "D&C 121–123: “O God, Where Art Thou?”", link: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025/42-doctrine-and-covenants-121-123?lang=eng" },
            { date: 29, day: 'Wednesday', type: 'activity', activity: "TBD", group: "All YM", location: "TBD", time: "TBD" },
        ]
    },
    '2025-11': {
        name: "November 2025",
        events: [
            { date: 5, day: 'Wednesday', type: 'activity', activity: "TBD", group: "All YM", location: "TBD", time: "TBD" },
            { date: 9, day: 'Sunday', type: 'lesson', lesson: "D&C 125–128: “A Voice of Gladness for the Living and the Dead”", link: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025/44-doctrine-and-covenants-125-128?lang=eng" },
            { date: 12, day: 'Wednesday', type: 'activity', activity: "TBD", group: "Combined YW/YM", location: "TBD", time: "TBD" },
            { date: 19, day: 'Wednesday', type: 'activity', activity: "TBD", group: "Quorum", location: "TBD", time: "TBD" },
            { date: 23, day: 'Sunday', type: 'lesson', lesson: "D&C 133–134: “Prepare Ye for the Coming of the Bridegroom”", link: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025/46-doctrine-and-covenants-133-134?lang=eng" },
            { date: 26, day: 'Wednesday', type: 'activity', activity: "Canceled: Thanksgiving Eve", group: "Combined YW/YM", location: "None", time: "TBD" },
        ]
    },
    '2025-12': {
        name: "December 2025",
        events: [
            { date: 3, day: 'Wednesday', type: 'activity', activity: "TBD", group: "All YM", location: "TBD", time: "TBD" },
            { date: 10, day: 'Wednesday', type: 'activity', activity: "TBD", group: "Combined YW/YM", location: "TBD", time: "TBD" },
            { date: 14, day: 'Sunday', type: 'lesson', lesson: "The Articles of Faith: “We Believe”", link: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025/48-the-articles-of-faith?lang=eng" },
            { date: 17, day: 'Wednesday', type: 'activity', activity: "TBD", group: "Quorum", location: "TBD", time: "TBD" },
            { date: 24, day: 'Wednesday', type: 'activity', activity: "Canceled: Christmas Eve", group: "Combined YW/YM", location: "None", time: "TBD" },
            { date: 28, day: 'Sunday', type: 'lesson', lesson: "Christmas: “The Matchless Gift of God’s Divine Son”", link: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025/50-christmas?lang=eng" },
            { date: 31, day: 'Wednesday', type: 'activity', activity: "Canceled: New Years Eve", group: "All YM", location: "None", time: "TBD" }
        ]
    }
};

let currentMonthIndex = 0;
// Moved leader and boy index variables outside of the render function
// so they persist across month changes.
let leaderIndex = 0;
let boyIndex = 0;

const monthKeys = Object.keys(calendarData);

// Function to render the entire calendar for a single month
function renderCalendar() {
    const container = document.getElementById('calendar-container');
    const monthTitleElement = document.getElementById('month-title');
    container.innerHTML = '';
    
    const currentMonthKey = monthKeys[currentMonthIndex];
    const monthData = calendarData[currentMonthKey];

    // Update month title
    monthTitleElement.textContent = monthData.name;
    
    // Add events for the month
    if (monthData.events.length > 0) {
        monthData.events.forEach(event => {
            let eventCard;
            let borderColor;
            let tagColor;
            let tagName;

            // Determine colors and tag based on event type
            if (event.type === 'activity') {
                borderColor = 'border-blue-500';
                tagColor = 'bg-blue-500';
                tagName = 'Activity';
                eventCard = `
                    <div class="relative bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md mb-3 border-l-4 ${borderColor} flex flex-col items-start">
                        <div class="absolute top-2 right-2 ${tagColor} text-white text-xs font-semibold px-2 py-1 rounded-full shadow">${tagName}</div>
                        <p class="text-lg font-bold text-gray-900 dark:text-white">${event.day}, ${monthData.name.split(' ')[0]} ${event.date}</p>
                        <p class="text-gray-700 dark:text-gray-300"><strong class="font-semibold">Activity:</strong> ${event.activity}</p>
                        <p class="text-gray-700 dark:text-gray-300"><strong class="font-semibold">Group:</strong> ${event.group}</p>
                        <p class="text-gray-700 dark:text-gray-300"><strong class="font-semibold">Location:</strong> ${event.location}</p>
                        <p class="text-gray-700 dark:text-gray-300"><strong class="font-semibold">Time:</strong> ${event.time}</p>
                        ${event.description ? `<p class="text-gray-700 dark:text-gray-300 mt-2"><strong class="font-semibold">Food:</strong><br>${event.description}</p>` : ''}
                    </div>
                `;
            } else if (event.type === 'lesson') {
                borderColor = 'border-emerald-500';
                tagColor = 'bg-emerald-500';
                tagName = 'Lesson';
                // Get the correct leader and boy from the lists and increment the indexes
                const leader = sundayLeaders[leaderIndex++ % sundayLeaders.length];
                const boy = sundayBoys[boyIndex++ % sundayBoys.length];

                eventCard = `
                    <div class="relative bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md mb-3 border-l-4 ${borderColor} flex flex-col items-start">
                        <div class="absolute top-2 right-2 ${tagColor} text-white text-xs font-semibold px-2 py-1 rounded-full shadow">${tagName}</div>
                        <p class="text-lg font-bold text-gray-900 dark:text-white">${event.day}, ${monthData.name.split(' ')[0]} ${event.date}</p>
                        <p class="text-gray-700 dark:text-gray-300"><strong class="font-semibold">Teachers:</strong> ${leader} & ${boy}</p>
                        <p class="text-gray-700 dark:text-gray-300">
                            <strong class="font-semibold">Lesson:</strong> 
                            <a href="${event.link}" target="_blank" class="text-blue-500 hover:underline transition-colors duration-200">
                                ${event.lesson}
                            </a>
                        </p>
                    </div>
                `;
            } else if (event.type === 'campout') {
                borderColor = 'border-red-500';
                tagColor = 'bg-red-500';
                tagName = 'Campout';
                eventCard = `
                    <div class="relative bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md mb-3 border-l-4 ${borderColor} flex flex-col items-start">
                        <div class="absolute top-2 right-2 ${tagColor} text-white text-xs font-semibold px-2 py-1 rounded-full shadow">${tagName}</div>
                        <p class="text-lg font-bold text-gray-900 dark:text-white">${event.day}, ${monthData.name.split(' ')[0]} ${event.date}</p>
                        <p class="text-gray-700 dark:text-gray-300"><strong class="font-semibold">Activity:</strong> ${event.activity}</p>
                        <p class="text-gray-700 dark:text-gray-300"><strong class="font-semibold">Group:</strong> ${event.group}</p>
                        <p class="text-gray-700 dark:text-gray-300"><strong class="font-semibold">Location:</strong> ${event.location}</p>
                        <p class="text-gray-700 dark:text-gray-300"><strong class="font-semibold">Time:</strong> ${event.time}</p>
                        ${event.description ? `<p class="text-gray-700 dark:text-gray-300 mt-2"><strong class="font-semibold">Food:</strong><br>${event.description}</p>` : ''}
                    </div>
                `;
            }
            container.innerHTML += eventCard;
        });
    } else {
        container.innerHTML += `
            <div class="text-center p-8 text-gray-500 dark:text-gray-400">
                <p class="text-lg">No events scheduled for this month yet.</p>
            </div>
        `;
    }
}

// Function to scroll to the next/previous month
function scrollMonth(direction) {
    currentMonthIndex = Math.max(0, Math.min(monthKeys.length - 1, currentMonthIndex + direction));
    renderCalendar();
}

// Find the current month and render it on page load
function initialRender() {
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // getMonth is 0-indexed
    const currentYear = today.getFullYear();
    const currentMonthKey = `${currentYear}-${String(currentMonth).padStart(2, '0')}`;
    
    // Find the index of the current month in our data keys
    const index = monthKeys.indexOf(currentMonthKey);
    if (index !== -1) {
        currentMonthIndex = index;
    } else {
        // If current month is not in the data, default to the first month
        currentMonthIndex = 0;
    }
    renderCalendar();
}

// Initial render on page load
document.addEventListener('DOMContentLoaded', initialRender);
