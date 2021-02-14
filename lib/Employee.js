function Employee (name, id, email) {
        this.name = name;
        this.id = id;
        this.title = "Employee";
        this.email = email;
};

Employee.prototype.getName = function() {
    return this.name;
}

module.exports = Employee;