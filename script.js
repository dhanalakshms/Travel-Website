document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');
    const bookNowButton = document.getElementById('bookNow');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            searchDestinations(query);
        } else {
            alert('Please enter a destination or keyword');
        }
    });

    bookNowButton.addEventListener('click', () => {
        alert('Booking functionality to be implemented!');
    });

    function searchDestinations(query) {
        const destinations = [
            'Paris, France',
            'New York, USA',
            'Tokyo, Japan',
            'Sydney, Australia',
            'Cape Town, South Africa'
        ];

        const results = destinations.filter(destination => 
            destination.toLowerCase().includes(query.toLowerCase())
        );

        displayResults(results);
    }

    function displayResults(results) {
        searchResults.innerHTML = '';
        if (results.length > 0) {
            const ul = document.createElement('ul');
            results.forEach(result => {
                const li = document.createElement('li');
                li.textContent = result;
                ul.appendChild(li);
            });
            searchResults.appendChild(ul);
        } else {
            searchResults.textContent = 'No results found';
        }
    }
});
