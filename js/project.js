$(document).ready(function () {
  $(".projectFilter").click(function () {
    var filterId = $(this).attr("id");
    $(".projectFilter").removeClass("active");
    $(this).addClass("active");
    $(".projectsGallery .row").removeClass("active");
    $(`.${filterId}`).addClass("active");
  });
});
