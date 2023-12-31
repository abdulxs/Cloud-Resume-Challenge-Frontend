const count = document.querySelector("#visitor-count")
async function updateCounter(){
    let response = await fetch("https://qogttv4jttpsltutplyefbpj4q0fzcoa.lambda-url.eu-north-1.on.aws/");
    let data = await response.json();
    count.innerHTML = ` ${data} `;
}
updateCounter() ;