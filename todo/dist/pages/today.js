export default function toToday() {
    let main = document.getElementById('main')
    main.innerHTML = ''
    const todayText = document.createElement('h2')
    todayText.innerHTML = 'Today'
    main.append(todayText)
}