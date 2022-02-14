import Todo from 'models/todo'; 
import TodoItems from 'components/TodoItems';
import classes from 'components/Todos/styles.module.css'

const Todos: React.FC <{ items: Todo[] }> = (props) => {
    return (
        <ul className={classes.todos}>
            {props.items.map((item) => (
                <TodoItems key={item.id} text={item.text} />
            ))}
        </ul>
    )
}
export default Todos;