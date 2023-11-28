
    function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
}
}
    function handleScroll() {
    // Get the position of the social-container
    const socialContainer = document.querySelector('.social-container');
    const socialContainerPosition = socialContainer.getBoundingClientRect().top;

    // Trigger the animation class when the social-container is in view
    if (socialContainerPosition < window.innerHeight / 2) {
    socialContainer.classList.add('tracking-in-contract-bck');
} else {
    socialContainer.classList.remove('tracking-in-contract-bck');
}
}

    new Vue({
    // el: '#app', // Commented out or removed this line
    data: {
    showForm: false,
    formVisible: false,
    userLoggedIn: false, // Initial login status
},
    mounted() {
    // Add scroll event listener to trigger animation on scroll
    window.addEventListener('scroll', handleScroll);
},
    destroyed() {
    // Remove the scroll event listener when the component is destroyed
    window.removeEventListener('scroll', handleScroll);
},
    methods: {
    toggleForm() {
    this.showForm = !this.showForm;
    document.querySelector('.cards').classList.toggle('move-left', this.showForm);
},
    toggleFormVisibility() {
    this.formVisible = !this.formVisible;
},
    guest() {
    window.location.href = "browse.html";
},
    toggleLoginStatus() {
    // Simulate login status toggle (replace with your actual login logic)
    this.userLoggedIn = !this.userLoggedIn;
},
    scrollToSection: scrollToSection, // Assign the function to the method
}
});
