## Create Your Server

All of the data is stored in the `db.json` file. You'll want to access this
data using a JSON server. In order to do this, run the following two commands:

   * `npm install -g json-server`
   * `json-server --watch db.json`
   
This will create a server storing all of our color data with restful routes
at `http://localhost:3000/colors`. You can also check out
`http://localhost:3000/colors/:id`

## Display all the color cards

Send a fetch request to the server `http://localhost:3000/colors` to get data. Each card should be added to the `div#card-container`.

The card element should look like this:

```html
    <div class="color-card" style="background-color: #000000">
        <h2>Black</h2>
        <p>0 Votes</p>
        <button>+1 Vote!</button>
        <button class="delete-button">X</button>
    </div>
```

NOTE: `background-color` is a property of the `style` property of an element.

## Increase the votes on click of a button

When the '+1 VOTE!' button is clicked on a color:
- Optimistically render the increased number of votes
- Send a fetch request to the server `http://localhost:3000/colors/:id` to update the number of votes


## Add a color

Using the form:
- Optimistically render an added color
- Send a fetch request to the server `http://localhost:3000/colors` to add the color

## Delete a color

On click of the X button:
- Optimistically render the removal of a color card
- Send a fetch request to the server `http://localhost:3000/colors/:id` to remove the color
