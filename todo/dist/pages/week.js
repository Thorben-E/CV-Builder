export default function toWeek() {
    let main = document.getElementById('main')
    main.innerHTML = ''
    const weekText = document.createElement('h2')
    weekText.innerHTML = 'Week'
    main.append(weekText)
}