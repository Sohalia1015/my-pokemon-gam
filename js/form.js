class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
       this.title1 = createElement('h3')
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.title1.hide()
    }

    display() {
        this.title.html("POKEMON");
        this.title.position(width/2-100, 200);
        this.title.style('font-size', '300px');
        this.title.style('color', 'black');
        this.title1.html("by me anwyays")
        this.title1.position(width/2-100,600)
        this.title1.style('font-size', '150px')
        this.title1.style('color', 'black')
        this.input.position(width/2, height/2);
        this.input.style('width', '800px');
        this.input.style('height', '80px');
        this.input.style('font-size','70px')
        this.input.style('background', 'lavender');
        this.button.position(width/2+100,height/2+200);
        this.button.style('width', '400px');
        this.button.style('height', '80px');
        this.button.style('font-size', '60px')
        this.button.style('background', 'lightpink');
        this.reset.position(775, 50);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(800,300);
            this.greeting.style('color', 'black');
            this.greeting.style('font-size', '50px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);



            var playerInfoRef = database.ref('players');
            playerInfoRef.remove();

            
        });

    }
}