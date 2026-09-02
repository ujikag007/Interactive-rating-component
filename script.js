document.addEventListener('DOMContentLoaded', () => {
  const ratingForm = document.getElementById('rating-form');
  const ratingState = document.getElementById('rating-state');
  const thankYouState = document.getElementById('thank-you-state');
  const selectedRatingSpan = document.getElementById('selected-rating');

  ratingForm.addEventListener('submit', (e) => {
    // Prevent default form submission behavior
    e.preventDefault();

    // Retrieve selected radio value using FormData API
    const formData = new FormData(ratingForm);
    const selectedRating = formData.get('rating');

    if (selectedRating) {
      // 1. Inject selected value into Thank You card
      selectedRatingSpan.textContent = selectedRating;

      // 2. Switch card states
      ratingState.classList.add('hidden');
      thankYouState.classList.remove('hidden');
    }
  });
});

