import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu';
import StickyHeader from './modules/StickyHeader';
import RevealOnScroll from './modules/RevealOnScroll'

new RevealOnScroll();
new StickyHeader();
new MobileMenu();
let modal;

document.querySelectorAll('.open-modal').forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault();
        if(typeof modal == "undefined"){
            import(/* webpackChunkName: "modal" */'./modules/Modal').then(x => {
                modal = new x.default();
                setTimeout(() => modal.openTheModal(), 20);
            }).catch(() => console.log("There was a problem."))
        }else{
            modal.openTheModal();
        }
    })
})

if(module.hot){
    module.hot.accept()
}