// Select all page sections
const allPages = document.querySelectorAll(".page");

// Select all buttons that have a data-page attribute
const pageButtons = document.querySelectorAll("[data-page]");

// Hide all pages
function hideAll() {
    allPages.forEach(page => {
        page.style.display = "none";
    });
}

// Show selected page
function show(pageNumber) {
    hideAll();
    const page = document.querySelector("#page" + pageNumber);
    if (page) {
        page.style.display = "block";
    }
}

// Add click event to ALL buttons automatically
pageButtons.forEach(button => {
    button.addEventListener("click", function () {
        const pageNumber = this.dataset.page;
        show(pageNumber);
    });
});

// Hide everything first
hideAll();

// Optionally show page 1 by default
show(1);