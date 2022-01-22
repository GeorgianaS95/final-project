import './Reservation.css';



function Reservation() {
    return (
        <form>
            <label>
                Data sosirii
                <input type="date" name='name' />
            </label>
            <label>
                Data plecarii
                <input type="date" name="name" />
            </label>
            <label>
                Nr. adulti
                <select name="guests" id="guests-number-select">
                    <option value=""> </option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                </select>
            </label>
            <label>
                Nr. copii
                <select name="guests" id="kids-number-select">
                    <option value=""> </option>
                    <option value='0'>0</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
            </label>
            <button type='submit'>Verifica disponibilitate</button>
        </form>
    );
}



   
export default Reservation;
