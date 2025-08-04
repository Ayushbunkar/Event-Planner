import mongoose from "mongoose";

const deactivationSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    reason: {
      type: String,
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
// sdv

const Deactivation = mongoose.model("Deactivation", deactivationSchema);
export default Deactivation;