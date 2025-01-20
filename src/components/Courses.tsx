import React from "react";
import { useViewContext } from "../context/ViewContext";

const Courses: React.FC = () => {
    const { courses } = useViewContext();

    return (
        <div className="p-4 grid grid-cols-2 gap-x-6 gap-y-6  overflow-y-auto">
            {courses.map((course) => (
                <div key={course.courseID} className="flex h-48">
                    <img src={course.framePath} alt={course.title} className="rounded-lg flex-shrink" />
                    <div className="flex-grow">
                        <h2 className="text-xl font-bold m-0">{course.title}</h2>
                        <p className="text-sm text-gray-500 mt-1">
                            Enrolled on <span className="font-bold">{course.startDate}</span>&nbsp;&nbsp;
                            Due Date <span className="font-bold">{course.dueDate}</span>
                        </p>
                        <p className="text-sm mt-2">{course.description}</p>
                        <div className="flex items-center justify-between mt-4">
                            <div className="bg-gray-200 h-7 text-center px-2 w-24 rounded flex items-center justify-center">
                                {course.nrVideos} Videos
                            </div>
                            <div className="flex items-center border-2 border-gray-400 border-solid h-7 rounded mx-4 w-52">
                                <div className="bg-green-500 h-full " style={{ width: `${course.progress * 100}%` }}></div>
                                <span className="text-sm ml-2">{Math.round(course.progress * 100)}%</span>
                            </div>
                            <button className="bg-blue-500 h-7 text-white px-3 py-1 rounded">Resume</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Courses; 