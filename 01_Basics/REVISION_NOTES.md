# JavaScript Basics - Complete Revision Notes

## 1. Variables and Declaration

### Variable Types
- **`const`**: Constant value that cannot be changed
- **`let`**: Block-scoped variable that can be changed (modern way)
- **`var`**: Function-scoped variable (avoid - causes scope issues)

### Important Notes
- Variables declared with `let` but not assigned have value `undefined`
- Use `console.log()` to print values
- Use `console.table()` to display values in table format
- Code readability should be high

---

## 2. Data Types in JavaScript

### Primitive Data Types (7 types)
1. **String**: text values (e.g., `"Hitesh"`)
2. **Number**: numeric values (e.g., `21`)
3. **Boolean**: true/false values
4. **null**: represents empty/unknown value
5. **undefined**: variable declared but no value assigned
6. **Symbol**: creates unique identifiers
7. **BigInt**: very large integers (e.g., `1234567890123456789n`)

### Non-Primitive Data Types (Reference types)
1. **Array**: list of items (e.g., `["Superman", "Batman"]`)
2. **Object**: key-value pairs (e.g., `{name: "Bruce", age: 45}`)
3. **Function**: reusable block of code

### Checking Data Type
- Use `typeof` operator to check type
- Example: `typeof "lakshay"` returns `"string"`
- **Important quirk**: `typeof null` returns `"object"`

### Strict Mode
- `"use strict";` tells JavaScript to use safer rules
- Helps prevent silent errors and write better code

---

## 3. Type Conversion

### Number() Conversion
- `"33"` → `33`
- `"33abc"` → `NaN` (Not a Number)
- `true` → `1`
- `false` → `0`
- `null` → `0`
- `undefined` → `NaN`

### String() Conversion
- Converts numbers/values to text
- Example: `String(33)` → `"33"`
- Example: `String(true)` → `"true"`

### Boolean() Conversion
- `1` (or any non-zero) → `true`
- `0` → `false`
- `""` (empty string) → `false`
- `"Lakshay"` (non-empty string) → `true`
- `null` → `false`
- `undefined` → `false`

### Truthy and Falsy Values
- **Falsy**: `0`, `""`, `null`, `undefined`, `NaN`, `false`
- **Truthy**: non-zero numbers, non-empty strings, objects, arrays

### Best Practice
- Always use explicit conversion methods like `Number()`, `String()`, `Boolean()`
- Avoid implicit type coercion for better code readability

---

## 4. Operators and Operations

### Arithmetic Operators
- `+` Addition (also concatenates strings)
- `-` Subtraction
- `*` Multiplication
- `/` Division
- `%` Modulus (remainder)
- `**` Exponent
- `-value` Unary negation (flips sign)

### String Concatenation
- Old way: `str1 + str2`
- **Better way**: Template literals with backticks
  - Syntax: `` `Hello ${variable}` ``
  - Example: `` `Hello, my dog is ${repoCount} years old.` ``

### Unary Operators
- `+true` → `1`
- `+""` → `0`
- `++variable` → pre-increment (adds 1)
- `variable++` → post-increment

### String + Number Behavior
- `"1" + 2` → `"12"` (converts to string)
- `1 + "2"` → `"12"`
- `1 + 2 + "2"` → `"32"` (math first, then concat)
- `"1" + 2 + 2` → `"122"` (all concatenated as strings)

### Chained Assignment
- `num1 = num2 = num3 = 2 + 2` assigns same value to all variables

---

## 5. Comparison Operators

### Basic Comparisons
- `>` greater than
- `<` less than
- `>=` greater than or equal
- `<=` less than or equal
- `==` loose equality (allows type coercion)
- `!=` loose inequality
- `===` strict equality (no type coercion) ✓ **Preferred**
- `!==` strict inequality

### Strict vs Loose Comparison
- `===` checks both **value and type** - always use this
- `==` only checks value and may coerce types (unpredictable)
- Example: `"2" == 2` is `true`, but `"2" === 2` is `false`

### Avoid These Comparisons
- `null > 0` → misleading results
- `null == 0` → misleading results
- `undefined > 0` → misleading results
- These produce unexpected results due to type coercion

---

## 6. Strings

### String Methods and Properties
- `.length` returns string length
- `.toUpperCase()` converts to uppercase
- `.toLowerCase()` converts to lowercase
- `.charAt(index)` returns character at position
- `.indexOf(char)` returns position of character
- `.__proto__` shows prototype methods available

### Accessing String Characters
- Use bracket notation: `gameName[4]` accesses character at index 4
- Strings are zero-indexed

### String Objects
- Create with `new String("text")`
- Different from primitive string: `"text"`

---

## 7. Data Types Summary: Stack vs Heap

### Primitive Types → Stack Memory
- Stored **by value** (call by value)
- Each variable gets its own copy
- Changing one variable does NOT affect others
- Example:
  ```javascript
  let a = "Lakshay";
  let b = a;
  b = "Codevolution";
  console.log(a); // "Lakshay" (unchanged)
  console.log(b); // "Codevolution"
  ```

### Non-Primitive Types → Heap Memory
- Stored **by reference** (call by reference)
- Variables point to same object in memory
- Changing one variable DOES affect others
- Example:
  ```javascript
  let user1 = {email: "user@gmail.com"};
  let user2 = user1;
  user2.email = "user2@gmail.com";
  console.log(user1.email); // "user2@gmail.com" (changed!)
  console.log(user2.email); // "user2@gmail.com"
  ```

### Return Type Summary
| Type | typeof |
|------|--------|
| String | "string" |
| Number | "number" |
| Boolean | "boolean" |
| null | "object" (quirk) |
| undefined | "undefined" |
| Symbol | "symbol" |
| BigInt | "bigint" |
| Array | "object" |
| Object | "object" |
| Function | "function" |

---

## 8. Numbers and Math

### Creating Numbers
- Primitive: `const score = 400;`
- Number object: `const balance = new Number(1000);`

### Number Methods
- `.toFixed(n)` rounds to n decimal places
- `.toString()` converts number to string
- `.toPrecision(n)` formats to n significant digits
- `.toLocaleString()` formats with commas (e.g., "1,000,000")

### Math Object Methods
- `Math.abs(n)` absolute value
- `Math.round(n)` rounds to nearest integer
- `Math.ceil(n)` rounds up
- `Math.floor(n)` rounds down
- `Math.random()` returns random decimal between 0 and 1

### Generating Random Numbers
- **Random between 0 and 1**: `Math.random()`
- **Random between 1 and 10**: `Math.random() * 10 + 1`
- **Random between min and max**: `Math.floor(Math.random() * (max - min + 1)) + min`
- Example (10 to 20): `Math.floor(Math.random() * (20 - 10 + 1)) + 10`

---

## Key Takeaways

1. Use `const` by default, `let` when needed, avoid `var`
2. Use `===` for comparison, not `==`
3. Use template literals for string concatenation
4. Use explicit type conversion (`Number()`, `String()`, `Boolean()`)
5. Understand Stack (primitives) vs Heap (references)
6. Remember null quirk: `typeof null === "object"`
7. Understand truthy/falsy values
8. Use `Math.floor(Math.random() * ...)` for random integers

---

**Happy Learning! 📚**
