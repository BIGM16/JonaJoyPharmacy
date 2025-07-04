const modalBtn = document.getElementById("add-product-btn");
const closeModalBtn = document.getElementById("cancel-product");
const modal = document.getElementById("product-modal");
closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});
modalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});
