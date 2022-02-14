import styles from 'components/TodoItems/styles.module.css';

const TodoItems: React.FC <{text: string}> = (props) => {
    return (
        <li>{props.text}</li>
    )
}

export default TodoItems;