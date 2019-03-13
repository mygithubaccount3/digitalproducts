;(($) => {
    const controls = $('.form-control');
    const contactMessage = $('.contact__message');

    $('.contact__form button').click((event) => {
        event.preventDefault();
        let fieldsChecked = 0;

        for(let i = 0; i < controls.length; ++i) {
            if(controls[i].value === '') {
                controls[i].setAttribute('style', 'box-shadow: inset 0 0 5px red');
            }
            else {
                controls[i].setAttribute('style', 'box-shadow: inset 0 0 5px lightgreen');
                ++fieldsChecked;
            }
        }

        (fieldsChecked === 3) ? contactMessage.text('Form submitted').css({'color': 'green', 'opacity': '1'})
                              : contactMessage.text('You have not fill out all fields').css({'color': 'red', 'opacity': '1'})
    })
}) (jQuery);
