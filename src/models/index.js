const City = require("./City");
const Country = require("./Country");
const Course = require("./Course");
const Professor = require("./Professor");
const Student = require("./Student");
const User = require("./User");

User.belongsTo(Country);
Country.hasMany(User);

City.belongsTo(Country);
Country.hasMany(City);

Student.belongsTo(City);
City.hasMany(Student);

Professor.belongsToMany(Student, { through: "professors_students" });
Student.belongsToMany(Professor, { through: "professors_students" });

Student.belongsToMany(Course, { through: 'students_courses' });
Course.belongsToMany(Student, { through: 'students_courses' })
