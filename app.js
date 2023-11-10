function fetchItems() {
    const apiUrl = `http://80.90.188.96:5000/WeatherForecast`;

    fetch(apiUrl, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin':'*', 
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

fetchItems();