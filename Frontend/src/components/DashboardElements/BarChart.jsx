// App.js
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState } from "react";

Chart.register(CategoryScale);

const Data = [
    {
        id: 1,
        year: 2016,
        userGain: 80000,
        userLost: 823
    },
    {
        id: 2,
        year: 2017,
        userGain: 45677,
        userLost: 345
    },
    {
        id: 3,
        year: 2018,
        userGain: 78888,
        userLost: 555
    },
    {
        id: 4,
        year: 2019,
        userGain: 90000,
        userLost: 4555
    },
    {
        id: 5,
        year: 2020,
        userGain: 4300,
        userLost: 234
    }
];


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
                            display: false
                        }
                    }
                }}
            />
        </div>
    );
};

const transformData = (data) => {
    const times = ['13:00:00', '13:30:00', '14:00:00', '14:30:00', '15:00:00', '15:30:00']
    const result = times.map((time, index, arr) => {
        const prevTime = new Date(`1970-01-01T${time}Z`);
        const nextTime = new Date(`1970-01-01T${arr[index + 1]}Z`);
        if (index != arr.length - 1) {
            return {
                timeframe: time + "-" + arr[index + 1],
                amount: data.filter((item) => {
                    let thisTime = new Date(`1970-01-01T${item.meal_time}Z`);
                    return thisTime >= prevTime && thisTime < nextTime;
                }).length
            };
        }
    })
    result.pop()
    return result;
}

export default function BarChart({ data }) {
    const transformed = transformData(data);
    console.log(data);
    console.log(transformed);
    const chartData = {
        labels: transformed.map((item) => item.timeframe),
        datasets: [
            {
                label: "Amount",
                data: transformed.map((item) => item.amount),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "&quot; #ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"
                ],
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