console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");

weatherForm.addEventListener("submit", e => {
  e.preventDefault();
  
  const location = search.value;
  
  console.log("location:", location);

  fetch("http://localhost:3000/weather?address=" + location).then(response => {
    response.json().then(data => {
      if (data.error) return console.log( data.error);
      console.log("Location:", data.location);
      console.log("Forecast:", data.forecast);
    });
  });

});
