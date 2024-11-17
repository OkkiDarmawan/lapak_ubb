 // Function to preview the image when a file is uploaded
 function previewImage(event, previewId) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgElement = document.getElementById(previewId);
            imgElement.src = e.target.result;
            imgElement.style.display = 'block'; // Show the image
            document.getElementById('placeholderText').style.display = 'none'; // Hide the placeholder text
        };
        reader.readAsDataURL(file);
    }
}

// Function to validate the form
function validateForm() {
    // Select form fields
    const nameField = document.getElementById('productName');
    const priceField = document.getElementById('productPrice');
    const descriptionField = document.getElementById('productDescription');
    // const ownerField = document.getElementById('productOwner');

    // Select error messages
    const errorName = document.getElementById('errorName');
    const errorPrice = document.getElementById('errorPrice');
    const errorDescription = document.getElementById('errorDescription');
    // const errorOwner = document.getElementById('errorOwner');

    // Track if form is valid
    let isValid = true;

    // Validate each field and show error if empty
    if (nameField.value.trim() === "") {
        errorName.classList.remove('hidden');
        isValid = false;
    } else {
        errorName.classList.add('hidden');
    }

    if (priceField.value.trim() === "") {
        errorPrice.classList.remove('hidden');
        isValid = false;
    } else {
        errorPrice.classList.add('hidden');
    }

    if (descriptionField.value.trim() === "") {
        errorDescription.classList.remove('hidden');
        isValid = false;
    } else {
        errorDescription.classList.add('hidden');
    }

    // if (ownerField.value.trim() === "") {
    //     errorOwner.classList.remove('hidden');
    //     isValid = false;
    // } else {
    //     errorOwner.classList.add('hidden');
    // }

    // If form is valid, submit the form (redirect as example)
    if (isValid) {
        window.location.href = 'tokoku_2.html';
    }
}