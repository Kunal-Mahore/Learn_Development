function rollDice(){
    const numdice = document.getElementById("numdice").value;
    const diceres = document.getElementById("diceres");
    const imgs = document.getElementById("imgs");
    const values = [];
    const images = [];

    for (let i = 0; i < numdice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}" >`);
    }

    diceres.textContent = `You rolled: ${values.join(", ")}`;
    imgs.innerHTML = images.join(" ");
}