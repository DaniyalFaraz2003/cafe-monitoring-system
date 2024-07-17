import { useState, useEffect } from "react";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
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
import { traverse, filterByPrefix, filterByTime } from "../../../redux/avltreeReducer";
import { useDispatch, useSelector } from "react-redux";

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

const TABLE_HEAD = ["Emp ID", "Name", "Meal Type", "Time", "Date", "City"];

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


export function Table() {
  // avltree.result the result here is came from the avltreeReducer.js
  const city = useSelector((state) => state.avltree.city);
  const data = useSelector((state) => state.avltree.result);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("daily");

  const dispatch = useDispatch();

  const refresh = (e) => {
    e.preventDefault();
    dispatch(filterByTime(filter));
  };

  useEffect(() => {
    if (search) {
      dispatch(filterByPrefix(search));
    } else {
      dispatch(filterByTime(filter));
    }
  }, [search]);

  useEffect(() => {
    dispatch(filterByTime(filter));
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
        a.download = 'Data.xlsx'; 
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
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              Cafe Report:
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              These are details about employees' meals
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <Tabs value={filter} className="w-full md:w-max">
              <TabsHeader>
                {TABS.map(({ label, value }) => (
                  <Tab
                    key={value}
                    value={value}
                    onClick={() => setFilter(value)}
                  >
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
            <Button
              variant="outlined"
              className="flex items-center gap-3"
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
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
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
            {data.map(
              ({ id, name, mealtype, mealtime, mealdate }, index) => {
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
      </CardBody>
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
