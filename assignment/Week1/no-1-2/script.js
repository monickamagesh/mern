document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const galleryContainer = document.getElementById('gallery');

            data.gallery.forEach(item => {
                // Create a container for each gallery item
                const galleryItem = document.createElement('div');
                galleryItem.classList.add('gallery-item');

                // Create and append the image element
                const imageElement = document.createElement('img');
                imageElement.src = item.imageUrl; // Use the correct path from your JSON
                imageElement.alt = item.title; // Add alt text for accessibility
                galleryItem.appendChild(imageElement);

                // Create and append the overlay
                const overlay = document.createElement('div');
                overlay.classList.add('overlay');

                // Create and append title
                const title = document.createElement('h3');
                title.textContent = item.title;

                // Create and append category
                const category = document.createElement('p');
                category.textContent = item.category;

                overlay.appendChild(title);
                overlay.appendChild(category);
                galleryItem.appendChild(overlay);

                // Append gallery item to gallery container
                galleryContainer.appendChild(galleryItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
