// home.js
import homeImage from '../images/home.jpg'

function loadHomePage() {
    const content = document.querySelector('.content');
    content.innerHTML = ''; // Clear previous content

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Bhuri Bhoj - A Bengali Feast';

    const description = document.createElement('p');
    description.textContent = 'At Bhuri Bhoj, we invite you on a culinary journey that embodies the true essence of Bengali tradition. Located in the heart of Bengal, our restaurant is dedicated to bringing you the rich, vibrant flavors of Bengali cuisine in every dish. From the comforting fragrance of freshly cooked rice to the unmistakable aroma of spices, every plate served is crafted with the love and passion that defines Bengali culture.';

    const dishImage = document.createElement('img');
    dishImage.src = homeImage;
    dishImage.alt = 'Bengali Dish -Ilish';

    content.appendChild(heading);
    content.appendChild(description);
    content.appendChild(dishImage);
}

export default loadHomePage;