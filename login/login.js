document.getElementById('login').addEventListener("click" ,()=>{
    const username = document.getElementsByTagName("input")[0].value;
    const password = document.getElementsByTagName("input")[1].value;
    if(username === "" || password === ""){
        alert("Ta kod oo oruulna uu")
    }
    if(username === "turuu@gmail.com" || password === "1234"){
        console.log("dd")
        localStorage.setItem("login", username);
        window.location.replace("index1.hmtl");
    }
    else{
        alert("Tanii oruulsan kod buruu baina")
    }
})