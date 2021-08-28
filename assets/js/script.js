/*
let email = 'faelsant10@gmail.com';

console.log(`seu email é ${email}`);
console.log('seu email é' + email);

document.getElementById('btn-submit').addEventListener('click', e => {
				console.log("o botão foi clicado");
				
});
*/
document.getElementById('form-login').addEventListener('submit', e => {
				e.preventDefault();
   let password =		document.querySelector('#password').value;
			let usuario =		document.querySelector('#email').value;

   console.log(`seu email é "${usuario}" e sua senha "${password}"`);

});