document.addEventListener("DOMContentLoaded", function() {
    const collapsibles = document.querySelectorAll(".collapsible");

    // Expand the first__content and collapse others
    const firstContent = document.querySelector(".first__content");
    firstContent.style.maxHeight = firstContent.scrollHeight + "px";
    collapsibles.forEach((item, index) => {
        if (index !== 0) {
            const content = item.querySelector(".collapsible__content");
            content.style.maxHeight = null;
        }
    });

    // Add event listener to each collapsible header
    collapsibles.forEach((item, index) => {
        const header = item.querySelector(".collapsible__header");
        header.addEventListener("click", function () {
            const content = item.querySelector(".collapsible__content");

            // Toggle the visibility of the content
            if (!item.classList.contains("collapsible__expanded")) {
                // Expand the clicked content and collapse others
                collapsibles.forEach((collapsible, i) => {
                    const collapsibleContent = collapsible.querySelector(".collapsible__content");
                    collapsible.classList.remove("collapsible__expanded");
                    collapsibleContent.style.maxHeight = null;
                    if (i === index) {
                        collapsible.classList.add("collapsible__expanded");
                        collapsibleContent.style.maxHeight = collapsibleContent.scrollHeight + "px";
                    }
                });
            } else {
                // Collapse the clicked content
                item.classList.remove("collapsible__expanded");
                content.style.maxHeight = null;
            }
        });
    });
});
