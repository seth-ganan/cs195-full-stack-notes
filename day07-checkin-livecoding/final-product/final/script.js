// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('wellness-form');
    const checkinList = document.getElementById('checkin-list');
    
    // Load existing check-ins from localStorage
    loadCheckins();
    
    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const playerName = document.getElementById('player-select').value;
        const mentalStatus = document.querySelector('input[name="mental"]:checked').value;
        const physicalStatus = document.querySelector('input[name="physical"]:checked').value;
        
        // Create check-in object
        const checkin = {
            player: playerName,
            mental: mentalStatus,
            physical: physicalStatus,
            timestamp: new Date().toLocaleString()
        };
        
        // Save to localStorage
        saveCheckin(checkin);
        
        // Display the new check-in
        displayCheckin(checkin);
        
        // Reset form
        form.reset();
        
        // Show success message
        showSuccessMessage();
    });
    
    function saveCheckin(checkin) {
        let checkins = JSON.parse(localStorage.getItem('wellnessCheckins')) || [];
        checkins.unshift(checkin); // Add to beginning of array
        
        // Keep only last 10 check-ins
        if (checkins.length > 10) {
            checkins = checkins.slice(0, 10);
        }
        
        localStorage.setItem('wellnessCheckins', JSON.stringify(checkins));
    }
    
    function loadCheckins() {
        const checkins = JSON.parse(localStorage.getItem('wellnessCheckins')) || [];
        checkins.forEach(checkin => displayCheckin(checkin));
    }
    
    function displayCheckin(checkin) {
        const checkinElement = document.createElement('div');
        checkinElement.className = 'checkin-item';
        
        const statusEmojis = {
            red: '🔴',
            yellow: '🟡',
            green: '🟢'
        };
        
        checkinElement.innerHTML = `
            <strong>${checkin.player}</strong><br>
            Mental: ${statusEmojis[checkin.mental]} Physical: ${statusEmojis[checkin.physical]}
            <div class="checkin-time">${checkin.timestamp}</div>
        `;
        
        checkinList.insertBefore(checkinElement, checkinList.firstChild);
    }
    
    function showSuccessMessage() {
        // Simple success feedback
        const button = document.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        
        button.textContent = '✅ Submitted!';
        button.disabled = true;
        
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
        }, 2000);
    }
});