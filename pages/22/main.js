$('#sandwichmenu').on('click', function(e) {
  e.preventDefault();
  $('#sandwichmenu').toggleClass("active");
  $('.menu').toggleClass("active");
});
