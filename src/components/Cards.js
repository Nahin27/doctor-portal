import CardBlack from "./CardBlack"
import CardGreen from "./CardGreen"

const Cards = () => {
    return (
      <>
              
        <div className="md:flex text-neutral-50 mt-48">
          <CardGreen img="/images/Path 7199.svg" title="Opening Hours" text="Click the button to listen on Spotiwhy app." />

          <CardBlack img="/images/Path 7199.svg" title="New album is released!" text="Click the button to listen on Spotiwhy app." />

          <CardGreen img="/images/Path 7199.svg" title="New album is released!" text="Click the button to listen on Spotiwhy app." />
        </div>

      </>
    )
}
export default Cards