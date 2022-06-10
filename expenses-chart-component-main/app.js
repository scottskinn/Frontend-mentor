const charEl = document.querySelector('#myChart');

async function fetchChartData() {
    const chartFetch = await fetch('./data.json');
    
    const chartData = await chartFetch.json();
    console.log(chartData);
    return chartData;
};

fetchChartData().then(chartData => {
    const day = chartData.map(data => data.day);
    console.log(day);
    const amount = chartData.map(data => data.amount);
    
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: day,
            datasets: [{
                label: '$CND',
                data: amount,
                backgroundColor: [
                    'hsl(10, 79%, 65%)',
                    'hsl(10, 79%, 65%)',
                    'hsl(186, 34%, 60%)',
                    'hsl(10, 79%, 65%)',
                    'hsl(10, 79%, 65%)',
                    'hsl(10, 79%, 65%)'
                ],
                borderRadius: '10px',
            }]
        },
        options: {

            scales: {
                y: {
                    beginAtZero: true
                },
            },
        }
        
    });
    return myChart;
})    
    
    