import { ExpenseList } from "../components/ExpenseList"
import ExpenseModal from "../components/CreateExpenseModal"
import Navbar from "../components/Navbar"

export default function Home(){
    return(
        <>
            <header>
                <Navbar/>
            </header>

            <main className="border border-solid">
                    <section className="flex flex-col items-center bg-gray-500">
                        <ExpenseList/>
                        <ExpenseModal/>
                </section>
            </main>

        </>
    )
}