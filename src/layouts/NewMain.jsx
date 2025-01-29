import Student from "../components/Student"; 

export default function NewMain(props) {
    return (

      <>
          <div>

            <Student name={props?.name} age={props.age}></Student>
            <hr />

{/*             <span>Name of Student : {props?.name}</span>
            <br />
            <span>Age of Student : {props?.age}</span> */}
          </div>
      </>
    )
  }