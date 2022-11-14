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
      recipeList: "Start by marinating the chicken in soy sauce and garlic. The garlic needs to be crushed for best results. This process takes 1 hour to 12 hours depending on how flavorful you want the dish to be. Sometimes marinating for an hour is not enough. I think that 3 hours is optimal. The chicken absorbs most of the flavors from the soy sauce and garlic during this step. It is noticeable when you taste the dish after cooking. Note that it is also possible to include the vinegar in this step."
    }, 
    { 
      name: "lumpia", 
      description: "Vegetable dish wrapped with a yellow wrapper. Comes with vinegar sauce",
      recipeList: "The process of cooking the vegetables is straightforward. When it comes to the type of wrapper, I will leave that to your preference. In my opinion, thinner wrapper works best for this recipe. I use  TYJ brand most of the time, but the regular wrapper that are usually available in the Philippines work best for this particular dish. The brand that I used for this recipe is Simex."
    }, 
    {
      name: "tapsilog", 
      description: "Served during breakfast, comes with fried rice and egg.",
      recipeList: "The beef needs to be marinated in a mixture of crushed garlic, pineapple juice, Knorr Liquid Seasoning, sugar, and pepper. The marinade provides flavor to the meat when absorbed completely. It is best to marinate overnight or longer for best results."
    }
  ];
  name: string;
  description: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);

    if(this.id === '1'){
      this.name = this.recipe[0].name;
      this.description = this.recipe[0].description;
    } else if(this.id === '2'){
      this.name = this.recipe[1].name;
      this.description = this.recipe[1].description;
    } else if(this.id === '3'){
      this.name = this.recipe[2].name;
      this.description = this.recipe[2].description;
    } else {
      this.name = 'Recipe not Found';
    }
  }

}
