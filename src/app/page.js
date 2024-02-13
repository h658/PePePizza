
import Header from "./components/Layout/Header";
import Hero from "./components/Layout/Hero";
import Menu from "./components/Layout/Menu";
import SectionHeaders from "./components/Layout/SectionHeaders";


export default function Home() {
  return (
    <>

      <Hero />
      <Menu />

      <section className="my-4" id='about'>
        <SectionHeaders subHeader={'Our story'} mainHeader={'About Us'} />
        <div className="mx-auto text-gray-500 text-sm flex flex-col gap-5 text-center max-w-2xl">
          <p>At PePe Pizza , we're passionate about crafting the perfect slice. With a rich heritage in traditional recipes and a commitment to using only the finest ingredients, our pizzeria is a haven for pizza enthusiasts. From hand-tossed dough to savory toppings, each pizza is a labor of love.</p>
          <p> Join us on a flavorful journey where quality meets taste, and every bite tells our story of dedication to authentic, mouthwatering pizzas. Whether you're a fan of classic Margherita or daring specialty creations, our mission is to bring joy to your taste buds. </p>
        </div>
      </section>

      <section className="text-xl text-center my-9 " id='contact'>
        <SectionHeaders subHeader={'Don\'t hesitate to'} mainHeader={'Contact Us'} />
        <div className="mt-7 text-2xl font-semibold underline text-gray-700">
          <a href="tel:+9779834556322">+977 9834556322</a>
        </div>

      </section>

  
    </>
  );
}
