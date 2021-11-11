import GoalsForm from "../form/GoalsForm";
import "./Wrapper.css";
import { useState } from "react";
import GoalsList from "../goals/GoalsList";

const goalList = [];

const Wrapper = () => {
  const [goals, setGoals] = useState(goalList);

  const onGoalSaveHandler = (goal) => {
    console.log(goal);
    setGoals((previous) => {
      return [goal, ...previous];
    });
    console.log(goals);
  };

  const onRemoveGoalHandler = (goal) => {
    setGoals((prevGoals) => {
      console.log(prevGoals);
      const updatedGoals = prevGoals.filter(
        (oldGoal) => oldGoal.id !== goal.id
      );
      return updatedGoals;
    });
  };

  return (
    <div className="wrapper">
      <GoalsForm onGoalSave={onGoalSaveHandler}></GoalsForm>
      <GoalsList goals={goals} onRemoveGoal={onRemoveGoalHandler}></GoalsList>
    </div>
  );
};

export default Wrapper;
