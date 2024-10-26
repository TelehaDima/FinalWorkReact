function Buttons({ filteredPrints }) {
    return (
        <div className="cont">
            <button className="change" onClick={() => filteredPrints("cars")}>Cars</button>
            <button className="change" onClick={() => filteredPrints("motorcycles")}>Motorcycles</button>
            <button className="change" onClick={() => filteredPrints("pickups")}>Pickups</button>
        </div>
    )
}
export default Buttons;