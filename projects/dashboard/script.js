document.addEventListener('DOMContentLoaded', () => {
    const dateRangeBtns = document.querySelectorAll('.date-range button');
    dateRangeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            dateRangeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    console.log('Dashboard Loaded');
});