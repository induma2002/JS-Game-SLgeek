let total = 0;
function main() {

    let x;

    if (total < 21) {
        do {
            x = Math.floor(Math.random() * 100 / 7.6);
        } while (x == 0);

        let currentTT = parseInt(document.getElementById('resault').innerHTML);
        total = currentTT + x;

        document.getElementById('resault').innerHTML = total;


        if (total < 21) {
            document.getElementById("btnGenerate").innerHTML = `Genarate Another`
        } else if (total == 21) {
            document.getElementById("lbl").innerHTML =

                `
                                    <h1 class = "won">You are won</h1>
                `
            document.getElementById("btnRestart").innerHTML =
                `
                 <button id="rest" onclick="refresh()">Restart</button>
                `


            alert("Congratulation You have won");


        } else if (total > 21) {
            document.getElementById("lbl").innerHTML =
                `
                                    <h1 class = "loss">You are loss</h1>
                `
            document.getElementById("btnRestart").innerHTML =
                `
                 <button id="rest" onclick="refresh()">Restart</button>
                `
            alert("Your loss Try Again");
        }


        var img = document.createElement("img");
        img.src = "images/" + x + ".png";
        img.height = 300;
        document.body.appendChild(img);
    } else {
        alert("Restart to play again");
    }
} 

function refresh(){
    location.reload(true);

}