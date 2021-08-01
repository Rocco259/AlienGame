var alien1Img, alien2Img, alien3Img, alien4Img, alien5Img, alien6Img, alien7Img, alien8Img, alien9Img, alien10Img, alien11Img, alien12Img, alien13Img, alien14Img, alien15Img;
var alien16Img, alien17Img, alien18Img, alien19Img;
var alien1, alien2, alien3, alien4, alien5, alien6, alien7, alien8, alien9, alien10, alien11, alien12, alien13, alien14, alien15, alien16, alien17, alien18, alien19, alienG;
var spaceShooter, spaceShooterImg;
var bullet, bulletImg, bulletG;
var explosion, explosionImg;
var shootSound;

function preload(){
alien1Img = loadImage("Green Alien.png");
alien2Img = loadImage("Green Alien.png");
alien3Img = loadImage("Green Alien.png");
alien4Img = loadImage("Green Alien.png");
alien5Img = loadImage("Green Alien.png");
alien6Img = loadImage("Green Alien.png");
alien7Img = loadImage("Green Alien.png");
alien8Img = loadImage("Green Alien.png");
alien9Img = loadImage("Green Alien.png");
alien10Img = loadImage("Green Alien.png");
alien11Img = loadImage("Green Alien.png");
alien12Img = loadImage("Green Alien.png");
alien13Img = loadImage("Green Alien.png");
alien14Img = loadImage("Green Alien.png");
alien15Img = loadImage("Green Alien.png");
alien16Img = loadImage("Green Alien.png");
alien17Img = loadImage("Green Alien.png");
alien18Img = loadImage("Green Alien.png");
alien19Img = loadImage("Green Alien.png");
alien20Img = loadImage("Green Alien.png");

shootSound = loadSound("blaster.wav");

spaceShooterImg = loadImage("SpaceShooter.png");

bulletImg = loadImage("Bullet.png");

explosion = loadImage("boom.png");

}

function setup() {
	var canvas = createCanvas(600,600);
	
	bulletG = new Group();
	alienG = new Group();

	spaceShooter = createSprite(300,550);
	spaceShooter.addImage(spaceShooterImg);
	spaceShooter.scale = 0.15;
	//Row 1
	//Alien1
	alien1 = createSprite(50,50, 1, 1);
	alien1.addImage(alien1Img);
	alien1.scale = 0.05;
	alien1.velocityY = 0.35;
	alienG.add(alien1);
	
	//Alien2
	alien2 = createSprite(100,50, 1, 1);
	alien2.addImage(alien2Img);
	alien2.scale = 0.05;
	alien2.velocityY = 0.35;
	alienG.add(alien2)
	
	//Alien3
	alien3 = createSprite(150,50, 1, 1);
	alien3.addImage(alien3Img);
	alien3.scale = 0.05;
	alien3.velocityY = 0.35;
	alienG.add(alien3);

	//Alien4
	alien4 = createSprite(200,50, 1, 1);
	alien4.addImage(alien4Img);
	alien4.scale = 0.05;
	alien4.velocityY = 0.35;
	alienG.add(alien4);

	//Alien5
	alien5 = createSprite(250,50, 1, 1);
	alien5.addImage(alien5Img);
	alien5.scale = 0.05;
	alien5.velocityY = 0.35;
	alienG.add(alien5);

	//Alien6
	alien6 = createSprite(300,50, 1, 1);
	alien6.addImage(alien6Img);
	alien6.scale = 0.05;
	alien6.velocityY = 0.35;
	alienG.add(alien6);
	
	//Alien 7
	alien7 = createSprite(350,50, 1, 1);
	alien7.addImage(alien7Img);
	alien7.scale = 0.05;
	alien7.velocityY = 0.35;
	alienG.add(alien7);

	//Alien 8
	alien8 = createSprite(400,50, 1, 1);
	alien8.addImage(alien8Img);
	alien8.scale = 0.05;
	alien8.velocityY = 0.35;
	alienG.add(alien8);
	
	//Alien 9
	alien9 = createSprite(450,50, 1, 1);
	alien9.addImage(alien9Img);
	alien9.scale = 0.05;
	alien9.velocityY = 0.35;
	alienG.add(alien9);
	
	//Alien 10
	alien10 = createSprite(500,50, 1, 1);
	alien10.addImage(alien10Img);
	alien10.scale = 0.05;
	alien10.velocityY = 0.35;
	alienG.add(alien10);

	//Second Row
	//Alien11
	alien11 = createSprite(75, 100, 1, 1);
	alien11.addImage(alien11Img);
	alien11.scale = 0.05;
	alien11.velocityY = 0.35;
	alienG.add(alien11);

	//Alien12
	alien12 = createSprite(125, 100, 1,1);
	alien12.addImage(alien12Img);
	alien12.scale = 0.05;
	alien12.velocityY = 0.35;
	alienG.add(alien12);

	//Alien13
	alien13 = createSprite(175, 100, 1,1);
	alien13.addImage(alien13Img);
	alien13.scale = 0.05;
	alien13.velocityY = 0.35;
	alienG.add(alien13);

	//Alien 14
	alien14 = createSprite(225, 100, 1, 1);
	alien14.addImage(alien14Img);
	alien14.scale = 0.05;
	alien14.velocityY = 0.35;
	alienG.add(alien14);

	//Alien 15
	alien15 = createSprite(275, 100, 1,1);
	alien15.addImage(alien15Img);
	alien15.scale = 0.05;
	alien15.velocityY = 0.35;
	alienG.add(alien15);

	//Alien16
	alien16 = createSprite(325, 100, 1, 1);
	alien16.addImage(alien16Img);
	alien16.scale = 0.05;
	alien16.velocityY = 0.35;
	alienG.add(alien16);

	//Alien17
	alien17 = createSprite(375, 100, 1,1);
	alien17.addImage(alien17Img);
	alien17.scale = 0.05;
	alien17.velocityY = 0.35;
	alienG.add(alien17);

	//Alien 18
	alien18 = createSprite(425, 100, 1,1);
	alien18.addImage(alien18Img);
	alien18.scale = 0.05;
	alien18.velocityY = 0.35;
	alienG.add(alien18);

	//Alien 19
	alien19 = createSprite(475, 100, 1,1);
	alien19.addImage(alien19Img);
	alien19.scale = 0.05;
	alien19.velocityY = 0.35;
	alienG.add(alien19);

}
function draw() {
	movingSpaceShip();
		shoot();
		boom();
		speedIncrease();
	background(0);
	drawSprites();
}

