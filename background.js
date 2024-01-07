const imgs = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg"]
const todaysImg = imgs[Math.floor(Math.random() * imgs.length)];

document.body.style.backgroundImage = `url(img/${todaysImg})`;