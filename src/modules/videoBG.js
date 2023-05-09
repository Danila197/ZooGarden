export const videoBGInit = () => {
    const videoBGElems = document.querySelectorAll('.video-bg');

    const videoHTML = `
        <source src="video/video.webm" type="video/webm">
        <source src="video/video.mp4" type="video/mp4">
    `
    videoBGElems.forEach(videoBGElem => {
        videoBGElem.innerHTML = videoHTML;
    });
}
