const sizes = Array.from(document.getElementsByClassName('font-size'))
const book = document.querySelector(".book__content")

sizes.forEach(
    (el)=>{
        el.addEventListener('click', (event)=>{
            sizes.forEach((e)=>{
                e.classList.remove('font-size_active')
                })
            el.classList.add('font-size_active')
            event.preventDefault();
            
            if (el.className.includes('font-size_small')) {
                book.classList.remove("book_fs-big")
                book.classList.add("book_fs-small")
            } else if (el.className.includes('font-size_big')) {
                book.classList.remove("book_fs-small")
                book.classList.add("book_fs-big")
            } else {
                book.className = book
            }

        })
    }
)