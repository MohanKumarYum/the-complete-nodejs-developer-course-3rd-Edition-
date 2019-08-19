console.log("Client side javascript file is loaded!");

fetch("http://localhost:3000/weather?address=Parramatta").then((response) => {
    response.json().then((data) => {
        if (data.error)
        return console.log('data.error:', data.error)
        console.log('location:', data.location);
        console.log('Forecast:', data.forecast);
    });
});