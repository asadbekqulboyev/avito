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
      $('.modal#consult').fadeIn()
    })
    $('.phone_mask').inputmask({
      mask: '+7 (999) 999-99-99',
      showMaskOnHover: false,
      showMaskOnFocus: true,
      clearIncomplete: true
    });
    // $('#consult_form').on('submit', function(e) {
    //   e.preventDefault();
    
    //   var nameInput = $('input[name="firstname"]');
    //   var phoneInput = $('input[name="phone"]');
    //   var isValid = true;
    
    //   // Error classlarini tozalash
    //   nameInput.removeClass('error');
    //   phoneInput.removeClass('error');
    
    //   // Ismni tekshirish
    //   if (nameInput.val().trim() === "") {
    //     nameInput.addClass('error');
    //     isValid = false;
    //   }
    
    //   // Telefonni tekshirish
    //   if (phoneInput.val().trim() === "") {
    //     phoneInput.addClass('error');
    //     isValid = false;
    //   }
    
    //   // Agar bo'sh maydon bo'lsa forma yuborilmaydi
    //   if (!isValid) {
    //     return;
    //   }
    
    //   // CAPTCHA tekshirish
    //   var recaptcha = grecaptcha.getResponse();
    //   if (!recaptcha) {
        
    //     return;
    //   }
    
    //   // Ma'lumotlarni olish
    //   var name = nameInput.val().trim();
    //   var phone = phoneInput.val().trim();
    //   var comment = $('textarea[name="comment"]').val().trim();
    //   var token = '6654691576:AAGJ11Vuv5Kz-njb1dO49fJ5hSqeYJVeOPA';
    //   var chat_id = '2109316820';
    
    //   var text = "📝 Новая заявка на консультацию:\n\n" +
    //              "<b>👤 Имя: </b>" + name + "\n" +
    //              "<b>📞 Телефон: </b>" + phone + "\n" +
    //              "<b>💬 Пожелания: </b>" + (comment ? comment : "—");
    
    //   // Telegramga yuborish
    //   $.get("https://api.telegram.org/bot" + token + "/sendMessage", {
    //     chat_id: chat_id,
    //     text: text,
    //     parse_mode: "HTML"
    //   }).done(function() {
    //     $('.modal').fadeOut();
    //     $('.modal#thanks').fadeIn();
    //     $('#consult_form')[0].reset();
    //     grecaptcha.reset();
    //   }).fail(function() {
    //     alert("Ошибка при отправке. Попробуйте позже.");
    //   });
    // });
    
    $('.exit_modal').click(function(){
      $('.modal').fadeOut()
    })
  });
  