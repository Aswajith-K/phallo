// Manual buttons

function scrollProducts(sliderId, amount) {

    const container = document.getElementById(sliderId);

    container.scrollBy({
        left: amount,
        behavior: 'smooth'
    });

}

// Auto scrolling

const sliders = document.querySelectorAll('.products-container');

sliders.forEach((container) => {

    let autoScroll = setInterval(() => {

        if (
            container.scrollLeft + container.clientWidth >= container.scrollWidth - 10
        ) {

            container.scrollTo({
                left: 0,
                behavior: 'smooth'
            });

        } else {

            container.scrollBy({
                left: 380,
                behavior: 'smooth'
            });

        }

    }, 3000);

    // Pause on hover

    container.addEventListener('mouseenter', () => {
        clearInterval(autoScroll);
    });

    // Resume

    container.addEventListener('mouseleave', () => {

        autoScroll = setInterval(() => {

            if (
                container.scrollLeft + container.clientWidth >= container.scrollWidth - 10
            ) {

                container.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });

            } else {

                container.scrollBy({
                    left: 380,
                    behavior: 'smooth'
                });

            }

        }, 3000);

    });

});