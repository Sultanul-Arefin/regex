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
	email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

/*
(yourname) @ (domain) . (extension) (.again)
1. any letters, numbers, dots and/or hypens
2. any letters, numbers and/or hypens
3. any letters
4. a dot(.) then any letters (optional)
*/


/*
email => 4 part
1st part => ([a-z\d\.-]+) => only small letters, digits, '.', '-', as many times can be included 
2nd part => ([a-z\d-]+)
3rd part => ([a-z]{2,8})
4th part => (\.[a-z]{2,8})? => this part is optional that's why used ?
*/

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