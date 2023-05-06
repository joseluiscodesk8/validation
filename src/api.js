const API =
  "https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_vwZVBSFq81Dvz4YneBhZQv4QWhFGNKjgH1OtXT5RLJZhHQe3wKqMQoMS7SxIUhWa";
console.log(API);
const imgApi = document.querySelector(".imgApi");
async function getImgApi() {
  const res = await fetch(API);
  const data = await res.json();

  imgApi.src = data[0].url;
  console.log(data);
}
