import Cursor from "cursor";
import Magnetic from "magnetic";

const cursor = new Cursor({
    container: "body",
    speed: 0.7, // animation speed
    ease: "expo.out", // gsap easing
    visibleTimeout: 300
});

const magnetic = new Magnetic(el, {
    y: 0.2, // horizontal delta
    x: 0.2, // vertical delta
    s: 0.2, // speed
    rs: 0.7 // release speed
});

$('[data-magnetic]').each(function () {new Magnetic(this);});