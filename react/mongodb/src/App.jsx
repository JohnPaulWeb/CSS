// todo)) Learn JSX and components
// JSX -> Javascript XML syntax
//* Functional Components -> They are functions which return HTML code
//* return only single parent tag in functional components
//* <></> -> react Fragments
//* inside {} we enter JS code
//* before return statement we can write JS code
// CTRL + / for comments

import PokemonCard from './components/PokemonCard';
import UseState from './hooks/UseState';

function App() {
  // const X = 'Light Yagami';
  // const Y = 'L';
  return (
    <>
      <UseState />
      <hr />
      {/* //todo)) Props -> Data which flows from one component to another */}
      {/*//* It is uni-directional -> data flows in ONE WAY only  */}
      {/* //* They look like HTML attributes but they are not */}
      <PokemonCard
        name={'Torchic'}
        image={
          'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/255.png'
        }
      />
      {/* <h1>Hello I am a component not a function</h1>
      <h2> 1 + 1 </h2>
      <h2> {1 + 1}</h2>
      <h2> {X}</h2>
      <h2> {Y}</h2>
      <h3>Hello I am something</h3> */}
    </>
  );
}

export default App;
