const { Category, Supplier, Product } = require('./server/db/index');

const categories = [
  { name: 'Barleywine' },
  { name: 'Brown Ale' },
  { name: 'Gose' },
  { name: 'Saison' },
  { name: 'IPA' },
  { name: 'Lager' },
  { name: 'Pale Ale' },
  { name: 'Pilsner' },
  { name: 'Porter' },
  { name: 'Sour' },
  { name: 'Stout' },
];

const suppliers = [
  { name: 'Hill Farmstead' },
  { name: 'Hudson Valley Brewery' },
  { name: 'Other Half Brewing Co.' },
  { name: 'Bissell Brothers Brewing Company' },
  { name: 'The Alchemist' },
  { name: 'Westbrook Brewing Co.' },
  { name: 'Revolution Brewing Company' },
  { name: 'Crooked Stave Artisan Beer Project' },
  { name: 'Kings County Brewers Collective' },
  { name: 'Avery Brewing Co.' },
];

const products = [
  {
    name: 'Edward',
    description: `Edward (1917-2002) is our grandfather, Hill Farmstead Brewery rests upon the land that was once home to him and his five children. In his honor, this American Pale Ale is dutifully crafted from American malted barley, a plethora of American hops, our ale yeast and water from Edward’s well. It is unfiltered and dry hopped. Aromatic and flowery, with impressions of citrus and pine, this is the ale that I dream to have shared with Edward. Pale and Caramel malt, Centennial, Chinook, Columbus, Simcoe, and Warrior hops, House Ale Yeast, and our Well Water.`,
    imageUrl: '/images/hill_farmstead_edward.jpg',
    price: 8.0,
  },
  {
    name: 'Susan',
    description: `Susan was our grandfather's sister - in her honor we offer this version of an American IPA.`,
    imageUrl: '/images/hill_farmstead_susan.jpg',
    price: 9.0,
  },
  {
    name: 'Incandenza',
    description: `Sour IPA brewed w/ two row barley and raw white wheat, hopped with Citra and Simcoe in the whirlpool.`,
    imageUrl: '/images/hudson_valley_incandenza.jpg',
    price: 7.0,
  },
  {
    name: 'Mirrorshield',
    description: `Sour IPA with raw wheat, malted oat, milk sugar, Lychee, chamomile & lavender — hopped with Mosaic.`,
    imageUrl: '/images/hudson_valley_mirrorshield.jpg',
    price: 8.0,
  },
  {
    name: 'All Green Everything',
    description: `A huge, but dry, triple IPA packed with Motueka, Amarillo, Citra and Mosaic.`,
    imageUrl: '/images/other_half_all_green_everything.jpg',
    price: 9.0,
  },
  {
    name: 'Double Mosaic Dream',
    description: `Single hop Double IPA. All mosaic all the time.`,
    imageUrl: '/images/other_half_double_mosaic_dream.jpg',
    price: 8.0,
  },
  {
    name: 'The Substance',
    description: `Our flagship, a brightly dank ale that threads many needles.`,
    imageUrl: '/images/bissell_the_substance.jpg',
    price: 8.0,
  },
  {
    name: 'Reciprocal',
    description: `Our Australian IPA hopped with all Australian grown hops--Vic Secret, Ella, and Summer.`,
    imageUrl: '/images/bissell_reciprocal.jpg',
    price: 7.0,
  },
  {
    name: 'Heady Topper',
    description: `We love hops – that’s why our flagship Double IPA, Heady Topper, is packed full of them. Heady Topper was designed to showcase the complex flavors and aromas these flowers produce. The Alchemist has been brewing Heady Topper since 2003. This Double IPA is not intended to be the strongest or most bitter DIPA. It is brewed to give you wave after wave of hop flavor without any astringent bitterness. We brew Heady Topper with a proprietary blend of six hops – each imparting its own unique flavor and aroma. Take a big sip of Heady and see what hop flavors you can pick out. Orange? Tropical Fruit? Pink Grapefruit? Pine? Spice? There is just enough malt to give this beer some backbone, but not enough to take the hops away from the center stage.`,
    imageUrl: '/images/alchemist_heady_topper.jpg',
    price: 10.0,
  },
  {
    name: 'Focal Banger',
    description: `American IPA with Citra & Mosaic hops.`,
    imageUrl: '/images/alchemist_focal_banger.jpg',
    price: 9.0,
  },
  {
    name: 'Gose',
    description: `Our interpretation of the traditional German-style sour wheat beer, brewed with coriander and grey sea salt. Sour, salty, delicious.`,
    imageUrl: '/images/westbrook_gose.jpg',
    price: 6.0,
  },
  {
    name: 'Mexican Cake',
    description: `Imperial stout w/ cocoa nibs, vanilla beans, cinnamon, and habanero peppers.`,
    imageUrl: '/images/westbrook_mexican_cake.jpg',
    price: 11.0,
  },
  {
    name: 'Anti-Hero',
    description: `Our flagship IPA is supremely aromatic, crisp, and drinkable. This iconic ale features a blend of Warrior, Chinook, Centennial, and Amarillo to create a crisp clean bitterness and imparts massive floral and citrus aromas.`,
    imageUrl: '/images/revolution_anti_hero.jpg',
    price: 7.0,
  },
  {
    name: 'Eugene',
    description: `A striking, robust porter full of warmth and chocolate malt and is named after Eugene V. Debs, an American union leader and activist who led the Pullman railroad strike in 1894. An assortment of Belgian specialty malts form a complex structure of toasted grain and caramel flavors and Dark Chocolate malt makes this porter black as night and infuses its distinct intense, chocolate essence.`,
    imageUrl: '/images/revolution_eugene.jpg',
    price: 8.0,
  },
  {
    name: 'Surette Provision Saison',
    description: `In a particular region of southern Belgium, the reserve or provision saison was called surette, meaning tart. Using time-honored techniques, our saisons employ old-world methods to restore complexity and the classical rustic character lost in modern day saison. Brewed with local Colorado floor malted barley, traditional harvest grains, and noble hops, Surette embodies old-world saison brewing traditions. Each batch of Surette is an expression of the large oak foeders it matures in while taking on an aged vinous quality and a complex tartness. Showcasing citrusy ripe fruits, a light zesty spice, and earthy undertones, Surette’s character exemplifies our mixed culture of Brettanomyces and souring bacteria.`,
    imageUrl: '/images/crooked_stave_surette.jpg',
    price: 9.0,
  },
  {
    name: 'Coffee Baltic Porter',
    description: `Coffee Baltic Porter focuses on the art of coffee roasting, showcasing the uniqueness of this single ingredient. Through conditioning of of our Baltic porter with freshly roasted beans, we strive for a balanced coffee character, adding dark sugar, plum, and cocoa notes to the already robust porter base.`,
    imageUrl: '/images/crooked_stave_coffee_baltic_porter.jpg',
    price: 13.0,
  },
  {
    name: 'Janiak Maniac',
    description: `100% Bohemian Pilsner malt and new world hops. Unfiltered and unfazed.`,
    imageUrl: '/images/kcbc_janiak_maniac.jpg',
    price: 6.0,
  },
  {
    name: 'Superhero Sidekicks',
    description: `Bitten by the Hoptopus, our KCBC IPA is reborn! Ripe oranges, fresh pineapple and smooth pine. Mosaic, Idaho 7, Cascade & Centennial hops combine to deliver a powerful lupulin punch, backed by a balanced malt base. Soft haze that leans Northeast-ward, with a crisp, moderately-bitter finish for maximum drinkability.`,
    imageUrl: '/images/kcbc_superhero_sidekicks.jpg',
    price: 7.0,
  },
  {
    name: 'Straight Jacket',
    description: `Our Barleywine Ale features American and Belgian malts which provide the base of this extraordinary ale. After 12 months in bourbon barrels the award-winning Straight Jacket emerges with notes of stone fruit, toasted coconut, molasses, and vanilla coming in waves as you swirl the glass.`,
    imageUrl: '/images/revolution_straight_jacket.jpg',
    price: 10.0,
  },
  {
    name: `Ellie's Brown Ale`,
    description: `This beautiful, deep russet brew has the sweet and somewhat nutty character of Adam Avery's late (1992-2002) Chocolate Lab, for which it is named.`,
    imageUrl: '/images/avery_ellies.jpg',
    price: 5.0,
  },
];

