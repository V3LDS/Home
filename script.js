// Add your projects here
const projects = [
    {
        title: "Useless Button",
        description: "A button who just doesn't want to have a purpose lol",
        url: "https://v3lds.github.io/Button/",
    },
    {
        title: "Game Central",
        description: "An app with snake and crossy road in one :)",
        url: "https://v3lds.github.io/Game-Central/",
    },
    {
        title: "Physics.",
        description: "A Physics Playground",
        url: "https://v3lds.github.io/Physics./",
    },
    {
        title: "Postit",
        description: "(WORK IN PROGRESS)",
        url: "https://v3lds.github.io/Postit/",
    },
    // Add more projects by copying the format above
    // {
    //     title: "Project Name",
    //     description: "Project Description",
    //     url: "https://project-url.com",
    // },
];

// Function to create project cards
function createProjectCards() {
    const projectsContainer = document.getElementById('projectsContainer');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        card.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <a href="${project.url}" target="_blank">Visit Project →</a>
        `;
        
        projectsContainer.appendChild(card);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', createProjectCards); 