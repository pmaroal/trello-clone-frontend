// src/components/molecules/Task.tsx

import React from "react";
import TrashIcon from "../atoms/TrashIcon";

interface TaskProps {
  title: string;
  content: string;
  onDelete: () => void;
}

const Task: React.FC<TaskProps> = ({ title, content, onDelete }) => {
  return (
    <div className="task bg-white p-4 rounded-md shadow-md flex justify-between items-start">
      <div className="task-content flex-1">
        <h3 className="task-title text-lg font-semibold">{title}</h3>
        <p className="task-description text-sm text-gray-500">{content}</p>
      </div>
      <button onClick={onDelete} className="delete-button p-2 hover:bg-gray-200 rounded-full">
        <TrashIcon size={20} color="gray" />
      </button>
    </div>
  );
};

export default Task;
