// TypeScript Basics Practice

// 1. Primitive Types
let userName: string = "Nayeem";
let age: number = 22;
let isActive: boolean = true;
let userScore: number | null = null;

// 2. Object Types
let user: {name: string; age: number} = {
    name: "Nayeem",
    age: 22
};

// 2. Array Types
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Nayeem", "Nuzmul"];

// 4. Enums
enum UserRole {
    Admin,
    Editor,
    Viewer
}

let roles: UserRole.Admin;

// 5. Union Types
let id: number | string | boolean;
id = 101;
id = "abc-101";

// 6. Interface
interface Product {
    id: number;
    name: string;
    price: number;
    isAvalable?: boolean;
};

const newProduct: Product = {
    id: 1,
    name: "Laptop",
    price: 1500,
};


// 7. Type Alias
type ID = string | number;

type Employee = {
    id: ID;
    name: string;
    department: string;
};

const emp: Employee = {
    id: "EMP101",
    name: "Nayeem",
    department: "MP"
}

console.log(emp.name)