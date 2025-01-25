function filterExperience() {
    var checkedBoxes = document.querySelectorAll('.filter input[type="checkbox"]:checked');
    var selectedFields = Array.from(checkedBoxes).map(box => box.value);
    var modules = document.querySelectorAll('.experience.module'); // Target only modules
    var otherExperiences = document.querySelectorAll('.experience:not(.module)'); // Target other experiences

    // Handle modules: hide if no checkboxes are selected
    modules.forEach(function(module) {
        var moduleFields = module.getAttribute('data-field').split(' ');
        var isMatch = selectedFields.some(field => moduleFields.includes(field));

        if (selectedFields.length === 0 || !isMatch) {
            module.classList.add('hidden');
        } else {
            module.classList.remove('hidden');
        }
    });

    // Handle other experiences: always show when no checkboxes are selected
    otherExperiences.forEach(function(experience) {
        var experienceFields = experience.getAttribute('data-field').split(' ');
        var isMatch = selectedFields.some(field => experienceFields.includes(field));

        if (selectedFields.length === 0 || isMatch) {
            experience.classList.remove('hidden');
        } else {
            experience.classList.add('hidden');
        }
    });
}

// Ensure modules are hidden initially
document.addEventListener('DOMContentLoaded', () => {
    var modules = document.querySelectorAll('.experience.module');
    modules.forEach(module => {
        module.classList.add('hidden'); // Hide all modules on page load
    });
});

// Initialize EmailJS
(function(){
    emailjs.init("sCyd-LGcr4poEDZ0F");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Replace these IDs with your own
    const serviceID = 'service_kn1nn9q';
    const templateID = 'template_eipxyj4';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert("Your message has been sent successfully!");
        }, (err) => {
            alert("Error sending message: " + JSON.stringify(err));
        });

    this.reset();
});
