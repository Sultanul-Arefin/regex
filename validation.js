// validation script here

// var reg=/[a-z]/ig; //1st way

// var reg2=new RegExp(/[a-z]/,'i'); //2nd way

const inputs = document.querySelectorAll('input');

// 11 digit phone number
const patterns={
	telephone: /^\d{11}$/, // ^ => 11 digit from the start, $ => 11 digit from the end
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