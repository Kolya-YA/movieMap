import { LuFilm, LuVideo, LuClapperboard } from 'react-icons/lu';

const Loading = () => (
    <div className="flex flex-col justify-center items-center h-screen text-white">
        <div className="text-4xl font-bold mb-8">Loading</div>
        <div className="flex space-x-4 text-5xl">
            <LuFilm className="animate-bounce" style={{ animationDelay: '0s' }} />
            <LuVideo className="animate-bounce" style={{ animationDelay: '0.2s' }} />
            <LuClapperboard className="animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>
    </div>
);

export default Loading;
