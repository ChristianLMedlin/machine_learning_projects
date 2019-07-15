window.addEventListener('DOMContentLoaded', (e) => {
    console.log('loaded')

    let clickX = []
    let clickY = []
    let clickDrag = []
    let paint = false
    let canvas = document.getElementById('canvas')

    function addClick(x, y, dragging)
    {
    clickX.push(x)
    clickY.push(y)
    clickDrag.push(dragging)
    }

    function redraw(){
        context.clearRect(0, 0, context.canvas.width, context.canvas.height)
        
        context.strokeStyle = "#df4b26"
        context.lineJoin = "round"
        context.lineWidth = 5
                
        for(var i=0; i < clickX.length; i++) {		
            context.beginPath()
            if(clickDrag[i] && i){
                context.moveTo(clickX[i-1], clickY[i-1])
            } else {
                context.moveTo(clickX[i]-1, clickY[i])
            }
            context.lineTo(clickX[i], clickY[i])
            context.closePath()
            context.stroke()
        }
    }


    

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