import React from "react";
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
} from "@material-tailwind/react";
import Profile from "./Profile";

export function DialogComponent({ validation, submit }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    return (
        <>
            <Button variant="gradient" color="blue" onClick={() => {
                if (validation()) {
                    handleOpen();
                }
            }}>Enter</Button>
            <Dialog
                size="xl"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto flex max-w-[50rem] justify-center">
                    <CardBody className="flex flex-col gap-4">
                        <Profile />
                    </CardBody>
                    <CardFooter className="pl-24 pr-24 pt-0 flex flex-col gap-5">
                        <Button color="blue" variant="gradient" onClick={() => {
                            submit();
                            handleOpen();
                        }} >
                            Submit
                        </Button>
                        <Button color="red" variant="gradient" onClick={handleOpen}>
                            Cancel
                        </Button>
                    </CardFooter>
                </Card>
            </Dialog>
        </>
    );
}