//your code here
function dragstartHandler(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function dragoverHandler(ev) {
  ev.preventDefault();
}

function dropHandler(ev) {
  ev.preventDefault();
  const draggedId = ev.dataTransfer.getData("text");
  const draggedEl = document.getElementById(draggedId);
  const dropTarget = ev.target;

  // Ensure only swapping between draggable images
  if (dropTarget.classList.contains('image') && draggedEl !== dropTarget) {
    const parent = dropTarget.parentNode;
    const draggedNext = draggedEl.nextSibling === dropTarget ? draggedEl : draggedEl.nextSibling;
    parent.insertBefore(draggedEl, dropTarget);
    parent.insertBefore(dropTarget, draggedNext);
  }
}