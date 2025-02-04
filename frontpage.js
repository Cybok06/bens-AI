function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}
function autoResize(textarea) {
    textarea.style.height = 'auto';  // Reset height
    textarea.style.height = (textarea.scrollHeight) + 'px';  // Set height to match the content
}
 // Typewriter Effect for Placeholder
 function typeWriter(element, text, i, speed) {
    if (i < text.length) {
        element.placeholder += text.charAt(i);
        i++;
        setTimeout(function() {
            typeWriter(element, text, i, speed);
        }, speed);
    }
}

window.onload = function() {
    const textbox = document.getElementById("textbox");
    const text =  "Hello! My name is BEN's AI How can I assist you today";
    typeWriter(textbox, text, 0, 45); // Adjust typing speed here (100 ms)
}
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

function autoResize(textarea) {
    textarea.style.height = 'auto'; // Reset height
    textarea.style.height = (textarea.scrollHeight) + 'px'; // Set height to match the content
}

// Typewriter Effect for Placeholder
function typeWriter(element, text, i, speed) {
    if (i < text.length) {
        element.placeholder += text.charAt(i);
        i++;
        setTimeout(function() {
            typeWriter(element, text, i, speed);
        }, speed);
    }
}

window.onload = function() {
    const textbox = document.getElementById("textbox");
    const text = "Hello! My name is BEN's AI. How can I assist you today?";
    typeWriter(textbox, text, 0, 45); // Adjust typing speed here (100 ms)
}

function displayMessage(content, isUser) {
    const responseContainer = document.getElementById('response-container');
    const message = document.createElement('div');
    message.classList.add('message');
    message.classList.add(isUser ? 'user-message' : 'ai-message');
    responseContainer.appendChild(message);
    responseContainer.scrollTop = responseContainer.scrollHeight; // Scroll to the bottom

    // Typing effect for AI message (word-by-word)
    if (!isUser) {
        let words = content.split(' ');
        let i = 0;

        function typeWord() {
            if (i < words.length) {
                message.textContent += words[i] + ' ';
                i++;
                setTimeout(typeWord, 50); // Adjust speed here (300 ms between each word)
            }
        }

        typeWord(); // Start typing the message
    } else {
        // For user message, display immediately
        message.textContent = content;
    }
}

function sendMessage() {
    const textbox = document.getElementById("textbox");
    const userMessage = textbox.value.trim();
    if (userMessage) {
        displayMessage(userMessage, true); // Display user's message
        textbox.value = ''; // Clear the textbox

        // Display AI response after a short delay
        setTimeout(() => {
            displayMessage("matter is  a substance that has mass and  weight and can occupy space", false); // AI responds with "Hello"
        }, 500);
    }
}

document.getElementById('textbox').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent new line
        sendMessage();
    }
});
document.querySelector('.send-button').addEventListener('click', sendMessage);


