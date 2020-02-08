// validation script here

// var reg=/[a-z]/ig; //1st way

// var reg2=new RegExp(/[a-z]/,'i'); //2nd way

const inputs = document.querySelectorAll('input');

// 11 digit phone number
const patterns={
	telephone: /^\d{11}$/, // ^ => 11 digit from the start, $ => 11 digit from the end
	username: /^[a-z\d]{5,12}$/i, // 5 to 12 characters long, starts with a to z or number, case insensitive
	password: /^[\w@-]{8,20}$/, // \w=> any chars, any digit, _ too,,, @,- included, 8 to 20 characters
	slug: /^[a-z\d-]{8,20}$/, //lowercase, digits, - could contain, 8 to 20 characters long
};

// validation function
function validate(field,regex){
	// console.log(regex.test(field.value));
	if(regex.test(field.value)){
		field.className = 'valid';
	} else {
		field.className = 'invalid';
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', (e) => {
		// console.log(e.target.attributes.name.value);
		validate(e.target,patterns[e.target.attributes.name.value])
	});
});