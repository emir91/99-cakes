import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu';
import StickyHeader from './modules/StickyHeader';

let stickyHeader = new StickyHeader();
let mobileMenu = new MobileMenu();


if(module.hot){
    module.hot.accept()
}