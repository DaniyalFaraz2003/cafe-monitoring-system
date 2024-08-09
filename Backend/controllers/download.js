
const path = require("path")
const { writeFile } = require('fs').promises;
const ExcelJS = require('exceljs');


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

const download = async (req, res) => {
    const { data, city, time } = req.body;
    
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(`${time} MEAL DATA`);
    const headerFont = { name: 'Calibri', family: 4, size: 12, bold: true };
    worksheet.columns = [
        { header: 'Employee ID', key: 'id', width: 10 },
        { header: 'Name', key: 'name', width: 30 },
        { header: 'Meal Type', key: 'type', width: 30 },
        { header: 'Time', key: 'time', width: 30 },
        { header: 'Date', key: 'date', width: 30 },
        { header: 'Employee City', key: 'emp_city', width: 30 },
        { header: 'Reporting City', key: 'city', width: 30 },
    ];
    data.forEach(element => {
        worksheet.addRow({
            id: element.id, name: element.name, type: element.mealtype,
            time: convertTime(element.mealtime), date: formatDate(element.mealdate), emp_city: element.city, city: city
        });
    });
    worksheet.getRow(1).font = headerFont;
    await workbook.xlsx.writeFile(path.join(__dirname, '..', 'downloads', 'data.xlsx'));
    res.download(path.join(__dirname, '..', 'downloads', 'data.xlsx'), function (err) {
        if (err) {
            console.error('Error downloading file:', err);
            res.status(500).send('Error downloading file');
        }
    });
}

const downloadFeedback = async (req, res) => {
    const { data, city, time } = req.body;
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(`Feedbacks of ${formatDate(time)}`);
    const headerFont = { name: 'Calibri', family: 4, size: 12, bold: true };
    worksheet.columns = [
        { header: 'Employee ID', key: 'id', width: 10 },
        { header: 'Name', key: 'name', width: 30 },
        { header: 'Designation', key: 'designation', width: 30 },
        { header: 'Company', key: 'company', width: 30 },
        { header: 'Rating', key: 'rating', width: 30 },
        { header: 'Description', key: 'description', width: 30 },
    ];
    data.forEach(element => {
        worksheet.addRow({
            id: element.Emp_Id, name: element.Emp_Name, designation: element.designation,
            company: element.company, rating: element.rating, description: element.description
        });
    });
    worksheet.getRow(1).font = headerFont;
    await workbook.xlsx.writeFile(path.join(__dirname, '..', 'downloads', 'data.xlsx'));
    res.download(path.join(__dirname, '..', 'downloads', 'data.xlsx'), function (err) {
        if (err) {
            console.error('Error downloading file:', err);
            res.status(500).send('Error downloading file');
        }
    });
}

module.exports = {
    download, downloadFeedback
}