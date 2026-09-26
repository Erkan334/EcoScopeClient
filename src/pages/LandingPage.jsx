import Navbar from "../components/Navbar"
import { Button } from "@mui/material"
import image from "../assets/images/economyStock.jpg"
import { useNavigate } from "react-router"

export default function LandingPage() {

    const navigate = useNavigate();

    return (
        <>
            <header>
            </header>

            <main className="bg-[#0f172a]">

                <section className=" w-full min-h-[250px] flex flex-col justify-center items-center text-center px-4 py-16 md:py-20">
                    <h1 className=" text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                        EcoScope
                    </h1>

                    <p className=" mt-4 max-w-xl text-base sm:text-lg md:text-xl text-slate-300">Take control of your finances.</p>
                </section>


                <section className="w-full flex justify-center px-4 pb-12 md:px-8 md:pb-20">

                    <article className=" w-full max-w-6xl flex flex-col lg:flex-row overflow-hidden rounded-4xl">

                        <section className=" w-full lg:w-1/2 flex flex-col justify-between gap-8 p-6 sm:p-8 md:p-10 text-white bg-[#3b0764]">

                            <section>
                                <h2 className=" text-3xl sm:text-4xl font-bold pb-4">Track your economy</h2>

                                <p className=" text-base sm:text-lg md:text-xl leading-relaxed">
                                    EcoScope is a simple and intuitive economy
                                    tracker designed to help you understand and
                                    manage your finances. Track your income and
                                    expenses, monitor your spending habits, and
                                    get a clear overview of your financial
                                    situation — all in one place.
                                </p>
                            </section>


                            <section className=" w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:items-end">

                                <section className=" flex flex-col gap-2 w-full sm:w-auto"> 

                                    <p className="text-sm sm:text-base">Don't have an account?</p>

                                    <Button variant="contained" fullWidth onClick={() => navigate("/register")}>Register</Button>
                                </section>

                                <Button sx={{color: "white", borderColor: "white", "&:hover": {borderColor: "blue"}}}variant="outlined" onClick={() => navigate("/home")} className="w-full sm:w-auto">To Dashboard</Button>

                            </section>

                        </section>


                        <section className=" w-full lg:w-1/2 min-h-[250px] sm:min-h-[350px] lg:min-h-[500px]">
                            <img src={image} alt="Person tracking economy" className="w-full h-full object-cover"/>
                        </section>

                    </article>

                </section>

            </main>
        </>
    )
}

