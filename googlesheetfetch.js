const scriptURL = 'https://script.google.com/macros/s/AKfycbx5pl6IvJ4yF3G8WDEdvyqFFMNSeYwJuy2wYbtQrwcKVzR91muFw6nzIuK9p3Q1W4ka/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})