function Plan(props){
    return <>
        
          <li className="col-sm-9">{props.value}</li>
          <button className="btn btn-danger my-2 offset-1 col-sm-2" onClick={()=>{props.sendData(props.id)}}>X</button>
        
    </>
}

export default Plan;