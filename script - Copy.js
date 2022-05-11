
// dynamic calendar 



  //variables

   const date = new Date();

   const lastDay = new Date(date.getFullYear(),date.getMonth() + 1,0).getDate();

   const months = ["January","February","March","April","May","June","July","August","September","October","November","December",];

   let monthDays = document.querySelector(".days");

   // month and year print
 
    document.querySelector(".date h1").innerHTML = months[date.getMonth()];

    document.querySelector(".date p").innerHTML = new Date().getFullYear();


     //all days print and current day highlight

    let days = "";

    for (let i = 1; i <= lastDay; i++) {
     if (
        i === new Date().getDate() &&
        date.getMonth() === new Date().getMonth()) {days += `<div onclick="myFunction()" class="today">${i}  </div>`;
      
       } else {
         days += `<div onclick="myFunction()" >${i}  </div>`;
       }  

  }
 monthDays.innerHTML = days;

 function myFunction(){
  console.log(this.innerHTML) ;

}


   
//  date selection 

//  selectedDay = document.querySelectorAll(".days div");
 
//  selectedDay.forEach(function(elem) {
//   elem.addEventListener("click", function() {
//    let dateArray = document.createElement("array");
//    dateArray.innerHTML = elem.innerHTML+ "," ;
//   localStorage.setItem("dateArray.innerHTML", JSON.stringify(dateArray.innerHTML));
//   dateDiv =  document.getElementById("select") ;
//   dateDiv.appendChild(dateArray) ;

    
//   });
 
  
// });

