import cobaCoba from "../assets/snowflakes.png"

function Sponsorships () {

    const cardData = [
        { id: 1, imageSrc: cobaCoba },
        { id: 2, imageSrc: cobaCoba },
        { id: 3, imageSrc: cobaCoba },
        { id: 4, imageSrc: cobaCoba },
        { id: 5, imageSrc: cobaCoba },
        { id: 6, imageSrc: cobaCoba },
        { id: 7, imageSrc: cobaCoba },
        { id: 8, imageSrc: cobaCoba }
    ];

    const CardContent = ({ imageSrc }) => (
        <div className=" max-w- bg-red-100  p-4 box-border ">
            <div className="w-full h-full bg-primary-light rounded-lg">
                <img 
                src={imageSrc} 
                alt="Reviewer Content" 
                className="w-full h-full object-cover rounded-md"
                />
            </div>
        </div>
    );

    return (
        <div className="relative w-screen h-[75vh] bg-primary-light overflow-x-hidden flex items-center">
            <div className="w-full h-full bg-accent flex flex-col items-center py-8">
                <h1 className="font-poppins text-fill-gradient bg-gradient-to-r from-primary  to-secondary font-bold text-4xl text-primary-light">Sponsorships</h1>
                <div className="flex flex-col h-full gap-4 mt-8 ">
                    
                </div>
            </div>
        </div>
    )
}

export default Sponsorships;