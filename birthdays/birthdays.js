function createBirthday(stringName, numMonth, numDay) {
    let birthday = {
        name: stringName,
        month: numMonth,
        day: numDay
    };
    return birthday;
}

function celebrateBirthday(objectBirthday) {
    return `Today is ${objectBirthday.month}/${objectBirthday.day}! Happy birthday, ${objectBirthday.name}!`;
}

function countBirthdays(arrayBirthdays, numMonth) {
    monthCounter = 0;
    for(let i = 0; i < arrayBirthdays.length; i++) {
        if(arrayBirthdays[i].month === numMonth) {
            monthCounter++;
        }
    }
    return monthCounter;
}

module.exports = {  
    createBirthday,
    celebrateBirthday,
    countBirthdays
};