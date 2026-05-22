const filterToggle = document.getElementById("filterToggle");
const filterMenu = document.getElementById("filterMenu");

// Toggle Floating Menu

filterToggle.addEventListener("click", (e) => {

    e.stopPropagation();

    filterMenu.classList.toggle("show");

});

// Close When Clicking Outside

document.addEventListener("click", (e) => {

    if (
        !filterMenu.contains(e.target) &&
        !filterToggle.contains(e.target)
    ) {

        filterMenu.classList.remove("show");

    }

});

// Filter Elements

const checkboxes = document.querySelectorAll(
    '.floating-menu input[type="checkbox"]'
);

const products = document.querySelectorAll('.product-card');

const noProductsMessage =
    document.getElementById("noProductsMessage");

// Filter Function

function filterProducts() {

    const selectedCategories = [];

    // Get Checked Categories

    checkboxes.forEach((checkbox) => {

        if (checkbox.checked) {

            selectedCategories.push(checkbox.value);

        }

    });

    let visibleCount = 0;

    // Show / Hide Products

    products.forEach((product) => {

        const category = product.dataset.category;

        if (selectedCategories.includes(category)) {

            product.style.display = "block";

            visibleCount++;

        } else {

            product.style.display = "none";

        }

    });

    // No Products Message

    if (visibleCount === 0) {

        noProductsMessage.style.display = "block";

    } else {

        noProductsMessage.style.display = "none";

    }

}

// Run Filter When Checkbox Changes

checkboxes.forEach((checkbox) => {

    checkbox.addEventListener("change", filterProducts);

});

// Initial Run

filterProducts();