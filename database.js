const STORAGE_KEY = 'guestbook_entries';

function getAllEntries() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    return savedData ? JSON.parse(savedData) : [];
}

function saveEntry(name, learn) {
    const entries = getAllEntries();
    entries.push({ name: name, learn: learn });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}
