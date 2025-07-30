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
    
    
    $('.exit_modal').click(function(){
      $('.modal').fadeOut()
    })
      // Formani yuborish
      $('#consult_form').on('submit', function (e) {
        e.preventDefault();
    
        var nameInput = $('input[name="firstname"]');
        var phoneInput = $('input[name="phone"]');
        var commentInput = $('textarea[name="comment"]');
    
        var name = nameInput.val().trim();
        var phone = phoneInput.val().trim();
    
        var hasError = false;
    
        nameInput.removeClass('error');
        phoneInput.removeClass('error');
    
        if (name === '') {
          nameInput.addClass('error');
          hasError = true;
        }
    
        if (phone === '') {
          phoneInput.addClass('error');
          hasError = true;
        }
    
        if (hasError) return;
    
        // reCAPTCHA checkbox tekshiruvi
        var recaptchaResponse = grecaptcha.getResponse();
        if (!recaptchaResponse) {
          $('.alert').show()
          $('.alert').text("Пожалуйста, подтвердите, что вы не робот.");
          return;
        }else{
          $('.alert').hide()
        }
    
        // Ma'lumotlarni yuborish
        sendToTelegram(name, phoneInput.val().trim(), commentInput.val().trim());
      });
    
      // Ma'lumotlarni Telegram botga yuborish funksiyasi
      function sendToTelegram(name, phone, comment) {
        var token_bot = '6654691576:AAGJ11Vuv5Kz-njb1dO49fJ5hSqeYJVeOPA';
        var chat_id = '2109316820';
    
        var text = "📝 Новая заявка на консультацию:\n\n" +
                   "<b>👤 Имя: </b>" + name + "\n" +
                   "<b>📞 Телефон: </b>" + phone + "\n" +
                   "<b>💬 Пожелания: </b>" + (comment ? comment : "—");
    
        $.get("https://api.telegram.org/bot" + token_bot + "/sendMessage", {
          chat_id: chat_id,
          text: text,
          parse_mode: 'HTML'
        }).done(function () {
          $('.modal').fadeOut();
          $('.modal#thanks').fadeIn();
          $('#consult_form')[0].reset();
          grecaptcha.reset(); // CAPTCHA qayta yuklanadi
        });
      }
  });
