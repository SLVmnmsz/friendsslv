// Function to display text when buttons are clicked
function showText(text) {
    const contentElement = document.getElementById('content');

    // Remove any existing center alignment
    contentElement.classList.remove('center-text');

    // Set the text content
    contentElement.innerHTML = `<p>${text}</p>`;
}

function showContactText(text) {
    const contentElement = document.getElementById('content');

    // Set the text content
    contentElement.innerHTML = `<p>${text}</p>`;

    // Add center alignment class
    contentElement.classList.add('center-text');
}
    function showContent(content) {
        const displayContent = document.getElementById('content');
        displayContent.innerHTML = ''; // Clear previous content
    
        if (content === 'Gallery Page 1') {
            const images = ['crea1.jpeg', 'crea2.jpeg', 'crea3.jpeg', 'crea4.jpeg']; // Add your image paths here
            images.forEach(src => {
                const img = document.createElement('img');
                img.src = "static/images/" + src;
                img.alt = 'Gallery Image 1';
                displayContent.appendChild(img);
            });
        } 
    
        else if (content === 'Gallery Page 2') {
            const images = ['tal1.jpg', 'tal2.jpg', 'tal3.jpg', 'tal4.jpg', 'tal5.jpg', 'tal6.jpg']; // Add your image paths here
            images.forEach(src => {
                const img = document.createElement('img');
                img.src = "static/images/" + src;
                img.alt = 'Gallery Image 2';
                displayContent.appendChild(img);
            });
        } 
    
        else if (content === 'Gallery Page 3') {
            const images = ['baby1.jpg', 'baby2.jpg', 'baby3.jpg', 'baby4.jpeg', 'baby5.jpeg']; // Add your image paths here
            images.forEach(src => {
                const img = document.createElement('img');
                img.src = "static/images/" + src;
                img.alt = 'Gallery Image 3';
                displayContent.appendChild(img);
            });
        } 
    }   
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function goHome() {
    document.getElementById('content').innerHTML = ` <h3 class="dearvisitor" style="text-align:center;">Dear Visitor!</h3>
            <p>Nice to see you on our breeder webpage!</p>
            <p>We are passionate about breeding healthy, happy, and well-socialized dogs. Our goal is to provide you with a loving companion that will become a cherished member of your family. Each of our dogs is raised in a loving environment, ensuring they are well-adjusted and ready to bring joy to your home.</p>
            <p>Explore our site to learn more about our breeds, visit our gallery and contact us for available puppies or ask questions if you have any! </p>
            <p>Thank you for visiting, and we hope you find your perfect furry friend!</p>`;
}
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    // For smooth scrolling back to the top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
 // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx facebook and contact
 function showContactAndReviews() {
    const displayContent = document.getElementById('content');
    displayContent.innerHTML = ''; // Clear previous content

    // Create container for all content
    const container = document.createElement('div');
    container.className = 'center-content';

    // 1. Contact Information
    const contactDiv = document.createElement('div');
    contactDiv.className = 'contact-info'; // Add class for styling
    contactDiv.innerHTML = `
        <h3>Contact Information</h3>
        <p>Email: ignac.szilveszter@gmail.com</p>
        <p>Phone: +36308608091</p>
        <p>Viber: +381641061045</p>
        <p>Social media links below</p>
    `;
    container.appendChild(contactDiv);

    // 2. Facebook Reviews (Facebook Page Plugin)
    const fbDiv = document.createElement('div');
    fbDiv.innerHTML = `
        <h3>Facebook Reviews</h3>
        <div class="fb-page" 
            data-href="https://www.facebook.com/profile.php?id=61566203843030&sk=reviews" 
            data-tabs="reviews"
            data-width="500" 
            data-height="600" 
            data-small-header="true" 
            data-adapt-container-width="true" 
            data-hide-cover="false" 
            data-show-facepile="true">
            <blockquote cite="https://www.facebook.com/profile.php?id=61566203843030&sk=reviews" class="fb-xfbml-parse-ignore">
                <a href="https://www.facebook.com/profile.php?id=61566203843030&sk=reviews">Facebook Page</a>
            </blockquote>
        </div>
    `;
    container.appendChild(fbDiv);

    // 3. Slideshow Section
    const slideshowDiv = document.createElement('div');
    slideshowDiv.id = 'slideshow';
    slideshowDiv.innerHTML = `
        <div class="slides">
            <div class="slide" style="display: block;">Alen *****: nice, friendly owners. beutiful dogs. 5/5 <br> -Facebook- </div>
            <div class="slide">Anita ****: Szia! Mi kis Lolánk elmúlt 1 éves! Nagyon imádjuk, köszönjük Neked!! -Messenger- </div>
            <div class="slide">Erika *****: Lola egy csoda! Nagyon szépen köszönjük Nektek! -Messenger- </div>
            <div class="slide">Contact us for more information!</div>
        </div>
        <button id="prevBtn">Prev</button>
        <button id="nextBtn">Next</button>
    `;
    container.appendChild(slideshowDiv);

    displayContent.appendChild(container);

    // Initialize the slideshow
    startSlideshow();

    // Load the Facebook SDK for reviews to appear correctly
    if (window.FB) {
        FB.XFBML.parse();
    } else {
        loadFacebookSDK();
    }

    // Function to start the slideshow
    function startSlideshow() {
        let slideIndex = 0;
        const slides = document.getElementsByClassName("slide");

        function showSlide(index) {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  // Hide all slides
            }
            slides[index].style.display = "block";  // Show the current slide
        }

        // Show the first slide initially
        showSlide(slideIndex);

        // Function to go to the next slide
        document.getElementById("nextBtn").onclick = function() {
            slideIndex = (slideIndex + 1) % slides.length;  // Loop back to the first slide
            showSlide(slideIndex);
        };

        // Function to go to the previous slide
        document.getElementById("prevBtn").onclick = function() {
            slideIndex = (slideIndex - 1 + slides.length) % slides.length;  // Loop back to the last slide
            showSlide(slideIndex);
        };

        // Change the slide automatically every 30 seconds
        setInterval(function() {
            slideIndex = (slideIndex + 1) % slides.length;
            showSlide(slideIndex);
        }, 30000);
    }

    // Load the Facebook SDK
    function loadFacebookSDK() {
        if (document.getElementById('facebook-jssdk')) return;

        const script = document.createElement('script');
        script.id = 'facebook-jssdk';
        script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0";
        document.body.appendChild(script);
    }
}
