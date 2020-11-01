class Video {
    $video;
    constructor() {
        this.$video = document.querySelector("#preview video");
    }

    timeupdate(iFrom, Utils) {
        const currentTime = this.$video.currentTime;

        iFrom.value = Utils.secondsToClockTime(currentTime);
    }

    loadeddata(iTo, Utils) {
        iTo.value = Utils.secondsToClockTime(this.$video.duration);
        this.$video.currentTime = 0;
    }
}

export default new Video();
