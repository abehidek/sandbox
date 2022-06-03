let username = window.prompt("Tell your name: ")
if (username === "" || !username) { username = "anon"; }

const firebaseConfig = {
    apiKey: "AIzaSyCLDeiN5Ell9nWSmholLD6Ms5BmD39hTRE",
    authDomain: "firechat-1afea.firebaseapp.com",
    databaseURL: "https://firechat-1afea-default-rtdb.firebaseio.com",
    projectId: "firechat-1afea",
    storageBucket: "firechat-1afea.appspot.com",
    messagingSenderId: "395186562591",
    appId: "1:395186562591:web:d0474fb24acc55e9ac572a"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const fetchChat = db.ref("messages/");

function deleteMessage(id) { document.querySelector(`#${id}`).remove(); }

fetchChat.on("child_added", function (snapshot) {
    const messages = snapshot.val();
    const message = `
        <li id=${snapshot.key} class=${username === messages.usr ? "sent" : "receive"}>
            <div class='contentMessage'><span>${messages.usr}</span> ${messages.msg}</div>
            ${username === messages.usr ? "<div class='deleteMessage'>🗑️</div>" : ""}
        </li>`

    document.querySelector("#messages").innerHTML += message;
    Array.from(document.querySelectorAll(".deleteMessage")).forEach((button) => {
        button.addEventListener("click", () => {
            db.ref(`messages/${button.parentElement.id}`).remove().then((a) => console.log(a)).catch(err => console.log(err.message));
        })
    })
    document.querySelector("#chat").scrollTop = document.querySelector("#chat").scrollHeight
})

fetchChat.on("child_removed", function (snapshot) { deleteMessage(snapshot.key) })

const input = document.querySelector("input");

const sendMessage = (e) => {
    e.preventDefault();
    const message = input.value;
    if (message === "" || !message) { 
        input.placeholder = "You need to type something!!"
        input.style.border="2px solid #BF616A"; 
        setTimeout(() => { input.style.border="2px solid white"}, 500)
        return;
    }

    input.value = "";
    console.log("Send!")
    db.ref("messages/").push({
        usr: username,
        msg: message,
    });
    input.disabled = true;
    input.placeholder = "Wait 5 seconds before sending another message"
    document.querySelector("#send").replaceWith(document.querySelector("#send").cloneNode(true));
    input.classList.add("disabled");
    setTimeout(() => {
        input.disabled = false;
        input.placeholder = "Type your message here"
        document.querySelector("#send").addEventListener("click", (e) =>{ sendMessage(e); })
        input.classList.remove("disabled")
    },5000)
}

document.querySelector("#send").addEventListener("click", (e) =>{ sendMessage(e); })
document.querySelector("input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") { sendMessage(e) }
})