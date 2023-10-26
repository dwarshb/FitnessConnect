import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DropdownFilters from './dropdownfilters';
import GenerateButton from './generatebutton';

function ExerciseGenerator() {
    const [targetMuscle, setTargetMuscle] = useState('');
    const [difficultyLevel, setDifficultyLevel] = useState('');
    const [exerciseType, setExerciseType] = useState('');
    const [exercises, setExercises] = useState([]);
    const [selectedExercise, setSelectedExercise] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('https://api-ninjas.com/api/exercises');
            setExercises(response.data);
        }
        fetchData();
    }, []);

    const generateExercise = () => {
        let filteredExercises = exercises;

        if (targetMuscle) {
            filteredExercises = filteredExercises.filter(exercise => exercise.muscle === targetMuscle);
        }

        if (difficultyLevel) {
            filteredExercises = filteredExercises.filter(exercise => exercise.difficulty === difficultyLevel);
        }

        if (exerciseType) {
            filteredExercises = filteredExercises.filter(exercise => exercise.type === exerciseType);
        }

        const randomExercise = filteredExercises[Math.floor(Math.random() * filteredExercises.length)];
        setSelectedExercise(randomExercise);
    }

    return (
        <div className="exercise-generator">
            <DropdownFilters
                setTargetMuscle={setTargetMuscle}
                setDifficultyLevel={setDifficultyLevel}
                setExerciseType={setExerciseType}
            />
            <GenerateButton onClick={generateExercise} />
            {selectedExercise && <div>{selectedExercise.name}</div>}
        </div>
    );
}

export default ExerciseGenerator;
