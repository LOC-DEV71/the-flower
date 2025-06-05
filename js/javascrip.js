const btnOne = document.querySelector("#btn__one");
const btnTwo = document.querySelector("#btn__two");
btnTwo.addEventListener('click', () =>{
    btnTwo.classList.add("btn__color--red");
    btnOne.classList.remove("btn__color--red");
});
btnOne.addEventListener('click', () =>{
    btnOne.classList.add("btn__color--red");
    btnTwo.classList.remove("btn__color--red");
});


//modal
  const modal = document.getElementById("customModal");
  const openBtns = document.querySelectorAll(".openModalBtn");
  const closeBtn = document.querySelector(".close-btn");
  const modalImg = document.querySelector("#modal-img");
  const nameProduct = document.querySelector("#name-product");
  const toPrice = document.querySelector(".to-price");  

  const upBtn = document.getElementById("down");  // nút +
const downBtn = document.getElementById("up");  // nút -
const quantitySpan = document.querySelector(".span__quantity");
const totalPriceElement = document.querySelector(".total-price");

  let quantity = 1;
  let price = 0;  //Bien cục bộ để cập nhật theo từng sản phẩm

  function updatePrice(){
    // toFixed(2): chuyển kết quả thành chuỗi, giữ 2 chữ số thập phân (ví dụ: 199 → "199.00", 99.5 → "99.50").
    totalPriceElement.textContent = `$${(quantity*price).toFixed(2)}`; 
  }

  openBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      //lấy ảnh
      const imgSrc = btn.getAttribute('data-img');
      modalImg.src =imgSrc;

      const productDiv = btn.closest(".product"); //Tìm đến lớp cha
      const titleProduct = productDiv.querySelector('.title__product').textContent.trim(); //tìm tới lớp con và lấy textcontent 
      const priceProduct = productDiv.querySelector('.price').textContent.trim(); //tìm tới lớp con và lấy textcontent 
      price = parseFloat(priceProduct.replace("$", "")); // loại bỏ ký tự $ và đổi thành số
      toPrice.innerHTML =priceProduct;
      nameProduct.innerHTML = titleProduct;

      // reset số lượng
      quantity = 1;
      quantitySpan.textContent = quantity;

      updatePrice();

      modal.style.display = "flex";
    });
  });

upBtn.addEventListener("click", () => {
  quantity++;
  quantitySpan.textContent = quantity;
  updatePrice();
});

downBtn.addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    quantitySpan.textContent = quantity;
    updatePrice();
  }
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

  //Tính tiền








