import React, {useState} from "react";

const EditTodo = ({ todo }: { todo: { tid: number; description: string } }) => {
    
    const [description, setDescription] = useState<string>(todo.description);

    const updateDescription = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const body = { description };
            await fetch(`http://localhost:5001/todos/${todo.tid}`, {
                method: "PUT", 
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location.href = "/";
        } catch (err: any) {
            console.error(err.message);
        }
    }

    return (
    <>
        <button 
            type="button" 
            className="btn btn-warning" 
            data-toggle="modal" 
            data-target={`#id${todo.tid}`}
        >
            Edit
        </button>
    


        <div 
            className="modal" 
            id={`id${todo.tid}`}
            onClick={() => setDescription(todo.description)}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Todo</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <input type="text" 
                            className="form-control" 
                            value={description} 
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}>
                        </input>
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="button" 
                            className="btn btn-primary" 
                            onClick={updateDescription}
                            data-dismiss="modal"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </>
    )

    }

export default EditTodo
        
