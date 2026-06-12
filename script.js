const projects = [
    {
        title: "Django Project Source Code",
        category: "fullstack",
        language: "Django",
        date: "2023-2024 Django <span style=\"color: red;\">Youtube Series</span>",
        description:
        "This Zip file contains the source code of the topics covered in Django Full Stack Playlist",
        tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "Python", "Django", "MySQL"],
        zip: "downloads/django-series.zip",
        video: "https://youtu.be/Vs-CmVKfWUA",
        available: true,
    },
    // {
    //     title: "Python Flask Blog",
    //     category: "python",
    //     language: "Python",
    //     date: "Guide",
    //     description:
    //     "Build a small blog app with routes, templates, forms, authentication, and SQLite storage.",
    //     tech: ["Python", "Flask", "Jinja", "SQLite"],
    //     zip: "downloads/python-flask-blog.zip",
    //     video: "https://www.youtube.com/",
    //     available: false,
    // },
    // {
    //     title: "JavaScript Weather App",
    //     category: "javascript",
    //     language: "JavaScript",
    //     date: "Starter",
    //     description:
    //     "A clean API project that teaches fetch, async JavaScript, loading states, and responsive UI.",
    //     tech: ["HTML", "CSS", "JavaScript", "API"],
    //     zip: "downloads/javascript-weather-app.zip",
    //     video: "https://www.youtube.com/",
    //     available: false,
    // },
    // {
    //     title: "React Dashboard UI",
    //     category: "javascript",
    //     language: "JavaScript",
    //     date: "UI",
    //     description:
    //     "Reusable dashboard components, responsive cards, charts area, navigation, and Tailwind styling.",
    //     tech: ["React", "Tailwind", "Components"],
    //     zip: "downloads/react-dashboard-ui.zip",
    //     video: "https://www.youtube.com/",
    //     available: false,
    // },
    // {
    //     title: "Django REST API",
    //     category: "python",
    //     language: "Python",
    //     date: "Backend",
    //     description:
    //     "Create REST endpoints, serializers, models, admin setup, and testable backend structure.",
    //     tech: ["Python", "Django", "DRF", "PostgreSQL"],
    //     zip: "downloads/django-rest-api.zip",
    //     video: "https://www.youtube.com/",
    //     available: false,
    // },
    // {
    //     title: "MERN Authentication App",
    //     category: "fullstack",
    //     language: "JavaScript",
    //     date: "Pro",
    //     description:
    //     "Registration, login, JWT, protected routes, password hashing, and production-minded structure.",
    //     tech: ["MongoDB", "Express", "React", "Node.js"],
    //     zip: "downloads/mern-authentication-app.zip",
    //     video: "https://www.youtube.com/",
    //     available: false,
    // },
];

const projectGrid = document.querySelector("#projectGrid");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const filterButtons = document.querySelectorAll("[data-filter]");
const year = document.querySelector("#year");

let activeFilter = "all";

function projectMatchesSearch(project, searchTerm) {
    const text = [
        project.title,
        project.category,
        project.language,
        project.description,
        ...project.tech,
    ]
        .join(" ")
        .toLowerCase();

    return text.includes(searchTerm);
}

function renderProjects() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const filteredProjects = projects.filter((project) => {
        const categoryMatch = activeFilter === "all" || project.category === activeFilter;
        return categoryMatch && projectMatchesSearch(project, searchTerm);
    });

    projectGrid.innerHTML = filteredProjects
        .map(
        (project) => `
            <article class="project-card">
            <div class="project-topline">
                <span class="project-badge">${project.language}</span>
                <span class="project-date">${project.date}</span>
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-list">
                ${project.tech.map((item) => `<span>${item}</span>`).join("")}
            </div>
            <div class="card-actions">
                ${
                project.available
                    ? `<a class="download-button" href="${project.zip}" download>Download ZIP</a>`
                    : `<span class="download-button disabled-download" aria-disabled="true">Coming Soon</span>`
                }
                <a class="video-button" href="${project.video}" target="_blank" rel="noreferrer">Watch Video</a>
            </div>
            </article>
        `
        )
        .join("");

    emptyState.hidden = filteredProjects.length > 0;
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        activeFilter = button.dataset.filter;
        filterButtons.forEach((item) => item.classList.toggle("active", item === button));
        renderProjects();
    });
});

searchInput.addEventListener("input", renderProjects);
year.textContent = new Date().getFullYear();
renderProjects();
