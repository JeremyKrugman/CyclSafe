$('#login-form').submit((event)=>{
  let username=$('#usernameInput').val().trim();
  let password=$('#passwordInput').val().trim();
  let userVal=validateUsername(username);
  let passVal=validatePassword(password);
  if (!(userVal&&passVal&&confirmed)){ //if any conditions don't pass, prevent form submission
    event.preventDefault();
  }
  //check what the issues are and err message respectively
  if (!userVal){
    $('#usernameErr').show();
    $('#usernameInput').addClass('inputError');
    $('#usernameInput').focus();
    $('#usernameInput').value = '';
  }
  else{
    $('#usernameErr').hide();
    $('#usernameInput').removeClass('inputError');
  }
  if (!passVal){
    $('#passwordErr').show();
    $('#passwordInput').focus();
    $('#passwordInput').addClass('inputError');
    $('#passwordInput').value = '';
  }
  else{
    $('#usernameErr').hide();
    $('#usernameInput').removeClass('inputError');
  }
});