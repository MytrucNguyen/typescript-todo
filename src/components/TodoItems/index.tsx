import classes from 'components/TodoItems/styles.module.css';

const TodoItems: React.FC <{text: string}> = (props) => {
    return (
        <li className={classes.item}>{props.text}</li>
    )
}

export default TodoItems;