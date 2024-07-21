import { useState, useEffect } from "react";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Select,
  Option,
  Tab,
  Button,
  Tabs,
  TabsHeader,
  CardBody,
  Chip,
  CardFooter,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import FilterCategorySelectForm from "../../FilterCategorySelectForm/FilterCategorySelectForm";
import axios from "axios";
import Datepicker from "react-tailwindcss-datepicker";

const TABS = [
  {
    label: "Daily",
    value: "daily",
  },
  {
    label: "Weekly",
    value: "weekly",
  },
  {
    label: "Monthly",
    value: "monthly",
  },
];

const TABLE_HEAD = ["Emp ID", "Name", "Meal Type", "Time", "Date", "Emp City"];

function formatDate(dateString) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const date = new Date(dateString);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}


function convertTime(time) {
  let newTime = null;
  let [hour, minute, second] = time.split(":");
  hour = parseInt(hour);
  if (hour === 0) {
    hour = 12;
    newTime = "" + hour + ":" + minute + " AM";
  } else if (hour > 12) {
    hour -= 12;
    newTime = "" + hour + ":" + minute + " PM";
  } else if (hour === 12) {
    newTime = "" + hour + ":" + minute + " PM";
  } else {
    newTime = "" + hour + ":" + minute + " AM";
  }
  return newTime;
}

const fetchDataTime = async (time, city, setData) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/v1/report/${city}`, {
      timeFrame: time
    })
    setData(response.data);
  } catch (error) {
    console.log("Error: ", error);
  }
}

const fetchDataDate = async (city, start, end, setData) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/v1/report/${start}/${end}`, {
      city: city
    })
    setData(response.data);
  } catch (error) {
    console.log("Error: ", error);
  }
}

export function Table() {
  // avltree.result the result here is came from the avltreeReducer.js
  const city = useSelector((state) => state.avltree.city);
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("daily");
  const [field, setField] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [itemsPage, setItemsPage] = useState(5);


  const [value, setValue] = useState({
    startDate: null,
    endDate: null
  });

  const handleValueChange = newValue => {
    setValue(newValue);
  };

  const refresh = (e) => {
    e.preventDefault();
    fetchDataTime(filter, city, setData);
  };

  useEffect(() => {
    if (search) {
      setSearchData(() => {
        const fieldMap = {
          "ID": "id",
          "Name": "name",
          "Meal Type": "mealtype",
          "City": "city"
        }
        return data.filter((item) => {
          return item[`${fieldMap[`${field}`]}`].toString().toLowerCase().startsWith(search.toLowerCase());
        })
      })
    } else {
      // fetchDataTime(filter, city, setData);
    }
  }, [search]);

  useEffect(() => {
    if (value.startDate && value.endDate) {
      fetchDataDate(city, value.startDate, value.endDate, setData)
    }
  }, [value])

  useEffect(() => {
    fetchDataTime(filter, city, setData);
  }, [filter])

  const handleDownload = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: data,
          city: city,
          time: filter.toUpperCase()
        }),
        mode: 'cors'
      });
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${filter.toUpperCase()} CAFE REPORT - GENERATED ON: ${new Date().toUTCString()}.xlsx`;
        document.body.appendChild(a);
        a.click();
        a.remove();
      } else {
        console.error('Failed to download file');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <Card className="h-full w-full">
      <div floated={false} shadow={false} className="rounded-none w-full p-5 bg-gray-100">

        <div className="flex flex-col w-full gap-10">
          <div className="flex flex-row w-full items-center h-full justify-center">
            <div className="flex flex-col gap-2 mr-auto h-full items-center justify-center">
              <p className="font-bold text-center">Filter By Field Value</p>
              <div className="flex flex-row gap-5">
                <FilterCategorySelectForm setSearchField={setField} />
                <Input
                  label="Field Value"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                  value={search}
                  className="bg-white"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mr-auto h-full items-center justify-center">
              <p className="font-bold text-center">Advanced Options</p>
              <div className="flex flex-row gap-5">
                <Select
                  name="sort"
                  defaultValue="ID"
                  label="Sort By"
                  className="bg-white font-bold"
                  onChange={(e) => setSortBy(e)}
                >
                  <Option value="ID">ID</Option>
                  <Option value="Name">Name</Option>
                  <Option value="Meal Type">Time</Option>
                  <Option value="City">Date</Option>
                </Select>
                <Select
                  name="items"
                  defaultValue="5"
                  label="Items Per Page"
                  className="bg-white font-bold"
                  onChange={(e) => setItemsPage(e)}
                >
                  <Option value="ID">5</Option>
                  <Option value="Name">10</Option>
                  <Option value="Meal Type">15</Option>
                  <Option value="City">20</Option>
                </Select>
              </div>
            </div>
            <div className="flex flex-row ml-auto gap-5 mt-5">
              <Button
                variant="outlined"
                className="flex items-center gap-3 bg-white"
                onClick={refresh}
              >
                Refresh
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </Button>
              <Button className="flex items-center gap-3" onClick={handleDownload}>
                <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
              </Button>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center justify-center w-full h-full">
            <div className="w-full flex flex-col h-full gap-2">
              <p className="font-bold text-center">Filter By Date Range</p>
              <Datepicker classNames={"border-2 border-gray-600 bg-gray-500"} value={value} onChange={handleValueChange} />
            </div>
            <p className="font-bold text-lg mx-10">
              OR
            </p>
            <div className="w-full h-full flex flex-col gap-2">
              <p className="font-bold text-center">Filter By Time Frame</p>
              <Tabs value={filter} className="w-full">
                <TabsHeader>
                  {TABS.map(({ label, value }) => (
                    <Tab key={value} value={value} onClick={() => setFilter(value)}>
                      &nbsp;&nbsp;{label}&nbsp;&nbsp;
                    </Tab>
                  ))}
                </TabsHeader>
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {search && searchData.map(
              ({ id, name, mealtype, mealtime, mealdate, city }, index) => {
                const isLast = index === data.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
                return (
                  <tr key={id + " " + index}>
                    <td className={classes}>
                      <div className="flex items-center">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {id}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={mealtype}
                          color={
                            mealtype === "Diet"
                              ? "green"
                              : mealtype === "Normal"
                                ? "blue"
                                : "red"
                          }
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {convertTime(mealtime)}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {formatDate(mealdate)}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {city}
                      </Typography>
                    </td>
                  </tr>
                );
              }
            )}
            {!search && data.map(
              ({ id, name, mealtype, mealtime, mealdate, city }, index) => {
                const isLast = index === data.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
                return (
                  <tr key={id + " " + index}>
                    <td className={classes}>
                      <div className="flex items-center">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {id}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={mealtype}
                          color={
                            mealtype === "Diet"
                              ? "green"
                              : mealtype === "Normal"
                                ? "blue"
                                : "red"
                          }
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {convertTime(mealtime)}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {formatDate(mealdate)}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {city}
                      </Typography>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button variant="outlined" size="sm">
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton variant="outlined" size="sm">
            1
          </IconButton>
          <IconButton variant="text" size="sm">
            2
          </IconButton>
          <IconButton variant="text" size="sm">
            3
          </IconButton>
          <IconButton variant="text" size="sm">
            ...
          </IconButton>
          <IconButton variant="text" size="sm">
            8
          </IconButton>
          <IconButton variant="text" size="sm">
            9
          </IconButton>
          <IconButton variant="text" size="sm">
            10
          </IconButton>
        </div>
        <Button variant="outlined" size="sm">
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
