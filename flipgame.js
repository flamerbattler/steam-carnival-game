const maximumPointsGiven = 6;
const mininumPointsGiven = 1;
const flipPercentageChange = 5;
const goalPoints = 30;
let flipPercentageForPoint = 99;
let flipPercentageForZero = 1;
let turnsLeft = 20;
let pointTotal = 0;
let pointsFlipped = 0;

const flipOdds = percentage => Math.random() * 100 < percentage;
const pointsToGive = () => Math.floor(Math.random() * (maximumPointsGiven - mininumPointsGiven + 1)) + mininumPointsGiven;

function onButtonClick() {
    const isPoint = flipOdds(flipPercentageForPoint);
    turnsLeft -= 1;

    if (flipPercentageForPoint - flipPercentageChange < 0) {
        flipPercentageForPoint = 0;
    } else {
        flipPercentageForPoint -= flipPercentageChange;
    }

    if (flipPercentageForZero + flipPercentageChange > 100) {
        flipPercentageForZero = 100;
    } else {
        flipPercentageForZero += flipPercentageChange;
    }

    if (isPoint) {
        pointsFlipped = pointsToGive();
        pointTotal += pointsFlipped;
        
        if (pointTotal === goalPoints) {
            // do win
        }
    } else {
        pointTotal = 0;
        // do lose
    }
}