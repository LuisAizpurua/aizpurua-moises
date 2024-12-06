export const VerifyRegisteredUser = ({name, email, password, rol, phone}) => {
    const data_users = JSON.parse(localStorage.getItem('data_users')?? null);
    const campus = {
        id: data_users.length + 1, 
        name: name.value, 
        email: email.value, 
        password: password.value, 
        rol: rol.value, 
        phone: phone.value
    };

    console.log('Register: ', data_users)
    data_users.push(campus);
    localStorage.setItem('data_users',JSON.stringify(data_users));

    return campus;
}