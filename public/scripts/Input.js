class Input {
    $iFrom;
    $iTo;
    $iFile;
    $iSubmit = document.querySelector(".input-submit input");
    constructor() {
        this.$iFrom = document.querySelector("#from");
        this.$iTo = document.querySelector("#to");
        this.$iFile = document.getElementById('raw');
    }

    filterInputValue(value) {
        return value.split('').filter(char => {
            char = char.replace(/[^\d:]/, "");
    
            if (char) {
                return char;
            }
        }).join('');
    }

    formatTime(e, video, Utils) {
        e.target.maxLength = 8;
        e.target.pattern = "[0-9]{2}:[0-9]{2}:[0-9]{2}";
    
        let value = e.target.value;
        let seconds;
        value = this.filterInputValue(value);
        seconds = Number(value);
    
        if (seconds <= 0 && !isNaN(seconds) || !value) {
            value = "00:00:00";
            seconds = Number(value);
        }
    
        if (!isNaN(seconds) && seconds > Utils.DAY_IN_SECONDS) {
            value = "23:59:59";
            seconds = Number(value);
        }
    
        if (!e.target.checkValidity()) {
            value = value.replace(/\D/g, "");
            seconds = Number(value);
        }
    
        if (!isNaN(seconds)) {
            value = Utils.secondsToClockTime(seconds);
        }
    
        const actualSeconds = Utils.goTo(value);
        if (e.target === this.$iFrom) {
            video.currentTime = actualSeconds;
        } else if (video.duration && actualSeconds > video.duration) {
            value = Utils.secondsToClockTime(video.duration);
        }
    
        e.target.value = value;
    }

    readFile(e, video, errorMsg, limitSize) {
        if (e.target.files[0].size <= limitSize) {
            errorMsg.innerText = '';
            this.$iSubmit.removeAttribute('disabled');
        } else {
            this.$iSubmit.setAttribute('disabled', 'disabled');
            errorMsg.innerText = 'O arquivo que você está tentando enviar é muito grande! O tamanho máximo aceitado é 100 MB';
        }
    
        let file = e.target.files[0];
        let fr = new FileReader();
    
        fr.addEventListener("load", () => {
            video.autoplay = true;
            video.controls = true;
            video.src = fr.result;
        });
    
        fr.readAsDataURL(file);
    }

    async insertVideo(path) {
        const res = await fetch(path);
        const blob = await res.blob();
        const pos = path.lastIndexOf(".");
        const extname = path.slice(pos);

        const dto = new DataTransfer() || new ClipboardEvent("").clipboardData;
        dto.clearData();

        const file = new File([blob], `truncated-video${extname}`, { type: blob.type });
        dto.items.add(file);
        this.$iFile.files = dto.files;
    }
}

export default new Input();
