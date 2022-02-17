import { Link } from "react-router-dom";

const MainList = ({btn, data, link, btnCheck}) => {
    const btnNext = btnCheck ? <Link to={link}>{btn}</Link> : null;

    const list = data.map((text, i) => {
        return (
            <li key={i}>{text}</li>
        )
    })

    return (
        <>
            {list}
            {btnNext}
        </>
        
    )
}

export default MainList;