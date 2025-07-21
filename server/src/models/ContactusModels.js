import mongoose from "mongoose";

const contactusSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    feedback: {
      type: String,
      required: true,
    },

  },
  
  { timestamps: true }
);

const Contactus = mongoose.model("Contactus", contactusSchema);

export default Contactus;