const seed = () => {
  return Promise.all(categories.map(category => Category.create(category)))
    .then(categoryArr => {
      return Promise.all(suppliers.map(supplier => Supplier.create(supplier))).then(supplyArr => {
        return Promise.all(products.map(prod => Product.create(prod))).then(productArr => {
          // creating maps for prod, supplier, cat with names as keys
          const prodMap = productArr.reduce((agg, curr) => {
            agg[curr.get().name] = curr;
            return agg;
          }, {});
          const suppMap = supplyArr.reduce((agg, curr) => {
            agg[curr.get().name] = curr;
            return agg;
          }, {});
          const catMap = categoryArr.reduce((agg, curr) => {
            agg[curr.get().name] = curr;
            return agg;
          }, {});

          const associationArr = [
            //setting categories
            prodMap['Edward'].setCategory(catMap['Pale Ale']),
            prodMap['Susan'].setCategory(catMap['IPA']),
            prodMap['Incandenza'].setCategory(catMap['Sour']),
            prodMap['Mirrorshield'].setCategory(catMap['Sour']),
            prodMap['All Green Everything'].setCategory(catMap['IPA']),
            prodMap['Double Mosaic Dream'].setCategory(catMap['IPA']),
            prodMap['The Substance'].setCategory(catMap['Pale Ale']),
            prodMap['Reciprocal'].setCategory(catMap['IPA']),
            prodMap['Heady Topper'].setCategory(catMap['IPA']),
            prodMap['Focal Banger'].setCategory(catMap['IPA']),
            prodMap['Gose'].setCategory(catMap['Gose']),
            prodMap['Mexican Cake'].setCategory(catMap['Stout']),
            prodMap['Anti-Hero'].setCategory(catMap['IPA']),
            prodMap['Eugene'].setCategory(catMap['Porter']),
            prodMap['Surette Provision Saison'].setCategory(catMap['Saison']),
            prodMap['Coffee Baltic Porter'].setCategory(catMap['Porter']),
            prodMap['Janiak Maniac'].setCategory(catMap['Pilsner']),
            prodMap['Superhero Sidekicks'].setCategory(catMap['IPA']),
            prodMap['Straight Jacket'].setCategory(catMap['Barleywine']),
            prodMap["Ellie's Brown Ale"].setCategory(catMap['Brown Ale']),

            // setting suppliers
            prodMap['Edward'].setSupplier(suppMap['Hill Farmstead']),
            prodMap['Susan'].setSupplier(suppMap['Hill Farmstead']),
            prodMap['Incandenza'].setSupplier(suppMap['Hudson Valley Brewery']),
            prodMap['Mirrorshield'].setSupplier(suppMap['Hudson Valley Brewery']),
            prodMap['All Green Everything'].setSupplier(suppMap['Other Half Brewing Co.']),
            prodMap['Double Mosaic Dream'].setSupplier(suppMap['Other Half Brewing Co.']),
            prodMap['The Substance'].setSupplier(suppMap['Bissell Brothers Brewing Company']),
            prodMap['Reciprocal'].setSupplier(suppMap['Bissell Brothers Brewing Company']),
            prodMap['Heady Topper'].setSupplier(suppMap['The Alchemist']),
            prodMap['Focal Banger'].setSupplier(suppMap['The Alchemist']),
            prodMap['Gose'].setSupplier(suppMap['Westbrook Brewing Co.']),
            prodMap['Mexican Cake'].setSupplier(suppMap['Westbrook Brewing Co.']),
            prodMap['Anti-Hero'].setSupplier(suppMap['Revolution Brewing Company']),
            prodMap['Eugene'].setSupplier(suppMap['Revolution Brewing Company']),
            prodMap['Surette Provision Saison'].setSupplier(suppMap['Crooked Stave Artisan Beer Project']),
            prodMap['Coffee Baltic Porter'].setSupplier(suppMap['Crooked Stave Artisan Beer Project']),
            prodMap['Janiak Maniac'].setSupplier(suppMap['Kings County Brewers Collective']),
            prodMap['Superhero Sidekicks'].setSupplier(suppMap['Kings County Brewers Collective']),
            prodMap['Straight Jacket'].setSupplier(suppMap['Revolution Brewing Company']),
            prodMap["Ellie's Brown Ale"].setSupplier(suppMap['Kings County Brewers Collective']),
          ];
          return Promise.all(associationArr).then(associationArr => associationArr);
        });
      });
    })
    .catch(e => {
      console.error(e);
    });
};

module.exports = {
  seed,
};
