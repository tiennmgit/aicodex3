sequenceDiagram
    participant User
    participant UI
    participant Backend
    participant Database

    User->>UI: Open Registration Form
    UI->>User: Display Form
    User->>UI: Fill Form and Submit
    UI->>Backend: Send Form Data (/registerInvestor)
    Backend->>Backend: Validate Data
    Backend->>Database: Check for Existing Investor
    Database-->>Backend: Investor Not Found
    Backend->>Database: Save New Investor Data
    Database-->>Backend: Save Success
    Backend-->>UI: Return Success Message
    UI-->>User: Display Success Message