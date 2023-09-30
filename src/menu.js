export default function log(){
    console.log("This is menu!");
}


const context = document.createElement("div");
context.classList.add("context");

export function layout() {
    
    const text = document.createElement("p");

    text.textContent = "Welcome menu!"
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