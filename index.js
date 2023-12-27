const btnPurchase = document.querySelectorAll('.purchase')
const btnPainting = document.querySelector('.purchase-painting')
console.log(btnPainting)

btnPurchase.forEach((element) =>
  element.addEventListener('click', () =>
    alert('This is priceless, cannot sell this.')
  )
)

btnPainting.addEventListener('click', () => {
  alert('Thanks for placing the order.')
})