function movingSpaceShip(){
	if(keyDown(RIGHT_ARROW)){
		spaceShooter.x = spaceShooter.x + 5;
	}

	if(keyDown(LEFT_ARROW)){
		spaceShooter.x = spaceShooter.x - 5;
	}
}

function shoot(){
	if(keyDown("space")){
		bullet = createSprite(spaceShooter.x, 500);
		bullet.addImage(bulletImg);
		bullet.scale = 0.1;
		bullet.velocityY = -10;
		bulletG.add(bullet);
		shootSound.play();
	}
}

function boom(){
	if(bulletG.isTouching(alien1)){
		
		alien1.addImage(explosion);
		alien1.lifetime = 15;
		bulletG.destroyEach();
	}
	if(bulletG.isTouching(alien2)){
		alien2.addImage(explosion);
		alien2.lifetime = 15;
		bulletG.destroyEach();
	}
	if(bulletG.isTouching(alien3)){
		alien3.addImage(explosion);
		alien3.lifetime = 15;
		bulletG.destroyEach();
	}
	if(bulletG.isTouching(alien4)){
		alien4.addImage(explosion);
		alien4.lifetime = 15;
		bulletG.destroyEach();
	}

	if(bulletG.isTouching(alien5)){
		alien5.addImage(explosion);
		alien5.lifetime = 15;
		bulletG.destroyEach();
	}
	if(bulletG.isTouching(alien6)){
		alien6.addImage(explosion);
		alien6.lifetime = 15;
		bulletG.destroyEach();
	}
	if(bulletG.isTouching(alien7)){
		alien7.addImage(explosion);
		alien7.lifetime = 15;
		bulletG.destroyEach();
	}
	if(bulletG.isTouching(alien8)){
		alien8.addImage(explosion);
		alien8.lifetime = 15;
		bulletG.destroyEach();
	}
	if(bulletG.isTouching(alien9)){
		alien9.addImage(explosion);
		alien9.lifetime = 15;
		bulletG.destroyEach();
	}
	if(bulletG.isTouching(alien10)){
		alien10.addImage(explosion);
		alien10.lifetime = 15;
		bulletG.destroyEach();
	}
	if(bulletG.isTouching(alien11)){
		alien11.addImage(explosion);
		alien11.lifetime = 15;
		bulletG.destroyEach();
	}
	if(bulletG. isTouching(alien12)){
		alien12.addImage(explosion);
		alien12.lifetime = 15;
		bulletG.destroyEach();
	}
	if(bulletG.isTouching(alien13)){
		alien13.addImage(explosion);
		alien13.lifetime = 15;
		bulletG.destroyEach();
	}
	if(bulletG.isTouching(alien14)){
		alien14.addImage(explosion);
		alien14.lifetime = 15;
		bulletG.destroyEach();
	}
	if(bulletG.isTouching(alien15)){
		alien15.addImage(explosion);
		alien15.lifetime = 15;
		bulletG.destroyEach();
	}
	if(bulletG.isTouching(alien16)){
		alien16.addImage(explosion);
		alien16.lifetime = 15;
		bulletG.destroyEach();
	}
	if(bulletG.isTouching(alien17)){
		alien17.addImage(explosion);
		alien17.lifetime = 15;
		bulletG.destroyEach();
	}
	if(bulletG.isTouching(alien18)){
		alien18.addImage(explosion);
		alien18.lifetime = 15;
		bulletG.destroyEach();
	}
	if(bulletG.isTouching(alien19)){
		alien19.addImage(explosion);
		alien19.lifetime = 15;
		bulletG.destroyEach();
	}
}

