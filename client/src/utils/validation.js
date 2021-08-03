const validation = ({firstName, lastName, email, password, cf_password}) => {
    const err = {}

    if(!firstName){
        err.firstName = "Please add first name."
    }else if(firstName.length > 25){
        err.firstName = "First name is up to 25 characters long"
    }

    if(!lastName){
        err.lastName = "Please add last name."
    }else if(lastName.length > 25){
        err.lastName = "Last name is up to 25 characters long"
    }

    if(!email){
        err.email = "Please add email."
    }else if(!validateEmail(email)){
        err.email = "Email format is incorrect."
    }

    if(!password){
        err.password = "Please add password."
    }else if(password.length < 4){
        err.password = "Password must be at leat 4 characters."
    }

    if(password !== cf_password){
        err.cf_password = "Passwords do not match."
    }
    
    return{
        errMsg: err,
        errLength: Object.keys(err).length
    }

}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export default validation;