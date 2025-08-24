import { pluck } from "@ma7moudattia/pluck";
import { log } from "@ma7moudattia/pluck/log";

const users = [
    {
        name: "mahmoud",
        age: 24
    },
    {
        name: "mostafa",
        age: 48
    },
    {
        name: "mahmoud",
        age: 81
    }
];

console.log(log(pluck(users, "name")))