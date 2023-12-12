function createEvent(stringTitle, stringMonth, numDay) {
    let event = {
        title: stringTitle,
        month: stringMonth,
        day: numDay
    };
    if (stringMonth === "February") {
        if(numDay < 1 || numDay > 28) {
            return `Error: ${numDay} is not a valid day`;
        } else {
            return event;
        }
    } else if (stringMonth === "April" || stringMonth === "June" || stringMonth === "September" || stringMonth === "November") {
        if(numDay < 1 || numDay > 30) {
            return `Error: ${numDay} is not a valid day`;
        } else {
            return event;
        }
    } else if (stringMonth === "January" || stringMonth === "March" || stringMonth === "May" || stringMonth === "July" || stringMonth === "August" || stringMonth === "October" || stringMonth === "December") {
        if(numDay < 1 || numDay > 31) {
            return `Error: ${numDay} is not a valid day`;
        } else {
            return event;
        }
    }
}

function createCalendar(stringOwner, arrayEvents) {
    let calendar = {
        owner: stringOwner,
        events: arrayEvents
    };
    return calendar;
}

function reportMonthlyEvents(objectCalendar, stringMonth) {
    let monthlyEvents = [];
    let targetEvents = objectCalendar.events;
    for(let i = 0; i < targetEvents.length; i++) {
        if (targetEvents[i].month === stringMonth) {
            monthlyEvents.push(targetEvents[i]);
        }
    }
    return monthlyEvents;
}

module.exports = {  
    createEvent,
    createCalendar,
    reportMonthlyEvents
};