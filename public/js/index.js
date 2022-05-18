let username = window.prompt("Tell your name: ")

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
    const message = `<li class=${username === messages.usr ? "sent" : "receive"}>
    <span>${messages.usr}: </span> ${messages.msg}
    </li>`
    document.querySelector("#messages").innerHTML += message;
    document.querySelector("#messages").scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
    });
})

const input = document.querySelector("input");

const sendMessage = (e) => {
    e.preventDefault();
    console.log("Send!")
    
    const timestamp = Date.now();
    const message = input.value;
    input.value = "";

    db.ref("messages/" + timestamp).set({
        usr: username,
        msg: message,
    });
}

document.querySelector("button").addEventListener("click", (e) =>{ sendMessage(e); })

document.querySelector("input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendMessage(e)
    }
})