// Write your solution in this file!
const employee = {
    name : 'Neuman',
    position : 'Junior Web Dev',
    age : '24' 
};
employee.experience = '2 years'

function updateEmployeeWithKeyAndValue(obj,key,value) {
    return{
        ...obj,[key]:value,
        }
    };      

    const anotherEmployee = updateEmployeeWithKeyAndValue(
        employee,
        'Eastate',
        'Syokimau'
    );
    employee;
    anotherEmployee;
    
    
    function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
        obj[key] = value;
        return obj;
      }

const obj = {artist: 'Nizzy', genre : 'afropop', instrument:'guitar'};
destructivelyUpdateEmployeeWithKeyAndValue(obj, 'artist','Nizzy', 'instrument', 'Guitar', 'genre','afropop');

function deleteFromEmployeeByKey(obj,key,value) {
    return{
        ...obj,[key]:value,
    };
}

const fireEmployee = deleteFromEmployeeByKey(
    'employee',
    'name',
    'Neuman',
    'Eastate',
    'Syokimau',
    'position',
    'Junior Web Dev'
);
delete fireEmployee.Neuman;

function destructivelyDeleteFromEmployeeByKey(obj,key,value) {
    obj[key] = value;
    return obj;
}

employee;
delete employee.position;