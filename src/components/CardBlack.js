const CardBlack = ({ img, title, text }) => {
    return (
        <div className="flex-auto card lg:card-side bg-doctor-black shadow-xl m-4">
        <figure className="m-4"><img src={img} alt="clock"/></figure>
        <div className="card-body flex justify-center">
          <div>
            <h2 className="card-title text-center">{title}</h2>
          </div>
          <div>
            <p className="">{text}</p>
          </div>
        </div>
      </div>
    )
}

export default CardBlack