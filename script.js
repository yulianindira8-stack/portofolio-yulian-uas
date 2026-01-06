document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll(".lazy-video");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;

                if (!video.src) {
                    video.src = video.dataset.src;
                }

                observer.unobserve(video);
            }
        });
    }, {
        threshold: 0.5
    });

    videos.forEach(video => observer.observe(video));
});
