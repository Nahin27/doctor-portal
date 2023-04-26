import Button from "./Button"
import Cards from "./Cards"

const Landing = () => {
    return (
        <>
            <section className="landing flex mt-32 items-center py-32" style={{backgroundImage: "url(/images/landing-bg.png)", backgroundSize: "cover"}}>

                <div className="text-section">
                    <h1 className="text-5xl font-bold text-doctor-black my-10">Your New Smile Starts <br />Here</h1>
                    <p className="text-doctor-black my-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <Button text="Get Started"/>
                </div>

                <div className="img-section flex-none">
                    <img src="/images/chair.svg" alt="chair" />
                </div>

            </section>
            <Cards />
        </>
    )
}

export default Landing