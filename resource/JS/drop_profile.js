
function toggleDropdown() {
  const dropdown = document.getElementById("dropdownMenu");
  dropdown.classList.toggle("hidden"); // Toggle visibility
}

// Menutup dropdown ketika klik di luar area
window.addEventListener("click", function(e) {
  const dropdown = document.getElementById("dropdownMenu");
  if (!dropdown.contains(e.target) && !e.target.closest('[onclick="toggleDropdown()"]')) {
    dropdown.classList.add("hidden");
  }
});
