document.addEventListener("DOMContentLoaded", function () {
    let deliveryOptions = document.querySelectorAll(".delivery-option")

    deliveryOptions.forEach((deliveryOption) => {
        deliveryOption.addEventListener('click',function(){
            deliveryOptions.forEach((deliveryOption) => {
                deliveryOption.classList.remove('active')
            })
            this.classList.add('active')
        })
    })

    document.querySelectorAll(".delivery-option")[0].click()
})