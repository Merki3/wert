var tablinks = document.getElementsByClassName("tab-links");

function opentab(tabname, event) {
    // Get the current active tab content
    var tabcontent = document.getElementById(tabname);
    
    // Check if the content is already visible
    if (tabcontent.classList.contains("active-tab")) {
        // If it's already active, hide it
        tabcontent.classList.remove("active-tab");
        // Remove the active class from the tab link
        event.target.classList.remove("active-link");
    } else {
        // If it's not active, show it
        // Hide all tab contents first
        var allContents = document.getElementsByClassName("tab-contents");
        for (var content of allContents) {
            content.classList.remove("active-tab");
        }
        
        // Remove active class from all tab links
        for (var tablink of tablinks) {
            tablink.classList.remove("active-link");
        }

        // Show the clicked tab's content
        tabcontent.classList.add("active-tab");

        // Add the active class to the clicked tab link
        event.target.classList.add("active-link");
    }
}

// Make sure to add the event parameter when calling the function for proper event handling
var hamburger = document.getElementById("hamburger");
var tabLinks = document.getElementsByClassName("tab-links");

hamburger.addEventListener("click", function() {
    for (var link of tabLinks) {
        link.classList.toggle("active");
    }
});
