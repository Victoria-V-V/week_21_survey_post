document.addEventListener("DOMContentLoaded", () => {

    let catForm = document.querySelector(`.catForm`);

    //этот вариант работает
    catForm.onsubmit = function postForm(event) {
        event.preventDefault();
        fetch("https://httpbin.org/post", {
                method: `POST`,
                body: new FormData(catForm),
            })
            .then(response => response.json())
            .then(catForm => {
                console.log(catForm);
            })
            .catch(error => console.log(error));
    }


    //А это почему-то не работает:(
    // catForm.addEventListener("sumbit", postForm);

    // function postForm(event) {
    //     event.preventDefault();
    //     fetch("https://httpbin.org/post", {
    //             method: `POST`,
    //             body: new FormData(catForm),
    //         })
    //         .then(response => response.json())
    //         .then(catForm => {
    //             console.log(catForm);
    //         })
    //         .catch(error => console.log(error));
    // }
})