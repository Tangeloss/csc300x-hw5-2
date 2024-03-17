# Jokebook API Documentation

## Get Jokebook Categories
- **Endpoint:** `/jokebook/categories`
- **Method:** GET
- **Description:** Returns a list of possible categories in the jokebook.
- **Example Request:** `GET /jokebook/categories`
- **Example Response:**
    ```json
    ["funnyJoke", "lameJoke"]
    ```

## Get Jokes in a Category
- **Endpoint:** `/jokebook/joke/:category`
- **Method:** GET
- **Description:** Returns jokes from the specified category, with an optional limit query parameter to limit the number of jokes returned.
- **Parameters:**
  - `category` (path parameter): The category of jokes to retrieve.
  - `limit` (query parameter, optional): Limits the number of jokes returned.
- **Example Request:** `GET /jokebook/joke/funnyJoke?limit=2`
- **Example Response:**
    ```json
    [
        {"joke": "Why did the student eat his homework?", "response": "Because the teacher told him it was a piece of cake!"},
        {"joke": "What kind of tree fits in your hand?", "response": "A palm tree"}
    ]
    ```
- **Error Handling:**
  - If the category is not valid, the API responds with a 400 status code and an error message.

## Add a New Joke
- **Endpoint:** `/jokebook/joke/new`
- **Method:** POST
- **Description:** Adds a new joke to the specified category.
- **Request Body:**
    ```json
    {
        "category": "funnyJoke",
        "joke": "Why don't scientists trust atoms?",
        "response": "Because they make up everything!"
    }
    ```
- **Example Request:** `POST /jokebook/joke/new`
- **Example Response:**
    ```json
    {
        "message": "Joke added successfully",
        "jokes": [
            {"joke": "Why did the student eat his homework?", "response": "Because the teacher told him it was a piece of cake!"},
            {"joke": "What kind of tree fits in your hand?", "response": "A palm tree"},
            {"joke": "Why don't scientists trust atoms?", "response": "Because they make up everything!"}
        ]
    }
    ```
- **Error Handling:**
  - If any of the required parameters are missing or the category is not valid, the API responds with a 400 status code and an error message.
