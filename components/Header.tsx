import React from 'react'
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';

function Header() {
    return (
        <header className='sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white'>
            
            <Button
                color="gray"
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className= "h-20 w-20 border-0"
            >
                <Icon name="menu" size="3xl"/>
            </Button>

            <Icon name="description" size="5xl" color="blue" />
        

            <div className='mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-sm'>
                <Icon
                    name="search"
                    size="3xl"
                    color="gray"
                />
                <input
                    className='flex-grow px-5 text-base bg-transparent outline-none'
                    type="text"
                    placeholder='Search'
                />
            </div>

            <Button
                color='gray'
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="ml-5 md:ml-20 h-20 w-20 border-0"
            >
                <Icon name="apps" size="3xl" color="gray" />
            </Button>

            <img
                loading='lazy'
                onClick={() => console.log("Sign out")}
                className="cursor-pointer h-12 w-12 rounded-full ml-2"
                src="../logo.png"
                alt="user"
            />


        </header>
    )
}

export default Header