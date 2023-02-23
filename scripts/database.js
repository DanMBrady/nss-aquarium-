const database = {

    fish: [
        {
            name: "Sammy",
            image: "data:image/jpeg;base64,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",
            species: "Goldfish",
            length: "One inch",
            location: "Fish Bowl",
            food: "Goldfish flakes"
        },
        {
            name: "Neil",
            image: "https://i.natgeofe.com/n/aa12774c-6281-4f96-988e-b9be88deaf88/hammerhead-sharks.jpg",
            species: " Hammerhead Shark",
            length: "15-18 feet",
            location: "Atlantic Ocean",
            food: "Various fish, squid, lobsters and eels"
        }, {
            name: "Patrick",
            image: "https://fivemedia.com/wp-content/uploads/2021/02/5_seafood-business_01_hero_W2Y5J1_2000.jpg",
            species: "Starfish",
            length: "Four to nine inches",
            location: "rocky shores",
            food: "Clams, mussels and coral"
        }, {
            name: "Sue",
            image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Jelly_cc11.jpg",
            species: "Jellyfish",
            length: "One inch to sixteen inches",
            location: "All over the ocean to the deep sea",
            food: "Fish, shrimp, crabs and plants"
        }, {
            name: "Sarah",
            image: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_18/2842271/190501-green-sea-turtle-mn-1440.jpg",
            species: "Sea Turtle",
            length: "Six to seven feet",
            location: "All around the ocean",
            food: "Crabs, whelks and conchs"
        },



    ]



}



export const getFish = () => {
    return database.fish.map(fish => ({ ...fish }))
}