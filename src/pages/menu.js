// menu.js
function loadMenuPage() {
    const content = document.querySelector('.content');
    content.innerHTML = ''; // Clear previous content

    const heading = document.createElement('h1');
    heading.textContent = 'Our Bengali Delicacies';

    const dishes = [
        {
          name: 'Shorshe Ilish',
          price: '₹1299',
          description: 'Fresh hilsa fish cooked in a tangy mustard sauce, served with steamed rice.',
        },
        {
          name: 'Kosha Mangsho',
          price: '₹1049',
          description: 'Slow-cooked mutton in rich and spicy gravy, perfect with parathas or rice.',
        },
        {
          name: 'Chingri Malai Curry',
          price: '₹1199',
          description: 'Succulent prawns cooked in a creamy coconut milk gravy, delicately spiced.',
        },
        {
          name: 'Aloo Posto',
          price: '₹599',
          description: 'Potatoes cooked with poppy seeds in traditional Bengali style, mild yet flavorful.',
        },
        {
          name: 'Begun Bharta',
          price: '₹549',
          description: 'Smoked and mashed eggplant cooked with onions, tomatoes, and mustard oil.',
        },
        {
          name: 'Luchi & Cholar Dal',
          price: '₹649',
          description: 'Crispy puffed bread (luchi) served with mildly spiced Bengal gram lentils.',
        },
        {
          name: 'Bhetki Paturi',
          price: '₹1099',
          description: 'Bhetki fish fillet marinated in mustard paste and wrapped in banana leaves, then steamed to perfection.',
        },
        {
          name: 'Macher Jhol',
          price: '₹999',
          description: 'Light and flavorful fish curry cooked with seasonal vegetables, served with rice.',
        },
        {
          name: 'Mishti Pulao',
          price: '₹849',
          description: 'Sweet Bengali-style rice pilaf with dry fruits and fragrant spices, pairs well with curries.',
        },
        {
          name: 'Pithey',
          price: '₹349',
          description: 'Traditional Bengali dessert made with rice flour, coconut, and jaggery, served hot or cold.',
        }
      ];

    const menuDiv = document.createElement('div');

    dishes.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = "item";
        itemDiv.innerHTML = `<h3>${item.name}</h3>
                        <p>${item.price}</p>
                        <p>${item.description}</p>`;
        menuDiv.appendChild(itemDiv);
        
    });
    menuDiv.className = "menu";
    content.appendChild(heading);
    content.appendChild(menuDiv);
}

export default loadMenuPage;
