import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";
// import SectionHeaders from "./components/Layout/SectionHeaders";

export default function Menu() {
    return (
        <>
            <div id='menu'>
                <div className="relative">
                    <div className="absolute -left-4 -top-60 -z-10">
                        <img src="sallad1.png" alt="leaves" className="w-52 h-80" />
                    </div>
                    <div className="absolute -right-4 -top-32 -z-10">
                        <img src="sallad2.png" alt="leaves" className="w-40 h-64" />
                    </div>
                </div>

                <SectionHeaders
                    subHeader={'CHECK OUT'}
                    mainHeader={'Menu'}
                />


                <div className="grid grid-cols-3 gap-4">
                    <MenuItem pizImg={'pepe.png'} pizName={'Pepperoni Pizza'} pizInfo={'classic fav topped with zesty tomato sauce, melted mozzarella cheese, and slices of spicy pepperoni, all baked to perfection on a cripsy crust.'} pizPrice={'Add to cart Rs.499'} />

                    <MenuItem pizImg={'meat.png'} pizName={'Meat Pizza'}
                        pizInfo={'A delicious combination of savory meats atop a crispy crust, topped with gooey cheese and zesty tomato sauce—a carnivore\'s dream!'} pizPrice={'Add to cart Rs.399'} />

                    <MenuItem pizImg={'mush.png'} pizName={'Mushroom Pizza'}
                        pizInfo={'A delectable medley of earthy mushrooms nestled on a golden crust, blanketed with melted cheese and savory tomato sauce—a vegetarian delight!'} pizPrice={'Add to cart Rs.599'} />

                    <MenuItem pizImg={'meat.png'} pizName={'BBQ Chicken Pizza'} pizInfo={'Tangy barbecue sauce, grilled chicken, onions, and sometimes bell peppers or cilantro.'} pizPrice={'Add to cart Rs.599'} />

                    <MenuItem pizImg={'mush.png'} pizName={'Hawaiian Pizza'}
                        pizInfo={'A sweet and savory mix of ham, pineapple, and cheese.Pizza straight out of Hawaiin dream holiday.'} pizPrice={'Add to cart Rs.299'} />

                    <MenuItem pizImg={'pepe.png'} pizName={'Pesto Chicken Pizza'} pizInfo={'Pesto sauce, grilled chicken, sun-dried tomatoes, and sometimes artichoke hearts or pine nuts for added flavor.'} pizPrice={'Add to cart Rs.699'} />
                </div>

            </div>
        </>
    );
}