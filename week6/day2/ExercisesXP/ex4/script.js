function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// A: first we enter the asyncCall() function and log('calling'). 
// then we unwrap using await the resolveAfter2Seconds() function into a variable. 
// the response from await call to resolveAfter2Seconds() will be the value inside resolve()
// thus after 2 seconds we could see log('resolved')