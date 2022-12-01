$('#register-form').submit((event)=>{
  event.preventDefault();
  let username=$('#usernameInput').val().trim();
  let password=$('#passwordInput').val().trim();
  let passwordConfirm=$('#passwordConfirm').val().trim();
  let userVal=validateUsername(username);
  let passVal=validatePassword(password);
  let confirmed=(password===passwordConfirm);

  if (!(userVal&&passVal&&confirmed)){ //if any conditions don't pass, prevent form submission
    event.preventDefault();
  }
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
    $('#passwordErr').hide();
    $('#passwordInput').removeClass('inputError');
  }
  if (!confirmed){
    console.log('ello');
    $('#passwordConfirmErr').show();
    $('#passwordConfirm').focus();
    $('#passwordConfrim').addClass('inputError');
    $('#passwordConfirm').value='';
  }
  else{
    $('#passwordConfirmErr').hide();
    $('passwordInput').removeClass('inputError');
  }
});