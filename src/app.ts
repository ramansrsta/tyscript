const person: Readonly<string[]> = ['Ram', 'Anna']

// There are some utility function provided
// by typescript for users for better type safety
// and in some case loosing a strict type
// so in this above utility generic Readonly
// typescript will give an error if you try to push
// or pop in the array.
// there are lots of other function like these you can check documentation
// provided by typescript