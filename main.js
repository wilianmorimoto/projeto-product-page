const nav = document.querySelector('nav')
const menuIcon = document.querySelectorAll('.menu-icon')
const navLinks = document.querySelectorAll('nav ul li a')

menuIcon.forEach(icon => icon.addEventListener('click', () => {
    nav.classList.toggle('show')
}))

navLinks.forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('show')
}))

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        nav.classList.remove('show')
        menuIcon.forEach(icon => icon.style.display = 'none')
    } else {
        menuIcon.forEach(icon => icon.style.display = 'block')
    }
})

const cartIcon = document.querySelector('#cart-icon')
const cart = document.querySelector('.cart')

cartIcon.addEventListener('click', () => {
    cart.classList.toggle('show')
})

const txtQuantityToBuy = document.querySelectorAll('.qty-to-buy')
const txtTotalPrice = document.querySelector('#total-price')
const addToCart = document.querySelector('#add-to-cart')
const quantityMinus = document.querySelector('#minus-qty')
const quantityPlus = document.querySelector('#plus-qty')
const cartEmpty = document.querySelector('.cart-empty')
const productInCart = document.querySelector('.cart-sneakers')
const removeProductInCart = document.querySelector('#cart-delete')
const txtQuantityToBuyNotification = document.querySelector('.notification')
let quantityToBuy = 1

quantityMinus.addEventListener('click', () => {
    if (quantityToBuy !== 1) {
        quantityToBuy--
    }
    txtQuantityToBuy.forEach(txt => txt.innerHTML = quantityToBuy)
    txtTotalPrice.innerHTML = `$${125 * quantityToBuy}.00`
})

quantityPlus.addEventListener('click', () => {
    quantityToBuy++
    txtQuantityToBuy.forEach(txt => txt.innerHTML = quantityToBuy)
    txtTotalPrice.innerHTML = `$${125 * quantityToBuy}.00`
})

addToCart.addEventListener('click', () => {
    cartEmpty.classList.remove('show')
    productInCart.classList.add('show')
    txtTotalPrice.innerHTML = `$${125 * quantityToBuy}.00`
    txtQuantityToBuyNotification.classList.add('show')
})

removeProductInCart.addEventListener('click', () => {
    cartEmpty.classList.add('show')
    productInCart.classList.remove('show')
    txtQuantityToBuyNotification.classList.remove('show')
})

const imgThumbnails = document.querySelectorAll('.img-container ul li img')
const imgSelected = document.querySelector('.img')

imgThumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
        imgThumbnails.forEach(img => img.classList.remove('current'))
        thumb.classList.add('current')

        const arrayOfImages = Array.from(imgThumbnails)
        const indexOfCurrentImage = arrayOfImages.findIndex(img => img.classList.contains('current'))
        imgSelected.style.background = `url(images/image-product-${indexOfCurrentImage + 1}.jpg) no-repeat center / cover`
    })
})

const zoomImgThumbnails = document.querySelectorAll('.zoom-container ul li img')
const zoomImgSelected = document.querySelector('.zoom-container .img')
const zoomContainer = document.querySelector('.zoom-img')
const zoomCloseIcon = document.querySelector('.close-icon')

imgSelected.addEventListener('click', () => {
    zoomContainer.classList.add('show')
})

zoomCloseIcon.addEventListener('click', () => {
    zoomContainer.classList.remove('show')
})

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        zoomContainer.classList.remove('show')
    }
})

zoomImgThumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
        zoomImgThumbnails.forEach(img => img.classList.remove('current'))
        thumb.classList.add('current')

        const arrayOfImages = Array.from(zoomImgThumbnails)
        const indexOfCurrentImage = arrayOfImages.findIndex(img => img.classList.contains('current'))
        zoomImgSelected.style.background = `url(images/image-product-${indexOfCurrentImage + 1}.jpg) no-repeat center / cover`
    })
})

const previousButton = document.querySelector('#previous-button')
const nextButton = document.querySelector('#next-button')
const zoomPreviousButton = document.querySelector('#zoom-previous-button')
const zoomNextButton = document.querySelector('#zoom-next-button')

previousButton.addEventListener('click', () => {
    const arrayOfImages = Array.from(imgThumbnails)
    let indexOfCurrentImage = arrayOfImages.findIndex(img => img.classList.contains('current'))

    if (indexOfCurrentImage < 1) {
        indexOfCurrentImage = 4
    }

    imgThumbnails.forEach(img => img.classList.remove('current'))
    imgThumbnails[indexOfCurrentImage - 1].classList.add('current')

    imgSelected.style.background = `url(images/image-product-${indexOfCurrentImage}.jpg) no-repeat center / cover`
})

nextButton.addEventListener('click', () => {
    const arrayOfImages = Array.from(imgThumbnails)
    let indexOfCurrentImage = arrayOfImages.findIndex(img => img.classList.contains('current'))

    if (indexOfCurrentImage + 2 > 4) {
        indexOfCurrentImage = -1
    }

    imgThumbnails.forEach(img => img.classList.remove('current'))
    imgThumbnails[indexOfCurrentImage + 1].classList.add('current')

    imgSelected.style.background = `url(images/image-product-${indexOfCurrentImage + 2}.jpg) no-repeat center / cover`
})

zoomPreviousButton.addEventListener('click', () => {
    const arrayOfImages = Array.from(zoomImgThumbnails)
    let indexOfCurrentImage = arrayOfImages.findIndex(img => img.classList.contains('current'))

    if (indexOfCurrentImage < 1) {
        indexOfCurrentImage = 4
    }

    zoomImgThumbnails.forEach(img => img.classList.remove('current'))
    zoomImgThumbnails[indexOfCurrentImage - 1].classList.add('current')

    zoomImgSelected.style.background = `url(images/image-product-${indexOfCurrentImage}.jpg) no-repeat center / cover`
})

zoomNextButton.addEventListener('click', () => {
    const arrayOfImages = Array.from(zoomImgThumbnails)
    let indexOfCurrentImage = arrayOfImages.findIndex(img => img.classList.contains('current'))
    
    if (indexOfCurrentImage + 2 > 4) {
        indexOfCurrentImage = -1
    }
    
    zoomImgThumbnails.forEach(img => img.classList.remove('current'))
    zoomImgThumbnails[indexOfCurrentImage + 1].classList.add('current')
    
    zoomImgSelected.style.background = `url(images/image-product-${indexOfCurrentImage + 2}.jpg) no-repeat center / cover`
})