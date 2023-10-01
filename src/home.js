export default function log(){
    console.log("This is home!");
}


const context = document.createElement("div");
context.classList.add("context");

export function layout() {
    
    const body = document.querySelector("body");
    const h1 = document.createElement("h1");
    const text1 = document.createElement("p");
    const background = document.createElement("div");
    const textDiv = document.createElement("div");
    
    h1.textContent = "Welcome to Cull&Pistol"
    text1.textContent = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet ligula id aliquam efficitur. Etiam varius quam bibendum, congue ante eget, finibus sapien. Cras accumsan tempor libero a vestibulum. Vivamus consequat et erat ac aliquet. In sit amet lectus id massa fringilla tristique eget blandit velit."
    background.classList.add("home-background");
    context.classList.add("home-context");
    textDiv.classList.add("home-textdiv");
    
    body.appendChild(context);
    context.appendChild(background);
    context.appendChild(textDiv);
    textDiv.appendChild(h1);
    textDiv.appendChild(text1);

    return context;
}


export function clearLayout() {

    context.replaceChildren();
    context.remove();

}