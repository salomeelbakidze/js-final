'use strict'
export function fetch(){
let btnLoadMore = document.getElementById("btn-load-more");
let btnPrev = document.getElementById("btn-prev-users");
let ulElement = document.getElementById("ul-users");
let currentPage = 1;
let totalPages;

function getUsers(page) {
  fetch("https://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?fmt=json" + page, {
    method: "GET",
  })
    .then(function (response) {
     
      if (!response.ok) {
        throw "Server Error";
      }
      return response.json();
    })
    .then(function (dataInfo) {
      console.log(dataInfo);
      const fragment = document.createDocumentFragment();

      dataInfo.data.forEach((element) => {
        let li = document.createElement("li");

        let title = document.createElement("h2");
        title.innerText = `${element.first_name} ${element.last_name}`;

        let imgElement = document.createElement("img");
        imgElement.src = element.avatar;

        li.appendChild(title);
        li.appendChild(imgElement);
        fragment.appendChild(li);
      });

      ulElement.innerHTML = " ";
      ulElement.appendChild(fragment);

      totalPages = dataInfo.total_pages;
    })
    .catch(function (error) {
      console.log(error);
    });
}

getUsers(currentPage);

btnLoadMore.addEventListener("click", function () {
  if (currentPage === totalPages) {
    return;
  }
  currentPage++;
  getUsers(currentPage);
});

btnPrev.addEventListener("click", function () {
  if (currentPage === 1) {
    return;
  }
  currentPage--;
  getUsers(currentPage);
}); }
