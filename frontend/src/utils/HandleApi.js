import axios from 'axios';

const baseurl = "http://localhost:5000";

const getAllToDo = (setToDo) => {
  axios
    .get(baseurl)
    .then(({ data }) => {
      console.log('data ---> ', data);
      setToDo(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

// Define the addToDo function
const addToDo = (text,setText, setToDo) => {
  axios
    .post(`${baseurl}/save`, { text })
    .then(({ data }) => {
      console.log("Added new to-do:", data);
      setText("")
      getAllToDo(setToDo)
    })
    .catch((error) => {
      console.error("Error adding to-do:", error);
    });
};

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    axios
       .put(`${baseurl}/update`, { id: toDoId, text })
      .then(({ data }) => {
        console.log("Updated to-do:", data); // Log the response data
        setText("");
        setIsUpdating(false);
        getAllToDo(setToDo);
      })
      .catch((error) => {
        console.error("Error updating to-do:", error);
      });
};

const deleteToDo = (_id, setToDo) => {
  axios
    .delete(`${baseurl}/delete/${_id}`)
    .then(({ data }) => {
      console.log("Deleted to-do:", data); // Log the response data
      getAllToDo(setToDo); // Refresh the to-do list after deletion
    })
    .catch((error) => {
      console.error("Error deleting to-do:", error);
    });
};

  

export { getAllToDo, addToDo,updateToDo,deleteToDo };
