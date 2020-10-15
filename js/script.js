// MAIL

// Array con gli account mail nel 'database'
var accounts = ['1@gmail.com', '2@gmail.com', '3@gmail.com', '4@gmail.com', '5@gmail.com'];

// Prompt per richiesta all'utente di inserimento dell'email
var mail = prompt('Inserisci il tuo indirizzo email').toLowerCase();

// Variabile creata ad hoc ipotizzando che la mail inserita sia errata
var mailName = false;

// Loop di controllo elementi interni all'array 
for (var i = 0; i < accounts.length; i++) {
    var items = accounts[i];
    // Inserimento corretto mail decretato dal controllo tramite loop
    if (mail == items){
        mailName = true;
    }
}

if (mailName == true) {
    document.getElementById('mail').innerHTML = 'La mail inserita risulta valida, procedere con il login';
    console.log('La mail inserita risulta valida');
}

else {
    document.getElementById('mail').innerHTML = 'La mail inserita risulta non valida, riprovare';
    console.log('La mail inserita risulta non valida');
}