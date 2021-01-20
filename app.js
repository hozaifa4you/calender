const date = new Date();
const dateElement = document.querySelector('.date h1');
console.log(dateElement)
const dateElementPra = document.querySelector('.date p');
const monthDays = document.querySelector('.days');


const renderCalender = () => {

   const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

   date.setDate(1);
   console.log(date.getDay())

   const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

   const firstIndex = date.getDay()

   const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
   const nextDay = 7 - lastDayIndex - 1;

   const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
   ];

   console.log(months[date.getMonth()]
   )

//month element
   dateElement.innerHTML = months[date.getMonth()];
// date element
   dateElementPra.innerHTML = date.toDateString();


   let days = '';

//prev month days
   for (let x = firstIndex; x > 0; x--) {
      days += `
      <div class="prev-date">${prevLastDay - x + 1}</div>
   `;
   }

//display present month days
   for (let i = 1; i <= lastDay; i++) {
      if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
         days += `
      <div class="today">${i}</div>
   `
      } else {
         days += `
      <div>${i}</div>
   `
      }
   }

//next month days
   for (let j = 1; j <= nextDay; j++) {
      days += `
      <div class="next-date">${j}</div>
   `
      monthDays.innerHTML = days;
   }
}

//goto prev month
document.querySelector('.prev').addEventListener('click', () => {
   date.setMonth(date.getMonth() - 1)
   renderCalender()
})

//goto next month
document.querySelector('.next').addEventListener('click', () => {
   date.setMonth(date.getMonth() + 1)
   renderCalender()
})

renderCalender()