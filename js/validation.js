let form = document.querySelector('form');
let email = document.querySelector('input#email');
let inputs = document.querySelectorAll('.input');
inputs.forEach((input)=>{
    input.addEventListener('blur',()=>{
        if(isEmpty(input.value)){
            input.nextElementSibling.textContent="This field is required";
        }else{
            input.nextElementSibling.textContent= "";
        }
        console.log(input.getAttribute('type'));
        if(input.getAttribute('type') ==='email'&&!isEmpty(input.value)){
            if(!isEmailValid(input.value)){
            
                email.nextElementSibling.textContent = "Email is Invalid";
            }else{
                email.nextElementSibling.textContent = "";
            }
            
        }
    })
})

form.onsubmit = (e)=>{
    e.preventDefault();
    
    if(validateForm()){
        console.log("Form is Submitting");
        form.method="post";
        form.submit();
    }
}
function validateForm() {
    let isValid = true;
    console.log(inputs);
    /*Validate Inputs isn't empty*/
    inputs.forEach((input)=>{
        if(isEmpty(input.value)){
            console.log("This field is required")
            input.nextElementSibling.textContent="This field is required";
            isValid = false;
        }else{
            input.nextElementSibling.textContent= "";
        }
    })
    let email = document.querySelector('input#email');
    if (!isEmpty(email.value)){
        if(!isEmailValid(email.value))
        {
            email.nextElementSibling.textContent = "Email is Invalid";
            isValid = false;
        }else{
            email.nextElementSibling.textContent = "";
        }
    }else{
        email.nextElementSibling.textContent = "This field is required";
        isValid = false;
    }

    return isValid;
}
function isEmpty(value){
    console.log(value);
    console.log(value.trim() === "");
    return value.trim() === ""; 
}
function isEmailValid(email){
    console.log(email);
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}