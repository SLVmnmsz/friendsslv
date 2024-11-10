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
 // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx facebook
 function showReviews() {
    const displayContent = document.getElementById('content');

    // Check if the reviews div already exists
    let fbDiv = document.getElementById('fb-reviews');
    
    // If it doesn't exist, create it
    if (!fbDiv) {
        fbDiv = document.createElement('div');
        fbDiv.id = 'fb-reviews'; // Assign an ID for future reference
        fbDiv.innerHTML = `
            <div class="fb-page fb_iframe_widget" data-href="https://www.facebook.com/profile.php?id=61566203843030&amp;sk=reviews" data-tabs="reviews" data-width="500" data-height="600" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false" fb-xfbml-state="rendered" fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=&amp;container_width=434&amp;height=600&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61566203843030%26sk%3Dreviews&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=false&amp;small_header=true&amp;tabs=reviews&amp;width=500"><span style="vertical-align: bottom; width: 434px; height: 70px;"><iframe name="f10c0adbfe0c33588" width="500px" height="600px" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://web.facebook.com/v10.0/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dff54fce439a29e353%26domain%3D127.0.0.1%26is_canvas%3Dfalse%26origin%3Dhttp%253A%252F%252F127.0.0.1%253A5500%252Ff2b3fef60b879a9b2%26relation%3Dparent.parent&amp;container_width=434&amp;height=600&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61566203843030%26sk%3Dreviews&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=false&amp;small_header=true&amp;tabs=reviews&amp;width=500" style="border: none; visibility: visible; width: 434px; height: 70px;" class=""></iframe></span></div>`;

        displayContent.innerHTML = ''; // Clear previous content
        displayContent.appendChild(fbDiv); // Append the reviews div
    } else {
        // If the reviews div already exists, just clear the content to show it again
        displayContent.innerHTML = ''; // Clear previous content
        displayContent.appendChild(fbDiv); // Re-append to make it visible
    }

    // Load the Facebook SDK only once
    loadFacebookSDK();
}

function loadFacebookSDK() {
    // Only load the SDK if it's not already loaded
    if (document.getElementById('facebook-jssdk')) return;

    const script = document.createElement('script');
    script.id = 'facebook-jssdk';
    script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0";
    document.body.appendChild(script);
}