// Handles loading the events for <model-viewer>'s slotted progress bar
const table = document.getElementById("table")
const body = document.querySelector(".userInput")
console.log(body); 

const modelViewer = document.querySelector('model-viewer');
const position = modelViewer.getAttribute('position');
console.log(modelViewer);
console.log(position);

modelViewer.addEventListener("click",()=>{
  if( table.style.display=="block"){
    table.style.display="none"
  }else{
    table.style.display="block"
  }

})

console.log(table);
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);