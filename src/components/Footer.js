const Footer = () => {
    return (
        <div className="mt-48 py-8" style={{backgroundImage: "url(/images/footer-bg.png)", backgroundSize: "cover"}}>
        <footer className="footer flex justify-between">            
            <div>
                <span className="footer-title text-lg">Services</span> 
                <a className="link link-hover">Emergecny Checkup</a>
                <a className="link link-hover">Monthly Checkup</a>
                <a className="link link-hover">Weekly Checkup</a>
                <a className="link link-hover">Deep Checkup</a>
            </div> 

            <div>
                <span className="footer-title text-lg">ORAL HEALTH</span> 
                <a className="link link-hover">Fluoride Treatment</a>
                <a className="link link-hover">Cavity Filling</a>
                <a className="link link-hover">Teeth Whitening</a>
            </div> 

            <div>
                <span className="footer-title text-lg">Our Address</span> 
                <a className="link link-hover">New York - 101010 Hudson</a>
            </div>
            </footer>

            <footer className="footer footer-center my-4 text-base-content">
                <div>
                    <p>Copyright 2022 All Rights Reserved</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;