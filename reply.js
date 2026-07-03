const WEBHOOK_URL = "https://eopcrte1ka6x3pu.m.pipedream.net";

function sendWish(){

    let wish = document.getElementById("wishInput").value.trim();

    if(!wish){
        alert("Type something 💖");
        return;
    }

    fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: wish
        })
    })
    .then(() => console.log("SENT ✔"))
    .catch(err => console.log("ERROR ❌", err));

    document.getElementById("wishInput").value = "";
    document.getElementById("wishResponse").innerHTML = "💖 Sent!";
}