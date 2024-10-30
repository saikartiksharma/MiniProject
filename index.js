let dialogHeading = document.getElementById("dialogHeading");

document.getElementById('file-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('fileInput');
    const messageDiv = document.getElementById('message');

    if (fileInput.files.length === 0) {
        messageDiv.textContent = "Please select a file.";
        return;
    }
    showDialog();
});


function showDialog() {
    document.getElementById('dialog').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    const spinner = document.getElementById('spinner');
    const content = document.getElementById('content');

    // Show the spinner
    spinner.style.display = 'block';

    // Simulate loading content with a timeout
    setTimeout(() => {
        spinner.style.display = 'none';
        content.style.display = 'block';
        dialogHeading.textContent = "The file was scanned successfully...";
    }, 3000); 
}

function closeDialog() {
    location.reload();
}
