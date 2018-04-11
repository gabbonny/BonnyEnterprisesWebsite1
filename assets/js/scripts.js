//jquery function--tells browser don't do anything in this function until html files are downloading
$(document).ready(function () {
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("image_container");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 3000); // Change image every  seconds
    }


    var testIndex = 0;
    showTestimonials();

    function showTestimonials() {
        var i;
        var testimonials = document.getElementsByClassName("flip-box");

        for (i = 0; i < testimonials.length; i++) {
            testimonials[i].style.display = "none";
        }
        testIndex++;
        if (testIndex > testimonials.length) { testIndex = 1 }
        testimonials[testIndex - 1].style.display = "block";
        setTimeout(showTestimonials, 3000); // Change image every  seconds
    }


    function hover(element) {
        document.getElementById("location").src = "assets/images/location_light.png";
    }

    function unhover(element) {
       // document.getElementById("imageid").src = "../template/save.png";
        //element.setAttribute('src', 'assets/images/under_construction.png');
        document.getElementById("location").src = "assets/images/under_construction.png";

    }

});