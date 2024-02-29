const sampleOrders = [
    {
      Order_By: "John Doe",
      Date_of_Order: new Date("2024-02-29T08:00:00"),
      Paid_amount: 150.75,
      Deal_amount: 200.00,
      Deadline: new Date("2024-03-10T12:00:00"),
      production_process: {
        process: "Plasma Cutting",
        Receipt: {
          content: Buffer.from("Sample receipt content"),
          contentType: "image/jpeg"
        }
      },
      Date_of_Delivery: new Date("2024-03-08T15:30:00"),
      Receipt: {
        content: Buffer.from("Sample delivery receipt content"),
        contentType: "image/png"
      }
    },
    {
      Order_By: "Jane Smith",
      Date_of_Order: new Date("2024-02-28T10:30:00"),
      Paid_amount: 120.50,
      Deal_amount: 180.00,
      Deadline: new Date("2024-03-15T14:00:00"),
      production_process: {
        process: "Grinding",
        Receipt: {
          content: Buffer.from("Another sample receipt content"),
          contentType: "image/jpeg"
        }
      },
      Date_of_Delivery: new Date("2024-03-12T13:45:00"),
      Receipt: {
        content: Buffer.from("Another sample delivery receipt content"),
        contentType: "image/png"
      }
    },
    // Add more sample data as needed
  ];

  export const data = sampleOrders;