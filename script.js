// datepicker.js

(function() {
    // Create a new style element
    var style = document.createElement('style');
    
    // Set the CSS styles for the date picker
    style.textContent = `
      .date-picker {
        font-family: Arial, sans-serif;
        border: 1px solid #ccc;
        padding: 10px;
        width: 300px;
      }
  
      .date-picker input[type="date"] {
        width: 100%;
        padding: 5px;
      }
    `;
    
    // Append the style element to the head of the document
    document.head.appendChild(style);
  
    // Create a new div element for the date picker
    var datepickerDiv = document.createElement('div');
    datepickerDiv.className = 'date-picker';
  
    // Set the inner HTML content of the div
    datepickerDiv.innerHTML = `
      <label for="datepicker">Select a date:</label>
      <input type="date" id="datepicker">
    `;
    
    // Append the div to the document body
    document.body.appendChild(datepickerDiv);
  })();
  