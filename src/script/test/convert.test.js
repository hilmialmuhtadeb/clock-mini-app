const splitTime = (time) => {
  const splittedTime = time.split('.');
  return {
    hour: parseInt(splittedTime[0]),
    minute: parseInt(splittedTime[1]),
  };
};

const setUnit = (hour) => {
  if (hour > 11 && hour != 24) {
    return 'PM';
  } else {
    return 'AM';
  }
};

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
};

const setHourToTwelveFormat = (hour) => {
  if (hour == 24) {
    return 0;
  } else if (hour > 12 && hour < 24) {
    return hour -= 12;
  } else {
    return hour;
  }
};

describe('Clock convert apps', () => {
  test('splitTime method should return hour and minute in object', () => {
    const splittedTime = {
      hour: 20,
      minute: 15,
    }
    expect(splitTime('20.15')).toEqual(splittedTime);
  });

  test('setUnit method should return AM/PM based on hour sent', () => {
    expect(setUnit(18)).toBe('PM');
    expect(setUnit(12)).toBe('PM');
    expect(setUnit(11)).toBe('AM');
    expect(setUnit(0)).toBe('AM');
  });

  test('setHourToTwelveFormat method should return in number', () =>  {
    expect(typeof(setHourToTwelveFormat(18))).toBe('number');
  });

  test('setHourToTwelveFormat method should return conversion result from 24 format', () =>  {
    expect(setHourToTwelveFormat(24)).toBe(0);
    expect(setHourToTwelveFormat(12)).toBe(12);
    expect(setHourToTwelveFormat(16)).toBe(4);
  });

  test('setHourToTwentyFormat method should return conversion result based on 12 hour format and AM/PM', () => {
    expect(setHourToTwentyFourFormat(9, 'pm')).toBe(21);
    expect(setHourToTwentyFourFormat(7, 'am')).toBe('07');
    expect(setHourToTwentyFourFormat(12, 'pm')).toBe(12);
    expect(setHourToTwentyFourFormat(0, 'am')).toBe('00');
  })
});