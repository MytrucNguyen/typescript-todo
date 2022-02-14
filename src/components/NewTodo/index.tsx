import React from "react";

const NewTodo = () => {
    const submitHandler = (e: React.FormEvent) => {

    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="text"> Todo Text</label>
            <input type='text' id='text'/>
            <button>Add Todo</button>
        </form>
    )
}
export default NewTodo;