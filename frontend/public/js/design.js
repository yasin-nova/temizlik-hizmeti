element.addEventListener("touchmove", function(e) {
    if (e.cancelable) {
        e.preventDefault();
    }
});

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {
      container: document.body,
      coverTrigger: false,
      constrainWidth: false,
      alignment: 'right',
      closeOnClick: true
    });
  });
  
  $('.dropdown-trigger').dropdown({
    container: document.body,
    coverTrigger: false,
    constrainWidth: false,
    alignment: 'right',
    closeOnClick: true
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });

  $(document).ready(function(){
    $('select').formSelect();
  });       

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);
  });

  $(document).ready(function(){
    $('.datepicker').datepicker();
  });
