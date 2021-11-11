import "./GoalItem.css";

const GoalItem = (props) => {
  
    const onRemoveClickHandler = () => {
        props.onRemoveGoal(props.goal)
    };

  return (
    <li className="goal-item">
      <span>{props.goal.goal}</span>
      <span className="remove-item" onClick={onRemoveClickHandler}>×</span>
    </li>
  );
};

export default GoalItem;
