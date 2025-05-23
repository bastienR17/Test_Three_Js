// Sidereal rotation periods of celestial bodies in hours.
// Negative value for Venus indicates retrograde (clockwise) rotation.
const planetRotationData = {
    mercury: 1407.6,
    venus: -5832.5, // Negative value indicates retrograde (clockwise) rotation.
    earth: 23.9,
    mars: 24.6,
    jupiter: 9.9,
    saturn: 10.7,
    sun: 587.28
};

function animate() {
    // Calculate and apply axial rotation for each celestial body
    // Rotation angle is determined by the current time and the body's sidereal rotation period.
    // The angle is in radians and applied to the Y-axis (rotation.y).

    //faire tourner les planètes autour du soleil
    mercury.position.x = 1.5 * Math.cos(Date.now() / 300);
    mercury.position.z = 1.5 * Math.sin(Date.now() / 300);
    let rotationPeriodInMilliseconds = planetRotationData.mercury * 3600 * 1000;
    let rotationAngle = ( (Date.now() / rotationPeriodInMilliseconds) * 2 * Math.PI) % (2 * Math.PI);
    mercury.rotation.y = rotationAngle;

    venus.position.x = 2.5 * Math.cos(Date.now() / 600);
    venus.position.z = 2.5 * Math.sin(Date.now() / 600);
    rotationPeriodInMilliseconds = planetRotationData.venus * 3600 * 1000;
    rotationAngle = ( (Date.now() / rotationPeriodInMilliseconds) * 2 * Math.PI) % (2 * Math.PI);
    venus.rotation.y = rotationAngle;

    earth.position.x = 3.3 * Math.cos(Date.now() / 1500);
    earth.position.z = 3.3 * Math.sin(Date.now() / 1500);
    rotationPeriodInMilliseconds = planetRotationData.earth * 3600 * 1000;
    rotationAngle = ( (Date.now() / rotationPeriodInMilliseconds) * 2 * Math.PI) % (2 * Math.PI);
    earth.rotation.y = rotationAngle;

    mars.position.x = 4 * Math.cos(Date.now() / 4000);
    mars.position.z = 4 * Math.sin(Date.now() / 4000);
    rotationPeriodInMilliseconds = planetRotationData.mars * 3600 * 1000;
    rotationAngle = ( (Date.now() / rotationPeriodInMilliseconds) * 2 * Math.PI) % (2 * Math.PI);
    mars.rotation.y = rotationAngle;

    jupiter.position.x = 5 * Math.cos(Date.now() / 6000);
    jupiter.position.z = 5 * Math.sin(Date.now() / 6000);
    rotationPeriodInMilliseconds = planetRotationData.jupiter * 3600 * 1000;
    rotationAngle = ( (Date.now() / rotationPeriodInMilliseconds) * 2 * Math.PI) % (2 * Math.PI);
    jupiter.rotation.y = rotationAngle;

    saturn.position.x = 7.5 * Math.cos(Date.now() / 10000);
    saturn.position.z = 7.5 * Math.sin(Date.now() / 10000);
    rotationPeriodInMilliseconds = planetRotationData.saturn * 3600 * 1000;
    rotationAngle = ( (Date.now() / rotationPeriodInMilliseconds) * 2 * Math.PI) % (2 * Math.PI);
    saturn.rotation.y = rotationAngle;




    //faire tourner la lune autour de la terre
    moon.position.x = earth.position.x + 0.3 * Math.cos(Date.now() / 1000);
    moon.position.z = earth.position.z + 0.3 * Math.sin(Date.now() / 1000);



    //faire tourner les anneaux autour de saturne
    ring.position.x = saturn.position.x;
    ring.position.z = saturn.position.z;
    ring.rotation.y += 0.01;


    //faire tourner le soleil
    // Apply axial rotation for the Sun
    // Rotation angle is determined by the current time and the Sun's sidereal rotation period.
    // The angle is in radians and applied to the Y-axis (rotation.y).
    // sun.rotation.y += 0.01; // Old rotation
    let sunRotationPeriodInMilliseconds = planetRotationData.sun * 3600 * 1000;
    const sunRotationAngle = ( (Date.now() / sunRotationPeriodInMilliseconds) * 2 * Math.PI) % (2 * Math.PI);
    sun.rotation.y = sunRotationAngle;




    requestAnimationFrame(animate);
    renderer.render(scene, camera );

}


animate()


