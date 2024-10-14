type ex4Props = {
    name?: string,
    age?: number
}

const Ex4 = ({name, age} : ex4Props) => {


    return (<div>
    {
        name && age ? `Hello ${name} of ${age} years.` : 'Hello default user'
    }
    </div>)
}

export default Ex4