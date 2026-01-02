document.addEventListener('DOMContentLoaded', () => {
    const hourlyContainer = document.getElementById('hourlyForecast');
    const dailyContainer = document.getElementById('dailyForecast');
    const searchBtn = document.getElementById('searchBtn');
    const cityInput = document.getElementById('cityInput');

    const updateUI = () => {
        populateHourly();
        populateDaily();
    };

    const populateHourly = () => {
        hourlyContainer.innerHTML = '';
        for (let i = 0; i < 24; i++) {
            const hour = i === 0 ? "Now" : `${(new Date().getHours() + i) % 24}:00`;
            const temp = 12 + Math.floor(Math.random() * 8);
            
            const card = document.createElement('div');
            card.className = 'forecast-card';
            card.innerHTML = `
                <span class="title">${hour}</span>
                <span class="temp">${temp}°C</span>
                <span class="desc">Cloudy</span>
            `;
            hourlyContainer.appendChild(card);
        }
    };

    const populateDaily = () => {
        dailyContainer.innerHTML = '';
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const todayIdx = new Date().getDay();

        for (let i = 0; i < 7; i++) {
            const dayName = i === 0 ? "Today" : days[(todayIdx + i) % 7];
            const high = 18 + Math.floor(Math.random() * 5);
            const low = 10 + Math.floor(Math.random() * 4);

            const card = document.createElement('div');
            card.className = 'forecast-card';
            card.innerHTML = `
                <span class="title">${dayName}</span>
                <span class="temp">${high}°</span>
                <span class="desc">${low}° Low</span>
            `;
            dailyContainer.appendChild(card);
        }
    };

    const handleSearch = () => {
        const city = cityInput.value.trim();
        if (city) {
            document.getElementById('cityName').innerText = city;
            // Update stats with random data to simulate fetch
            document.getElementById('mainTemp').innerText = `${15 + Math.floor(Math.random() * 10)}°C`;
            updateUI();
            cityInput.value = '';
        }
    };

    searchBtn.addEventListener('click', handleSearch);
    cityInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSearch(); });

    updateUI();
});