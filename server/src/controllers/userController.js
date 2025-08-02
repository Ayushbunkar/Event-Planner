export const GetProfile = async (req, res, next) => {
  try {
    const currentUser = req.user;
    if (!currentUser) {
      const error = new Error("User Not Found !! Login Again");
      error.statusCode = 401;
      return next(error);
    }

    res.status(200).json({
      message: `Welcome back ${currentUser.name}`,
      data: currentUser,
    });
  } catch (error) {
    next(error);
  }
};
//asfs

export const UpdateProfile = async (req, res, next) => {
  try {
    const currentUser = req.user;
    const { name, phone, gender, occupation, address, city, state, district, } = req.body;
    if (!currentUser) {
      const error = new Error("User Not Found !! Login Again");
      error.statusCode = 401;
      return next(error);
    }

    const photo = req.file;
  } catch (error) {
    next(error);
  }
};