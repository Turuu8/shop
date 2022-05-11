const products = [
    {
        id:1,
        tigle:"tsunh",
        pirce: 200,
        image: "https://cdn3.shoppy.mn/spree/images/1235864/product/p705704_3.jpg"
    }
]
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} 
else {
    ready();
}

function ready() {
    const mail = localStorage.getitem("mail");
    console.log(mail);
}