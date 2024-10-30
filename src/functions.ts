import { SayHelloProps } from "./types";

export function sayHello({firstName, lastName, age}:SayHelloProps): string {
    return `Hello, ${firstName} ${lastName} your age is ${age}!`;
}