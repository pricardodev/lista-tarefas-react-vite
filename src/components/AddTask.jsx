function AddTask() {
    return (
        <div className="flex flex-col gap-2">
            <input type="text" placeholder="Adicione uma nova tarefa" className="w-full p-1 border" />
            <input type="text" placeholder="Descrição da tarefa" className="w-full p-1 border" />
            <button className="font-bold bg-slate-300 rounded shadow-orange-100">Add</button>
        </div>
    )
}

export default AddTask