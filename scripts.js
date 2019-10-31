var iterator = 0;
var text = "DreamCode YouTube Channel!";

function typingText() {
  if(iterator < text.length) {
    document.getElementById("text")
      .innerHTML += text.charAt(iterator);

    iterator++;
    setTimeout(typingText, 40);
  }
}

typingText();
