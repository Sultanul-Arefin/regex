// validation script here

// var reg=/[a-z]/ig; //1st way

// var reg2=new RegExp(/[a-z]/,'i'); //2nd way

// 11 digit phone number
const patterns={
	telephone: /^\d{11}$/, // ^ => 11 digit from the start, $ => 11 digit from the end
}