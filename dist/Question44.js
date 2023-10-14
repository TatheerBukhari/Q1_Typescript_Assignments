"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function order_sandwich(...items) {
    console.log("Sandwich order:");
    for (const item of items) {
        console.log(`- ${item}`);
    }
}
order_sandwich("Bread", "Cheese", "Tomato");
order_sandwich("Ham", "Lettuce");
order_sandwich("Peanut Butter", "Jelly", "Bread");
