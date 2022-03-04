export const validate = data =>{

    const errors = {}

    if(!data.name.trim()){
        errors.name = "User Name is required!";
    }
    else delete errors.name;

    if(!data.email) errors.email = "E-mail is required!";
    else if (! /(.+)@(.+){2,}\.(.+){2,}/.test(data.email)) errors.email = "E-mail is invalid!";
    else delete errors.email;

    if(!data.password) errors.password = "Password is required!";
    else if(data.password.length < 6) errors.password = "Password should has 6 or more character!";
    else delete errors.password;

    if(!data.checkPassword) errors.checkPassword = "confirm your password!";
    else if(data.checkPassword !== data.password) errors.checkPassword = "password is mismatched";
    else delete errors.checkPassword;

    if(data.isChecked) delete errors.isChecked;
    else errors.isChecked = "accept all terms!";

    return errors;
}