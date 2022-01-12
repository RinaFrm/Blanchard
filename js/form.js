var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);

  new JustValidate('#form', {
    rules: {
      name: {
        required: true
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmsk.unmaskedvalue ()
          return Number(phone) && phone.length === 10
        }
      },
    },
    messages: {
      name: {
        required: 'Недопустимый формат'
      },
      tel: {
        required: 'Недопустимый формат',
      },
    },
    colorWrong: '#D11616'
  });
