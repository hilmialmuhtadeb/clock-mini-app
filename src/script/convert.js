const hourA = document.getElementById('hourA');
const convertA = document.getElementById('convertA');
const resultA = document.getElementById('resultA');

const hourB = document.getElementById('hourB');
const unit = document.getElementById('unit');
const convertB = document.getElementById('convertB');
const resultB = document.getElementById('resultB');

const splitTime = (time) => {
  const splittedTime = time.split('.');
  return {
    hour: parseInt(splittedTime[0]),
    minute: parseInt(splittedTime[1]),
  };
}

const setHourToTwelveFormat = (hour) => {
  if (hour == 24) {
    return 0;
  } else if (hour > 12 && hour < 24) {
    return hour -= 12;
  } else {
    return hour;
  }
}

const setUnit = (hour) => {
  if (hour > 11 && hour != 24) {
    return 'PM';
  } else {
    return 'AM';
  }
}

const setHourToTwentyFourFormat = (hour, unit) => {
  if (unit === 'pm' && hour != 12) {
    return hour += 12;
  } else {
    if (hour < 10) {
      return `0${hour}`;
    } else {
      return hour;
    }
  }
}

convertA.addEventListener('click', () => {
  let { hour, minute } = splitTime(hourA.value);
  const unit = setUnit(hour);
  hour = setHourToTwelveFormat(hour);

  const result = `${hour}.${minute} ${unit}`;
  resultA.innerText = result;
});

convertB.addEventListener('click', () => {
  let { hour, minute } = splitTime(hourB.value);
  const unitValue = unit.value;
  
  hour = setHourToTwentyFourFormat(hour, unitValue);
  const result = `${hour}.${minute}`
  resultB.innerText = result;
});