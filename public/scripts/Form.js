class Form {
    $form;
    constructor() {
        this.$form = document.getElementById('upload-form');
    }

    checkFS(iFile, errorMsg, limitSize) {
        if (window.FileReader && window.File && window.FileList && window.Blob) {
            if (typeof iFile.files[0] !== "undefined") {
                if (iFile.files[0].size > limitSize) {
                    errorMsg.innerText = 'O arquivo que você está tentando enviar é muito grande! O tamanho máximo aceitado é 100 MB';
                    return false;
                }
            } else {
                return false;
            }
        }
        return true;
    }
}

export default new Form();