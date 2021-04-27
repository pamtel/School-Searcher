import { Schema, model } from "mongoose";

const schoolSchema = new Schema({
    full_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone_number: {
        type: String,
    },
    school_type: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    fees: {
        type: String,
        required: true,
    },
    school_system: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
    },
    password: {
        type: String,
    },
    
});

const SchoolModel = model("Schools", schoolSchema);

export default SchoolModel;