const fileElement = document.getElementById("file-input");
document.getElementById("classify-image").addEventListener("click", () => {
  fileElement.click();
});
fileElement.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const fileType = file["type"];
  if (fileType.search("image") >= 0) {
    const imageReader = new FileReader();
    const formData = new FormData();

    imageReader.addEventListener("load", (imageEvent) => {
      const image = new Image();
      image.src = imageEvent.target.result;
      image.onload = async () => {
        document.getElementById("preview-image").innerHTML =
          '<br><img id="thumbnail" src="' + image.src + '" />';
        document.getElementById("thumbnail").style.width = "300px";
        document.getElementById("thumbnail").style.height = "300px";
        
        formData.append("image_file", file);

        fetch("https://whispering-tundra-59033.herokuapp.com/classify/", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((result) => {
            console.log("Success:", result);
            document.getElementById("result").innerHTML = "<br><h6>Classification: " + result.result + "</h6>";
          })
          .catch((error) => {
            console.error("Error:", error);
            document.getElementById("result").innerHTML =
          "<p>There was some error, please retry.</p>";
          });
      };
    });

    imageReader.readAsDataURL(file);
  }
});
