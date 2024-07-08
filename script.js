// Fungsi untuk menampilkan halaman Home
function showHome() {
    document.getElementById('content').innerHTML = `
        <div class="home-content">
            <div class="burger-image">
                <img src="burger.jpg" alt="Burger Image">
            </div>
            <div class="description">
                <h1>Welcome to Our Burger World!</h1>
                <p>Discover the most delicious burgers in town. We offer a wide range of mouth-watering burgers made with fresh ingredients.</p>
                <a href="#" class="btn" onclick="showMenu()">View Menu</a>
            </div>
        </div>
    `;
}

// Fungsi untuk menampilkan halaman About
function showAbout() {
    document.getElementById('content').innerHTML = `
        <div class="about-content">
            <h1>About Us</h1>
            <p>We are passionate about burgers and committed to delivering the best quality and taste to our customers.</p>
            <p>Visit us today and experience the difference!</p>
        </div>
    `;
}

// Fungsi untuk menampilkan halaman Contact
function showContact() {
    document.getElementById('content').innerHTML = `
        <div class="contact-content">
            <h1>Contact Us</h1>
            <p>For inquiries and reservations, please contact us via email or phone.</p>
            <ul>
                <li>Email: info@burgerworld.com</li>
                <li>Phone: +1234567890</li>
            </ul>
        </div>
    `;
}

// Fungsi untuk menampilkan halaman Menu
function showMenu() {
    document.getElementById('content').innerHTML = `
        <div class="menu-content">
            <h1>Our Menu</h1>
            <div class="menu-item">
                <h2>Classic Burger</h2>
                <p>Our signature beef patty with lettuce, tomato, onion, and special sauce.</p>
                <span>$9.99</span>
            </div>
            <div class="menu-item">
                <h2>Chicken Burger</h2>
                <p>Grilled chicken breast with avocado, lettuce, and chipotle mayo.</p>
                <span>$10.99</span>
            </div>
            <div class="menu-item">
                <h2>Veggie Burger</h2>
                <p>Vegetarian patty made with black beans, corn, and quinoa, served with fresh veggies.</p>
                <span>$8.99</span>
            </div>
        </div>
    `;
}
