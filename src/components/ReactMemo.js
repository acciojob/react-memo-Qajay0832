import React, { useState } from 'react'

const ReactMemo = React.memo(({skill,setSkill,AddSkill,skillList}) => {
    return (
        <div>
            <h1>React.memo</h1>
            <input id='skill-input' type='text' value={skill} onChange={(e) => setSkill(e.target.value)} />
            <button id='skill-btn' onClick={AddSkill}>Add Skill</button>
            <ul id='item-jumbotron'>
                {skillList.map((e, i) => <li  key={i}>{e}</li>)}
            </ul>
        </div>
    )
})

export default ReactMemo