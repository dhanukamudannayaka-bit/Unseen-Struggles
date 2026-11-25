
// Unseen Struggles Website

// PHQ-9 Assessment System

const form = document.getElementById("phqForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Calculate total score
    let totalScore = 0;

    for (let i = 1; i <= 9; i++) {

        const answer = document.querySelector(
            `input[name="q${i}"]:checked`
        );

        totalScore += Number(answer.value);
    }

    // Get Question 9 answer
    const q9Answer = Number(
        document.querySelector('input[name="q9"]:checked').value
    );

    // Determine severity category
    let category = "";
    let recommendation = "";

    if (totalScore <= 4) {

        category = "Minimal";

        recommendation =
            "Explore healthy daily habits, mindfulness and enjoyable activities.";

    } else if (totalScore <= 9) {

        category = "Mild";

        recommendation =
            "You may explore breathing exercises, journaling and gentle physical activities.";

    } else if (totalScore <= 14) {

        category = "Moderate";

        recommendation =
            "Consider speaking with a qualified mental health professional. Self-care activities may also provide supportive benefits.";

    } else if (totalScore <= 19) {

        category = "Moderately Severe";

        recommendation =
            "Please seek an assessment from a qualified mental health professional. Self-care activities are not a substitute for professional support.";

    } else {

        category = "Severe";

        recommendation =
            "Please seek professional mental health support promptly. A qualified professional can help assess your needs.";
    }


// Personalized Activity Recommendations

const activityIcons = {
    "Mindfulness Practice": "🧘",
    "Daily Walking": "🚶",
    "Healthy Daily Habits": "🌱",
    "Breathing Exercises": "🌬️",
    "Journaling": "📖",
    "Relaxing Music": "🎵",
    "Guided Relaxation": "🌿",
    "Social Connection": "🤝",
    "Professional Support Information": "💙",
    "Gentle Relaxation Activities": "🕊️",
    "Connect With Trusted People": "💬",
    "Professional Support Guidance": "❤️",
    "Gentle Self-care Activities": "🌸"
};

const activities = {
    Minimal: [
        "Mindfulness Practice",
        "Daily Walking",
        "Healthy Daily Habits"
    ],

    Mild: [
        "Breathing Exercises",
        "Journaling",
        "Relaxing Music"
    ],

    Moderate: [
        "Guided Relaxation",
        "Social Connection",
        "Professional Support Information"
    ],

    "Moderately Severe": [
        "Gentle Relaxation Activities",
        "Connect With Trusted People",
        "Professional Support Guidance"
    ],

    Severe: [
        "Gentle Self-care Activities",
        "Connect With Trusted People",
        "Professional Support Guidance"
    ]
};

const activityContainer =
    document.getElementById("activityRecommendations");

activityContainer.innerHTML = `
    <h3>Recommended Activities</h3>
    <div class="activity-container">
        ${activities[category].map(activity => `
            <div class="activity-card" data-activity="${activity}">
                <div class="activity-icon">${activityIcons[activity] || "✨"}</div>
                <h3>${activity}</h3>
            </div>
        `).join("")}
    </div>
`;

    // Display result
    document.getElementById("score").textContent =
        "Your Score: " + totalScore + " / 27";

    document.getElementById("category").textContent =
        "Category: " + category;

    document.getElementById("recommendation").textContent =
        recommendation;

    // Question 9 safety guidance
    const safetyMessage =
        document.getElementById("safetyMessage");

    if (q9Answer > 0) {

        safetyMessage.hidden = false;

        safetyMessage.textContent =
            "Important: Because you selected an answer other than 'Not at all' for Question 9, please reach out to a trusted person and a qualified mental health professional promptly. If you may act on these thoughts or are in immediate danger, contact local emergency services or go to the nearest emergency department. Try not to stay alone while seeking help.";

    } else {

        safetyMessage.hidden = true;
        safetyMessage.textContent = "";
    }

    // Show results
    const result = document.getElementById("result");

    result.hidden = false;

    result.scrollIntoView({
        behavior: "smooth"
    });

});
// Activity Guides

