export default function toNotes() {
    let main = document.getElementById('main')
    main.innerHTML = ''
    const notesText = document.createElement('h2')
    notesText.innerHTML = 'Notes'
    main.append(notesText)
}