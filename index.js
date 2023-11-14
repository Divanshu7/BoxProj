var rect = document.querySelector("#box");

rect.addEventListener("mousemove", function (detail) {
    var locationn = rect.getBoundingClientRect();
    var inside = detail.clientX - locationn.left;
    console.log(inside);

    if (inside < locationn.width / 2) {
        // For the left half, calculate red color
        var redCol = gsap.utils.mapRange(0, locationn.width / 2, 255, 0, inside);
        gsap.to(rect, {
            backgroundColor: `rgb(${redCol}, 0, 0)`,
            ease: "power4.out",
        });
    } else {
        // For the right half, calculate blue color
        var blueCol = gsap.utils.mapRange(locationn.width / 2, locationn.width, 0, 255, inside);
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${blueCol})`,
            ease: "power4.out",
        });
    }
});

rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor:"white",
    })
})