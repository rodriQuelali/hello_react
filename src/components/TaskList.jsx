
function TaskList(props) {
    const { tasks } = props;
    console.log("props", props);
  return (
    <div>
        {tasks.map( task => <div key={task}>{task}</div>)}
    </div>
  );
}

export default TaskList;