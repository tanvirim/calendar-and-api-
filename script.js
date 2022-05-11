
// dynamic calendar 

  //variables

   const date = new Date();
   const lastDay = new Date(date.getFullYear(),date.getMonth() + 1,0).getDate();
   const months = ["January",
                 "February",
                 "March",
                 "April",
                 "May",
                 "June",
                 "July",
                 "August",
                 "September",
                 "October",
                 "November",
                 "December",];

let renderCalendar = function(){
   // month and year print 
    document.querySelector(".date h1").innerHTML = months[date.getMonth()];
    document.querySelector(".date p").innerHTML = new Date().getFullYear();

     // days print and current day highlight
    let days = "";
    for (let i = 1; i <= lastDay; i++) {
      if (
        i === new Date().getDate() &&  date.getMonth() === new Date().getMonth()) {
         days +=`<div class="today">${i}</div>`;
       } 
       else {
         days += `<div>${i}</div>`;
       }  
  }
let monthDays = document.querySelector(".days");
 monthDays.innerHTML = days;
   
//  date selection 

let selectedDay = document.querySelectorAll(".days div");

             //local storage getitem after refresh
let dateArray = JSON.parse(localStorage.getItem("dates")) || [];

let dateDiv =  document.getElementById("select") ;

 selectedDay.forEach(function(elem) {
     elem.addEventListener("click", function() {
              //bg Change
       elem.style.backgroundColor = 'salmon';
              //date collection inside arry named dateArray
        dateArray.push(elem.textContent)
         dateDiv.innerHTML = dateArray ;
              //save inside localStorage
 localStorage.setItem("dates", JSON.stringify(dateArray));
  });
});
}

renderCalendar() ;

//api data 
axios.get('https://jsonplaceholder.typicode.com/users')
.then(function(object) {
  object.data.forEach (x => {
    //api usernames insidie div
    document.getElementById("days2").innerHTML += '<div >' + x.username + '</div>'
  });
})
.catch(function(err){
})