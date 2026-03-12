let currentStep = 0;
const totalSteps = 6;

function changeStep(direction) {
    // Hide current step
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    
    // Update step counter
    currentStep += direction;
    
    // Show next step
    document.getElementById(`step-${currentStep}`).classList.add('active');
    
    // Update buttons
    updateButtons();
    
    // Scroll to top of content for easy reading
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateButtons() {
    const backBtn = document.getElementById('backBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Handle Back Button
    backBtn.disabled = (currentStep === 0);
    
    // Handle Next Button text and action
    if (currentStep === 0) {
        nextBtn.innerHTML = "Start Cooking";
    } else if (currentStep === totalSteps) {
        nextBtn.innerHTML = "Finish";
    } else {
        nextBtn.innerHTML = "Next Step";
    }

    if (currentStep > totalSteps) {
        resetSteps();
    }
}

function resetSteps() {
    document.getElementById(`step-${currentStep-1}`).classList.remove('active');
    currentStep = 0;
    document.getElementById(`step-${currentStep}`).classList.add('active');
    updateButtons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
