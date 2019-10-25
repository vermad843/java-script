// use of charAt()

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];


dayStartWithT = days.filter((day) => {
    return day.charAt(0) == 'T';
  });

console.log(dayStartWithT);


// [ 'Tuesday', 'Thursday' ]