let email;
        function getField(fieldSelected){
            email = document.getElementById(fieldSelected);
        }
        const formB = document.getElementById('formBottom');
        const formM = document.getElementById('formMid');
        const formT = document.getElementById('formTop');

        const scriptURL = 'https://script.google.com/macros/s/AKfycbw8FIYfYp04xVBElCM5O-OFkugZJJgV72uYWYmsImlrrEbQkMIaAORDZ2GRqF0bK2TiVw/exec'
        formB.onsubmit = (e) => {
            let formData = new FormData();
            formData.append("email", email.value)
            e.preventDefault();
            if(email.value){
                 fetch(scriptURL, { method: 'POST', body: formData})
                .then(response => {
                console.log('Success!', response);
                email.value = "";
                sweet("¡Gracias por formar parte de nuestra comunidad!", "Pronto recibirás un mail con toda la información necesaria para que nos mantengamos en contacto.");
            })
            .catch(error => console.error('Error!', error.message))
            }
        }
        formM.onsubmit = (e) => {
            let formData = new FormData();
            formData.append("email", email.value)
            e.preventDefault();
            if(email.value){
                 fetch(scriptURL, { method: 'POST', body: formData})
                .then(response => {
                console.log('Success!', response);
                email.value = "";
                sweet("¡Gracias por formar parte de nuestra comunidad!", "Pronto recibirás un mail con toda la información necesaria para que nos mantengamos en contacto.");
            })
            .catch(error => console.error('Error!', error.message))
            }
        }
        formT.onsubmit = (e) => {
            let formData = new FormData();
            formData.append("email", email.value)
            e.preventDefault();
            if(email.value){
                 fetch(scriptURL, { method: 'POST', body: formData})
                .then(response => {
                console.log('Success!', response);
                email.value = "";
                sweet("¡Gracias por formar parte de nuestra comunidad!", "Pronto recibirás un mail con toda la información necesaria para que nos mantengamos en contacto.");
            })
            .catch(error => console.error('Error!', error.message))
            }
        }
