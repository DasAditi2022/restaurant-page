// about.js
import aboutImage from '../images/about.jpg'
function loadAboutPage() {
    const content = document.querySelector('.content');
    content.innerHTML = ''; // Clear previous content

    const heading = document.createElement('h1');
    heading.textContent = 'About Bhuri Bhoj';

    const aboutOwner = document.createElement('p');
    aboutOwner.textContent = 'Bhuri Bhoj was started by Sharmila Ghosh, a passionate Bengali chef who wanted to bring the taste of her family recipes to everyone. For over 20 years, this restaurant has been serving up the best of Bengali cuisine to locals and visitors alike.';

    const img = document.createElement('img');
    img.src = aboutImage; 
    
    const contactInfo = document.createElement('p');
    contactInfo.innerHTML = `
        <strong>Contact Us:</strong><br>
        Address: 123 Kolkata Street, Kolkata, West Bengal<br>
        Phone: 1234567890<br>
        Email: info@bhuribhoj.com
    `;

    content.appendChild(heading);
    content.appendChild(aboutOwner);
    content.appendChild(img);
    content.appendChild(contactInfo);
}

export default loadAboutPage;
