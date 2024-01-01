function goToWishPage() {
    const name = document.getElementById("name").value;
    if (name.trim() !== "") {
        // Redirect to the wish page with the name parameter
        window.location.href = `wish.html?name=${encodeURIComponent(name)}`;
    } else {
        alert("Please enter your name before proceeding.");
    }
}
