document.addEventListener("DOMContentLoaded", function () {
    new Splide(".splide", {
      type: "loop",
      perPage: 5,
      perMove: 1,
      pagination: false,
      breakpoints: {
        1350: {
          perPage: 2,
        },
        800: {
          perPage: 1,
        },
      },
    }).mount();

  });