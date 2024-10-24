import React, { useState } from 'react'

const ReactMemo = React.memo(({skill,setSkill,AddSkill,skillList}) => {
    return (
        <div>
            <h1>React.memo</h1>
            <input type='text' value={skill} onChange={(e) => setSkill(e.target.value)} />
            <button onClick={AddSkill}>Add Skill</button>
            <ul>
                {skillList.map((e, i) => <li key={i}>{e}</li>)}
            </ul>
        </div>
    )
})

export default ReactMemo