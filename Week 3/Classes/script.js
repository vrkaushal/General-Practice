// function Burger(toppings, protein, containsGluten){
//     this.toppings = toppings;
//     this.protein = protein;
//     this.containsGluten = containsGluten;
//     this.describe = ()=>{
//         console.log('This burger has ' + protein + ' and ' + toppings + ' in it.')
//         if (containsGluten) {
//             console.log('The burger contains gluten')
//         }
//         else {
//             console.log('the burger is gluten free')
//         }
//     };
// }

class Burger{
    constructor(toppings, protein, containsGluten){
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
}

class BurgersWithSide extends Burger{
    constructor(toppings, protein, containsGluten, side){
        super(toppings, protein, containsGluten);
        this.side = side;
        this.friesWithThat = ()=>{
            if (this.side === 'fries'){
                console.log('ye boi')
                return true;
            }
            else {
                console.log('nah boi');
            }
        }
    }
}


var hamburger = new Burger(['tomato', 'lettuce', 'the devil'], 'HAM', true )

var chickenBurger = new Burger(['secret SAWCE'], 'chicken', false)

var BnF = new BurgersWithSide(['SAWCE', ' AND THE DEVIL '], 'BEEF', true, 'salad')

