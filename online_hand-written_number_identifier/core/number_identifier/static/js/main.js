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
        context.lineWidth = 30
                
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
        context.drawImage(canvas, 0, 0, 504, 504, 0, 0, 28, 28)
        new_canvas = canvas
        context.clearRect(28, 28, 504, 504)
        context.drawImage(canvas, 0, 0, 28, 28, 0, 0, 504, 504)
    })

    canvas.addEventListener("mouseleave", function(e){
        paint = false
    })

})

// var img = new Image();
//     var ctx = canvas.getContext("2d");
//     var canvasCopy = document.createElement("canvas");
//     var copyContext = canvasCopy.getContext("2d");

//     img.onload = function()
//     {
//         var ratio = 1;

//         if(img.width > maxWidth)
//             ratio = maxWidth / img.width;
//         else if(img.height > maxHeight)
//             ratio = maxHeight / img.height;

//         canvasCopy.width = img.width;
//         canvasCopy.height = img.height;
//         copyContext.drawImage(img, 0, 0);

//         canvas.width = img.width * ratio;
//         canvas.height = img.height * ratio;
//         ctx.drawImage(canvasCopy, 0, 0, canvasCopy.width, canvasCopy.height, 0, 0, canvas.width, canvas.height);
//     };

//     img.src = reader.result;

// Find ways to modify the default canvas drawing "stylus" to better accommodate MNIST Dataset's image style.

// canvas resolutions will likely need to be divisible by 28 (28x28) as they should be as similar to the MNIST as possible when scaled down.

// Consider using an embedded drawing app to replace the HTML canvas if performance with Machine Learning model is not satisfactory.

// Consider adding a second page or additional information to the home page detailing how the MNIST set was used to train the model and what technologies were used in its creation.

// Research the MNIST dataset's preprocessing techniques to best match their input.