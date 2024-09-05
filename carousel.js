document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    function showItem(index) {
        items.forEach(item => item.style.display = 'none');
        items[index].style.display = 'block';
    }

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    });
});