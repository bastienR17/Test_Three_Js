function animate() {
    //faire tourner les planètes autour du soleil
    mercury.position.x = 1.5 * Math.cos(Date.now() / 300);
    mercury.position.z = 1.5 * Math.sin(Date.now() / 300);

    venus.position.x = 2.5 * Math.cos(Date.now() / 600);
    venus.position.z = 2.5 * Math.sin(Date.now() / 600);

    earth.position.x = 3.3 * Math.cos(Date.now() / 1500);
    earth.position.z = 3.3 * Math.sin(Date.now() / 1500);

    mars.position.x = 4 * Math.cos(Date.now() / 4000);
    mars.position.z = 4 * Math.sin(Date.now() / 4000);

    jupiter.position.x = 5 * Math.cos(Date.now() / 6000);
    jupiter.position.z = 5 * Math.sin(Date.now() / 6000);

    saturn.position.x = 7.5 * Math.cos(Date.now() / 10000);
    saturn.position.z = 7.5 * Math.sin(Date.now() / 10000);




    //faire tourner la lune autour de la terre
    moon.position.x = earth.position.x + 0.3 * Math.cos(Date.now() / 1000);
    moon.position.z = earth.position.z + 0.3 * Math.sin(Date.now() / 1000);



    //faire tourner les anneaux autour de saturne
    ring.position.x = saturn.position.x;
    ring.position.z = saturn.position.z;
    ring.rotation.y += 0.01;


    //faire tourner le soleil
    sun.rotation.y += 0.01;




    requestAnimationFrame(animate);
    renderer.render(scene, camera );

}


animate()


