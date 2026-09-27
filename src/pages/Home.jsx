import { ExpenseList } from "../components/ExpenseList"
import Navbar from "../components/Navbar"

export default function Home(){
    return(
        <>
            <header>
            </header>

            <main className="border border-solid h-[90vh] bg-[#0f172a]">
                    <section className="flex flex-col items-center gap-25">
                        <ExpenseList/>
                        {/* <ExpensePieChart/> */}
                    </section>
            </main>

        </>
    )
}