let CompleteName;
let email;
let text;
        function getField(fieldSelected){
            CompleteName = document.getElementById(fieldSelected);
            email = document.getElementById(fieldSelected);
            text = document.getElementById(fieldSelected);
        }
        const formC = document.getElementById('formComplete');
        

        const scriptURL = 'https://script.google.com/macros/s/AKfycbwf3R5QIB1O2uNOXrn5CrJQF--1W3yVU0Xs_POgoTmKx3cXDkxIzxnG0d1XIHpimUJr8Q/exec'
        formC.onsubmit = (e) => {
            let formData = new FormData();
            formData.append("CompleteName", CompleteName.value)
            formData.append("email", email.value)
            formData.append("text", text.value)
            e.preventDefault();
            if(email.value){
                 fetch(scriptURL, { method: 'POST', body: formData})
                .then(response => {
                console.log('Success!', response);
                email.value = "";
                sweet("Muchas gracias por ser parte", "Pronto vas a recibir novedades sobre Telling");
            })
            .catch(error => console.error('Error!', error.message))
            }
        }
        