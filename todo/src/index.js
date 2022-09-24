import toToday from '../dist/pages/today'
import toNotes from '../dist/pages/notes'
import toProjects from '../dist/pages/projects'
import toWeek from '../dist/pages/week'
import toHome from '../dist/pages/home'
import formPopup from '../dist/pages/todoForm'

const homeLink = document.getElementById('home')
homeLink.addEventListener('click', toHome)
const todayLink = document.getElementById('today')
todayLink.addEventListener('click', toToday)
const weekLink = document.getElementById('week')
weekLink.addEventListener('click', toWeek)
const notesLink = document.getElementById('notes')
notesLink.addEventListener('click', toNotes)
const projectsLink = document.getElementById('projects')
projectsLink.addEventListener('click', toProjects)
console.log('hello')


const newProject = document.getElementById('newProject')
newProject.addEventListener('click', formPopup)
