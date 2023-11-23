/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

const header = document.querySelector('.header');
const studentList = document.querySelector('.student-list');
const linkList = document.querySelector('.link-list');

const studentsPerPage = 9;

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

const showPage = (list, page) => {
   const start = (page * studentsPerPage) - studentsPerPage;
   const end = (page * studentsPerPage) - 1;

   studentList.innerHTML = '';

   for ( i = 0; i < list.length; i++) {
      if ( i >= start && i <= end ) {
         const html = `
         <li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src=${list[i].picture.thumbnail} alt="Profile Picture">
            <h3>${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined ${list[i].registered.date}</span>
          </div>
        </li>
         `;
         studentList.insertAdjacentHTML("beforeend", html);
      }
   }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

const addPagination = (list) => {
   const pages = Math.ceil(list.length / studentsPerPage);

   for (i = 0; i < pages; i++) {
      const html = `
      <li>
         <button type="button">${i + 1}</button>
      </li>
      `;
      linkList.insertAdjacentHTML("beforeend", html);
   }

   linkList.firstElementChild.firstElementChild.classList.add('active');

   linkList.addEventListener("click", (e) => {
      const activeButton = document.querySelector('.active');
      const clickedButton = e.target.closest('button');
      if (activeButton && clickedButton) {
         activeButton.classList.remove("active");
      }
       if (clickedButton) {
         clickedButton.classList.add("active");
         showPage(data, clickedButton.innerHTML);
      }
   })
}

/*
Create the searchBar
This function will create and insert/append a search bar for searching students by name
*/
const searchBar = `
<label for="search" class="student-search">
  <span>Search by name</span>
  <input id="search" placeholder="Search by name...">
  <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
</label>
`;
header.insertAdjacentHTML("beforeend", searchBar);


// Call functions
showPage(data, 1);
addPagination(data);