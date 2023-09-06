PokeDex Assignment
Due September 10, 2023 11:59 PM
Instructions
Your coding challenge to test your overall knowledge of HTML, CSS and JavaScript is to create a web page that must meet the following criteria:

Get the first 151 Pokemons from the pokeapi and display at a minimum the following results on the page styled as cards for each individual Pokemon.
Pokemon Number
Pokemon Name
Pokemon Type(s)
Pokemon Image (JSON route: in the individual pokemon result data: sprites -> other -> dream_world -> front_default)
The initial fetch request of the pokemons can be made here: https://pokeapi.co/api/v2/pokemon?limit=151
Each individual pokemons data must then be fetched using the url value in the JSON file for each of these 151 pokemons.

NOTE: You will need to use ASYNC AWAIT on these fetches for it to work correctly.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
https://javascript.info/async-await
https://www.w3schools.com/js/js_async.asp

You can look at JSON results in your browser developer console or online tools like -> https://jsonformatter.org/json-pretty-print

Once the data is found from the api's you must create a single page that will display these 151 pokemon data in cards.

Additionally you must be able to do the following on the page:
Sort the pokemons ascending or descending by ID
Sort the pokemons ascending or descending by Name
Filter the pokemons on ID or Name and only display the pokemons that meet the criteria in the filter input