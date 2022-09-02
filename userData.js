var users;
fetch('https://sheet.best/api/sheets/c18fdbd1-8748-4541-be59-aae5cca280d5')
  .then((response) => response.json())
  .then((data) => (users = data));
  console.log(users);
function myFun() {
    var email = $('#email').val();
    var pass = $('#pass').val();
    console.log(users);
    for(var i=0;i<users.length;i++){
        if(users[i].Email == email && users[i].Password == pass){
            // document.getElementById("result").innerHTML = 'SUCCESS..!';
            alert('SUCCESS...!');
            break;
        } else{
            // document.getElementById("result").innerHTML = 'Check Your Credentials..!';
            alert('Check Your Credentials...!')
        }   
    }
}