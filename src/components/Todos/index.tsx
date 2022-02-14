import Todo from 'models/todo'; 
import TodoItems from 'components/TodoItems';

const Todos: React.FC <{ items: Todo[] }> = (props) => {
    return (
        <ul>
            {props.items.map((item) => (
                <TodoItems key={item.id} text={item.text} />
            ))}
        </ul>
    )
}
export default Todos;