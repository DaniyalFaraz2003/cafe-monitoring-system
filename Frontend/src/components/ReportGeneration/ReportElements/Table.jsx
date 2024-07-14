import { PencilIcon } from "@heroicons/react/24/solid";
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
    Avatar,
    IconButton,
    Tooltip,
    Input,
} from "@material-tailwind/react";

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

const TABLE_ROWS = [
    {
        id: 1,
        EmpName: "Ali",
        meal_pref: "Normal",
        meal_time: "12:30:00",
        meal_date: "2024-01-01",
        city: "Islamabad",
    },
    {
        id: 2,
        EmpName: "Ali",
        meal_pref: "Normal",
        meal_time: "13:00:00",
        meal_date: "2024-01-02",
        city: "Islamabad",
    },
    {
        id: 3,
        EmpName: "Umm e Kulsoom",
        meal_pref: "Diet",
        meal_time: "12:45:00",
        meal_date: "2024-01-03",
        city: "Islamabad",
    },
    {
        id: 4,
        EmpName: "Daniyal",
        meal_pref: "Normal",
        meal_time: "13:15:00",
        meal_date: "2024-01-04",
        city: "Islamabad",
    },
    {
        id: 5,
        EmpName: "Ali",
        meal_pref: "Normal",
        meal_time: "12:50:00",
        meal_date: "2024-01-05",
        city: "Islamabad",
    },
    {
        id: 6,
        EmpName: "Daniyal",
        meal_pref: "Normal",
        meal_time: "13:10:00",
        meal_date: "2024-02-01",
        city: "Islamabad",
    },
    {
        id: 7,
        EmpName: "Daniyal",
        meal_pref: "Diet",
        meal_time: "12:35:00",
        meal_date: "2024-02-02",
        city: "Islamabad",
    },
    {
        id: 8,
        EmpName: "Umm e Kulsoom",
        meal_pref: "Normal",
        meal_time: "13:25:00",
        meal_date: "2024-02-03",
        city: "Islamabad",
    },
    {
        id: 24,
        EmpName: "Daniyal",
        meal_pref: "Diet",
        meal_time: "13:25:00",
        meal_date: "2024-05-04",
        city: "Islamabad",
    },
    {
        id: 25,
        EmpName: "Ali",
        meal_pref: "Normal",
        meal_time: "12:40:00",
        meal_date: "2024-05-05",
        city: "Islamabad",
    },
    {
        id: 26,
        EmpName: "Umm e Kulsoom",
        meal_pref: "Normal",
        meal_time: "13:20:00",
        meal_date: "2024-06-01",
        city: "Islamabad",
    },
    {
        id: 27,
        EmpName: "Daniyal",
        meal_pref: "Diet",
        meal_time: "12:50:00",
        meal_date: "2024-06-02",
        city: "Islamabad",
    }
];

export function Table() {
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
                        <Tabs value="daily" className="w-full md:w-max">
                            <TabsHeader>
                                {TABS.map(({ label, value }) => (
                                    <Tab key={value} value={value}>
                                        &nbsp;&nbsp;{label}&nbsp;&nbsp;
                                    </Tab>
                                ))}
                            </TabsHeader>
                        </Tabs>
                        <div className="w-full md:w-72">
                            <Input
                                label="Search"
                                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                            />
                        </div>
                        <Button className="flex items-center gap-3" size="sm">
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
                        {TABLE_ROWS.map(
                            (
                                {
                                    id,
                                    EmpName,
                                    meal_pref,
                                    meal_time,
                                    meal_date,
                                    city
                                },
                                index,
                            ) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={id}>
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
                                                {EmpName}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <div className="w-max">
                                                <Chip
                                                    size="sm"
                                                    variant="ghost"
                                                    value={meal_pref}
                                                    color={
                                                        meal_pref === "Diet"
                                                            ? "green"
                                                            : meal_pref === "Normal"
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
                                                {meal_time}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {meal_date}
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
                            },
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