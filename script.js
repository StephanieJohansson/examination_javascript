//Min lista(array) med redan inlagda objekt som kommer visas i listan när programmet startar
const predefinedTodos = ['Klappa kossorna', 'Vattna katten', 'Hälsa Göran', 'Bygga lego'];

//Funktion för att få in redan inlagda objekt så att dom  syns från start
function loadPredefinedTodos() {
    const todoList = document.getElementById('todo-list');
    
    predefinedTodos.forEach(todoText => { //forEach metod för att gå igenom varje element i predefinedTodo listan så att alla sparas som variablar som ehter todoText
        const li = document.createElement('li');  //skapar ny lista och element
        
        const checkbox = document.createElement('input'); //skapar en ny input som är en checkbox för att användren ska kunna kryssa av
        checkbox.type = 'checkbox';

        const span = document.createElement('span'); //gör en span-tagg som ska innehålla min todoText/aktuella uppgiften
        span.textContent = todoText;

        //Lägger till både checkbox och span i listobjektet + lägger till hela list elementet i todoList
        li.appendChild(checkbox);
        li.appendChild(span);
        todoList.appendChild(li);

        //Händelselyssnare till checkboxen, stryk med linje vid händelse aka användaren försöker kryssa av den
        checkbox.addEventListener('change', function() {
            span.style.textDecoration = this.checked ? 'line-through' : 'none';
        });
    });
}

// Anropar redan inlagda objekt med loadPredefinedTodos
loadPredefinedTodos();

// Händelsehanterare för "Lägg till"-knappen. vid klick körs funktionen som lägger till inputen och dess sparade värde som användaren skrivit
document.getElementById('add-button').addEventListener('click', function() {
    const inputField = document.getElementById('todo-input');
    const todoText = inputField.value.trim(); //för att ta bort extra vitt space så det ser snyggare ut
    
    if (todoText) { //if-sats för de nya objekten som blir tillagda som kontrollerar att todoText inte är tom
        const todoList = document.getElementById('todo-list');
        
        // Skapa lista och checkbox precis som ovan
        const li = document.createElement('li');
        
        const checkbox = document.createElement('input'); //checkboxen
        checkbox.type = 'checkbox';

        const span = document.createElement('span'); //span som innrhåller text från todoText som ovan
        span.textContent = todoText;

        // checkbox och span läggs i listobjektet som ovan
        li.appendChild(checkbox);
        li.appendChild(span);
        todoList.appendChild(li);

        // Nollställ input-fältet efter man lagt till ett objekt
        inputField.value = '';

        // Händelselyssnare som drar sträck genom objekten när man kryssar i dom precis som ovan
        checkbox.addEventListener('change', function() {
            span.style.textDecoration = this.checked ? 'line-through' : 'none';
        });
    } else {
        //Felmeddelande om man klickar på knappen utan att ha skrivit något i inputfältet
        alert('Du glömde skriva in ett objekt!');
    }
});