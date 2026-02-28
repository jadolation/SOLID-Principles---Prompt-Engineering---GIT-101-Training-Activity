const list = document.getElementById('guest-list');

window.onload = function() {
    const entries = getAllEntries();
    entries.forEach(entry => renderEntry(entry.name, entry.learn));
};

function addEntry() {
    const name = document.getElementById('nameInput').value;
    const learn = document.getElementById('learnInput').value;

    if (name === '' || learn === '') {
        alert("Please fill in both fields!");
        return;
    }

    renderEntry(name, learn);
    saveEntry(name, learn);

    document.getElementById('nameInput').value = '';
    document.getElementById('learnInput').value = '';
}

function renderEntry(name, learn) {
    const li = document.createElement('li');
    li.className = 'guest-entry';
    li.innerHTML = `<div class="guest-info"><strong>${name}</strong><span>Learned: ${learn}</span></div>`;
    list.appendChild(li);
}
