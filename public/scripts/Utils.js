class Utils {
    DAY_IN_SECONDS = 86399;

    goTo(time) {
        let [hours, minutes, seconds] = time.split(":").map(Number);
    
        minutes = hours * 60 + minutes;
        seconds = minutes * 60 + seconds;
    
        return seconds;
    }

    secondsToClockTime(time) {
        if (time > this.DAY_IN_SECONDS) {
            time = this.DAY_IN_SECONDS;
        }
    
        let [hours, minutesH = "00"] = (time / 60 / 60).toString().split(".");
        let [minutes, secondsM = "00"] = (Number(`0.${minutesH}`) * 60).toString().split(".");
        let seconds = Math.round(Number(`0.${secondsM}`) * 60);
    
        [hours, minutes, seconds] = [`0${hours}`.slice(-2), `0${minutes}`.slice(-2), `0${seconds}`.slice(-2)]
    
        return `${hours}:${minutes}:${seconds}`;
    }
}

export default new Utils();
