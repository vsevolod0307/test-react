import { Link } from "react-router-dom";

const NameList = ({btn}) => {
    const btnNext = btn ? <Link to='/full-list'>Перейти на третью страницу</Link> : null

    return (
        <>
            <ul>
                <li className="city_list">Алексей</li>
                <li className="city_list">Алиса</li>
                <li className="city_list">Дмитрий</li>
                <li className="city_list">Никита</li>
                <li className="city_list">Владимир</li>
                <li className="city_list">Анастасия</li>
                <li className="city_list">Мария</li>
                <li className="city_list">Виктория</li>
            </ul>
            {btnNext}
        </>
    )
}

export default NameList;