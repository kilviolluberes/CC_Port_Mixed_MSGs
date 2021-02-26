const starSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
const status = ['Great', 'Good', 'OK', 'Not Great', 'Bad'];
const activity = ['Stay Home', 'Go Out', 'Run!', 'Go to the movies', 'Have a personal day'];

const generateRandomWord = (sign, status, activity) => {
    randomSignIndex = Math.floor(Math.random() * sign.length)
    randomStatusIndex = Math.floor(Math.random() * status.length)
    randomActivityIndex = Math.floor(Math.random() * activity.length)
    console.log(`Your sign: ${sign[randomSignIndex]}`);
    console.log(`Your day is: ${status[randomStatusIndex]}`);
    console.log(`You should: ${activity[randomActivityIndex]} today.`);
}

generateRandomWord(starSigns, status, activity);