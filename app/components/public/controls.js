const breve = () => {
    Swal.fire(
        'Em breve',
        'Em construção...Aguarde!',
        'warning'
    );    
};

document.getElementById("btn-suport").addEventListener("click", async() => {
    const { value: email } = await Swal.fire({
        title: 'Insira seu Email',
        input: 'email',
        inputLabel: 'Seu endereço de Email',
        inputPlaceholder: 'Enter your email address'
      })
      
      const { value: text } = await Swal.fire({
        input: 'textarea',
        inputLabel: 'Message',
        inputPlaceholder: 'Type your message here...',
        inputAttributes: {
          'aria-label': 'Type your message here'
        },
        showCancelButton: true
      })
      
      if (text&&email) {
        const data = {
            email: email,
            mensagem: text
        };
    
        fetch('https://formspree.io/f/mleynzjw', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            Swal.fire(
                'Sua mensagem foi enviada!',
                'Aguarde enquanto processamos sua mensagem',
                'success'
            );
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo deu errado! | Tente novamente mais tarde',
            });
        });
      } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preencha todos os campos!',
        });
      };
});

function clickSuport() {
    $('#btn-suport').click();
};