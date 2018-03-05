function getSleepHours(day) {
  if(day === 'Monday') {
    return 8;
  }else if (day === 'Tuesday') {
    return 7;
  }else if (day === 'Wednesday') {
    return 6 ;
  } else if (day === 'Thursday') {
    return 8 ;
  } else if (day === 'Friday') {
    return 5;
  } else if (day === "Saturday") {
    return 7 ;
  } else if (day ==='Sunday') {
    return 8;
  }
}

const getActualSleepHours = () => {
return (getSleepHours('Monday') +
getSLeepHours('Tuesday') +
getSLeepHours('Wednesday') +
getSLeepHours('Thursday') +
getSLeepHours('Friday') +
getSLeepHours('Saturday') +      
getSLeepHours('Sunday'))     
}

console.log(getActualSleepHours)

const getIdealSleepHours = () => {
const idealHours = 8;
return idealHours * 7;
}

const calculateSleepDebt = () => {
const actualSleepHours = getActualSleepHours;
const  idealSleepHours = getIdealSleepHours;
if (actualSleepHours === idealSleepHours) {
  console.log("the use got a good amount of perfect sleep.");
} else if (actualSleepHours > idealSleepHours) {
  console.log('user got more sleep than needed');
} else if (actualSleepHours < idealSleepHours) {
  console.log('user you get some rest');
  console.log('you got' + (idealSLeepHours - actualSLeepHours) + ' hours less sleep than you needed this week, get some rest.') ;
} 

}

calculateSleepDebt();




