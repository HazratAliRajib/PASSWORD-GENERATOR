// Get a reference to the password input field, generate button, copy button, and recent passwords list
const passwordInput = document.querySelector('.password-input');
const generateButton = document.querySelector('.generate-button');
const copyButton = document.querySelector('.copy-button');
const recentPasswordsList = document.querySelector('.recent-passwords');

// Add an event listener to the generate button to generate a new password when clicked
generateButton.addEventListener('click', () => {
    // Generate a strong password using a combination of lowercase letters, uppercase letters, numbers, and special characters
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{};:",.<>/?\\|';
    let password = '';
    for (let i = 0; i < 16; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    // Update the password input field with the new password
    passwordInput.value = password;
    // Add the new password to the list of recently generated passwords
    const passwordItem = document.createElement('li');
    passwordItem.textContent = password;
    recentPasswordsList.appendChild(passwordItem);
});

// Add an event listener to the copy button to copy the password to the clipboard when clicked
copyButton.addEventListener('click', () => {
    // Select the text in the password input field
    passwordInput.select();
    // Copy the text to the clipboard
    document.execCommand('copy');
});