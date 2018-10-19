function Burger(toppings, protein, containsGluten){
    this.toppings = toppings;
    this.protein = protein;
    this.containsGluten = containsGluten;
    this.describe = ()=>{
        console.log('This burger has ' + protein + ' and ' + toppings + ' in it.')
        if (containsGluten) {
            console.log('The burger contains gluten')
        }
        else {
            console.log('the burger is gluten free')
        }
    };
}

var hamburger = new Burger(['tomato', 'lettuce', 'the devil'], 'HAM', true )

var chickenBurger = new Burger(['secret SAWCE'], 'chicken', false)


