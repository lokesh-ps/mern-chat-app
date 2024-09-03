const asyncHandler = require("express-async-handler");
const Message = require("../models/messageModel");

const sendMessage = asyncHandler(async (req, res) => {
  const { chatId, content } = req.body;

  if (!content || !chatId) {
    console.log("Invalid data passed into request");
    res.sendStatus(400);
  }
  var newMessage = {
    sender: req.user._id,
    content: content,
    chat: chatId,
  };

  try {
    var message = await Message.create(newMessage);
    message = await message.populate("sender", "name pic").execPopulate;

    cons;
  } catch (error) {}
});

module.exports = { sendMessage };
