// 전체선택 기능들
const products = document.querySelectorAll('.mypage_shoppingInfo_cart_select .contents');
const product1 = document.querySelectorAll('.mypage_shoppingInfo_cart_select .product1');
const product2 = document.querySelectorAll('.mypage_shoppingInfo_cart_select .product2');
const product3 = document.querySelectorAll('.mypage_shoppingInfo_cart_select .product3');
const selectAllBtn = document.querySelector('#selectAll');
const productsNum = document.querySelector('.selectNum');

// 전체선택 옆에 총 개수 표시
productsNum.innerText = products.length;

// 전체선택 기능
selectAllBtn.addEventListener('change', function() {
  const isChecked = selectAllBtn.checked;

  for (let i = 0; i < products.length; i++) {
    const checkBox = products[i].querySelector('input[type="checkbox"]');
    checkBox.checked = isChecked;
  }
});

// 하나라도 체크되지 않은지 확인하는 함수
function checkIfAnyUnchecked() {
  for (let i = 0; i < products.length; i++) {
    const checkBox = products[i].querySelector('input[type="checkbox"]');
    if (!checkBox.checked) {
      return false;
    }
  }
  return true;
}

// selectAllBtn 상태 업데이트하는 함수
function updateSelectAllBtn() {
  selectAllBtn.checked = checkIfAnyUnchecked();
}

// 체크박스 상태 변화 감지
for (let i = 0; i < products.length; i++) {
  const checkBox = products[i].querySelector('input[type="checkbox"]');
  checkBox.addEventListener('change', function() {
    updateSelectAllBtn();
    const allChecked = checkIfAnyUnchecked();
    selectAllBtn.checked = allChecked;
  });
}

// // 개수에 따라 변하는 상품들의 가격
const p1Select = document.querySelector('.product1 select');
const p1TotalPrice = document.querySelector('.product1 #totalPrice');
const p1Delete = document.querySelector('.product1 #deleteProduct');
const p2Select = document.querySelector('.product2 select');
const p2TotalPrice = document.querySelector('.product2 #totalPrice');
const p2Delete = document.querySelector('.product2 #deleteProduct');
const p3Select = document.querySelector('.product3 select');
const p3TotalPrice = document.querySelector('.product3 #totalPrice');
const p3Delete = document.querySelector('.product3  #deleteProduct');
const deleteSelect = document.querySelector('.mypage_shoppingInfo_cart .delete');

const orderPrice = document.querySelector("#orderPrice");
const deliveryPrice = document.querySelector("#deliveryPrice");
const finalPrice = document.querySelector("#finalPrice");
const point = document.querySelector("#point");


// Helper function to update order price
function updateOrderPrice() {
  const p1Price = parseInt(p1TotalPrice.innerText.replace(',', ''));
  const p2Price = parseInt(p2TotalPrice.innerText.replace(',', ''));
  const p3Price = parseInt(p3TotalPrice.innerText.replace(',', ''));

  const totalPrice = p1Price + p2Price + p3Price;

  orderPrice.innerText = totalPrice.toLocaleString();

  if (totalPrice < 100000) {
    deliveryPrice.innerText = '2,500';
  } else {
    deliveryPrice.innerText = '0';
  }

  const finalPriceValue = totalPrice + parseInt(deliveryPrice.innerText.replace(',', ''));
  finalPrice.innerText = finalPriceValue.toLocaleString();
  point.innerText = Math.floor(totalPrice / 100).toLocaleString();
}

deleteSelect.addEventListener('click', function(e) {
  e.preventDefault();

  const checkedProducts = document.querySelectorAll('.mypage_shoppingInfo_cart_select .contents input[type="checkbox"]:checked');
  checkedProducts.forEach(function(product) {
    const contents = product.closest('.contents');
    contents.remove();
  });
  orderPrice.innerText = '0';
  deliveryPrice.innerText = '0';
  finalPrice.innerText = '0';
  point.innerText = '0';
});

// Event listener for p1Delete
p1Delete.addEventListener("click", () => {
  product1[0].remove();
  p1TotalPrice.innerText = '0';
  updateOrderPrice();
});

// Event listener for p2Delete
p2Delete.addEventListener("click", () => {
  product2[0].remove();
  p2TotalPrice.innerText = '0';
  updateOrderPrice();
});

// Event listener for p3Delete
p3Delete.addEventListener("click", () => {
  product3[0].remove();
  p3TotalPrice.innerText = '0';
  updateOrderPrice();
});

// Event listener for p1Select
p1Select.addEventListener("change", () => {
  p1TotalPrice.innerText = (p1Select.value * 9980).toLocaleString();
  updateOrderPrice();
});

// Event listener for p2Select
p2Select.addEventListener("change", () => {
  p2TotalPrice.innerText = (p2Select.value * 60000).toLocaleString();
  updateOrderPrice();
});

