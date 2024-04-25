export const config = {
    // STG: {
    //     host: 'https://gorest.co.in/public/v2',
    //     token: '',
    //     username: 'Tenali Ramakrishna',
    //     gender: 'male',
    //     status: 'active'
    // },
    // PROD: {
    //     host: 'https://gorest.co.in/public/v2',
    //     token: '',
    //     username: 'Tenali Ramakrishna',
    //     gender: 'male',
    //     status: 'active'
    // },
    BOOKS_DEV: {
        host: 'https://localhost:50556'    
    },
    BOOKS_STG: {
        host: 'https://localhost:50557'    
    },
    BOOKS_PRD: {
        host: 'https://localhost:50558'    
    }
}

global.executionVariables = {}