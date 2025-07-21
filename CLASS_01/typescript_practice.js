// TypeScript Basics Practice
// 1. Primitive Types
var userName = "Nayeem";
var age = 22;
var isActive = true;
var userScore = null;
// 2. Object Types
var user = {
    name: "Nayeem",
    age: 22
};
// 2. Array Types
var numbers = [1, 2, 3, 4, 5];
var names = ["Nayeem", "Nuzmul"];
// 4. Enums
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Admin"] = 0] = "Admin";
    UserRole[UserRole["Editor"] = 1] = "Editor";
    UserRole[UserRole["Viewer"] = 2] = "Viewer";
})(UserRole || (UserRole = {}));
var roles;
// 5. Union Types
var id;
id = 101;
id = "abc-101";
;
var newProduct = {
    id: 1,
    name: "Laptop",
    price: 1500,
};
var emp = {
    id: "EMP101",
    name: "Nayeem",
    department: "MP"
};
console.log(emp.name);
