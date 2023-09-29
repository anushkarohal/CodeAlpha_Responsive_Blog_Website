window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const filterItems = document.querySelectorAll(".filter-item");
    const postBoxes = document.querySelectorAll(".post-box");

    filterItems.forEach((filterItem) => {
        filterItem.addEventListener("click", () => {
            const filterValue = filterItem.getAttribute("data-filter");

            filterItems.forEach((item) => {
                item.classList.remove("active-filter");
            });
            filterItem.classList.add("active-filter");

            postBoxes.forEach((postBox) => {
                if (filterValue === "all" || postBox.classList.contains(filterValue)) {
                    postBox.style.display = "block";
                } else {
                    postBox.style.display = "none";
                }
            });
        });
    });
});