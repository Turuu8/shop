console.log("avaer");



const logo = document.getElementById("logo");

const huree = document.getElementById('huree');

const enter =document.getElementById("enter");

const input = document.querySelectorAll('input');

const wrong = document.getElementById("wrong")

const border =document.getElementById("border")

const zero =document.getElementById("zero")

logo.addEventListener('click' , () =>{
    huree.style.display = "block"

    window.addEventListener("keydown" ,(e)=>{
        if(e.keyCode === 13){


            if(input[1].value === "hi"){
                console.log("zov");
            }
            else{
                wrong.style.display = "block"
            }
            if(input[2].value === "1234"){
                console.log("zov");
            }
            else{
                wrong.style.display = "block"
            }
        }
    })
    
});

function nem(a , b ){
    return a+b;
}

border.addEventListener("click" , ()=>{
    nem(1 , zero.textContent );
    zero.textContent +=  nem(1 , zero.textContent );

})
