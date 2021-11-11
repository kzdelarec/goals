import './GoalsForm.css';
import { useState } from 'react';
import Goal from '../../entity/Goal';

const GoalsForm = (props) => {

    const[goal, setGoal] = useState("")

    const onGoalChangeHandler = (event) => {
        setGoal(event.target.value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        setGoal("");
        props.onGoalSave(new Goal(goal));
    }


    return(
    <div className="form-card">
        <form onSubmit={onFormSubmit}>
            <div className="form-input">
                <label>Enter goal</label>
                <input type="text" value={goal} onChange={onGoalChangeHandler}/>
            </div>
            <button type="submit" >Add goal</button>
        </form>
    </div>
    );
}

export default GoalsForm