const activityGuides = {

    "Mindfulness Practice": {
        description: "Practice mindfulness to focus on the present moment.",
        steps: [
            "Find a quiet and comfortable place.",
            "Sit comfortably and close your eyes if you wish.",
            "Focus on your breathing.",
            "Notice your thoughts without judging them.",
            "Continue for 5 minutes."
        ]
    },

    "Daily Walking": {
        description: "A gentle walk can help improve your mood and well-being.",
        steps: [
            "Choose a safe and comfortable place.",
            "Start walking slowly for 5 minutes.",
            "Pay attention to your surroundings.",
            "Continue at a comfortable pace.",
            "Stop whenever you feel tired."
        ]
    },

    "Healthy Daily Habits": {
        description: "Build small healthy habits into your daily routine.",
        steps: [
            "Try to maintain a regular sleep schedule.",
            "Drink enough water.",
            "Eat balanced meals.",
            "Include some physical activity.",
            "Make time for activities you enjoy."
        ]
    },

    "Breathing Exercises": {
        description: "Practice slow and comfortable breathing.",
        steps: [
            "Sit in a comfortable position.",
            "Breathe in gently through your nose.",
            "Breathe out slowly.",
            "Repeat for 2 to 5 minutes.",
            "Stop if you feel uncomfortable."
        ]
    },

    "Journaling": {
        description: "Writing down your thoughts can help you understand your feelings.",
        steps: [
            "Take a notebook or open a notes app.",
            "Write how you feel today.",
            "Mention something that made you happy.",
            "Write down anything that is bothering you.",
            "Finish by writing one positive thing about your day."
        ]
    },

    "Relaxing Music": {
        description: "Listen to music that makes you feel calm and comfortable.",
        steps: [
            "Find a quiet place.",
            "Choose music you enjoy.",
            "Use a comfortable volume.",
            "Focus on the music.",
            "Take a few minutes to relax."
        ]
    },

    "Guided Relaxation": {
        description: "Use guided relaxation to release everyday tension.",
        steps: [
            "Find a quiet place.",
            "Sit or lie down comfortably.",
            "Close your eyes if comfortable.",
            "Listen to a guided relaxation recording.",
            "Allow yourself to relax without pressure."
        ]
    },

    "Social Connection": {
        description: "Connecting with others can provide emotional support.",
        steps: [
            "Think of someone you trust.",
            "Send them a message or call them.",
            "Talk about your day.",
            "Listen to each other.",
            "Spend some quality time together."
        ]
    },

    "Professional Support Information": {
        description: "Learn about available mental health support services.",
        steps: [
            "Find out what student support services your university offers.",
            "Learn how to contact a qualified mental health professional.",
            "Check available counselling services.",
            "Ask about confidentiality and appointment procedures.",
            "Consider reaching out when you need support."
        ]
    },

    "Gentle Relaxation Activities": {
        description: "Try simple activities that help you feel comfortable.",
        steps: [
            "Choose a quiet and comfortable place.",
            "Listen to calming music.",
            "Try gentle breathing.",
            "Take a short break from daily tasks.",
            "Continue only with activities that feel comfortable."
        ]
    },

    "Connect With Trusted People": {
        description: "Talking with someone you trust can help you feel supported.",
        steps: [
            "Think of a trusted friend, family member or lecturer.",
            "Choose a comfortable time to talk.",
            "Share what you feel comfortable sharing.",
            "Let them know what kind of support you need.",
            "Remember that you do not have to face difficulties alone."
        ]
    },

    "Professional Support Guidance": {
        description: "Consider seeking guidance from a qualified mental health professional.",
        steps: [
            "Identify a suitable counselling or mental health service.",
            "Contact the service to learn about available support.",
            "Ask about arranging an appointment.",
            "Share your concerns with the professional.",
            "Follow their guidance for further support."
        ]
    },

    "Gentle Self-care Activities": {
        description: "Focus on small and manageable self-care activities.",
        steps: [
            "Choose one simple activity you enjoy.",
            "Take a short break and rest.",
            "Drink some water and have a meal if needed.",
            "Spend time in a comfortable environment.",
            "Reach out to someone you trust for support."
        ]
    }

};


// Activity card click event

const activityGuideBox = document.getElementById("activityGuide");
const guideTitle = document.getElementById("guideTitle");
const guideDescription = document.getElementById("guideDescription");
const guideSteps = document.getElementById("guideSteps");

document.getElementById("activityRecommendations").addEventListener("click", function(event) {

    const clickedCard = event.target.closest(".activity-card");

    if (!clickedCard) return;

    const activityName = clickedCard.dataset.activity;
    const guide = activityGuides[activityName];

    if (!guide) return;

    guideTitle.textContent = activityName;
    guideDescription.textContent = guide.description;

    guideSteps.innerHTML = "";

    guide.steps.forEach(function(step) {
        const listItem = document.createElement("li");
        listItem.textContent = step;
        guideSteps.appendChild(listItem);
    });

    activityGuideBox.hidden = false;

    activityGuideBox.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


// Close activity guide

document.getElementById("closeGuide").addEventListener("click", function() {
    activityGuideBox.hidden = true;
});


// ================= SCROLL REVEAL ANIMATIONS =================

const revealElements = document.querySelectorAll(
    "section, .explore-card, .activity-card, .factor-analysis"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});
