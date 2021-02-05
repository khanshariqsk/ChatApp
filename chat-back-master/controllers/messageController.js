const mongoose = require("mongoose");
const Message = mongoose.model("Message");

exports.getMessage = async (req, res) => {
  const { user, chatroom } = req.body;
  const message = await Message.find({
    user,
    chatroom,
  });

  res.json({
    message,
  });
};

exports.getAllMessage = async (req, res) => {
  const AllMessage = await Message.find({});

  res.json(AllMessage);
};
