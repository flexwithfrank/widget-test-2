// Load the HTML content of the widget
fetch('index.html')
    .then(response => response.text())
    .then(html => {
        // Create a new div element
        const widgetContainer = document.createElement('div');
        // Set the HTML content of the widget
        widgetContainer.innerHTML = html;
        // Append the widget container to the document body
        document.body.appendChild(widgetContainer);
    })
    .catch(error => console.error('Error loading widget:', error));
