import Subtitle from "./subtitle";

const Features = () => {
    return ( 
        <div className="max-w-3xl mt-24 justify-center md:text-center text-gray-900 dark:text-[#D3D3D4]">
            <Subtitle
                pill="Features"
            />
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Features that makes the magic happen</p>

            <div className="mt-8 md:mt-16" >
                <ul className="grid max-w-xl grid-cols-1 gap-x-10 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16" >
                    <li>
                        <dt className="text-base font-semibold dark:text-[#fff]">
                            Create Documents
                        </dt>
                        <dd className="mt-2 text-base leading-7">
                            Effortlessly craft documents using customizable templates and formatting options to suit your needs.
                        </dd>
                    </li>
                    <li>
                        <dt className="text-base font-semibold dark:text-[#fff]">
                            Structurize Documents
                        </dt>
                        <dd className="mt-2 text-base leading-7">
                            Organize your content effectively with intuitive tools like headings, bullet points, and indentation for better readability.
                        </dd>
                    </li>
                    <li>
                        <dt className="text-base font-semibold dark:text-[#fff]">
                            Publish Online
                        </dt>
                        <dd className="mt-2 text-base leading-7">
                            Share your documents with the world by sharing link, also with real time update.
                        </dd>
                    </li>
                    <li>
                        <dt className="text-base font-semibold dark:text-[#fff]">
                            Add Collaborators
                        </dt>
                        <dd className="mt-2 text-base leading-7">
                            Faster teamwork by inviting others to collaborate in real-time, allowing simultaneous editing.
                        </dd>
                    </li>
                </ul>
            </div>

            
        </div>
     
     );
}
 
export default Features;