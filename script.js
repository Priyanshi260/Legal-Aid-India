function selectSuggestion(text) {
  const inputBox = document.getElementById("userInput");

  // put text into input
  inputBox.value = text;

  // send automatically
  sendSituation();
}
function goBack() {
  // show ask page again
  document.getElementById("askPage").style.display = "flex";

  // hide chat page
  document.getElementById("chatPage").style.display = "none";
}
function sendSituation() {

  const isChatPage =
    document.getElementById("chatPage").style.display === "block";

  const inputBox = isChatPage
    ? document.getElementById("chatInput")
    : document.getElementById("userInput");

  const input = inputBox.value.trim();
  if (!input) return;

  inputBox.value = ""; // clear input

  document.getElementById("askPage").style.display = "none";
  document.getElementById("chatPage").style.display = "block";

  const chatBox = document.getElementById("chatBox");

  // user message
  chatBox.innerHTML += `<div class="message user">${input}</div>`;

  // typing
  const typing = document.createElement("div");
  typing.className = "message bot";
  typing.innerText = "Typing...";
  chatBox.appendChild(typing);

  fetch("http://localhost:5000/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ situation: input })
  })
    .then(res => res.json())
    .then(data => {
      typing.remove();

      chatBox.innerHTML += `
        <div class="message bot">
          ${data.reply.replace(/\n/g, "<br>")}
        </div>
      `;

      // 🔥 AUTO SCROLL (VERY IMPORTANT)
      chatBox.scrollTop = chatBox.scrollHeight;
    })
    .catch(() => {
      typing.innerText = "Server error";
    });
}
   
