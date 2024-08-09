// App.js
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
import { useState } from "react";

Chart.register(CategoryScale);

const Graph = ({ chartData }) => {
    return (
        <div className="chart-container w-[70%] h-full">
            <Line
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Normal And Diet Meal Trends Of This Month"
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

function getDatesForCurrentMonth() {
    const dates = [];
    const now = new Date();

    // Loop to generate dates for the last 30 days including today
    for (let i = 0; i < 30; i++) {
        const date = new Date(now);
        date.setDate(now.getDate() - i);
        dates.push(date.toISOString().split('T')[0]); // Format as yyyy-mm-dd
    }
    dates.reverse();
    return dates;
}

const transformData = (data) => {
    const dates = getDatesForCurrentMonth();
    const result = dates.map((date) => {
        const currentDate = new Date(date);
        return {
            date: currentDate.toLocaleString('en-US', { month: "long", day: "numeric" }),
            amountNormal: data.filter((item) => {
                let thisDate = new Date(item.meal_date);
                return thisDate.getDate() === currentDate.getDate() && item.meal_pref === "Normal";
            }).length,
            amountDiet: data.filter((item) => {
                let thisDate = new Date(item.meal_date);
                return thisDate.getDate() === currentDate.getDate() && item.meal_pref === "Diet";
            }).length,
        };
    })

    // result.pop();
    return result;
}

export default function LineChart({ data }) {
    const transformed = transformData(data);
    const chartData = {
        labels: transformed.map((item) => item.date),
        datasets: [
            {
                label: "Normal",
                data: transformed.map((item) => item.amountNormal),
                backgroundColor: "#2a71d0",
                borderColor: "#2a71d0",
                borderWidth: 2
            },
            {
                label: "Diet",
                data: transformed.map((item) => item.amountDiet),
                backgroundColor: "#50AF95",
                borderColor: "#50AF95",
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