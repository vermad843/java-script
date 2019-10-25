// use of subString()
//firstThree letters of each day : 

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];


let firstThreeletters = days.map((day) => {
    return day.substring(0, 3);
})

console.log(firstThreeletters);

// [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ] 

