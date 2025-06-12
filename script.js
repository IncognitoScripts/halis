document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.title')
    const text = 'ჰალისის ბრძოლა'
    let i = 0
    function type() {
        if (i < text.length) {
            title.innerHTML += text.charAt(i)
            i++
            setTimeout(type, 100)
        }
    }
    type()
})
