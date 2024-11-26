$('#toggleButton').on('click', () => {
  $('#myParagraph').toggle(); // Toggles between show and hide
});

$('#colorButton').on('click', () => {
  $('#colorDiv').css({
    'background-color':'cyan'
  }); 
});

$('#addClassButton').on('click', () => {
  
  $('#classDiv').addClass('newClass');
  

});

$('#removeClassButton').on('click', () => {
  $('#classDiv').removeClass('newClass');
});

$('#fadeInButton').on('click', () => {
  $('#fadeDiv').fadeIn();
});


$('#fadeOutButton').on('click', () => {
  $('#fadeDiv').fadeOut();
});

$('#slideUpButton').on('click', () => {
  $('#slideDiv').slideUp(); 
});
$('#slideDownButton').on('click', () => {
  $('#slideDiv').slideDown(); 
});