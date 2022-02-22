class Fetch {
  async getCurrent(input) {
    const myKey = "958991b511b1eb04fd2199d8c91e8ba6";
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}"
    );
    const data = await response.json();

    console.log(data);

    return data;
  }
}
