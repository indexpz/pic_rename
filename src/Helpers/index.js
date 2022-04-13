function preventDefaults(event) {
    event.preventDefault()
    event.stopPropagation()
}


const fileTypes = [
    "image/apng",
    // "image/bmp",
    // "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    // "image/svg+xml",
    // "image/tiff",
    // "image/webp",
    // "image/x-icon"
];

function validFileType(file) {
    return fileTypes.includes(file.type);
}

export {preventDefaults, validFileType}