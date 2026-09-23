import { ExpenseList } from "../components/ExpenseList"
import Navbar from "../components/Navbar"
import ExpensePieChart from "../components/ExpensePieChart"

export default function Home(){
    return(
        <>
            <header>
                <Navbar/>
            </header>

            <main className="border border-solid">
                    <section className="flex flex-col items-center bg-gray-500 gap-25">
                        <ExpenseList/>
                        <ExpensePieChart/>
                    </section>
            </main>

        </>
    )
}