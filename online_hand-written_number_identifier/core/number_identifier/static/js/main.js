window.addEventListener('DOMContentLoaded', (event) => {
    console.log('loaded')

    let clickX = []
    let clickY = []
    let clickDrag = []
    let paint = false
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext("2d")

    function addClick(x, y, dragging){
        clickX.push(x)
        clickY.push(y)
        clickDrag.push(dragging)
    }

    function redraw(){
        context.clearRect(0, 0, context.canvas.width, context.canvas.height)
        
        context.strokeStyle = "black"
        context.lineJoin = "round"
        context.lineWidth = 20
                
        for(let i=0; i < clickX.length; i++) {		
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


    
    canvas.addEventListener("mousedown", function(e){  
        paint = true
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop)
        redraw()
    })

    canvas.addEventListener("mousemove", function(e){
        if(paint){
          addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true) 
          redraw()
        }
      })

    canvas.addEventListener("mouseup", function(e){
        paint = false
        console.log(context.getImageData(0, 0, 504, 504).data)
    })

    canvas.addEventListener("mouseleave", function(e){
        paint = false
    })

})


// Find ways to modify the default canvas drawing "stylus" to better accommodate MNIST Dataset's image style.

// canvas resolutions will likely need to be divisible by 28 (28x28) as they should be as similar to the MNIST as possible when scaled down.

// Consider using an embedded drawing app to replace the HTML canvas if performance with Machine Learning model is not satisfactory.

// Consider adding a second page or additional information to the home page detailing how the MNIST set was used to train the model and what technologies were used in its creation.

// Research the MNIST dataset's preprocessing techniques to best match their input.