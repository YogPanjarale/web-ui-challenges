const EyeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
</svg>
)
const BookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
</svg>
)

const Card = ({title, description, image,views,readTime}) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg drop-shadow-2xl">
  <img className="w-full rounded-md" src={image} alt={image}/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-3 ">{title}</div>
    <p className="text-gray-700 text-sm">
     {description}
    </p>
  </div>
  <div className="px-6 py-2 flex flex-row text-gray-500">
    <div className="mr-2 flex flex-row justify-center"><EyeIcon/> <span className="px-1 top-2">{views} views</span></div>
    <div className="mx-2 flex flex-row justify-center  "><BookIcon/> 
    <span className="px-1 top-2">{readTime} min read</span></div>
  </div>
</div>
    );
    }

const e = () => (
    <>
    <div className="flex justify-center items-center h-screen ">
    <Card title="Why you should sleep now ?" description="You should sleep now cause it is very late and you should not be awake this late at night it is getting very late like 1 am so not very healthy for you" image={"https://source.unsplash.com/1600x900/?sleep,night"} views="108" readTime={3}/>
    </div>
    </>);
export default e;
