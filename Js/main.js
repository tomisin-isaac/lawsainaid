document.addEventListener('DOMContentLoaded', function () {
    const textElements = document.querySelectorAll('[data-tts="true"]');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const synth = window.speechSynthesis;
    let voices = [];
    let currentUtterance = null;
    let currentIndex = 0;

    function populateVoiceList() {
        voices = synth.getVoices();
    }

    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    function speakText(text) {
        if (currentUtterance) {
            synth.cancel(); // Stop any ongoing speech
        }

        currentUtterance = new SpeechSynthesisUtterance(text);
        currentUtterance.voice = voices[0]; // Select the first available voice
        synth.speak(currentUtterance);

        currentUtterance.onend = function () {
            setTimeout(speakNextText, 200); // Delay of 200 milliseconds before reading the next element
        };
    }

    function speakNextText() {
        if (currentIndex < textElements.length) {
            const textToRead = textElements[currentIndex].innerText.trim();
            speakText(textToRead);
            currentIndex++;
        } else {
            stopButton.style.display = 'none'; // Hide stop button when all text is read
            startButton.style.display = 'block'; // Show start button again
        }
    }

    // Start reading text when the start button is clicked
    startButton.addEventListener('click', function () {
        currentIndex = 0; // Reset to start from the beginning
        startButton.style.display = 'none'; // Hide start button
        speakNextText();
        stopButton.style.display = 'block'; // Show stop button when reading starts
    });

    // Stop reading when the stop button is clicked
    stopButton.addEventListener('click', function () {
        synth.cancel(); // Stop current speech
        stopButton.style.display = 'none'; // Hide stop button
        startButton.style.display = 'block'; // Show start button again
    });
});



document.addEventListener("DOMContentLoaded", function () {
    // Hide loader and display content when page is fully loaded
    window.onload = function () {
      document.getElementById("loader-wrapper").style.display = "none";
      document.getElementById("content").style.display = "block";
    };
  });
  

document.addEventListener("DOMContentLoaded", function() {
    const collapsibles = document.querySelectorAll(".collapsible");

    // Add event listener to each collapsible header
    collapsibles.forEach(item => {
        const header = item.querySelector(".collapsible__header");
        const content = item.querySelector(".collapsible__content");
        const chevron = header.querySelector(".collapsile__chevron");

        chevron.addEventListener("click", function () {
            if (!item.classList.contains("collapsible__expanded")) {
                // Expand the clicked content and collapse others
                collapsibles.forEach(collapsible => {
                    collapsible.classList.remove("collapsible__expanded");
                    collapsible.querySelector(".collapsible__content").style.maxHeight = null;
                });
                item.classList.add("collapsible__expanded");
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.opacity = 1;
            } else {
                // Collapse the clicked content
                item.classList.remove("collapsible__expanded");
                content.style.maxHeight = null;
                content.style.opacity = 0;
            }
        });
    });
});






document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.testimony');
    const navLinks = document.querySelectorAll('.slider-nav a');

    navLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            goToSlide(index);
        });
    });

    function goToSlide(index) {
        // Display the selected slide and hide others
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        // Update the active class for navigation links
        navLinks.forEach((link, i) => {
            if (i === index) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
});




function startCounting() {
    const counters = document.querySelectorAll('.count');
    
    // Options for the observer (which mutations to observe)
    const options = {
        threshold: 0.5 // When 50% of the element is visible
    };

    // Callback function to execute when mutations are observed
    const callback = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetCount = parseInt(target.getAttribute('data-count'));
                let currentCount = 0;
                
                const interval = setInterval(() => {
                    target.querySelector('h1').textContent = currentCount;
                    currentCount++;
                    if (currentCount > targetCount) {
                        clearInterval(interval);
                    }
                }, 10); // Adjust speed of counting animation here
            }
        });
    };

    // Create an intersection observer
    const observer = new IntersectionObserver(callback, options);

    // Observe each counter element
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Call the function when the DOM is loaded
document.addEventListener("DOMContentLoaded", startCounting);





document.addEventListener("DOMContentLoaded", function() {
    const scrollContainer = document.querySelector('.involved__card__scroll');
    const leftArrow = document.querySelector('.left__arrow');
    const rightArrow = document.querySelector('.right__arrow');

    leftArrow.addEventListener('click', function() {
        scrollContainer.scrollBy({
            left: -scrollContainer.offsetWidth,
            behavior: 'smooth'
        });
    });

    rightArrow.addEventListener('click', function() {
        scrollContainer.scrollBy({
            left: scrollContainer.offsetWidth,
            behavior: 'smooth'
        });
    });
});





let popup = document.getElementById("popup");
function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}



let copyText = document.querySelector(".copy-text");
copyText.querySelector("button").addEventListener("click",function(){
    let input = copyText.querySelector("input.text");
    input.select();
    document.execCommand("copy");
    copyText.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(function(){
        copyText.classList.remove("active");
    },2500)
});










