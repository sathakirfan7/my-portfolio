// Responsive nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".main-nav ul");
navToggle.addEventListener("click", () => {
  navList.classList.toggle("open");
});
// Close nav on link click (mobile)
document.querySelectorAll(".main-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("open");
  });
});
// Active link highlighting
function setActiveNav() {
  const links = document.querySelectorAll(".main-nav .nav-link");
  let found = false;
  links.forEach((link) => link.classList.remove("active"));
  const scrollPos = window.scrollY + 80;
  ["home", "about", "projects", "services", "contact"].forEach((id, idx) => {
    const section = document.getElementById(id);
    if (
      section &&
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight &&
      !found
    ) {
      links[idx].classList.add("active");
      found = true;
    }
  });
  if (!found) links[0].classList.add("active");
}
window.addEventListener("scroll", setActiveNav);
window.addEventListener("DOMContentLoaded", setActiveNav);
  // Scroll-triggered animation for services
  function animateServices() {
    document.querySelectorAll('.service-card').forEach((el, idx) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
            setTimeout(() => el.classList.add('visible'), idx * 120);
        }
    });
}
window.addEventListener('scroll', animateServices);
window.addEventListener('DOMContentLoaded', animateServices);
 // Main Skills (Node.js powered simulation)
 const mainSkills = [
    { icon: 'fa-code', label: 'Full Stack Developer' },
    { icon: 'fa-pencil-ruler', label: 'UI/UX Designer' },
    { icon: 'fa-chart-bar', label: 'Data Analytics' }
];
const mainSkillsContainer = document.getElementById('main-skills');
mainSkills.forEach((skill, i) => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.innerHTML = `<i class="fa ${skill.icon}"></i><div>${skill.label}</div>`;
    mainSkillsContainer.appendChild(card);
});
// Projects Gallery
const projects = [
    { title: 'Kilakarai Eratha Uravugal Service Website' },
    { title: 'Fintech Application UI Design' },
    { title: 'GoFly Travel Booking Website UI' }
];
const projectsGallery = document.getElementById('projects-gallery');
projects.forEach((project, i) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `<div class="project-title">${project.title}</div>`;
    projectsGallery.appendChild(card);
});
// Technical Skills (Node.js powered simulation)
const techSkills = [
    { icon: 'fa-html5', label: 'HTML & CSS', percent: 95, color: '#e44d26' },
    { icon: 'fa-js', label: 'JavaScript', percent: 85, color: '#f7df1e' },
    { icon: 'fa-node-js', label: 'Node.js', percent: 80, color: '#68a063' },
    { icon: 'fa-node-js', label: 'react', percent: 75, color: '#68a063' },
    { icon: 'fa-python', label: 'Python', percent: 78, color: '#3776ab' },
    { icon: 'fa-c', label: 'C#', percent: 75, color: '#68217a' }
];
const techSkillsList = document.getElementById('tech-skills-list');
techSkills.forEach((skill, i) => {
    const skillDiv = document.createElement('div');
    skillDiv.className = 'tech-skill';
    skillDiv.innerHTML = `
        <i class="fa ${skill.icon}" style="color:${skill.color}"></i>
        <div>${skill.label}</div>
        <div class="progress-bar-bg">
            <div class="progress-bar" style="background:${skill.color};"></div>
        </div>
    `;
    techSkillsList.appendChild(skillDiv);
});
// Animate progress bars on scroll into view
function animateProgressBars() {
    document.querySelectorAll('.tech-skill').forEach((el, idx) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
            const bar = el.querySelector('.progress-bar');
            if (bar && !bar.style.width) {
                bar.style.width = techSkills[idx].percent + '%';
            }
        }
    });
}
window.addEventListener('scroll', animateProgressBars);
window.addEventListener('DOMContentLoaded', animateProgressBars);
// Contact Form Success Feedback
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('successMsg').style.display = 'block';
    setTimeout(() => {
        document.getElementById('successMsg').style.display = 'none';
        this.reset();
    }, 2500);
});