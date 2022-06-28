window.onload=function(){
  const navBtn = document.getElementById('nav-btn');
  const cancelBtn = document.getElementById('cancel-btn');
  const sideNav = document.getElementById('sidenav');
  const modal = document.getElementById('modal');

  navBtn.addEventListener("click", function(){
      sideNav.classList.add('show');
      modal.classList.add('showModal');
  });

  cancelBtn.addEventListener('click', function(){
      sideNav.classList.remove('show');
      modal.classList.remove('showModal');
  });

  window.addEventListener('click', function(event){
      if(event.target === modal){
          sideNav.classList.remove('show');
          modal.classList.remove('showModal');
      }
  });
}

$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});
$("#menu-toggle-2").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled-2");
  $('#menu ul').hide();
});

function initMenu() {
  $('#menu ul').hide();
  $('#menu ul').children('.current').parent().show();
  //$('#menu ul:first').show();
  $('#menu li a').click(
     function() {
        var checkElement = $(this).next();
        if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
           return false;
        }
        if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
           $('#menu ul:visible').slideUp('normal');
           checkElement.slideDown('normal');
           return false;
        }
     }
  );
}
$(document).ready(function() {
  initMenu();
});
