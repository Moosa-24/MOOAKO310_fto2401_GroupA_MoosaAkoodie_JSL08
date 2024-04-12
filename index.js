// This one will be a little tricky. So check out this overview first: https://www.youtube.com/watch?v=sJ-c3BA-Ypo

// 1. Create a variable to store the singleton instance of the bank branch. "bankBranchInstance"
const bankBranchInstance = new BankBranch();
// 2. Define a class called `BankBranch` for managing branch information.
class BankBranch {
    constructor(name, location, manager) {
        this.name = name;
        this.location = location;
        this.manager = manager;
    }
}
// 3. In the `BankBranch` class:
//    - Create a constructor that takes `branchInfo` as a parameter.
//    - Inside the constructor, check if the `bankBranchInstance` variable is null (indicating no instance exists).
//    - If `bankBranchInstance` is null, create a new instance with the provided `branchInfo` and assign it to `bankBranchInstance`.
//    - Return the `bankBranchInstance` whether it's newly created or existing.
class BankBranch {
    constructor(branchInfo) {
        if (!BankBranch.bankBranchInstance) {
            BankBranch.bankBranchInstance = this;
            this.name = branchInfo.name;
            this.location = branchInfo.location;
            this.manager = branchInfo.manager;
        }
        return BankBranch.bankBranchInstance;
    }

// 4. Add methods to the `BankBranch` class for managing branch-related information. For example, you can add a method like `getBranchInfo` to retrieve branch details.
getBranchInfo() {
    return {
        name: this.name,
        location: this.location,
        manager: this.manager
    };
}

// can add more stuff(methods for managing branch-related information) here if need be
}

// 5. In the usage section:
//    - Create instances of the `BankBranch` class, such as `branchA` and `branchB`, with different branch information.
//    - Use the `getBranchInfo` method to retrieve branch information from the instances.
//    - Verify that `branchA` and `branchB` are both referring to the same instance by comparing them using `===`.
const branchA = new BankBranch({ name: "Branch A", location: "New York", manager: "James Alton" });
const branchB = new BankBranch({ name: "Branch B", location: "Los Angeles", manager: "Judy Roberts" });

console.log(branchA.getBranchInfo());
console.log(branchB.getBranchInfo());

console.log(branchA === branchB); // Output: true

// This pseudo-code provides a step-by-step explanation of how to implement the Singleton Pattern for managing a single instance of the `BankBranch` class throughout the application, ensuring that multiple instances refer to the same object.

// NOTES:
// This example demonstrates the Singleton pattern by creating a single instance of the `BankBranch` class.
// Even if we attempt to create another instance of the branch, we receive the original instance,
// ensuring that there is only one set of branch information throughout the application.

// - We define a `BankBranch` class that represents bank branch information.
// - We use the Singleton pattern to ensure that there is only one instance of the `BankBranch` class.
// - The `bankBranchInstance` variable is used to hold the single instance of the class.
// - When a new `BankBranch` instance is created, it checks if `bankBranchInstance` already exists.
//   If it does, it returns the existing instance; otherwise, it creates a new one.
// - The `getBranchInfo` method allows us to retrieve the branch information from the singleton instance.
// - We demonstrate the Singleton pattern by creating two instances (`branchA` and `branchB`) and show that they both point to the same instance,
//   ensuring that there is only one set of branch information throughout the application.
