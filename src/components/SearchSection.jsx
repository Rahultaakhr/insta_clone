import React from "react";
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react";

function SearchSection() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
       <div className=" bg-transparent">
            <Button
                type="button"
                onClick={handleOpen}
                className="  text-black"
            >
                <li className="  text-[20px] font-medium"><i className="  text-[25px] mr-2 fa-solid fa-magnifying-glass"></i> <span className=" hidden xl:inline-block">Search</span></li>

            </Button>
            <Dialog open={open} handler={handleOpen} className=" ">
                <DialogBody className="">
                    <div className="mb-3">
                        <input
                            type="text"
                            name="name"
                            placeholder='Enter your name'


                            className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300'
                        />
                    </div>
              

              


                    <div className="">
                        <Button
                            type="button"
                            onClick={() => {
                                handleOpen()
                                
                            }}
                            className="w-full px-4 py-3 text-center text-gray-100 bg-purple-500 border border-transparent dark:border-gray-700 rounded-lg"
                        >
                            Search
                        </Button>
                    </div>

                </DialogBody>
            </Dialog>
        </div>
    )
}

export default SearchSection