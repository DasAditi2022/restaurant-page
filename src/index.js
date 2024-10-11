import loadHomePage from "./pages/home";
import loadMenuPage from "./pages/menu";
import loadAboutPage from "./pages/about";
import './styles.css';


loadHomePage();

document.getElementById('home').addEventListener('click', loadHomePage);
document.getElementById('menu').addEventListener('click', loadMenuPage);
document.getElementById('about').addEventListener('click', loadAboutPage);
