import React from "react";
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Radio
} from "@material-tailwind/react";
import Profile from "./Profile";
import CounterInput from "./Counter";

export function DialogComponent({ validation, submit, data }) {
    console.log(data)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    return (
        <>
            <button className="block w-[90%] mx-5 select-none rounded-lg bg-[#293a72] from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" variant="gradient" onClick={() => {
                if (validation()) {
                    handleOpen();
                }
            }}>Enter</button>
            <Dialog
                size="xl"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto flex max-w-[50rem] justify-center bg-gray-50 rounded-lg">
                    <CardBody className="flex flex-col gap-4">
                        <Profile data={data} />
                        <div className="flex w-full items-center gap-5 mt-0 px-32 justify-between">
                            <CounterInput />
                            <div className="flex flex-col">
                                <label htmlFor="custom-input-number" className="w-full text-gray-700 text-sm font-semibold ml-3">
                                    Meal Type:
                                </label>
                                <div className="flex flex-row">
                                    <Radio name="type" label="Normal" />
                                    <Radio name="type" label="Diet" defaultChecked />
                                </div>
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter className="pl-24 pr-24 pt-0 flex flex-row gap-5">
                        <Button className="basis-1/2" color="blue" variant="gradient" onClick={() => {
                            submit();
                            handleOpen();
                        }} >
                            Submit
                        </Button>
                        <Button className="basis-1/2" color="red" variant="gradient" onClick={handleOpen}>
                            Cancel
                        </Button>
                    </CardFooter>
                </Card>
            </Dialog>
        </>
    );
}