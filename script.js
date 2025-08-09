// Data for the calendar
const calendarData = {
    sundayLeaders: ["Brother Ormond", "Brother Rydalch", "Brother Gardner", "Brother Harris", "Brother Mellen"],
    sundayBoys: ["President Jaxson Gunsolley", "Brother Cody Mellen", "President Erik Harris"],
    lessonsByWeek: [
        // Lessons for August 2025
        { startDate: new Date(2025, 7, 10), lessonTitle: "Stand Ye in Holy Places", scriptureBlock: "D&C 85-87", url: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025/32-doctrine-and-covenants-85-87?lang=eng" },
        { startDate: new Date(2025, 7, 24), lessonTitle: "A Principle with Promise", scriptureBlock: "D&C 89-92", url: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025/34-doctrine-and-covenants-89-92?lang=eng" },
        // Lessons for September 2025 (links corrected)
        { startDate: new Date(2025, 8, 14), lessonTitle: "Be Still and Know That I Am God", scriptureBlock: "D&C 98-101", url: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025/37-doctrine-and-covenants-98-101?lang=eng" },
        { startDate: new Date(2025, 8, 28), lessonTitle: "The Order of the Son of God", scriptureBlock: "D&C 106-108", url: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025/38-doctrine-and-covenants-106-108?lang=eng" },
        // Lessons for October 2025 (links corrected)
        { startDate: new Date(2025, 9, 12), lessonTitle: "I Will Order All Things for Your Good", scriptureBlock: "D&C 111-114", url: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025/40-doctrine-and-covenants-111-114?lang=eng" },
        { startDate: new Date(2025, 9, 26), lessonTitle: "O God, Where Art Thou?", scriptureBlock: "D&C 121-123", url: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025/42-doctrine-and-covenants-121-123?lang=eng" },
        // Lessons for November 2025 (links corrected)
        { startDate: new Date(2025, 10, 9), lessonTitle: "A Voice of Gladness for the Living and the Dead", scriptureBlock: "D&C 125-128", url: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025/44-doctrine-and-covenants-125-128?lang=eng" },
        { startDate: new Date(2025, 10, 23), lessonTitle: "Prepare Ye for the Coming of the Bridegroom", scriptureBlock: "D&C 133-134", url: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025/46-doctrine-and-covenants-133-134?lang=eng" },
        // Lessons for December 2025 (links corrected)
        { startDate: new Date(2025, 11, 14), lessonTitle: "We Believe", scriptureBlock: "Articles of Faith", url: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025/48-the-articles-of-faith?lang=eng" },
        { startDate: new Date(2025, 11, 28), lessonTitle: "The Matchless Gift of God’s Divine Son", scriptureBlock: "Christmas", url: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025/51-the-matchless-gift-of-gods-divine-son?lang=eng" },
    ],
    activitiesData: [
        { startDate: new Date(2025, 7, 22), endDate: new Date(2025, 7, 23), name: "Lava Hot Springs", time: "5:00 PM", where: "Stake Center", eventLabel: "Campout" },
        { startDate: new Date(2025, 8, 5), endDate: new Date(2025, 8, 6), name: "Rifle and Shotgun Shooting", time: "5:00 PM", where: "Stake Center", eventLabel: "Campout" },
        { startDate: new Date(2025, 7, 6), endDate: new Date(2025, 7, 6), name: "Yard Games", time: "7:00 PM", where: "Stake Center", eventLabel: "Activity", group: "All YM" },
        { startDate: new Date(2025, 7, 13), endDate: new Date(2025, 7, 13), name: "Water Games", time: "TBD", where: "TBD", eventLabel: "Activity", group: "Combined YW/YM" },
        { startDate: new Date(2025, 7, 20), endDate: new Date(2025, 7, 20), name: "TBD", time: "TBD", where: "TBD", eventLabel: "Activity", group: "Teacher's & Deacon's Quorum" },
        { startDate: new Date(2025, 7, 27), endDate: new Date(2025, 7, 27), name: "TBD", time: "TBD", where: "TBD", eventLabel: "Activity", group: "Combined YW/YM" },
        { startDate: new Date(2025, 8, 3), endDate: new Date(2025, 8, 3), name: "Family Search Escape Room", time: "TBD", where: "TBD", eventLabel: "Activity", group: "All YM" },
        { startDate: new Date(2025, 8, 10), endDate: new Date(2025, 8, 10), name: "Outdoor Games", time: "TBD", where: "TBD", eventLabel: "Activity", group: "Combined YW/YM" },
        { startDate: new Date(2025, 8, 17), endDate: new Date(2025, 8, 17), name: "TBD", time: "TBD", where: "TBD", eventLabel: "Activity", group: "Teacher's & Deacon's Quorum" },
        { startDate: new Date(2025, 8, 24), endDate: new Date(2025, 8, 24), name: "Hike", time: "TBD", where: "TBD", eventLabel: "Activity", group: "Combined YW/YM" },
        { startDate: new Date(2025, 9, 1), endDate: new Date(2025, 9, 1), name: "TBD", time: "TBD", where: "TBD", eventLabel: "Activity", group: "All YM" },
        { startDate: new Date(2025, 9, 8), endDate: new Date(2025, 9, 8), name: "TBD", time: "TBD", where: "TBD", eventLabel: "Activity", group: "Combined YW/YM" },
        { startDate: new Date(2025, 9, 15), endDate: new Date(2025, 9, 15), name: "TBD", time: "TBD", where: "TBD", eventLabel: "Activity", group: "Teacher's & Deacon's Quorum" },
        { startDate: new Date(2025, 9, 22), endDate: new Date(2025, 9, 22), name: "TBD", time: "TBD", where: "TBD", eventLabel: "Activity", group: "Combined YW/YM" },
        { startDate: new Date(2025, 9, 29), endDate: new Date(2025, 9, 29), name: "TBD", time: "TBD", where: "TBD", eventLabel: "Activity", group: "All YM" },
        { startDate: new Date(2025, 10, 5), endDate: new Date(2025, 10, 5), name: "TBD", time: "TBD", where: "TBD", eventLabel: "Activity", group: "All YM" },
        { startDate: new Date(2025, 10, 12), endDate: new Date(2025, 10, 12), name: "TBD", time: "TBD", where: "TBD", eventLabel: "Activity", group: "Combined YW/YM" },
        { startDate: new Date(2025, 10, 19), endDate: new Date(2025, 10, 19), name: "TBD", time: "TBD", where: "TBD", eventLabel: "Activity", group: "Teacher's & Deacon's Quorum" },
        { startDate: new Date(2025, 10, 26), endDate: new Date(2025, 10, 26), name: "Canceled: Thanksgiving Eve", time: "TBD", where: "None", eventLabel: "Activity", group: "Combined YW/YM" },
        { startDate: new Date(2025, 11, 3), endDate: new Date(2025, 11, 3), name: "TBD", time: "TBD", where: "TBD", eventLabel: "Activity", group: "All YM" },
        { startDate: new Date(2025, 11, 10), endDate: new Date(2025, 11, 10), name: "TBD", time: "TBD", where: "TBD", eventLabel: "Activity", group: "Combined YW/YM" },
        { startDate: new Date(2025, 11, 17), endDate: new Date(2025, 11, 17), name: "TBD", time: "TBD", where: "TBD", eventLabel: "Activity", group: "Teacher's & Deacon's Quorum" },
        { startDate: new Date(2025, 11, 24), endDate: new Date(2025, 11, 24), name: "Canceled: Christmas Eve", time: "TBD", where: "None", eventLabel: "Activity", group: "Combined YW/YM" },
        { startDate: new Date(2025, 11, 31), endDate: new Date(2025, 11, 31), name: "Canceled: New Years Eve", time: "TBD", where: "None", eventLabel: "Activity", group: "All YM" },
    ],
};

// Start at August 2025 and end at December 2025
const startMonth = 7;
const startYear = 2025;
const endMonth = 11;
const endYear = 2025;

let currentMonth = startMonth;
let currentYear = startYear;

// Get all navigation buttons
const prevButtons = document.querySelectorAll('.prev-month-btn');
const nextButtons = document.querySelectorAll('.next-month-btn');

function updateNavigationButtons() {
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        const isPrev = button.classList.contains('prev-month-btn');
        const isNext = button.classList.contains('next-month-btn');

        if (isPrev && currentYear === startYear && currentMonth === startMonth) {
            button.disabled = true;
        } else if (isNext && currentYear === endYear && currentMonth === endMonth) {
            button.disabled = true;
        } else {
            button.disabled = false;
        }
    });
}

function renderCalendar() {
    // Scroll to the top of the page on month change
    window.scrollTo(0, 0);

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById('currentMonthYear').textContent = `${monthNames[currentMonth]} ${currentYear}`;

    const eventList = document.getElementById('event-list');
    eventList.innerHTML = ''; // Clear the list

    // Collect and combine all events for the current month
    const allEvents = [];
    let lessonIndex = 0; // Use a single index to cycle through both leaders and boys

    // Add lessons with teachers and links
    calendarData.lessonsByWeek.forEach(lesson => {
        if (lesson.startDate.getMonth() === currentMonth && lesson.startDate.getFullYear() === currentYear) {
            const leader = calendarData.sundayLeaders[lessonIndex % calendarData.sundayLeaders.length];
            const boy = calendarData.sundayBoys[lessonIndex % calendarData.sundayBoys.length];

            allEvents.push({
                date: lesson.startDate,
                type: 'Lesson',
                title: `${lesson.lessonTitle} (${lesson.scriptureBlock})`,
                description: `<strong>Teachers:</strong> ${leader} & ${boy}`,
                url: lesson.url
            });
            lessonIndex++;
        }
    });

    // Add activities
    calendarData.activitiesData.forEach(activity => {
        const startMonth = activity.startDate.getMonth();
        const startYear = activity.startDate.getFullYear();

        if (startMonth === currentMonth && startYear === currentYear) {
            allEvents.push({
                date: activity.startDate,
                endDate: activity.endDate,
                type: activity.eventLabel,
                title: activity.name,
                description: {
                    time: activity.time,
                    where: activity.where,
                    group: activity.group
                }
            });
        }
    });

    // Sort all events by date
    allEvents.sort((a, b) => a.date - b.date);

    // Render each event
    if (allEvents.length === 0) {
         eventList.innerHTML = '<p class="text-center text-gray-500">No events for this month.</p>';
    } else {
        allEvents.forEach(event => {
            const eventDiv = document.createElement('div');
            eventDiv.classList.add('p-4', 'rounded-lg', 'shadow-sm', 'bg-gray-50', 'border', 'border-gray-200', 'relative');

            let eventColor = '';
            if (event.type === 'Lesson') {
                 eventColor = 'bg-blue-100 text-blue-800';
            } else if (event.type === 'Activity') {
                eventColor = 'bg-green-100 text-green-800';
            } else if (event.type === 'Campout') {
                eventColor = 'bg-red-100 text-red-800';
            }

            // Determine the date string
            let dateString;
            const startDate = event.date;
            const endDate = event.endDate;

            if (endDate && startDate.toDateString() !== endDate.toDateString()) {
                const startDay = startDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
                const endDayNumber = endDate.getDate();
                dateString = `${startDay} - ${endDayNumber}`;
            } else {
                dateString = startDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
            }

            // Handle lessons with a clickable title
            if (event.type === 'Lesson' && event.url) {
                eventDiv.innerHTML = `
                    <div class="flex justify-between items-start mb-2">
                        <span class="text-sm font-semibold text-gray-700">${dateString}</span>
                        <div class="px-2 py-1 rounded-full text-xs font-semibold ${eventColor}">${event.type}</div>
                    </div>
                    <h4 class="text-lg font-bold lesson-link" data-url="${event.url}">
                        ${event.title}
                    </h4>
                    <p class="text-sm text-gray-600 mt-1">${event.description}</p>
                `;
            } else {
                // Handle activities with stacked details
                const details = event.description;
                let detailsHtml = '';
                if (details.time && details.time !== 'TBD') detailsHtml += `<p class="text-sm text-gray-600">Time: ${details.time}</p>`;
                if (details.where && details.where !== 'TBD' && details.where !== 'None') detailsHtml += `<p class="text-sm text-gray-600">Where: ${details.where}</p>`;
                if (details.group && details.group !== 'N/A') detailsHtml += `<p class="text-sm text-gray-600">Group: ${details.group}</p>`;

                eventDiv.innerHTML = `
                    <div class="flex justify-between items-start mb-2">
                        <span class="text-sm font-semibold text-gray-700">${dateString}</span>
                        <div class="px-2 py-1 rounded-full text-xs font-semibold ${eventColor}">${event.type}</div>
                    </div>
                     <h4 class="text-lg font-bold text-gray-800">${event.title}</h4>
                     ${detailsHtml}
                `;
            }
            eventList.appendChild(eventDiv);
        });
    }

    // Add click listeners to the new lesson links
    document.querySelectorAll('.lesson-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const url = e.target.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank');
            }
        });
    });
    updateNavigationButtons();
}

// Event listeners for month navigation
prevButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentMonth > startMonth || currentYear > startYear) {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            renderCalendar();
        }
    });
});

nextButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentMonth < endMonth || currentYear < endYear) {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            renderCalendar();
        }
    });
});

// Initial render
document.addEventListener('DOMContentLoaded', renderCalendar);
