
export default function Header() {

    return (
        <>
            <div className='flex flex-row h-16 w-screen p-5'>
                <div className='w-1/2 flex flex-row items-center'>
                    <a href='/' className='text-xl font-semibold'>Home</a>
                </div>
                <div className='w-1/2 flex flex-row items-center justify-end space-x-4'>
                    <a href='/kingsland' className='text-lg hover:underline underline-offset-2'>Kingsland</a>
                    <a href='/skills' className='text-lg hover:underline underline-offset-2'>Skills</a>
                    <a href='/projects' className='text-lg hover:underline underline-offset-2'>Projects</a>
                </div>
            </div>
            <hr className='w-full border-t-2'/>
        </>
    )
}
