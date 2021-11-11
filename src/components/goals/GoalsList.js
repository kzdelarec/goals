import GoalItem from "./GoalItem";
import "./GoalsList.css";


const GoalsList= (props) => {

    const onRemoveGoal = (goal) => {
        props.onRemoveGoal(goal);
    };

    if(props.goals.length > 0) {
        return  <ul>
            {(props.goals.map(goal => {
            return <GoalItem goal={goal} key={goal.id} onRemoveGoal={onRemoveGoal}></GoalItem>
        }))}
        </ul>;
    };
    return (
        <p style={{textAlign: "center"}}>Nothing to show.</p>
    )
};

export default GoalsList;