import { useEffect, useState } from "react";

const Vid = () => {
    const [screen,setScreen] = useState({width:0,height:0});
    useEffect(() => {
        if (window==undefined) {
            setScreen({ width: 0, height: 0 }) 
        }
        else {
            setScreen({ width: window.innerWidth, height: window.innerHeight })
        }
    }, []);
	return (
		<div
			className="min-h-screen flex justify-center items-center"
			dangerouslySetInnerHTML={{
				__html: `<iframe width="${screen.width}" height="${screen.height}" src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
			}}
		></div>
	);
};
export default Vid;
