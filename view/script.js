// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reviewForm');
    const searchInput = document.getElementById('searchCompany');
    const searchButton = document.getElementById('searchButton');
    const reviewList = document.getElementById('reviewList');
    const averageRatingElement = document.getElementById('averageRating');
  
    // Function to display reviews
    const displayReviews = (reviews) => {
      reviewList.innerHTML = '';
      let totalRating = 0;

      const companyName = document.createElement('h2');
    companyName.innerHTML = `<strong>${reviews[0].name}</strong>`;
    reviewList.appendChild(companyName);
      
      reviews.forEach(review => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${review.pros}</strong> <br><br> ${review.cons} <br><hr>`;
        reviewList.appendChild(listItem);
        totalRating += review.rating;
      });
      const averageRating = reviews.length > 0 ? (totalRating / reviews.length).toFixed(1) : 'N/A';
      averageRatingElement.textContent = `Company Rating: ${averageRating}`;
    };
  
    // Event listener for form submission
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      try {
        const response = await axios.post('/reviews', {
          name: formData.get('companyName'),
          pros: formData.get('pros'),
          cons: formData.get('cons'),
          rating: formData.get('rating')
        });
        if (response.status === 200) {
          form.reset(); // Reset the form fields
        }
      } catch (error) {
        console.error('Error:', error);
      }
    });
  
    // Event listener for search button click
    searchButton.addEventListener('click', async () => {
      const name = searchInput.value.trim();
      try {
        const response = await axios.get(`/search?name=${name}`);
        const reviews = response.data;
        displayReviews(reviews);
      } catch (error) {
        console.error('Error:', error);
      }
    });
  });
  