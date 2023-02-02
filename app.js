const fileInput = document.getElementById('fileInput');
const previewsContainer = document.getElementById('previewsContainer');

fileInput.addEventListener('change', function() {
  let files = this.files;
  for (let i = 0; i < files.length; i++) {
    let reader = new FileReader();
    reader.onload = function(e) {
      let preview = document.createElement('div');
          preview.className = 'preview'
          preview.innerHTML = `
         <img src="${e.target.result}"/>
         <button class="close"><i class="fa-sharp fa-solid fa-xmark"></i></ button>
      `;
      previewsContainer.appendChild(preview);
      let closeButton = preview.querySelector('.close');
      closeButton.addEventListener('click', function() {
        preview.remove();
      });
    };
    reader.readAsDataURL(files[i]);
  }
});