function speedIncrease(){
	if(alien1.y > 100){
		alien1.velocityY = 0.55;
	}
	if(alien1.y > 200){
		alien1.velocityY = 0.75;
	}
	if(alien1.y > 300){
		alien1.velocityY = 0.95;
	}
	if(alien2.y > 100){
		alien2.velocityY = 0.55;
	}
	if(alien2.y > 200){
		alien2.velocityY = 0.75;
	}
	if(alien2.y > 300){
		alien2.velocityY = 0.95;
	}
	if(alien3.y > 100){
		alien3.velocityY = 0.55;
	}
	if(alien3.y > 200){
		alien3.velocityY = 0.75;
	}
	if(alien3.y > 300){
		alien3.velocityY = 0.95;
	}
	if(alien4.y > 100){
		alien4.velocityY = 0.55;
	}
	if(alien4.y > 200){
		alien4.velocityY = 0.75;
	}
	if(alien4.y > 300){
		alien4.velocityY = 0.95;
	}
	if(alien5.y > 100){
		alien5.velocityY = 0.55;
	}
	if(alien5.y > 200){
		alien5.velocityY = 0.75;
	}
	if(alien5.y > 300){
		alien5.velocityY = 0.95;
	}
	if(alien6.y > 100){
		alien6.velocityY = 0.55;
	}
	if(alien6.y > 200){
		alien6.velocityY = 0.75;
	}
	if(alien6.y > 300){
		alien6.velocityY = 0.95;
	}
	if(alien7.y > 100){
		alien7.velocityY = 0.55;
	}
	if(alien7.y > 200){
		alien7.velocityY = 0.75;
	}
	if(alien7.y > 300){
		alien7.velocityY = 0.95;
	}
	if(alien8.y > 100){
		alien8.velocityY = 0.55;
	}
	if(alien8.y > 200){
		alien8.velocityY = 0.75;
	}
	if(alien8.y > 300){
		alien8.velocityY = 0.95;
	}
	if(alien9.y > 100){
		alien9.velocityY = 0.55;
	}
	if(alien9.y > 200){
		alien9.velocityY = 0.75;
	}
	if(alien9.y > 300){
		alien9.velocityY = 0.95;
	}
	if(alien10.y > 100){
		alien10.velocityY = 0.55;
	}
	if(alien10.y > 200){
		alien10.velocityY = 0.75;
	}
	if(alien10.y > 300){
		alien10.velocityY = 0.95;
	}
	if(alien11.y > 100){
		alien11.velocityY = 0.55;
	}
	if(alien11.y > 200){
		alien11.velocityY = 0.75;
	}
	if(alien11.y > 300){
		alien11.velocityY = 0.95;
	}
	if(alien12.y > 100){
		alien12.velocityY = 0.55;
	}
	if(alien12.y > 200){
		alien12.velocityY = 0.75;
	}
	if(alien12.y > 300){
		alien12.velocityY = 0.95;
	}
	if(alien13.y > 100){
		alien13.velocityY = 0.55;
	}
	if(alien13.y > 200){
		alien13.velocityY = 0.75;
	}
	if(alien13.y > 300){
		alien13.velocityY = 0.95;
	}
	if(alien14.y > 100){
		alien14.velocityY = 0.55;
	}
	if(alien14.y > 200){
		alien14.velocityY = 0.75;
	}
	if(alien14.y > 300){
		alien14.velocityY = 0.95;
	}
	if(alien15.y > 100){
		alien15.velocityY = 0.55;
	}
	if(alien15.y > 200){
		alien15.velocityY = 0.75;
	}
	if(alien15.y > 300){
		alien15.velocityY = 0.95;
	}
	if(alien16.y > 100){
		alien16.velocityY = 0.55;
	}
	if(alien16.y > 200){
		alien16.velocityY = 0.75;
	}
	if(alien16.y > 300){
		alien16.velocityY = 0.95;
	}
	if(alien17.y > 100){
		alien17.velocityY = 0.55;
	}
	if(alien17.y > 200){
		alien17.velocityY = 0.75;
	}
	if(alien17.y > 300){
		alien17.velocityY = 0.95;
	}
	if(alien18.y > 100){
		alien18.velocityY = 0.55;
	}
	if(alien18.y > 200){
		alien18.velocityY = 0.75;
	}
	if(alien18.y > 300){
		alien18.velocityY = 0.95;
	}
	if(alien19.y > 100){
		alien19.velocityY = 0.55;
	}
	if(alien19.y > 200){
		alien19.velocityY = 0.75;
	}
	if(alien19.y > 300){
		alien19.velocityY = 0.95;
	}
}