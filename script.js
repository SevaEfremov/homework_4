const student = "Ефремов Севастьян Павлович";

document.getElementById("student").innerHTML = student;
  
  try {
    function throwRandomError(opportunity){
     if (Math.random() < opportunity) {
       throw new Error();
     } else {
      alert ('все оке :)');
     }
    } throwRandomError(0.2);
   } catch(err) {
     alert ('тут ошибка, перезагрузитесь');
   }