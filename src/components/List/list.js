import MainList from "../MainList/mainList";
import { nameList, cityList } from "../app/app";
const List = () => {
    
    return (
        <div>
            <MainList 
                data={cityList}
                btnCheck={false}/>
                <br/>
            <MainList 
                data={nameList}
                btnCheck={false}/>
        </div>
    )
}

export default List;