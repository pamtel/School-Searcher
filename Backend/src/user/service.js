import bcrypt from "bcrypt";
import { generateToken, handleResponse } from "../helpers/util";
import Schools from "./school_model";

class UserServices {
  static async loginSchool(req, res) {
    const { email, password } = req.body;

    try {
      let user = await Schools.findOne({ email });
      if (!user) {
        return handleResponse(res, 401, "Invalid Credentials");
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return handleResponse(res, 401, "Invalid Credentials");
      }
      const token = generateToken({
        _id: user._id,
        role: user._doc.role,
        email: user._doc.email,
        passwordResetRequired: user._doc.passwordResetRequired,
      });
      return handleResponse(res, 200, "Successfully login", {
        ...user._doc,
        _id: user._id,
        password: undefined,
        token,
      });
    } catch (error) {
      return handleResponse(res, 500, "Some error occured");
    }
  }

  static async registerSchool(req, res) {
    try {
      const { full_name, email, phone_number, school_type, address, fees, logo, password } = req.body;
      console.log(req.body);
      if(!full_name && !email && !phone_number && !school_type && !address && !fees && !logo && !password) {
        res.status(400).json({ message: "please provide all required field" });
      }else if(!full_name) {
        res.status(400).json({ message: "FullName is required" });
      }else if(!email) {
        res.status(400).json({ message: "email is required" });
      }else if(!phone_number) {
        res.status(400).json({ message: "phone number is required" });
      }else if(!school_type) {
        res.status(400).json({ message: "school name is required" });
      }else if(!address) {
        res.status(400).json({ message: "address is required" });
      }else if(!fees) {
        res.status(400).json({ message: "fees is required" });
      }else if(!logo) {
        res.status(400).json({ message: "logo is required" });
      }else if(!password) {
        res.status(400).json({ message: "password is required" });
      }else {
        const user = new Schools({
          full_name,
          email,
          phone_number,
          school_type,
          address,
          fees,
          logo,
          password,
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);
  
        await user.save();
        let token = generateToken({ ...user._doc });
        res.status(200).json({
          user: { ...user._doc, token },
        });
      }
     
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  }
}

export default UserServices;
