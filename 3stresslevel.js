document.addEventListener('DOMContentLoaded', function() {
    // Stress Meter Chart
    const stressMeterCtx = document.getElementById('stressMeterChart').getContext('2d');
    const stressMeterChart = new Chart(stressMeterCtx, {
      type: 'doughnut',
      data: {
        labels: ['Zero Zone (0)', 'Light Stress (1-2)', 'Heavy Stress (3)', 'Critical Zone (4-5)'],
        datasets: [{
          data: [20, 30, 25, 25],
          backgroundColor: [
            'rgba(76, 175, 80, 0.7)',
            'rgba(255, 235, 59, 0.7)',
            'rgba(255, 152, 0, 0.7)',
            'rgba(244, 67, 54, 0.7)'
          ],
          borderColor: [
            'rgba(76, 175, 80, 1)',
            'rgba(255, 235, 59, 1)',
            'rgba(255, 152, 0, 1)',
            'rgba(244, 67, 54, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#e7e7e7',
              font: {
                size: 14
              }
            }
          },
          title: {
            display: true,
            text: 'Stress Level Distribution',
            color: '#e7e7e7',
            font: {
              size: 18
            }
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#ffffff',
            bodyColor: '#e7e7e7'
          }
        },
        cutout: '60%'
      }
    });
  
    // Weekly Trend Chart
    const weeklyTrendCtx = document.getElementById('weeklyTrendChart').getContext('2d');
    const weeklyTrendChart = new Chart(weeklyTrendCtx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Stress Level',
          data: [1, 2, 3, 2, 4, 1, 0],
          borderColor: 'rgba(255, 99, 132, 0.8)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderWidth: 2,
          tension: 0.3,
          fill: true
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 5,
            ticks: {
              color: '#e7e7e7',
              stepSize: 1
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          x: {
            ticks: {
              color: '#e7e7e7'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: '#e7e7e7'
            }
          },
          title: {
            display: true,
            text: 'Weekly Stress Trend',
            color: '#e7e7e7',
            font: {
              size: 18
            }
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#ffffff',
            bodyColor: '#e7e7e7'
          }
        }
      }
    });
  
    // Add interactive effects to level cards
    const levelCards = document.querySelectorAll('.level-card');
    levelCards.forEach(card => {
      card.addEventListener('click', function() {
        const level = this.getAttribute('data-level');
        // You could add functionality here to filter charts or show more info
        console.log(`Selected stress level: ${level}`);
      });
    });
  });