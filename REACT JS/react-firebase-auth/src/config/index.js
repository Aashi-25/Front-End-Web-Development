export const registerFormControls = [
    {
        name: 'name',
        placeholder: 'Enter your name',
        componentType: 'input',
        type: 'text'
    },
    {
        name: 'email',
        placeholder: 'Enter your email',
        componentType: 'input',
        type: 'email'
    },
    {
        name: 'password',
        placeholder: 'Enter your password',
        componentType: 'input',
        type: 'password'
    },
    {
        name: 'gender',
        placeholder: 'select your gender',
        componentType: 'select',
        options: [
            { label: 'Male', value: 'M' },
            { label: 'Female', value: 'F' },
            { label: 'Other', value: 'O' },
        ],
    },
    {
        name: 'bio',
        placeholder: 'tell us about yourself',
        componentType: 'textarea',
        rows: 4,
    }
];

export const loginFormControls = [


    {
        name: 'email',
        placeholder: 'Enter your email',
        componentType: 'input',
        type: 'email'
    },
    {
        name: 'password',
        placeholder: 'Enter your password',
        componentType: 'input',
        type: 'password'
    }

]