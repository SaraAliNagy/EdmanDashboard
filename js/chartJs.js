


// ملخص المبيعات
const ctx1 = document.getElementById('myChart1');

new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{
            label: 'Almost Completed',
            data: [3000, 4000, 10000, 3000, 10000, 4000, 2500],
            borderWidth: 1,
            backgroundColor: [
                '#0561FC'
            ],
            barThickness: 15, 
        }],
    },

    options: {

        plugins: {
            legend: {
                display: false

            }
        },
        scales: {
            
            y: {
                beginAtZero: true,
                type: 'linear',
                position: 'left',
                min: 0,
                max: 10000,
                ticks: {
                    stepSize: 2000
                }
            }

        },
        elements: {

            line: {
                tension: 0.3,
            },


        }
    }
});


//اجمالي المبيعات
const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tus', 'Wed', 'Thu', 'Fri' ,'Sat' ,'Sun'],
        datasets: [{
            label: 'الأرباح',
            data: [20, 60, 30, 70, 30, 70, 100 ],
            borderWidth: 1,
            borderColor: '#0561FC',
            labelColor: '#232E74',
            fill: true,
            backgroundColor: 'rgba(5, 97, 252, 0.17)',
        }],
    },

    options: {

        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                type: 'linear',
                position: 'left'
            }
        },
        elements: {

          


        }
    }
});