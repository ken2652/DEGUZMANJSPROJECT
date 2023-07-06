// Option's variable
let opt = "";

// User's field variables for registration
let userFirstName = "";
let userMiddleName = "";
let userLastName = "";
let userGender = "";
let userAge = "";
let userAddress = "";
let userContactNumber = "";
let userEmail = "";
let userUsername = "";
let userPassword = "";
let userConfirmPassword = "";

// Get user's data after login
let getUserFirstName = "";
let getUserMiddleName = "";
let getUserLastName = "";
let getUserFullName = "";
let getUserGender = "";
let getUserAge = "";
let getUserAddress = "";
let getUserContactNumber = "";
let getUserEmail = "";
let getUserUsername = "";
let getUserPassword = "";

// Customer's data
let customerFirstName = "";
let customerMiddleName = "";
let customerLastName = "";
let customerFullName = "";

// User's data array
const arrUserFirstName = [];
const arrUserMiddleName = [];
const arrUserLastName = [];
const arrUserGender = [];
const arrUserAge = [];
const arrUserAddress = [];
const arrUserContactNumber = [];
const arrUserEmail = [];
const arrUserUsername = [];
const arrUserPassword = [];

// User's authentication variables
let username = "";
let password = "";

// Letters of options for payment transaction
const productsOpt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Available products and their price
const products = [];
const price = [];

// Cart
const cartProducts = [];
const cartQty = [];
const cartPrice = [];
const cartSubTotalPrice = [];

let cartTotalPrice = 0;

function showMenu() {
  var opt = "";

  while (opt.toUpperCase() !== "C") {
    opt = prompt(
      "==============================================\n" +
      "Select an option:\n" +
      "A) Login\n" +
      "B) Register\n" +
      "C) Exit"
    );

    if (opt.toUpperCase() === "A") {
      loginUserWithUsername();
    } else if (opt.toUpperCase() === "B") {
      showRegister();
    } else if (opt.toUpperCase() === "C") {
      var confirmExit = prompt("Are you sure you want to exit? (Yes/No)");

      if (confirmExit.toUpperCase() === "YES" || confirmExit.toUpperCase() === "Y") {
        alert("Exiting...");
      } else {
        opt = "";
      }
    } else {
      alert("Invalid option. Please try again.");
    }
  }
}

function loginUserWithUsername() {
  var enteredUsername = prompt("Enter your username:");
  var enteredPassword = prompt("Enter your password:");

  // Find the index of the entered username in the array
  var userIndex = arrUserUsername.indexOf(enteredUsername);

  // Validate the username and password
  if (userIndex !== -1 && arrUserPassword[userIndex] === enteredPassword) {
    alert("Log in Successfully!");
    POSMenu(); // Proceed to POSMenu
  } else {
    alert("Invalid username or password.");
  }
}

function showRegister() {
  var userFirstName = prompt("Enter your first name:");
  var userMiddleName = prompt("Enter your middle name:");
  var userLastName = prompt("Enter your last name:");
  var userGender = prompt("Enter your gender:");
  var userAge = prompt("Enter your age:");

  // Validate age input
  while (isNaN(userAge)) {
    alert("Invalid age. Please enter a valid number for age.");
    userAge = prompt("Enter your age:");
  }

  var userAddress = prompt("Enter your address:");
  var userContactNumber = prompt("Enter your contact number:");

  // Validate contact number input
  while (isNaN(userContactNumber) || userContactNumber.length !== 11) {
    alert("Invalid contact number. Please enter 11 digits.");
    userContactNumber = prompt("Enter your contact number:");
  }

  var userEmail = prompt("Enter your Email:");

  // Check if the email is already taken or not a @gmail.com address
  if (arrUserEmail.includes(userEmail) || !userEmail.endsWith("@gmail.com")) {
    alert("Invalid email. Please try again.");
    userEmail = prompt("Enter your Email:");
  }

  var userUsername = prompt("Enter your username:");

  // Check if username is already taken and invalid if no username
  while (arrUserUsername.includes(userUsername) || userUsername.trim() === "") {
    if (arrUserUsername.includes(userUsername)) {
      alert("Invalid username. Username is already taken.");
    } else {
      alert("Invalid username. Please enter a valid username.");
    }
    userUsername = prompt("Enter your username:");
  }

  var userPassword = prompt("Enter your password:");

  // Check if password is blank
  while (userPassword.trim() === "") {
    alert("Invalid password. Please enter a valid password.");
    userPassword = prompt("Enter your password:");
  }

  var userConfirmPassword = prompt("Confirm your password:");

  // Check if password and confirm password match
  while (userPassword !== userConfirmPassword) {
    alert("Confirm password does not match the password.");
    userConfirmPassword = prompt("Confirm your password:");
  }

  // Add the user's data to the respective arrays
  arrUserFirstName.push(userFirstName);
  arrUserMiddleName.push(userMiddleName);
  arrUserLastName.push(userLastName);
  arrUserGender.push(userGender);
  arrUserAge.push(userAge);
  arrUserAddress.push(userAddress);
  arrUserContactNumber.push(userContactNumber);
  arrUserEmail.push(userEmail);
  arrUserUsername.push(userUsername);
  arrUserPassword.push(userPassword);

  alert(
    "Registration successful!\n\n" +
    "First Name: " +
    userFirstName +
    "\n" +
    "Middle Name: " +
    userMiddleName +
    "\n" +
    "Last Name: " +
    userLastName +
    "\n" +
    "Gender: " +
    userGender +
    "\n" +
    "Age: " +
    userAge +
    "\n" +
    "Address: " +
    userAddress +
    "\n" +
    "Contact Number: " +
    userContactNumber +
    "\n" +
    "Email: " +
    userEmail +
    "\n" +
    "Username: " +
    userUsername +
    "\n" +
    "Password: " +
    userPassword
  );
}

