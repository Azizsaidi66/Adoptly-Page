export const check = () => {
  const name = document.getElementById('name').value;
  const amount = document.getElementById('amount').value;
  const email = document.getElementById('email').value;

  if (name == '' || !alpha(name)) {
    document.getElementById('nameerr').textContent = "*Invalid name";
    return false;
  }
  else{
    document.getElementById('nameerr').textContent = "";
  }

  if (amount <= 0) {
    alert('Amount must be greater than 0!');
    return false;
  }

  const p1 = email.indexOf('@');
  const p2 = email.indexOf('.');
  if(p1 == -1 || p2 == -1 || p1 > p2 || email == ''){
    document.getElementById('emailerr').textContent = "*Invalid email format. missing @-.";
    return false;
  }
  else{
    document.getElementById('emailerr').textContent = "";
  }
  
  return true;
};

function alpha(ch){
  let i = 0;
  while(ch.charAt(i).toUpperCase() >= "A" && ch.charAt(i).toUpperCase() <= "Z" && i < ch.length){
    i++;
  }
  return i == ch.length;
};