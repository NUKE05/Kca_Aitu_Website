const achievements = [
    {
        title: "Hub of Activity",
        description: "Since its inception, the club has been a hub of activity, offering a plethora of events and activities both within and beyond its confines. These events have not only enriched the lives of its members but have also left a lasting impact on the campus community as a whole."
    },
    {
        title: "Self-expression",
        description: "One of the club's key achievements has been its role in helping students develop their social skills. Through gatherings, workshops, and cultural exchanges, members have had the opportunity to connect with fellow enthusiasts, forging lasting friendships and enhancing their ability to interact effectively with people from diverse backgrounds. The club's welcoming atmosphere has provided a safe space for individuals to express themselves, fostering a sense of belonging and inclusion."
    },
    {
        title: "Broadening one's horizons",
        description: "Moreover, the club has played a pivotal role in broadening the horizons of its members. Regular film screenings, language classes, and discussions about Korean culture and contemporary issues have encouraged students to explore beyond their comfort zones. Many have even embarked on journeys to South Korea, immersing themselves in the culture they love so dearly."
    }
];

function addAchievements() {
    const achievementsContainer = document.getElementById('achievements-container');

    achievements.forEach((achievement, index) => {
        const achievementElement = document.createElement('div');
        achievementElement.classList.add('col-md-3', 'bg-white', 'rounded');

        const titleElement = document.createElement('h2');
        titleElement.style.color = 'salmon';
        titleElement.textContent = achievement.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = achievement.description;

        achievementElement.appendChild(titleElement);
        achievementElement.appendChild(descriptionElement);
        achievementsContainer.appendChild(achievementElement);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    addAchievements();
});
