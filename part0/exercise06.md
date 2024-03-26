sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note over browser, server: {
        "content": "This is the content of the note",
        "date": "2024-03-26T02:49:09.210Z"
    }
    server-->>browser: 201 Created