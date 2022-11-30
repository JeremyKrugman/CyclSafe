
const validateUsername = (username) =>{
  if (typeof username !== 'string') throw "Input must be a string";
  username=username.trim();
  if (username.length<1) return false;
  const userRegex = /^[A-Za-z0-9]{6,}$/; //Alphanumeric Characters of minimum length 6
  return userRegex.test(username);
}

const validatePassword = (password) =>{ //returns true if valid. returns false otherwise. 
  if (typeof password !== 'string') throw "Input must be a string";
  password=password.trim();
  if (password.length<1) return false;
  const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.*[a-zA-Z]).{6,}$/; //Contains one number, one lowercase, one uppercase, and one special char, and is at least length 6
  return passRegex.test(password);
}

module.exports={
  validateUsername,
  validatePassword
}