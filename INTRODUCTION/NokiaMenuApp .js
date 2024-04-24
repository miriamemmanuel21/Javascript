class NokiaMenuApp {
    constructor() {
      this.displayMainMenu();
      this.handleUserInput();
    }
  
    displayMainMenu() {
      console.log("Welcome to Nokia 3310 Menu");
      console.log("1. Phone book");
      console.log("2. Messages");
      console.log("3. Chat");
      console.log("4. Call Register");
      console.log("5. Tones");
      console.log("6. Settings");
      console.log("7. Call Divert");
      console.log("8. Games");
      console.log("9. Calculator");
      console.log("10. Reminders");
      console.log("11. Clock");
      console.log("12. Profiles");
      console.log("13. SIM services");
    }
  
    handleUserInput() {
      const userInput = prompt("Enter option:");
      switch (parseInt(userInput, 10)) {
        case 1:
          this.displayPhoneBookMenu();
          break;
        default:
          console.log("Invalid option");
      }
    }
  
    displayPhoneBookMenu() {
      console.log("1. Search");
      console.log("2. Service Nos");
      const phoneBookInput = prompt("Enter option:");
      if (phoneBookInput === '1') {
        console.log("Search");
      } else if (phoneBookInput === '8') {
        this.displayPhoneBookOptionsMenu();
      } else {
        console.log("Invalid option");
      }
    }
  
    displayPhoneBookOptionsMenu() {
      console.log("1. Type of view");
      console.log("2. Memory status");
    }
  }
  new NokiaMenuApp();
  