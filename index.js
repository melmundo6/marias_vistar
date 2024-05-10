function changeImage() {
    var file = document.getElementById("imageInput").files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
        localStorage.setItem("uploadedImage", reader.result);
    }
    if (file) {
        reader.readAsDataURL(file);
    } 

    var newText = document.getElementById("textInput").value;
    localStorage.setItem("uploadedText", newText);

    let sizes = ['640x387', '768x304', '768x448', '816x336', '1088x448', '1320x720'];

    var buttonContainer = document.getElementById("buttonContainer");
    if (!buttonContainer) {
        buttonContainer = document.createElement("div");
        buttonContainer.id = "buttonContainer";
        document.body.appendChild(buttonContainer);
    } else {
        buttonContainer.innerHTML = '';  // Limpia el contenedor si ya existía
    }

    // Crea y añade botones al contenedor
    sizes.forEach(function(size) {
        var button = document.createElement("button");
        button.className = "btn btn-success button"; // Bootstrap class
        button.textContent = `${size} px`;
        button.onclick = function() {
            window.open(`results/${size}.html`, '_blank');
        };
        buttonContainer.appendChild(button);
    });

}