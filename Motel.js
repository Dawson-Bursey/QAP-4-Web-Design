
// Motel Customer Object
const MotelCustomer = {
  name: 'John Doe',
  birthDate: '1990-05-15',
  gender: 'Male',
  roomPreferences: ['Non-smoking', 'King-sized bed'],
  paymentMethod: 'Credit Card',
  mailingAddress: {
    street: '123 Main St',
    city: 'Cityville',
    state: 'State',
    zip: '12345',
  },
  phoneNumber: '555-555-5555',
  checkInDate: '2023-01-15',
  checkOutDate: '2023-01-20',

  // Method to calculate age
  calculateAge: function () {
    const birthYear = new Date(this.birthDate).getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  },

  // Method to calculate duration of stay
  calculateStayDuration: function () {
    const checkIn = new Date(this.checkInDate);
    const checkOut = new Date(this.checkOutDate);
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const stayDuration = Math.round((checkOut - checkIn) / millisecondsPerDay);
    return stayDuration;
  },

  // Method to generate customer description
  generateDescription: function () {
    const age = this.calculateAge();
    const stayDuration = this.calculateStayDuration();

    return `Motel customer ${this.name}, ${age} years old, prefers ${this.roomPreferences.join(
      ' and '
    )} rooms. Payment method: ${this.paymentMethod}. Address: ${this.mailingAddress.street}, ${this.mailingAddress.city}, ${this.mailingAddress.state}, ${this.mailingAddress.zip}. Phone: ${this.phoneNumber}. Check-in date: ${this.checkInDate}. Check-out date: ${this.checkOutDate}. Total stay duration: ${stayDuration} days.`;
  },
};

// Example usage
const customerDescription = MotelCustomer.generateDescription();
console.log(customerDescription);
