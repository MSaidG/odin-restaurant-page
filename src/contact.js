export default function log(){
    console.log("This is contact!");
}


const context = document.createElement("div");
export function layout() {
    
    const text = document.createElement("p");

    text.textContent = "Welcome contact!"
    const body = document.querySelector("body");

    body.appendChild(context);
    context.appendChild(text);

    return context;


}

export function clearLayout() {

    context.replaceChildren();
    context.remove();

}