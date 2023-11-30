const hasTooltip = Array.from(document.querySelectorAll(".has-tooltip"))
const tooltip = document.createElement("div")
tooltip.classList.add("tooltip")

for (let item of hasTooltip) {
    item.addEventListener("click", (event) => {
        event.preventDefault()
        let position = item.getBoundingClientRect()

        let openedTooltips = document.querySelectorAll('.tooltip')
        if (openedTooltips.length > 1) {
            openedTooltips[0].remove()}
                      
        let tooltipLinkActive = item.nextElementSibling
        if (tooltipLinkActive && tooltipLinkActive.classList.contains('tooltip_active')) {
            tooltipLinkActive.remove()            
        }else{
        item.insertAdjacentElement("afterend", tooltip)
        let attr = item.getAttribute("title")
        tooltip.textContent = attr
        tooltip.classList.add("tooltip_active")

        tooltip.style.top = position.bottom + 'px'
        tooltip.style.left = position.left + 'px'}
    })
}