//HEADER

const toggleButton = document.getElementById('toggleButton');
    const navigationMenu = document.querySelector('.navigation-menu-mobile');

    toggleButton.addEventListener('click', () => {
      
        if (navigationMenu.style.transform === 'translateX(70%)') {
            navigationMenu.style.transform = 'translateX(0%)';
        } else {
            navigationMenu.style.transform = 'translateX(70%)';
        }
    });

    document.querySelector('.circle-btn-graphic').addEventListener('click', function() {
        document.querySelector('.df-title.services-titles').innerText = 'Graphic Designing';
        document.querySelector('.definition.services-info-by-title').innerText = 'Looking to enhance your brand\'s visual identity? I specialize in using Photoshop and animation apps to bring your vision to life. From creating logos to designing digital animations, I\'m passionate about delivering visually stunning solutions that resonate with your audience and help your brand stand out. Let\'s work together to elevate your brand\'s presence in a humble and impactful way.';
    });
    
    document.querySelector('.circle-btn-maxim').addEventListener('click', function() {
        document.querySelector('.df-title.services-titles').innerText = 'Graphic Maxim\nRides and Delivery';
        document.querySelector('.definition.services-info-by-title').innerText = 'Looking to enhance your brand\'s visual identity? I specialize in using Photoshop and animation apps to bring your vision to life. From creating logos to designing digital animations, I\'m passionate about delivering visually stunning solutions that resonate with your audience and help your brand stand out. Let\'s work together to elevate your brand\'s presence in a humble and impactful way.';
    });
    
    document.querySelector('.circle-btn-hardware').addEventListener('click', function() {
        document.querySelector('.df-title.services-titles').innerText = 'Hardware Troubleshooting';
        document.querySelector('.definition.services-info-by-title').innerText = 'Struggling with hardware issues? I specialize in hardware troubleshooting, offering comprehensive services to ensure your hardware runs smoothly. Whether you\'re facing performance issues or need custom solutions, I\'m here to help you harness the power of technology effectively. Let\'s work together to find humble solutions to your hardware challenges.';
    });
    

    //scroll for navigation menus desktop
    document.getElementById('aboutbtnID').addEventListener('click', function() {
        // Scroll to the Body panel
        var viewAboutPart = document.getElementById('aboutID');
        viewAboutPart.scrollIntoView({ behavior: 'smooth' });
    });
    
    document.getElementById('homebtnID').addEventListener('click', function() {
        // Scroll to the Body panel
        var viewAboutPart = document.getElementById('homeID');
        viewAboutPart.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('servicesbtnID').addEventListener('click', function() {
        // Scroll to the Body panel
        var viewAboutPart = document.getElementById('servicesID');
        viewAboutPart.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('contactbtnID').addEventListener('click', function() {
        // Scroll to the Body panel
        var viewAboutPart = document.getElementById('contactID');
        viewAboutPart.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('helpbtnID').addEventListener('click', function() {
        // Scroll to the Body panel
        var viewAboutPart = document.getElementById('helpID');
        viewAboutPart.scrollIntoView({ behavior: 'smooth' });
    });

//scroll for navigation menus mobile
document.querySelector('.about-button').addEventListener('click', function() {
    // Scroll to the Body panel
    var viewAboutPart = document.querySelector('.nav-about');
    viewAboutPart.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.button-home').addEventListener('click', function() {
    // Scroll to the Body panel
    var viewAboutPart = document.querySelector('.nav-home');
    viewAboutPart.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.services-button').addEventListener('click', function() {
    // Scroll to the Body panel
    var viewAboutPart = document.querySelector('.nav-services');
    viewAboutPart.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.contact-button').addEventListener('click', function() {
    // Scroll to the Body panel
    var viewAboutPart = document.querySelector('.nav-contact');
    viewAboutPart.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.help-button').addEventListener('click', function() {
    // Scroll to the Body panel
    var viewAboutPart = document.querySelector('.nav-help');
    viewAboutPart.scrollIntoView({ behavior: 'smooth' });
});
