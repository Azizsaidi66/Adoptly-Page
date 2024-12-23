export const check = () => {

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const pwd = document.getElementById('pwd').value;
  const cpwd = document.getElementById('cpwd').value;

  if (username == '' || email == '' || pwd == '' || cpwd == '') {
    alert('username invalid !');
    return false;
  }

  const p1 = email.indexOf('@');
  const p2 = email.indexOf('.');
  if(p1 == -1 || p2 == -1 || p1 > p2 || email == ''){
    alert('email invalid !')
    return false;
  }
  
  if(!alpha(username)){
    alert('username should be alphabetic !');
    return false;
  }

  if(pwd != cpwd){
    alert('confirm password !');
    return false;
  }

  return true;
}

function alpha(ch){
  let i = 0;
  while(ch.charAt(i).toUpperCase() >= "A" && ch.charAt(i).toUpperCase() <= "Z" && i < ch.length){
    i++;
  }
  return i == ch.length;
};