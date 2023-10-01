export default function log(){
    console.log("This is contact!");
}


const context = document.createElement("div");
context.classList.add("context");

export function layout() {
    
    const body = document.querySelector("body");
    const text = document.createElement("p");
    const map = document.createElement("div");
    const content = document.createElement("div");
    const iframe = document.createElement("iframe");
    const background = document.createElement("div");


    text.textContent = "Welcome contact!"
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    iframe.allowFullscreen = "";
    background.classList.add("contact-background");

    background.classList.add("contact-background");
    context.classList.add("contact-context");
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.8803850504287!2d-74.0085157239728!3d40.742657471389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf145f41b1%3A0x5fb8be19d61f1784!2sCull%20%26%20Pistol!5e0!3m2!1sen!2str!4v1696171742625!5m2!1sen!2str";

    body.appendChild(context);
    context.appendChild(content);
    context.appendChild(background);

    content.appendChild(text);
    content.appendChild(map);
    map.appendChild(iframe);



    return context;
}

export function clearLayout() {

    context.replaceChildren();
    context.remove();

}