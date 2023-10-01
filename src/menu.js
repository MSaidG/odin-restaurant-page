export default function log(){
    console.log("This is menu!");
}


const context = document.createElement("div");
context.classList.add("context");

export function layout() {
    
    const body = document.querySelector("body");
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h1");
    const h3 = document.createElement("h1");
    const h4 = document.createElement("h1");
    const card1 = document.createElement("div");
    const card2 = document.createElement("div");
    const card3 = document.createElement("div");
    const card4 = document.createElement("div");
    const card1Back = document.createElement("div");
    const card2Back = document.createElement("div");
    const card3Back = document.createElement("div");
    const card4Back = document.createElement("div");
    const text1 = document.createElement("p");
    const text2 = document.createElement("p");
    const text3 = document.createElement("p");
    const text4 = document.createElement("p");
    const background = document.createElement("div");
    const content = document.createElement("div");
    
    h1.textContent = "Burger"
    text1.textContent = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius quam bibendum, congue ante eget, finibus sapien. Cras accumsan tempor libero a vestibulum. Vivamus consequat et erat ac aliquet. In sit amet lectus id massa fringilla tristique eget blandit velit."
    h2.textContent = "Steak"
    text2.textContent = " Cras accumsan tempor libero a vestibulum. Vivamus consequat et erat ac aliquet. In sit amet lectus id massa fringilla tristique eget blandit velit."
    h3.textContent = "Breakfast"
    text3.textContent = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet ligula id aliquam efficitur. Etiam varius quam bibendum, congue ante eget, finibus sapien. Vivamus consequat et erat ac aliquet. In sit amet lectus id massa fringilla tristique eget blandit velit."
    h4.textContent = "Salad"
    text4.textContent = " Proin aliquet ligula id aliquam efficitur. Etiam varius quam bibendum, congue ante eget, finibus sapien. Cras accumsan tempor libero a vestibulum. In sit amet lectus id massa fringilla tristique eget blandit velit."
    background.classList.add("menu-background");
    context.classList.add("menu-context");
    content.classList.add("menu-content");
    card1.classList.add("card");
    card2.classList.add("card");
    card3.classList.add("card");
    card4.classList.add("card");
    card1Back.classList.add("card1");
    card2Back.classList.add("card2");
    card3Back.classList.add("card3");
    card4Back.classList.add("card4");
    
    body.appendChild(context);
    context.appendChild(background);
    context.appendChild(content);
    card1.appendChild(h1);
    card1.appendChild(text1);
    card1.appendChild(card1Back);
    card2.appendChild(h2);
    card2.appendChild(text2);
    card2.appendChild(card2Back);
    card3.appendChild(h3);
    card3.appendChild(text3);
    card3.appendChild(card3Back);
    card4.appendChild(h4);
    card4.appendChild(text4);
    card4.appendChild(card4Back);
    content.appendChild(card1);
    content.appendChild(card2);
    content.appendChild(card3);
    content.appendChild(card4);
}

export function clearLayout() {

    context.replaceChildren();
    context.remove();

}