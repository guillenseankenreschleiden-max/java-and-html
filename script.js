const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const progress = document.getElementById("progress");

// Load saved states
checkboxes.forEach(box => {
  const saved = localStorage.getItem("quote-" + box.dataset.id);
  if (saved === "true") {
    box.checked = true;
  }

  box.addEventListener("change", () => {
    localStorage.setItem("quote-" + box.dataset.id, box.checked);
    updateProgress();
  });
});

function updateProgress() {
  const total = checkboxes.length;
  const checked = document.querySelectorAll('input[type="checkbox"]:checked').length;
  progress.textContent = `Progress: ${checked} / ${total} quotes read`;
}

updateProgress();