
export const videoBackgroundInit = () => {
   const videoBG = document.querySelectorAll(".video-bg");

   const videoSources = `
     <source src="video/video.webm" type="video/webm">
     <source src="video/video.mp4" type="video/mp4">`;

   videoBG.forEach(video => {
    video.innerHTML = videoSources;
   });
}
