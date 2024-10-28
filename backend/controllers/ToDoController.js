const ToDoModel = require('../models/ToDoModel');

// Define the getToDo function
module.exports.getToDo = async (req, res) => {
    try {
        const toDo = await ToDoModel.find();
        res.send(toDo);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Define the saveToDo function
module.exports.saveToDo = async (req, res) => {
    const { text } = req.body;
    ToDoModel
        .create({ text })
        .then((data) => {
            console.log("Added Successfully...");
            console.log(data);
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({ message: error.message });
        });
};

// Define the updateToDo function
module.exports.updateToDo = async (req, res) => {
    const { id, text } = req.body;
    try {
        const updatedToDo = await ToDoModel.findByIdAndUpdate(id, { text }, { new: true });
        if (!updatedToDo) {
            return res.status(404).send({ message: 'ToDo not found' });
        }
        res.send(updatedToDo); // Send back the updated to-do
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
};

// Define the deleteToDo function
module.exports.deleteToDo = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedToDo = await ToDoModel.findByIdAndDelete(id);
      if (!deletedToDo) {
        return res.status(404).send({ message: "ToDo not found" });
      }
      res.send("Deleted Successfully...");
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: error.message });
    }
  };
