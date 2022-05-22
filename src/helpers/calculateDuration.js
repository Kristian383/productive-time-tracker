/* eslint-disable prettier/prettier */
function calculateDuration(time) {
    if (!time) return "0h 0min";

    let num = time;
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);

    return `${rhours}h ${rminutes}min`;
}

export default calculateDuration;
