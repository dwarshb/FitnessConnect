const FilterHeader = ({ title, iconSrc }) => (
    <div className="border-solid flex flex-row justify-center gap-3 items-center border-black border-2 rounded-[20px] mt-4">
        <div className={`text-center text-4xl font-sans my-1`}>{title}</div>
        <img src={iconSrc} id="Polygon" className="w-6 shrink-0" alt={`${title} Icon`} />
    </div>
);

const FilterSelect = ({ onChange, options }) => (
    <select onChange={onChange}>
        <option value="" disabled selected>{options.title}</option>
        {options.values.map(value => <option key={value} value={value}>{value.replace("_", " ")}</option>)}
    </select>
);

function DropdownFilters(props) {
    const MUSCLES = {
        title: "Target Muscle",
        values: ["abdominals", "abductors", "adductors", "biceps", "calves", "chest", "forearms", "glutes", "hamstrings", "lats", "lower_back", "neck", "quadriceps", "traps", "triceps"]
    };
    const LEVELS = {
        title: "Difficulty Level",
        values: ["beginner", "intermediate", "advanced"]
    };
    const TYPES = {
        title: "Exercise Type",
        values: ["cardio", "olympic_weightlifitng", "plyometrics", "strength", "stretching", "strongman"]
    };

    return (
        <div className="flex flex-col w-full h-[823px]">
            <FilterHeader title="Target Muscle" iconSrc="https://file.rendit.io/n/tCzCuohEic45cyEh0CSp.svg" />
            <FilterHeader title="Difficulty Level" iconSrc="https://file.rendit.io/n/JD7CkYgzLnQfZHsYc3BD.svg" />
            <FilterHeader title="Exercise Type" iconSrc="https://file.rendit.io/n/4wc9wmdQ3KVVPC3NhwPb.svg" />
            
            <div className="dropdown-filters mt-4">
                <FilterSelect onChange={(e) => props.setTargetMuscle(e.target.value)} options={MUSCLES} />
                <FilterSelect onChange={(e) => props.setDifficultyLevel(e.target.value)} options={LEVELS} />
                <FilterSelect onChange={(e) => props.setExerciseType(e.target.value)} options={TYPES} />
            </div>
        </div>
    );
}

export default DropdownFilters;
