let journalEntries = []; // Renamed to clearly indicate it holds journal entries
const entriesDiv = document.getElementById("entries");
const storageKey = "journalEntries"; // Consistent storage key with next.html

function renderEntries() {
  entriesDiv.innerHTML = ""; // Clear existing entries

  if (journalEntries.length === 0) {
    entriesDiv.innerHTML = "<p>No entries yet.</p>";
    return;
  }

  journalEntries.forEach((entry, idx) => {
    const entryContainer = document.createElement("div");
    entryContainer.classList.add("entry-container"); // Add a class for styling

    const titleElement = document.createElement("h3");
    titleElement.textContent = entry.title;

    const dateElement = document.createElement("p");
    dateElement.textContent = `Date: ${entry.date}`;

    const contentElement = document.createElement("p");
    contentElement.textContent = entry.content;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Entry";
    deleteButton.classList.add("delete-button"); // Add a class for styling
    deleteButton.onclick = () => removeEntry(idx);

    entryContainer.appendChild(titleElement);
    entryContainer.appendChild(dateElement);
    entryContainer.appendChild(contentElement);
    entryContainer.appendChild(deleteButton);

    entriesDiv.appendChild(entryContainer);
  });
}

function loadEntries() {
  const savedEntries = localStorage.getItem(storageKey);
  if (savedEntries) {
    journalEntries = JSON.parse(savedEntries);
  }
  renderEntries();
}

function saveEntries() {
  localStorage.setItem(storageKey, JSON.stringify(journalEntries));
}

function removeEntry(idx) {
  if (confirm("Are you sure you want to delete this entry?")) {
    journalEntries.splice(idx, 1);
    saveEntries();
    renderEntries();
  }
}

// Load entries when the page content is fully loaded
document.addEventListener("DOMContentLoaded", loadEntries);