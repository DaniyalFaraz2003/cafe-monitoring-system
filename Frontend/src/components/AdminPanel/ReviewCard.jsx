import {
    Card,
    CardBody,
    Typography,
    CardHeader,
    Rating
} from "@material-tailwind/react";

function ReviewCard({ Emp_Name, description, designation, company, rating }) {    
    return (
        <Card shadow={false} className="bg-gray-200 rounded-2xl shadow-lg p-6">
            <CardHeader color="transparent" floated={false} shadow={false}>
                <Typography
                    color="blue-gray"
                    className="lg:mb-20 mb-4 text-2xl font-bold"
                >
                    &quot;{description}&quot;
                </Typography>
            </CardHeader>
            <CardBody className="px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center">
                <Rating value={rating} />
                <div>
                    <Typography variant="h6" color="blue-gray" className="text-right">
                        {Emp_Name}
                    </Typography>
                    <Typography
                        variant="paragraph"
                        className="font-normal !text-gray-500"
                    >
                        {designation}, @{company}
                    </Typography>
                </div>
            </CardBody>
        </Card>
    );
}

export default ReviewCard;