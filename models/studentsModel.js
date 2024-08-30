const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true
        },
        course: {
            type: String,
            required: true

        },
        year: {
            type: String,
            required: true,
            enum: ["First", "Second Year", "Third Year", "Fourth Year", "Fifth Year"]
            
        },
        enrolled: {
            type: Boolean,
            required: true,
        },
    },

    {
        timestamps: true
    }
);


const Student = mongoose.model('Student', studentSchema);

module.exports = Student;