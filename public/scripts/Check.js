class Check {
    errorOnTruncate(errorMsg) {
        if(location.search.indexOf("?") !== 0 || !location.search) {
            return false;
        }
    
        errorMsg.innerText = "Parece que ocorreu uma falha ao cortar o vídeo, tente novamente!";
        return true;
    }

    successfulOnTruncate(video) {
        if(location.href.includes("/cut/")) {
            const filepath = `/${atob(location.pathname.slice(5))}`;

            video.controls = true;
            video.autoplay = true;
            video.src = filepath;

            return true;
        }
        
        return false;
    }
}

export default new Check();
