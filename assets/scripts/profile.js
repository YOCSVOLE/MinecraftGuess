function updateProfile() {
    const fileInput = document.getElementById("profilePictureInput");
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById("profilePicture").src = e.target.result;
    };
    reader.readAsDataURL(file);
}
