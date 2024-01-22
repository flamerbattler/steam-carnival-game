const maximumPointsGiven = 6;
const mininumPointsGiven = 1;
const flipPercentageReduction = 5;
const goalPoints = 40;
let flipPercentage = 100;
let flips = 20;
let pointTotal = 0;

const flipOdds = percentage => Math.random() * 100 < percentage;
const pointsToGive = () => Math.floor(Math.random() * (maximumPointsGiven - mininumPointsGiven + 1)) + mininumPointsGiven;

function onButtonClick() {
    const isPoint = flipOdds(flipPercentage);
    flipPercentage -= flipPercentageReduction;
    flips -= 1

    if (isPoint) {
        pointTotal += pointsToGive();
        
        if (pointTotal === goalPoints) {
            //do win
        }
    } else {
        pointTotal = 0;
    }
};