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
