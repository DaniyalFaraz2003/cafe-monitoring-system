import React from 'react';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";
Chart.register(CategoryScale);

const Graph = ({ chartData }) => {
    return (
        <div className="chart-container w-[70%] h-full">
            <Bar
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Number of Meals Taken At Particular Intervals"
                        },
                        legend: {
                            display: true
                        }
                    }
                }}
            />
        </div>
    );
};

const transformData = (data) => {
    // Define time intervals as strings for comparison
    const times = ['13:00:00', '13:30:00', '14:00:00', '14:30:00', '15:00:00', '15:30:00'];
    
    // Map intervals to objects with time ranges and counts
    const result = times.map((time, index, arr) => {
        const prevTime = new Date(`1970-01-01T${time}Z`);
        const nextTime = index !== arr.length - 1 ? new Date(`1970-01-01T${arr[index + 1]}Z`) : null;
        
        // Filter data based on current time range
        const intervalData = data.filter((item) => {
            const thisTime = new Date(`1970-01-01T${item.meal_time}Z`);
            return thisTime >= prevTime && (nextTime ? thisTime < nextTime : true);
        });

        // Count the number of 'Normal' and 'Diet' meals in the current interval
        const counts = intervalData.reduce((acc, item) => {
            acc[item.meal_pref] = (acc[item.meal_pref] || 0) + 1;
            return acc;
        }, { Normal: 0, Diet: 0 });

        return {
            timeframe: time + (nextTime ? `-${arr[index + 1]}` : ''),
            Normal: counts.Normal,
            Diet: counts.Diet
        };
    }).filter(entry => entry.Normal > 0 || entry.Diet > 0); // Remove intervals with zero counts if needed

    return result;
};

export default function BarChart({ data }) {
    const transformed = transformData(data);
    console.log("Transformed Data for Chart:", transformed); // Check this log to ensure data is correct

    const chartData = {
        labels: transformed.map((item) => item.timeframe),
        datasets: [
            {
                label: "Normal",
                data: transformed.map((item) => item.Normal),
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "white",
                borderWidth: 2
            },
            {
                label: "Diet",
                data: transformed.map((item) => item.Diet),
                backgroundColor: "rgba(255,99,132,1)",
                borderColor: "white",
                borderWidth: 2
            }
        ]
    };
    return (
        <div className="App w-full h-full flex flex-row items-center justify-center">
            <Graph chartData={chartData} />
        </div>
    );
}
