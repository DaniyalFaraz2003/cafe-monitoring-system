// App.js
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie } from "react-chartjs-2";

Chart.register(CategoryScale);

function Graph({ chartData }) {
    return (
        <div className="chart-container h-full w-72">
            <Pie
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Meal Types Taken By Employees"
                        }
                    },
                    legend: {
                        position: 'chartArea',
                        align: 'start'
                    }
                }}
            />
        </div>
    );
}

export default function PieChart({ data }) {
    const chartData = {
        labels: data.map((item) => item.type),
        datasets: [
            {
                label: "Amount",
                data: data.map((item) => item.amount),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "&quot; #ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                ],
                borderColor: "white",
                borderWidth: 2
            }
        ]
    };

    return (
        <div className="App flex flex-row items-center justify-center">
            <Graph chartData={chartData} />
        </div>
    );
}