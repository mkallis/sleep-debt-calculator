// This calculator determines the actual and ideal hours of sleep for each night of the last week
// It also calculates, in hours, how far you are from your weekly sleep goal

// Returns the amount of hours you slept on a given day
const getSleepHours = day => {
    switch (day) {
        case 'monday':
            return 8;
            break;
        case 'tuesday':
            return 7;
            break;
        case 'wednesday':
            return 6;
            break;
        case 'thursday':
            return 7;
            break;
        case 'friday':
            return 5;
            break;
        case 'saturday':
            return 8;
            break;
        case 'sunday':
            return 9;
            break;
        default:
            break;
    }
}

// Returns the amount of hours actually slept
const getActualSleepHours = () => getSleepHours('monday') +
        getSleepHours('tuesday') +
        getSleepHours('wednesday') +
        getSleepHours('thursday') +
        getSleepHours('friday') +
        getSleepHours('saturday') +
        getSleepHours('sunday');

console.log(getActualSleepHours());

// Returns the ideal sleep hours you prefer
const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
}

console.log(getIdealSleepHours());

// Calculate sleep debt
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        return "You got the perfect amount of sleep!";
    } else if (actualSleepHours < idealSleepHours) {
        return `You could use a little more sleep. Your sleep deficit was ${idealSleepHours - actualSleepHours} hours.`;
    } else if (actualSleepHours > idealSleepHours) {
        return `You got ${actualSleepHours - idealSleepHours} hours more sleep than needed!`;
    }
}

console.log(calculateSleepDebt());