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
