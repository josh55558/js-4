let user;

console.log(user);

document.querySelector("#mySubmit").onclick = function() {
    user = document.querySelector("#myText").value;
    document.querySelector("#wel").textContent = `Hello, ${user}`
    console.log(user);
}
