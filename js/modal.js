(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    backdrop: document.querySelector(".backdrop"),
  };

  refs.openModalBtns.forEach(btn => {
    btn.addEventListener("click", toggleModal);
  });

  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.backdrop.addEventListener("click", backdropClickHandler);
  document.addEventListener("keydown", keydownHandler);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  function backdropClickHandler(event) {
    if (event.target === refs.backdrop) {
      toggleModal();
    }
  }

  function keydownHandler(event) {
    if (event.key === "Escape" && !refs.modal.classList.contains("is-hidden")) {
      toggleModal();
    }
  }
})();

