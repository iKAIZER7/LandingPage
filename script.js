
var csr = document.querySelector("#cursor"); 
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(dets) {
    csr.style.left = dets.x + "px";
    csr.style.top = dets.y + "px";
    blur.style.left = dets.x - 150 + "px"; 
    blur.style.top = dets.y - 150 + "px";
});

gsap.to("#nav", {
    backgroundColor: "black",
    duration: 0.5,
    height: "100px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
});

gsap.to("#main", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top 70vh",
        end: "top 65vh",
        scrub: 1
    }
});
