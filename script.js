function filterExperience() {
    var checkedBoxes = document.querySelectorAll('.filter input[type="checkbox"]:checked');
    var selectedFields = Array.from(checkedBoxes).map(box => box.value);
    var experiences = document.querySelectorAll('.experience');
    
    experiences.forEach(function(experience) {
        var experienceFields = experience.getAttribute('data-field').split(' ');
        var isMatch = selectedFields.some(field => experienceFields.includes(field));
        
        if (selectedFields.length === 0 || isMatch) {
            experience.classList.remove('hidden');
        } else {
            experience.classList.add('hidden');
        }
    });
}

// Initialize EmailJS
(function(){
    emailjs.init("sCyd-LGcr4poEDZ0F");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Replace these IDs with your own
    const serviceID = 'service_149i6qp';
    const templateID = 'template_eipxyj4';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert("Your message has been sent successfully!");
        }, (err) => {
            alert("Error sending message: " + JSON.stringify(err));
        });

    this.reset();
});
