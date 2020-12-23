import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class StickyHeader{
    constructor(){
        this.siteHeader = document.querySelector('.site-header');
        this.pageSections = document.querySelectorAll('.page-section');
        this.browserHeight = window.innerHeight;
        this.previousScrollY = window.scrollY;
        this.events();
    }

    events(){
       window.addEventListener("scroll",throttle(() => this.runOnScroll(), 1));
       window.addEventListener("resize", debounce(() => {
        this.browserHeight = window.innerHeight;
        }, 333))
    }

    runOnScroll(){
        this.determineScrollDirection()

        if(window.scrollY > 60){
            this.siteHeader.classList.add('site-header--dark');
        }else{
            this.siteHeader.classList.remove('site-header--dark');
        }

        this.pageSections.forEach(el => this.calcSection(el))
    }

    determineScrollDirection(){
        if(window.scrollY > this.previousScrollY){
            this.scrollDirection = "down";
        }else{
            this.scrollDirection = "up";
        }
        this.previousScrollY = window.scrollY;
    }

    calcSection(el){
        if(window.scrollY + this.browserHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight){
            let scrollPercent = (el.getBoundingClientRect().y / this.browserHeight) * 100;
            console.log(window.scrollY);
            if(scrollPercent < 35 &&  scrollPercent > -0.1 && this.scrollDirection == "down" || scrollPercent < 33 && this.scrollDirection == "up"){
                let matchingLink = el.getAttribute("data-matching-link");
                document.querySelectorAll(`.primary-nav a:not(${matchingLink})`).forEach(el => el.classList.remove("is-current-link"))
                document.querySelector(matchingLink).classList.add("is-current-link");
            }

            let beginningLink = document.querySelector("#our-story-link");
            if (window.scrollY == 0 && beginningLink.classList.contains("is-current-link")){
                beginningLink.classList.remove("is-current-link");
            }

            let endingLink = document.querySelector("#stores-link");
            let middleLink = document.querySelector("#features-link")
            if (window.scrollY > 861){
                middleLink.classList.remove("is-current-link");
                endingLink.classList.add("is-current-link");
            }
        }
    }
}

export default StickyHeader;