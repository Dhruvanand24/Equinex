const sampleMaterialRequest = [
    {
        Order_Id: "60a92c167c99ea001db8d7a1",
        Date_of_request: "2024-02-29T12:00:00.000Z",
        List_of_items: {
            items: [
                {
                    iteme: {
                        name: "Sample Item 1",
                        quantity: 5
                    }
                },
                {
                    iteme: {
                        name: "Sample Item 2",
                        quantity: 3
                    }
                }
            ]
        },
        Status_approval: {
            approved_by: "John Doe",
            is_approved: true,
            approval_date: "2024-02-29T14:30:00.000Z"
        },
        Department_requrest_raise: {
            request_by: "Alice Smith",
            request_department: "Finance"
        },
        Store: {
            is_issue: true,
            issue_by: "Bob Johnson",
            issue_date: "2024-02-29T15:45:00.000Z"
        },
        Receive_in_Department: {
            received_by: "Charlie Brown",
            receiving_date: "2024-02-29T16:30:00.000Z"
        },
        Receipt: {
            content: "SGVsbG8gd29ybGQ=",
            contentType: "text/plain"
        }
    },
    {
        Order_Id: "60a92c167c99ea001db8d7a2",
        Date_of_request: "2024-02-29T13:30:00.000Z",
        List_of_items: {
            items: [
                {
                    iteme: {
                        name: "Sample Item X",
                        quantity: 10
                    }
                },
                {
                    iteme: {
                        name: "Sample Item Y",
                        quantity: 2
                    }
                }
            ]
        },
        Status_approval: {
            approved_by: "Eva Anderson",
            is_approved: true,
            approval_date: "2024-02-29T14:45:00.000Z"
        },
        Department_requrest_raise: {
            request_by: "David Miller",
            request_department: "HR"
        },
        Store: {
            is_issue: true,
            issue_by: "Grace White",
            issue_date: "2024-02-29T16:00:00.000Z"
        },
        Receive_in_Department: {
            received_by: "Frank Green",
            receiving_date: "2024-02-29T17:15:00.000Z"
        },
        Receipt: {
            content: "VGhpcyBpcyBhIHRlc3QgcmVjZWlwdA==",
            contentType: "text/plain"
        }
    }    
];

export const materialRequestData = sampleMaterialRequest;