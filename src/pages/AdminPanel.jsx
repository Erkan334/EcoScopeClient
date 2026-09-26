import UserList from "../components/UserList"

export default function AdminPanel(){
    return(
            <main className="w-full flex flex-col items-center p-4 gap-5 bg-[#0f172a]">
                <h1 className="text-4xl text-white">Userlist</h1>
                <section className="sm:w-1/2 md:w-full">
                    <UserList/>
                </section>
            </main>
    )
}