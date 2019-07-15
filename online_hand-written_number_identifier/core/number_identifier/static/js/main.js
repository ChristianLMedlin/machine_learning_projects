window.addEventListener('DOMContentLoaded', (e) => {
    console.log('loaded')


    let canvas = document.getElementById('canvas')

    canvas.addEventListener("mousedown", e => {
        console.log("mousedown")
    })

});

`
Store mouse x, y coordinates inside of array.

Find ways to modify the default canvas drawing "stylus" to better accommodate MNIST Dataset's image style.

Drawing resolutions will likely need to be divisible by 24 (24x24) as they should be as similar to the MNIST as possible when scaled down.

Consider using an embedded drawing app to replace the HTML canvas if performance with Machine Learning model is not satisfactory.

Consider adding a second page or additional information to the home page detailing how the MNIST set was used to train the model and what technologies were used in its creation.
`