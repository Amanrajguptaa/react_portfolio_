export default function Contact(){
    return (
        <>
        <section class="pb-30 shadow-lg shadow-blue-300/50">
        <div class="px-10 my-10 flex flex-col justify-center items-center">
            <h1 class="text-4xl md:text-5xl font-bold">CONNECT WITH ME!</h1>
            <p class="mt-5">Let's bridge the digital expanse together - reach out, connect, and let's create something extraordinary!</p>
            <div class="mt-20 flex items-center justify-center gap-20 flex-wrap pb-5">
                <div class="flex justify-center items-center">
                    <a href="#"><img class="p-5" src="/src/media/phone_logo.png" alt=""/></a>
                    <p>+91-9262734111</p>
                </div>
                    <a href="https://www.linkedin.com/in/aman-raj-gupta-/" target="_blank"><img class="p-5" src="/src/media/linkedin_logo.png" alt=""/></a>
                    <a href="https://github.com/Amanrajguptaa" target="_blank"><img class="p-5" src="/src/media/github_logo.png" alt=""/></a>
                    <a href="mailto:rajaman9355@gmail.com"><img class="p-5" src="/src/media/gmail_logo.png" alt=""/></a>
            </div>
        </div>
        </section>
        </>
    );
}