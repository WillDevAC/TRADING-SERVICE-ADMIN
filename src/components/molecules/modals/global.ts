import tw from 'tailwind-styled-components'

export const Modal = tw.div `
    min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover
`

export const ModalOpacity = tw.div `
    absolute bg-black opacity-90 inset-0 z-0
`

export const ModalWrapper = tw.div `
    w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white
`

export const ModalBody = tw.div `
    p-5 flex-auto
`

export const ModalFooter = tw.div `
    p-3  mt-2 text-center space-x-4 md:block
`

export const ButtonAccept = tw.button `
    mb-2 md:mb-0 bg-blue-900 border border-blue-900 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-800

`   

export const ButtonDecline = tw.button `
    mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100    
`

export const Label = tw.label `
    block text-sm font-medium leading-5 mb-1 text-gray-700
`

export const Input = tw.input `
    form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full
`

export const Select = tw.select `
    form-select  shadow-sm block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5 transition ease-in-out duration-150
`

export const Wrapper = tw.div `
    border-r border-t rounded border-b border-l border-gray-400 lg:w-full lg:border-l-1 lg:rounded lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal
`