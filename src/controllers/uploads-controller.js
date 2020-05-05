exports.getImage = (req, res, next) => {
  try {
    const { id } = req.params;
    res.sendFile(`${process.cwd()}/public/${id}.png`, (err) => {
      if (err) next(err);
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
