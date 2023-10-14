// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”


const transportation=["motorcycle", "car", "bicycle"];

for (let i=0; i<3;i++){
    console.log("I would like to own a " + transportation[i] + ".");
    
}
// in am other way:


const vehicles=["motorcycle", "car", "bicycle"];


for(const viccle of vehicles ){
    console.log("I would like to own a " + viccle + ".");
    
}