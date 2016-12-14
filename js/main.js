$(function() {

  var html = $('#tmpl').html();
  var data = {
        name: "Бабухина Анна",
        targetTitle: "Мои цели:",
        targets:[
          "Развитие себя",
          "Достижение новых целей",
          "Работа в команде"
        ],
        tel: "+380 (98) 555 55 55",
        email: "annmychailova@gmail.com",
        fblink: "https://www.facebook.com/annmychailova",
        expectTitle: 'Ожидания:',
        expectContent: 'Желание учиться и стать успешной =)'
      }

      var content=tmpl(html, data);

      $('.templation').append(content);

});
