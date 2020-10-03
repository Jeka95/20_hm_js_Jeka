function qr() {
   $('.phone').animate({ height: '620px' }, 60000);
   setTimeout(() => {
      $('.time').html("1")
   }, 60000);
   $('.phone').animate({ height: '0px' }, 60000);

   setTimeout(() => {
      $('.time').html("0")
   }, 120000);
}

qr();



