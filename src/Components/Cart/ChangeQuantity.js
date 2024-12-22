const ChangeQuantity = ({ quantity, setQuantity }) => {
    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }
    const removeQuantity = () => {
        if (quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }


    return (<div className="buttonBlock">
        <button className="btn-new"  onClick={removeQuantity}>-</button>
        <p>{quantity}</p>
        <button className="btn-new" onClick={addQuantity}>+</button>
    </div>)
}
export default ChangeQuantity;
