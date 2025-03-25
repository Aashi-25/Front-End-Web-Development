const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#b1");

const getFacts = async() => {
    console.log("getting data......");
    let response = await fetch(URL); //get request
    console.log(response);//response is received in JSON format
    let data = await response.json(); //useable data
    factPara.innerText = data.fact; 
    // console.log(data.fact);
};
//during api calls, the page doesn't reload and the information gets printed during runtime.
// As soon as you send a request to API, you get a response in json format-> it is converted to js object using json() method

btn.addEventListener("click",getFacts); //to ensure when the button is clicked a fact appears on screen