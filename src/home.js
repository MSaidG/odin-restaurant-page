export default function log(){
    console.log("This is home!");
}


const context = document.createElement("div");
context.classList.add("context");

export function layout() {
    
    const text = document.createElement("p");
    
    text.textContent = "Welcome home!"
    const body = document.querySelector("body");
    context.classList.add("home-background");
    
    body.appendChild(context);
    context.appendChild(text);


    


    return context;

}

export function clearLayout() {

    context.replaceChildren();
    context.remove();

}