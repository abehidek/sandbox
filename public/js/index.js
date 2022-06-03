// let username = window.prompt("Tell your name: ")
let username = "abe123"

if (username === "" || !username) {
    username = "anon";
}

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

fetchChat.on("child_added", function (snapshot) {
    const messages = snapshot.val();
    const message = `
        <li class=${username === messages.usr ? "sent" : "receive"}>
            <span>${messages.usr}: </span> ${messages.msg}
            <button id=${snapshot.key} class="deleteMessage">deletar</button>  
        </li>`

    document.querySelector("#messages").innerHTML += message;
    arrMsgs = Array.from(document.querySelectorAll(".deleteMessage"));
    arrMsgs.forEach((msg) => {
        msg.addEventListener('click', () => {
            deleteMessage(msg.id);
        });
    })

    document.querySelector("#chat").scrollTop = document.querySelector("#chat").scrollHeight
})

fetchChat.on("child_removed", function (snapshot) { deleteMessage(snapshot.key) })

function deleteMessage(id) {
    db.ref(`messages/${id}`).remove().then((a) => console.log(a)).catch(err => console.log(err.message));
    document.querySelector(`#${id}`).parentElement.remove();
}

const input = document.querySelector("input");

const sendMessage = (e) => {
    e.preventDefault();
    console.log("Send!")
    
    const message = input.value;
    input.value = "";
    
    db.ref("messages/").push({
        usr: username,
        msg: message,
    });
}



document.querySelector("#send").addEventListener("click", (e) =>{ sendMessage(e); })

document.querySelector("input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendMessage(e)
    }
})