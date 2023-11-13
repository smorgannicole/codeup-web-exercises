/* DOM Traversal */
/* NODE METHODS FOR TRAVERSAL
 * - querySelector: crawl down the DOM tree, returns first match
 * - querySelectorAll: crawl down the DOM tree, returns all matches
 * - closest: crawl up the DOM tree, returns first match
 * - nextElementSibling: crawl sideways the DOM tree, returns following element
 * - previousElementSibling: crawl sideways the DOM tree, returns previous element
 * - parentElement: crawl up the DOM tree, returns parent element
 * - children: crawl down the DOM tree, returns all children elements
 * - firstElementChild: crawl down the DOM tree, returns first child element
 * - lastElementChild: crawl down the DOM tree, returns last child element
 */
(() => {
    const yellowBtn = document.querySelector(`#yellow-btn`)
    const ulParents = document.querySelectorAll(`ul`)
    yellowBtn.addEventListener(`click`, e => {
        for (let liChild of ulParents) {
            liChild.lastElementChild.classList.add(`yellow-active`)
        }
    })
    
    const allH3s = document.querySelectorAll(`h3`)
    for (let singleH3 of allH3s) {
        singleH3.addEventListener(`click`, e => {
            for (let singleH3 of allH3s) {
                singleH3.nextElementSibling.classList.add(`bold-font`)
            }
        })
    }

    const allLis = document.querySelectorAll(`li`)
    const allUls = document.querySelectorAll(`ul`)
    for (let singleLi of allLis) {
        singleLi.addEventListener(`click`, e => {
            for (let singleUl of allUls) {
                singleUl.firstElementChild.style.color = `blue`
            }
        })
    }

})();