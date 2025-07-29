$(document).ready(function () {
    $('.faq_accordion__trigger').on('click', function () {
      const $this = $(this);
      const $content = $this.next('.faq_accordion__content');
  
      // Close others
      $('.faq_accordion__trigger').not($this).removeClass('is_open');
      $('.faq_accordion__content').not($content).removeClass('is_visible');
  
      // Toggle current
      $this.toggleClass('is_open');
      $content.toggleClass('is_visible');
    });
    $('.hamburger').click(function () {
      $(this).toggleClass('active');
      $('.header_mobile').toggleClass('active');
      $('body').toggleClass('hidden');
    });
    AOS.init();
    $('.open_modal').click(function(){
      $('.modal').fadeIn()
    })
    $('#consult_form').on('submit', function(e) {
      e.preventDefault();
  
      // CAPTCHA tekshirish
      var recaptcha = grecaptcha.getResponse();
      if (!recaptcha) {
        alert("Пожалуйста, подтвердите, что вы не робот.");
        return;
      }
  
      var name = $('input[name="firstname"]').val();
      var phone = $('input[name="phone"]').val();
      var comment = $('textarea[name="comment"]').val();
  
      var token = '6654691576:AAGJ11Vuv5Kz-njb1dO49fJ5hSqeYJVeOPA';
      var chat_id = '2109316820';
  
      var text = "📝 Новая заявка на консультацию:\n\n" +
                 "👤 Имя: " + name + "\n" +
                 "📞 Телефон: " + phone + "\n" +
                 "💬 Пожелания: " + (comment ? comment : "—");
  
      $.get("https://api.telegram.org/bot" + token + "/sendMessage", {
        chat_id: chat_id,
        text: text
      }).done(function() {
        alert("Спасибо! Ваша заявка успешно отправлена.");
        $('#consult_form')[0].reset();
        grecaptcha.reset();
      }).fail(function() {
        alert("Ошибка при отправке. Попробуйте позже.");
      });
    });
  });
  