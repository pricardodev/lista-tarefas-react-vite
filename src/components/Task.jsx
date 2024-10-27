import { ChevronRight, Trash } from 'lucide-react';
import PropTypes from 'prop-types';
function Task(props) {
    return (
      <h1>
        {props.tasks.map((task) => (
          <p key={task.id} className='flex gap-2 p-1'>
            <button 
            onClick={() => props.onTaskClick(task.id)} 
            className={`p-1 w-full text-left font-bold bg-slate-300 rounded shadow-orange-100 ${task.completed && "line-through"}`}>
                <span className='mr-1'>
                    {task.completed ? (<span className='text-green-500'>✓</span>) : (<span className='text-red-500'>✗</span>)}
                </span>
                {task.title}
            </button>
            <button className='font-bold bg-slate-300 rounded shadow-orange-100'><ChevronRight /></button>
            <button 
            onClick={() => props.removeTask(task.id)}
            className='font-bold bg-red-300 rounded shadow-orange-100'>
                <Trash />
            </button>

          </p> 
        ))}
      </h1>
    );
  }

  Task.propTypes = {
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        completed: PropTypes.bool
      })
    ).isRequired,
    onTaskClick: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired
  };

  
  export default Task;
  