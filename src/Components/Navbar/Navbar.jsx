import HomeIcon from '@mui/icons-material/Home';
import RssFeedIcon from '@mui/icons-material/RssFeed';
export default function Navbar()
{
    return (
        <>
        <nav class="max-w-full h-14 bg-zinc-900">
        <div class="flex justify-between items-center px-10">
            <img class="h-14 " src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1709235940/media/logo_gorqjb.png"alt="logo"/>
            <ul class="hidden md:flex mr-5 items-center gap-10 text-white justify-center font-bold">
                <li className="hover:border border-white p-2"><HomeIcon className='text-large'/></li>
                <li className="hover:border border-white p-2">About me</li> 
                <li className="hover:border border-white p-2">Contact</li>
                <li className="hover:border border-white p-2"><a href="https://amanrajgupta.hashnode.dev/" target="_blank" rel="noopener noreferrer">Blogs<RssFeedIcon/></a></li>
            
            </ul>
            <div class="md:hidden">
            <a class="text-5xl font-bold text-white " href="#">&#8801;</a>
            </div>
        </div>
        </nav>
        </>
    );
}
