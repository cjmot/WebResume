export default function Footer() {

    return (
        <>
            <hr className='w-full border-t-2'/>
            <div className='flex flex-col h-20 w-screen items-center justify-between p-4'>
                <a href='https://github.com/cjmot/WebResume/' className='hover:underline underline-offset-2'>Source</a>
                <p className='text-gray-500 text-sm font-semibold'>2024</p>
            </div>
        </>
    )
}