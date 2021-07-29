

const SelectInput = (props) => {
    return <><div className="select">
        <select name="slct" id="slct" onChange={props.onChange}>
            <option  value="0" >all</option>
            <option  value="2014">2014</option>
            <option  value="2015">2015</option>
            <option  value="2016">2016</option>
            <option  value="2017">2017</option>
        </select>
    </div>
    </>
}

export default SelectInput;