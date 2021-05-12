//The payroll system populates a record from an Array
//populates a firstName field from the 0th element
//populates a familyName field from the 1th element
//populates a title field from the 2th element
//populates a payPerHour field from the 3th element
//initializes a field, timeInEvents, to hold an empty Array
//initializes a field, timeOutEvents, to hold an empty Array
function createEmployeeRecord(array) {
    let employee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };

    return employee;
}

//process an Array of Arrays into an Array of employee records
function createEmployeeRecords(arrays) {
    return arrays.map(employee => createEmployeeRecord(employee));
}

//adds a timeIn event Object to an employee's record of timeInEvents when provided an employee record and Date/Time String and returns the updated record
function createTimeInEvent(employee, timeStamp) {
    //split time stamp
    const [date, time] = timeStamp.split(" ");

    employee.timeInEvents.push({
        type: "TimeIn",
        date: date,
        hour: parseInt(time)
    });

    return employee;

}

//it adds a timeOut event Object to an employee's record of timeOutEvents when provided an employee record and Date/Time String and returns the updated record
function createTimeOutEvent(employee, timeStamp) {
    //split time stamp
    const [date, time] = timeStamp.split(" ");

    employee.timeOutEvents.push({
        type: "TimeOut",
        date: date,
        hour: parseInt(time)
    });

    return employee;

}


//Given an employee record with a date-matched timeInEvent and timeOutEvent hoursWorkedOnDate calculates the hours worked when given an employee record and a date
function hoursWorkedOnDate(employee, date) {

    let timein = employee.timeInEvents.find(event => event.date === date);

    let timeout = employee.timeOutEvents.find(event => event.date === date)

    return (timeout.hour - timein.hour) / 100
    // if (date === employee.timeInEvents[0].date){
    //     let timein = employee.timeInEvents[0].hour;
    //     let timeout = employee.timeOutEvents[0].hour;

    //     return (timeout - timein) / 100;

    // } else {
    //     console.log("did not work that day");
    // }

}

//wagesEarnedOnDate multiplies the hours worked by the employee's rate per hour
function wagesEarnedOnDate(employee, date) {

    let hours = hoursWorkedOnDate(employee, date);
    let wage = employee.payPerHour;
    return hours * wage;

}

//allWagesFor aggregates all the dates' wages and adds them together
function allWagesFor(employee) {
    //create an array of just the dates
    let allDates = employee.timeInEvents.map(event => event.date);

    //new dates array reduce and run through wagesEarned to find total pay
    let totalPay = allDates.reduce((accumulator, nextDate) => {
        return accumulator + wagesEarnedOnDate(employee, nextDate);
    }, 0);

    return totalPay;


}

//CalculatePayroll aggregates all the dates' wages and adds them together
function calculatePayroll(employees) {

    let payroll = employees.reduce((accumulator, employee) => {
        return accumulator + allWagesFor(employee);
    }, 0);

    return payroll;

}


function findEmployeeByFirstName(employees, name) {
    return employees.find(employee => {
        return employee.firstName === name;
    });

}