// Event listener for p3Select
p3Select.addEventListener("change", () => {
  p3TotalPrice.innerText = (p3Select.value * 11900).toLocaleString();
  updateOrderPrice();
});





// 체크박스는 오로지 선택삭제를 위해 있는 기능!!! 체크한 것만 가격에 합쳐지는 시스템 아님!!!
// 선택 삭제 기능
// const deleteSelect = document.querySelector('.mypage_shoppingInfo_cart .delete');
// const deleteProduct1 = document.querySelector('.product1 #deleteProduct');
// const deleteProduct2 = document.querySelector('.product2 #deleteProduct');
// const deleteProduct3 = document.querySelector('.product3 #deleteProduct');

// deleteSelect.addEventListener('click', function(e) {
//   e.preventDefault();

//   const checkedProducts = document.querySelectorAll('.mypage_shoppingInfo_cart_select .contents input[type="checkbox"]:checked');
//   checkedProducts.forEach(function(product) {
//     const contents = product.closest('.contents');
//     contents.remove();
//   });
//   updateOrderPrice()
// });

// deleteProduct1.addEventListener('click', function(e) {
//   e.preventDefault();
//   const product1 = document.querySelector('.mypage_shoppingInfo_cart_select .product1');
//   product1.remove();
//   updateOrderPrice();
// });
// deleteProduct2.addEventListener('click', function(e) {
//   e.preventDefault();
//   const product2 = document.querySelector('.mypage_shoppingInfo_cart_select .product2');
//   product2.remove();
//   updateOrderPrice();
// });
// deleteProduct3.addEventListener('click', function(e) {
//   e.preventDefault();
//   const product3 = document.querySelector('.mypage_shoppingInfo_cart_select .product3');
//   product3.remove();
//   updateOrderPrice();
// });



// // 개수에 따라 변하는 상품들의 가격
// const p1Select = document.querySelector('.product1 select');
// const p1TotalPrice = document.querySelector('.product1 #totalPrice');

// const p2Select = document.querySelector('.product2 select');
// const p2TotalPrice = document.querySelector('.product2 #totalPrice');

// const p3Select = document.querySelector('.product3 select');
// const p3TotalPrice = document.querySelector('.product3 #totalPrice');

// p1Select.addEventListener('change', function() {
//   const selectedOption = p1Select.options[p1Select.selectedIndex];
//   const price = parseInt(selectedOption.value);
//   const totalPrice = 9980 * price;
//   p1TotalPrice.innerText = totalPrice.toLocaleString();

//   updateOrderPrice();
// });

// p2Select.addEventListener('change', function() {
//   const selectedOption = p2Select.options[p2Select.selectedIndex];
//   const price = parseInt(selectedOption.value);
//   const totalPrice = 60000 * price;
//   p2TotalPrice.innerText = totalPrice.toLocaleString();

//   updateOrderPrice();
// });

// p3Select.addEventListener('change', function() {
//   const selectedOption = p3Select.options[p3Select.selectedIndex];
//   const price = parseInt(selectedOption.value);
//   const totalPrice = 11900 * price;
//   p3TotalPrice.innerText = totalPrice.toLocaleString();

//   updateOrderPrice();
// });

// const orderPrice = document.querySelector('#orderPrice');
// const deliveryPrice = document.querySelector('#deliveryPrice');

// // 최종 결제 금액
// function updateOrderPrice() {
//   const p1Price = parseInt(p1TotalPrice.innerText.replace(/[^0-9]/g, ''));
//   const p2Price = parseInt(p2TotalPrice.innerText.replace(/[^0-9]/g, ''));
//   const p3Price = parseInt(p3TotalPrice.innerText.replace(/[^0-9]/g, ''));

//   const finalTotalPrice = p1Price + p2Price + p3Price;
//   orderPrice.innerText = finalTotalPrice.toLocaleString();

//   let deliveryP1 = 0;
//   let deliveryP2 = 2500;

//   if(finalTotalPrice >= 100000) {
//     let finalP = finalTotalPrice + deliveryP1;
//     deliveryPrice.innerText = deliveryP1;
//     finalPrice.innerText = finalP.toLocaleString();
//   } else {
//     let finalP = finalTotalPrice + deliveryP2;
//     deliveryPrice.innerText = deliveryP2.toLocaleString();
//     finalPrice.innerText = finalP.toLocaleString();
//   }

//   point.innerText = Math.floor(finalTotalPrice/100).toLocaleString();
// }


// 주문하기 버튼
const orderBtn = document.querySelector('#orderBtn');
orderBtn.addEventListener('click', (e) => {
  e.preventDefault();

  alert('주문이 완료되었습니다! 💚');
  window.location.href = '08-3-mypage-order.html';
});

updateOrderPrice();