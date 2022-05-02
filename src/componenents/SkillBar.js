import { Typography} from "@mui/material";

function SkillBar({name,skill,color}) {
  return (
    <>
  <Typography>{name}</Typography>
    <div className ="outer">
    <div style={{width:skill,backgroundColor:color}} className="skills">{skill}</div>
  
  </div>
  </>  
  )
}

export default SkillBar