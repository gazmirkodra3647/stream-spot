/**
* Filename: complexCode.js
* 
* Description: A sophisticated and complex code example showcasing various advanced JavaScript concepts and techniques.
* This code simulates a ticket booking system for a movie theater, with multiple features including seat selection,
* ticket pricing, booking validation, and more.
*
* Author: [Your Name]
* Date: [Current Date]
*/

// Object to represent a movie theater
const theater = {
    name: "Awesome Theater",
    rows: 10, // Number of rows in the theater
    seatsPerRow: 10, // Number of seats in each row
    seatsAvailable: [], // Array to store available seats
    seatsBooked: [], // Array to store booked seats

    // Function to initialize the seatsAvailable array
    initializeSeats() {
        for (let row = 1; row <= this.rows; row++) {
            for (let seat = 1; seat <= this.seatsPerRow; seat++) {
                this.seatsAvailable.push(`${row}-${seat}`);
            }
        }
    },

    // Function to display the available seats
    displayAvailableSeats() {
        console.log("Available Seats:");
        console.log(this.seatsAvailable.join(", "));
    },

    // Function to display the booked seats
    displayBookedSeats() {
        console.log("Booked Seats:");
        console.log(this.seatsBooked.join(", "));
    },

    // Function to book a seat
    bookSeat(row, seat) {
        const seatToBook = `${row}-${seat}`;

        // Check if seat is available
        if (this.seatsAvailable.includes(seatToBook)) {
            // Remove seat from available seats and add to booked seats
            this.seatsAvailable.splice(this.seatsAvailable.indexOf(seatToBook), 1);
            this.seatsBooked.push(seatToBook);
            console.log(`Seat ${seatToBook} booked successfully.`);
        } else {
            console.log(`Seat ${seatToBook} is already booked or invalid.`);
        }
    },

    // Function to calculate ticket price based on row and seat number
    calculateTicketPrice(row, seat) {
        let ticketPrice = 10;

        // Increase price for premium seats (first three rows)
        if (row <= 3) {
            ticketPrice += 5;
        }

        // Reduce price for corner seats
        if (seat === 1 || seat === this.seatsPerRow) {
            ticketPrice -= 2;
        }

        return ticketPrice;
    }
};

// Initialize the seat availability
theater.initializeSeats();

// Display available seats
theater.displayAvailableSeats();

// Book few seats
theater.bookSeat(3, 5);
theater.bookSeat(5, 7);
theater.bookSeat(2, 3);
theater.bookSeat(6, 9);

// Display updated available and booked seats
theater.displayAvailableSeats();
theater.displayBookedSeats();

// Calculate ticket price for a given row and seat
console.log("Ticket Price:", theater.calculateTicketPrice(3, 5));