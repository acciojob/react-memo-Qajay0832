import React ,{useState} from 'react'
import UseMemo from './UseMemo'
import ReactMemo from './ReactMemo'


const App = () => {
  const [count, setCount] = useState(0);
  const handleCount=()=>{
    setCount(count+1);
  }
  const [skill, setSkill] = useState('');
    const [skillList, setSkillList] = useState([]);
    const AddSkill = () => {
        if (skill.trim().length > 5 && !skillList.includes(skill.trim())

        ) { setSkillList((prev) => [...prev, skill]) } else { }
    }
  return (
    <div>
      <UseMemo />
      <div>
        <p>{`Count: ${count}`}</p>
        <button onClick={handleCount}>+</button>
      </div>
      <ReactMemo skill={skill} setSkill={setSkill} AddSkill={AddSkill} skillList={skillList} />
    </div>
  )
}

export default App

