import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import { Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<ExercisesList />} />
        <Route path="/edit/:id" element={<EditExercise />} />
        {/* <Route path="/edit/:id" element={<EditExercise {...props} /> }/> */}
        <Route path="/create" element={<CreateExercise />} /><Route path="/user" element={<CreateUser />} />
      </Routes>

      <br />
    </div>
  );
}

export default App;
