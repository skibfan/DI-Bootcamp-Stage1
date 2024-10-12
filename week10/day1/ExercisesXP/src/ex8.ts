

const getAction = (userrole: string):string => {
    switch(userrole) {
        case 'admin': 
            return 'Manage users and settings'
        case 'editor': 
            return 'Edit content'
        case 'viewer': 
            return 'View content'
        case 'guest':
            return 'Limited access'
        default:
            return 'Invalid role'
    }
}


console.log(getAction('adminss'));

