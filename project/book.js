document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission

    // Get input values
    const firstName = document.querySelectorAll(".b-input")[0].value;
    const lastName = document.querySelectorAll(".b-input")[1].value;
    const date = document.querySelectorAll(".b-input")[2].value;
    const time = document.querySelectorAll(".b-input")[3].value;
    const persons = document.querySelectorAll(".b-input")[4].value;
    const price = persons+10;

    // Open new tab
    const receiptWindow = window.open("", "_blank");

    // Write receipt content into new tab
    receiptWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Booking Receipt</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                    background-color: #f0f0f0;
                     background-image: url("hotel.jpg");
                     background-repeat: no-repeat;
                    background-size: cover;
                     background-position: center center;
                     min-height: 84vh;
                     margin-top: 100px;
                }
                .receipt {
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 10px;
                    border: 2px solid #333;
                    width: 300px;
                    margin: auto;
                }
                h3 {
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <div class="receipt">
                <h3>📋 Booking Receipt</h3>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Time:</strong> ${time}</p>
                <p><strong>Number of Persons:</strong> ${persons}</p>
                <p><strong> Table price:</strong> ${price}</p>
                <p>✅ <em>Your table has been successfully booked!</em></p>
            </div>
        </body>
        </html>
    `);

    receiptWindow.document.close(); // Finish writing
});
