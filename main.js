document.body.addEventListener("click", (ev) =>{
    const istAufklappbarerTitel = !!ev.target.closest(".aufklappbare__titelleiste");
    const aufklappbar = ev.target.closest(".aufklappbar");

    if (!istAufklappbarerTitel) {
        return;
    }

    aufklappbar.classList.toggle("aufklappbar--open");
});