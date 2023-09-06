var eyes = document.getElementsByClassName("eye");

document.onmousemove = (e) => {
    var x = [1.3 * e.clientX * 100 / window.innerWidth + "%", 1 * e.clientX * 100 / window.innerWidth + "%"]
    var y = 0.8 * e.clientY * 100 / window.innerHeight + "%";

    for (i = 0; i <= 1; i++) {
        eyes[i].style.transition = "0s";
        eyes[i].style.left = x[i];
        eyes[i].style.top = y;
    }
}

document.onmouseout = (e) => {
    for (i = 0; i <= 1; i++) {
        eyes[i].style.transition = "0.2s";
        eyes[i].style.left = "50%";
        eyes[i].style.top = "50%";
    }
}

window.wallpaperPropertyListener = {
    applyUserProperties: function(properties) {
        
        // Check if the custom-text setting has been changed
        if (properties.customtext) {
            document.getElementById("customText").innerHTML = properties.customtext.value;
        }

        // Check if the main colour invert setting has been changed 
        if (properties.whitekilroy) {
            var useWhiteKilroy = properties.whitekilroy.value;
            
            if (useWhiteKilroy) {
                document.getElementById("kilroy").src = "KilroyWhite.png" 
                document.getElementById("eyeL").src = "eyeLWhite.png" 
                document.getElementById("eyeR").src = "eyeRWhite.png" 
                document.getElementById("customText").style.color = "white";
            } else { 
                document.getElementById("kilroy").src = "Kilroy.png"
                document.getElementById("eyeL").src = "eyeL.png"
                document.getElementById("eyeR").src = "eyeR.png"
                document.getElementById("customText").style.color = "black";
            }
        }

        // Check if the background colour setting has been changed 
        if (properties.bgcolour) {
            // Convert the custom color to 0 - 255 range for CSS usage
            var customColour = properties.bgcolour.value.split(' ');
            customColour = customColour.map(function(c) {
                return Math.ceil(c * 255);
            });
            var customColourAsCSS = 'rgb(' + customColour + ')';
            
            document.body.style.backgroundColor = customColourAsCSS;
        }
    },
};