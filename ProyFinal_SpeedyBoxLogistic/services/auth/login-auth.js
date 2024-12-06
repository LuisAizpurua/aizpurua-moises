export const verifyUser = ({password, email}) => {
   const data_users = JSON.parse(localStorage.getItem('data_users')?? null);
   const data = data_users.filter(user => user.email === email.value)
                          .find(user => user.password === password.value);

   //localStorage.setItem('auth', data); 
   //document.cookie = `user=${JSON.stringify(data)}; path=/; max-age=3600`;
   return data;
}