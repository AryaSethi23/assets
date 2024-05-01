function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

setTimeout(() => {
    const splashElement = document.getElementById('splash');
    splashElement.style.display = 'none';
}, 4900); // Add .collapse-animation class after 3 seconds

window.scrollTo({ top: 0 });

function copyTextToClipboard(element) {
    // Get the text content of the element
    var text = element.innerText || element.textContent;
    
    // Create a temporary input element
    var tempInput = document.createElement("input");
    tempInput.setAttribute("type", "text");
    tempInput.setAttribute("value", text);
    
    // Append the input element to the body
    document.body.appendChild(tempInput);
    
    // Select the text inside the input element
    tempInput.select();
    
    // Copy the selected text to the clipboard
    document.execCommand("copy");
    
    // Remove the temporary input element
    document.body.removeChild(tempInput);
    
    // Alert the user that the text has been copied
    alert("Text copied to clipboard: " + text);
}
