var canvas= new.fabric.Canvas("myCanvas")
var superhero_x=10
var superhero_y=10
var supertool_width=30
var supertool_height=30
var superhero_object=""
var supertool_object=""

function superhero_update()
{
    fabric.Image.fromURL('https://www.clipartmax.com/png/middle/1-17909_superman-clipart-png-superman-clipart.png', function(Img){
        superhero_object=Img
        superhero_object.scaleToWidth(150)
        superhero_object.scaleToHeight(140)
        superhero_object.set({
            top: superhero_y,
            left: superhero_x
        })
        canvas.add(superhero_object)
    })
}
function supertool_update(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        supertool_object=Img
        supertool_object.scaleToWidth(supertool_width)
       supertool_object.scaleToHeight(supertool_height)
        supertool_object.set({
            top: superhero_y,
            left: superhero_x
        })
        canvas.add(supertool_object)
    })
}