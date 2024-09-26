

export const FormComponent = (props) => {
    console.log('wow => ',props);
    const myrestr = ['Nuts free', 'Lactose', 'Vegan']
    return (<div id='mycomp'>
    <h2>Entered Information:</h2>
    <p>Your name: {props.inputs.first_name} {props.inputs.last_name}</p>
    <p>Your age: {props.inputs.age}</p>
    <p>Your gender: {props.inputs.gender}</p>
    <p>Your Destination: {props.inputs.destination}</p>
    <div>Your dietary restrictions: {myrestr.map(elem => {
        return <p className="diet" key={elem}>**{elem} : {props.inputs.dietary_restrictions.includes(elem) ? "Yes" : "No"}</p>
    })}</div>
    </div>)
}