import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  id: string;
  recipe: any = [
    {
      name: "adobo", 
      description: "A dish and cooking process native to the Philippines, adobo refers to the method of marinating meat, seafood, or vegetables (pretty much anything!) in a combination of soy sauce and vinegar. This marinade also includes other herbs and flavorings like garlic, bay leaves, and whole peppercorns.",
      ingredients: [ 
        { id:1, description: '2 lbs pork belly' },
        { id:2, description: '2 tablespoons garlic minced or crushed' },
        { id:3, description: '5 dried bay leaves' },
        { id:4, description: '4 tablespoons vinegar' },
        { id:5, description: '1/2 cup soy sauce' },
        { id:6, description: '1 tablespoon peppercorn' },
        { id:7, description: '2 cups water' },
        { id:8, description: 'Salt to taste' }  
      ],
      instructions: [ 
        { id:1, description: 'Combine the pork belly, soy sauce, and garlic then marinade for at least 1 hour' },
        { id:2, description: 'Heat the pot and put-in the marinated pork belly then cook for a few minutes' },
        { id:3, description: 'Pour remaining marinade including garlic' },
        { id:4, description: 'Add water, whole pepper corn, and dried bay leaves then bring to a boil. Simmer for 40 minutes to 1 hour' },
        { id:5, description: '1/2 cup soy sauce' },
        { id:6, description: 'Put-in the vinegar and simmer for 12 to 15 minutes' },
        { id:7, description: 'Add salt to taste' },
        { id:8, description: 'Serve hot. Share and enjoy!' }  
      ],
    }, 
    { 
      name: "lumpia", 
      description: "Vegetable dish wrapped with a yellow wrapper. Comes with vinegar sauce",
      ingredients: [ 
        { id:1, description: '1 lb. mung bean sprouts' },
        { id:2, description: '6 ounces fried extra firm tofu' },
        { id:3, description: '2 cups shredded cabbage' },
        { id:4, description: '1 medium yellow onion' },
        { id:5, description: '1 small tomato' },
        { id:6, description: '1 teaspoon minced garlic' },
        { id:7, description: '2 teaspoons coarse sea salt' },
        { id:8, description: '1/4 teaspoon ground black pepper' },  
        { id:9, description: 'Egg roll' },  
        { id:10, description: '1 1/2 cups cooking oil' }  
      ],
      instructions: [ 
        { id:1, description: 'Heat 3 tablespoons of cooking oil. Once the oil gets hot, saute garlic and onion.' },
        { id:2, description: 'When the onion gets soft, add tomato and tofu. Stir fry for 2 minutes.' },
        { id:3, description: 'Put some salt and ground black pepper. Stir.' },
        { id:4, description: 'Add the cabbage and then cook for 3 minutes.' },
        { id:5, description: 'Stir-in the bean sprouts and cook for 5 minutes.' },
        { id:6, description: 'Transfer the cooked vegetable in a plate. Drain the excess liquid.' },
        { id:7, description: 'Once the vegetable cools-off, start to wrap it using the egg roll wrappers. Lay the wrapper flat on a big plate. Place around 2 to 2 1/2 tablespoon of vegetable on one end of the wrapper. Fold the opposite edges of the wrapper and then roll until the vegetables are secured. Seal the end of the wrapper by dipping your finger in water and run it over the end of the wrapper; gently press the wet loose end towards the egg roll.' },
        { id:8, description: 'Heat the remaining cooking oil in a cooking pot. Once the oil gets hot, fry one side of the egg rolls in medium heat until the color of the wrapper turns golden brown. Flip the egg roll to cook the opposite side.' },
        { id:9, description: 'Remove the egg rolls from the cooking pot and arrange in a plate lined with paper towel.' },  
        { id:10, description: 'Serve warm with spiced vinegar.' }   
      ],
    }, 
    {
      name: "tapsilog", 
      description: "Served during breakfast, comes with fried rice and egg.",
      ingredients: [ 
        { id:1, description: '1 lb. beef sirloin' },
        { id:2, description: '3 pieces eggs' },
        { id:3, description: '5 dried bay leaves' },
        { id:4, description: '3 tablespoons Knorr Liquid Seasoning' },
        { id:5, description: '6 cloves crushed garlic' },
        { id:6, description: '¾ cups pineapple juice' },
        { id:7, description: '2 tablespoons brown sugar' },
        { id:8, description: '¼ teaspoon ground white pepper' },
        { id:9, description: '5 cups leftover rice' },
        { id:10, description: '1 teaspoon salt' },
        { id:11, description: '5 cloves garlic' }
      ],
      instructions: [ 
        { id:1, description: 'Prepare the tapa by placing the beef in a large bowl. Combine with all the tapa marinade ingredients. Mix well and cover the bowl. Place inside the fridge and marinate overnight.' },
        { id:2, description: 'Cook the garlic fried rice (sinangag na kanin) by heating 3 tablespoons cooking oil in a pan. Add crushed garlic. Cook until garlic turns light brown. Add the leftover rice. Stir-fry for 3 minutes.' },
        { id:3, description: 'Season with salt. Continue to stir-fry for 3 to 5 minutes. Set aside.' },
        { id:4, description: 'Start to cook the tapa. Heat a pan and pour the marinated beef into it, including the marinade. Add ¾ cups water. Let the mixture boil. Cover the pan and continue to cook until the liquid reduces to half. Add 3 tablespoons cooking oil into the mixture. Continue to cook until the liquid completely evaporates. Fry the beef tapa in remaining oil until medium brown. Set aside.' },
        { id:5, description: 'Fry the egg by pouring 1 tablespoon oil on a pan. Crack a piece of egg and sprinkle enough salt on top. Cook for 30 seconds. Pour 2 tablespoons water on the side of the pan. Cover and let the water boil. Continue to cook until the egg yolks gets completely cooked by the steam.' },
        { id:6, description: 'Arrange the beef tapa, sinangag, and fried egg on a large plate to form Tapsilog. Serve with vinegar as dipping sauce for tapa.' }
      ],
    }
  ];

  name: string;
  description: string;
  ingredients: Array <any>;
  instructions: Array <any>;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);

    if(this.id === '1'){
      this.name = this.recipe[0].name;
      this.description = this.recipe[0].description;
      this.ingredients = this.recipe[0].ingredients;
      this.instructions = this.recipe[0].instructions;
    } else if(this.id === '2'){
      this.name = this.recipe[1].name;
      this.description = this.recipe[1].description;
      this.ingredients = this.recipe[1].ingredients;
      this.instructions = this.recipe[1].instructions;
    } else if(this.id === '3'){
      this.name = this.recipe[2].name;
      this.description = this.recipe[2].description;
      this.ingredients = this.recipe[2].ingredients;
      this.instructions = this.recipe[2].instructions;
    } else {
      this.name = 'Recipe not Found';
      this.description = "Not Found";
      // this.ingredients = "Not Found";
      // this.instructions = "Not Found";
    }
  }

}
