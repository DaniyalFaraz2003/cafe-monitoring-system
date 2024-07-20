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
                amountNormal: data.filter((item) => {
                    let thisTime = new Date(`1970-01-01T${item.meal_time}Z`);
                    return thisTime >= prevTime && thisTime < nextTime && item.meal_pref === "Normal";
                }).length,
                amountDiet: data.filter((item) => {
                    let thisTime = new Date(`1970-01-01T${item.meal_time}Z`);
                    return thisTime >= prevTime && thisTime < nextTime && item.meal_pref === "Diet";
                }).length
            };
        }
    })
    result.pop()
    return result;
}

export default function BarChart({ data }) {
    const transformed = transformData(data);

    const chartData = {
        labels: transformed.map((item) => item.timeframe),
        datasets: [
            {
                label: "Normal",
                data: transformed.map((item) => item.amountNormal),
                backgroundColor: "#2a71d0",
                borderColor: "white",
                borderWidth: 2
            },
            {
                label: "Diet",
                data: transformed.map((item) => item.amountDiet),
                backgroundColor: "#50AF95",
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