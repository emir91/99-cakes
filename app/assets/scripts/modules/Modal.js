class Modal{
    constructor(){
        this.injectHTML();
        this.openModalButtons = document.querySelectorAll('.open-modal');
        this.modal = document.querySelector('.my-modal');
        this.closeModalIcon = document.querySelector('.my-modal__close');
        this.events();
    }

    events(){
        this.openModalButtons.forEach(el => el.addEventListener("click", e => this.openTheModal(e)));
        this.closeModalIcon.addEventListener("click", () => this.closeTheModal());
        document.addEventListener("keyup", e => this.keyPressHandler(e))
    }

    openTheModal(e){
        e.preventDefault();
        this.modal.classList.add('my-modal--is-visible');
    }

    closeTheModal(){
        this.modal.classList.remove('my-modal--is-visible');
    }

    keyPressHandler(e){
        if(e.keyCode == 27){
            this.modal.classList.remove('my-modal--is-visible');
        }
    }

    injectHTML(){
        document.body.insertAdjacentHTML('beforeend', `
        <div class="my-modal">
            <div class="my-modal__inner text-center">
                <h2>
                    <img src="assets/images/icons/mail.svg">
                    Get in touch
                </h2>
                <div class="wrapper wrapper--narrow">
                    <p class="my-modal__description">If you have any question be free to contact us at <strong>99-Cakes@mail.com</strong>, connect with us on any of the platforms below!</p>
                </div>
                <div class="social-icons">
                    <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>
                    <a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>
                    <a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>
                </div>
            </div>
            <div class="my-modal__close">X</div>
          </div>
        </div>
      </div>
        `)
    }
}

export default Modal;