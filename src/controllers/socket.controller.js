const SocketData = require("../models/socketControls.model");

async function createNewSoket(req, res) {
  const { hour, second, mins, current, placeholder, peroid } = req.body;

  try {
    if (!hour || !second || !mins || !current || !placeholder || !peroid) {
      return res.status(400).send({ message: "all field are required! " });
    }
    const newData = await SocketData.create(req.body);
    if (!newData)
      return res.status(500).send({ message: "error something went wrong!" });

    await newData.save();
    res.status(201).send({ message: "created successfully!", data: newData });
  } catch (error) {
    console.log("Error:", error);
  }
}

async function updateSocket(req, res) {
  const { id, current, ...updateFields } = req.body;
  try {
    if (!id) {
      return res.status(400).send({ message: "all field are required! " });
    }

    const updatedData = await SocketData.findByIdAndUpdate(id, updateFields, {
      new: true,
    });
    if (!updatedData)
      return res.status(500).send({ message: "error something went wrong!" });

    await updatedData.save();
    res
      .status(200)
      .send({ message: "updated successfully!", data: updatedData });
  } catch (error) {
    console.log("Error:", error);
  }
}

async function updateControl(req, res) {
  const { id, current } = req.body;

  try {
    if (!id || !current) {
      return res.status(400).send({ message: "all field are required! " });
    }

    const updatedData = await SocketData.findByIdAndUpdate(
      id,
      { $set: { current } },
      { new: true }
    );
    if (!updatedData)
      return res.status(500).send({ message: "error something went wrong!" });

    await updatedData.save();
    res
      .status(200)
      .send({ message: "updated successfully!", data: updatedData });
  } catch (error) {
    console.log("Error:", error);
  }
}

module.exports = { createNewSoket, updateSocket, updateControl };
