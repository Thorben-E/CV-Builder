export default function toProjects() {
    let main = document.getElementById('main')
    main.innerHTML = ''
    const projectsText = document.createElement('h2')
    projectsText.innerHTML = 'Projects'
    main.append(projectsText)
}