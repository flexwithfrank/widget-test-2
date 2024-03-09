// Create a div element to contain the widget
var widgetDiv = document.createElement("div");

// Define the HTML content of the widget
widgetDiv.innerHTML = `
    <div class="widget-container">
        <h2 style="color:#000;">My Embeddable Widget</h2>
        <p style="color:#000;">This is some sample content inside the widget.</p>
        <button id="widget-button">Click me!</button>
    </div>
`;

// Append the widget to the document body
document.body.appendChild(widgetDiv);

// Add JavaScript functionality
document.getElementById("widget-button").addEventListener("click", function () {
  alert("Button clicked!");
});

