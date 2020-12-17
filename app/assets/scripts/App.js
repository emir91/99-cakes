import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu';
import StickyHeader from './modules/StickyHeader';
import RevealOnScroll from './modules/RevealOnScroll'
import Modal from './modules/Modal'

new Modal();
let revealOnScroll = new RevealOnScroll();
let stickyHeader = new StickyHeader();
let mobileMenu = new MobileMenu();


if(module.hot){
    module.hot.accept()
}