function POSMenu() {
  var opt = "";

  while (opt.toUpperCase() !== "C") {
    opt = prompt(
      "Welcome to MCDO!\n" +
      "Select an option:\n" +
      "A) Product\n" +
      "B) Add Product\n" +
      "C) Total"
    );

    if (opt.toUpperCase() === "A") {
      loginProduct();
    } else if (opt.toUpperCase() === "B") {
      showAddProduct();
    } else if (opt.toUpperCase() === "C") {
      var confirmTotal = prompt("Are you sure you want to proceed? (Yes/No)");

      if (confirmTotal.toUpperCase() === "YES" || confirmTotal.toUpperCase() === "Y") {
        // Calculate and display the total
        calculateTotal();
        displayTotal();
      } else {
        opt = "";
      }
    } else {
      alert("Invalid option. Please try again.");
    }
  }
}

function calculateTotal() {
  cartTotalPrice = 0;

  for (let i = 0; i < cartSubTotalPrice.length; i++) {
    cartTotalPrice += cartSubTotalPrice[i];
  }
}

function displayTotal() {
  let totalSummary = "Total Summary:\n\n";

  for (let i = 0; i < cartProducts.length; i++) {
    totalSummary +=
      "Product: " +
      cartProducts[i] +
      "\n" +
      "Quantity: " +
      cartQty[i] +
      "\n" +
      "Price: " +
      cartPrice[i] +
      "\n" +
      "Subtotal: " +
      cartSubTotalPrice[i] +
      "\n\n";
  }

  totalSummary += "Total Price: " + cartTotalPrice;

  alert(totalSummary);
}

function loginProduct() {
  var opt = "";

  while (opt.toUpperCase() !== "C") {
    opt = prompt(
      "Products\n" +
      "Select an option:\n" +
      "A) " + products[0] + "\n" +
      "B) " + products[1] + "\n" +
      "C) " + products[2] + "\n" +
      "D) " + products[3] + "\n" +
      "E) " + products[4] + "\n" +
      "F) " + products[5] + "\n" +
      "G) " + products[6] + "\n" +
      "M) Go back to menu"
    );

    if (opt.toUpperCase() === "A") {
      addToCart(0);
    } else if (opt.toUpperCase() === "B") {
      addToCart(1);
    } else if (opt.toUpperCase() === "C") {
      addToCart(2);
    } else if (opt.toUpperCase() === "D") {
      addToCart(3);
    } else if (opt.toUpperCase() === "E") {
      addToCart(4);
    } else if (opt.toUpperCase() === "F") {
      addToCart(5);
    } else if (opt.toUpperCase() === "G") {
      addToCart(6);
    } else if (opt.toUpperCase() === "M") {
      // Go back to the main menu
      return;
    } else {
      alert("Invalid option. Please try again.");
    }
  }
}

function addToCart(productIndex) {
  var productQty = prompt("Enter the quantity:");

  // Validate the quantity input
  while (isNaN(productQty) || productQty < 1) {
    alert("Invalid quantity. Please enter a valid number.");
    productQty = prompt("Enter the quantity:");
  }

  // Calculate and store the subtotal price
  var subTotal = price[productIndex] * productQty;

  // Store the product, quantity, price, and subtotal in their respective arrays
  cartProducts.push(products[productIndex]);
  cartQty.push(productQty);
  cartPrice.push(price[productIndex]);
  cartSubTotalPrice.push(subTotal);

  // Calculate the total price
  cartTotalPrice += subTotal;

  alert("Product added to cart!");
}

function showAddProduct() {
  var newProduct = prompt("Enter the new product:");
  var newProductPrice = prompt("Enter the price for " + newProduct + ":");

  // Validate the price input
  while (isNaN(newProductPrice) || newProductPrice < 0) {
    alert("Invalid price. Please enter a valid number.");
    newProductPrice = prompt("Enter the price for " + newProduct + ":");
  }

  // Add the new product and price to the products and price arrays
  products.push(newProduct);
  price.push(newProductPrice);

  alert("New product added!");
}

// Call the initial function to start the program
showMenu();
