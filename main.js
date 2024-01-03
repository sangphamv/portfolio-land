const portfolioButtons = document.querySelectorAll('.portfolio-section-button')
const portfolioImgs = document.querySelectorAll('.portfolio-section-grid-item')
portfolioButtons.forEach(portfolioButton => {
    portfolioImgs.forEach(portfolioImg => {
        portfolioButton.addEventListener('click', e => {
            if (portfolioButton.outerText === portfolioImg.id) {
                portfolioImg.style.display = 'flex'
            } else {
                portfolioImg.style.display = 'none'
            }

            if (portfolioButton.outerText.toLowerCase() === 'all') {
                portfolioImg.style.display = 'flex'
            }
        })
    })
    
})