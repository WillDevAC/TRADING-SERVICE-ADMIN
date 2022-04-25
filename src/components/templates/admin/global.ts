import tw from 'tailwind-styled-components'


export const Wrapper = tw.div `
    p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700
`

export const Input = tw.input `
    bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white
`

export const Label = tw.label `
    block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300
`