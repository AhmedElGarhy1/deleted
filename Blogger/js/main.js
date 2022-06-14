$(document).ready(function () {
  $(".bars").click(function () {
    $(".nav").toggleClass("mobile-nav");
  });

  $(".scroll i").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
});
