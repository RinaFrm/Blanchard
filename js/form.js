var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);

  let validateForms = function(selector, rules, yaGoal) {
    new window.JustValidate(selector, {
      rules: rules,
      submitHandler: function(form) {
        let formData = new FormData(form);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
            }
          }
        }

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        form.reset();
      }
    })
  }

  validateForms("#form", {  
      name: {
        required: true
      }, 
      tel: {
        required: true
      },
  }, 
  'send goal');

 // new JustValidate('#form', {
 //   rules: {
 //     name: {
 //       required: true
 //     },
 //     tel: {
 //       required: true
 //     },
 //   },
 //   messages: {
 //     name: {
 //       required: 'Недопустимый формат'
 //     },
 //     tel: {
  //      required: 'Недопустимый формат',
 //     },
 //   },
 //   SubmitHandler
//
 // });
 // colorWrong: '#D11616'