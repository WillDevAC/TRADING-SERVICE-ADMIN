import tw from 'tailwind-styled-components'

export const Input = tw.input `
form-control
block
w-full
px-3
py-1.5
text-base
font-normal
text-gray-700
bg-white bg-clip-padding
border border-solid border-gray-300
rounded
transition
ease-in-out
m-0
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
`
export const Label = tw.label `
    block text-sm font-medium leading-5 mb-1 text-gray-700
`

export const Select = tw.select `
w-full p-2 border border-gray-300 rounded mt-1
`