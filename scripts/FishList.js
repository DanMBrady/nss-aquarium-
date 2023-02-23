// Import the function that returns a copy of the fish array
import { getFish } from './database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList"><div class ="fishHeader"><div class ="fishHeadText">Martins Fish</div></div>'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish card">
            
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="nameF">Name: ${fish.name}</divv>
            <div class="speciesF">Species: ${fish.species}</div>
            <div class="lengthF">Length: ${fish.length}</div>
            <div class="locationF">Location: ${fish.location}</div>
            <div class="dietF">Diet: ${fish.food}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}