document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('[data-nav-toggle]');
  if (toggle) toggle.addEventListener('click', function () { document.body.classList.toggle('nav-open'); });
  document.querySelectorAll('.faq-q').forEach(function (button) {
    button.addEventListener('click', function () { button.parentElement.classList.toggle('open'); });
  });
});
