export default function toHome() {
    let main = document.getElementById('main')
    main.innerHTML = ''
    const homeText = document.createElement('h2')
    homeText.innerHTML = 'Home'
    main.append(homeText)
}