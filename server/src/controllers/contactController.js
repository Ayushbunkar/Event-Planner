import Contact from "../models/contactModel.js";

export const SubmitContactForm = async (req, res, next) => {
  try {
    const { fullname, email, feedback } = req.body;

    if (!fullname || !email || !feedback) {
      const error = new Error("All fields are required.");
      error.statusCode = 400;
      return next(error);
    }

    // dgsdsgdsfdfsvbxcbsfg

    const newContact = await Contact.create({ fullname, email, feedback });

    res.status(200).json({
      message: "Thank you for contacting us!",
      data: newContact,
    });
  } catch (error) {
    next(error);
  }
};
