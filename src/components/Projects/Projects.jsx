import hexapod from '../../assets/Hexapod.webp'
import './Project.css'
function Projects() {
    const Categories = [
        'Electrical engineering',
        'Computer science engineering',
        'EEE',
        'Mechanical Engineering',
        'Mechatronics engineering',
        'Electronics Engineering',
    ]
    const Projects = [
        {
            id: 1,
            title: 'Hexapod',
            description: [
                'Self-Balancing Mechanism',
                'Object Following Capability',
                'Multi-Directional Movement',
                'Advanced Sensor Integration',
                'Energy Efficiency and Power Management',
            ],
            image: {hexapod}, // Add image file in /public/images/
            new: true,
        },
        {
            id: 2,
            title: 'Home automation using facial recognition',
            description: [
              'Face Recognition-Based Door Access Control',
              'Mobile Application for Remote Control',
            ],
            image: 'images/home_automation.png',
            new: false,
          },
          {
            id: 3,
            title: 'Human detection robot',
            description: [
              'Obstacle Avoidance',
              'Motor Control with Relay',
              'Custom Mobile Application',
            ],
            image: 'images/human_robot.png',
            new: true,
          },
          {
            id: 4,
            title: 'Advanced Battery Management System (BMS)',
            description: [
              'Battery Percentage Indicator',
              'Real-Time Temperature Monitoring',
              'Air Cooling System',
            ],
            image: 'images/bms.png',
            new: false,
          },
    ]
    return (
        <div>
            <div className="Projects-container">
                <div className="Category-buttons">
                    {Categories.map((category, index) => (
                        <button key={index} className="category-btn">
                            {category}
                        </button>
                    ))}
                </div>
                <div className="project-grid">
                    {Projects.map((project) => (
                        <div key={project.id} className="project-card">
                            {project.new && <div className="new-tag">NEW ARRIVAL</div>}
                            <h3 className="project-title">{project.title}</h3>
                            <ul className="project-description">
                                {project.description.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </div >
    )
}

export default Projects