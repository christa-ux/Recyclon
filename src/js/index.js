function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (element.classList.contains("dark-mode")) {
        // Save the user's preference to localStorage.
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.removeItem('dark-mode');
    }
}
