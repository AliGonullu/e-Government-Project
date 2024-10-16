function Validation(values){
    let error = {};

const TC_pattern = /^\d{11}$/; // 11 haneli TC no için

if (values.TC === "") {
  error.TC= "GovID should not be empty";
} else if (!TC_pattern.test(values.TC)) {
  error.TC = "GovID should be exactly 11 digits";
} else {
  error.TC = "";
}

const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/; //1 büyük harf, 1 küçük harf ve 1 sayı

if (values.password === "") {
  error.password = "Password should not be empty";
} else if (!password_pattern.test(values.password)) {
  error.password = "Password didn't match";
} else {
  error.password = "";
}

return error;

}

export default Validation;