import MainList from '../MainList/mainList';
import List from '../List/list';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

export const cityList = ['Тверь', 'Калининград', 'Владивосток', 'Новосибирск', 'Москва', 'Екатеринбург', 'Калуга', 'Ижевск'];
export const nameList = ['Алексей', 'Алиса', 'Дмитрий', 'Никита', 'Владимир', 'Анастасия', 'Мария', 'Виктория'];

const App = () => {

    return (
        <Router>
            <div style={{padding: '10px 50px'}}>
                <header style={{display: 'flex', justifyContent: 'flex-start', marginBottom: '20px'}}>
                    <div style={{margin: '0 20px'}}>
                        <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'inherit' })} to='/' className="link">Города</NavLink>
                    </div>
                    <div style={{margin: '0 20px'}}>
                        <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'inherit' })} to='/names' className="link">Имена</NavLink>
                    </div>
                    <div style={{margin: '0 20px'}}>
                        <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'inherit' })} to='/full-list' className="link">Имена и Города</NavLink>
                    </div>
                </header>
                <main style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                    <Routes>
                        <Route
                            path='/' 
                            element={<MainList 
                            btn={'Перейти на вторую страниц'} 
                            data={cityList}
                            link={'/names'}
                            btnCheck={true}/>}/> 
                        <Route 
                            path='/names' 
                            element={<MainList 
                            btn={'Перейти на третью страниц'} 
                            data={nameList}
                            link={'/full-list'}
                            btnCheck={true}/>}/>
                        <Route 
                            path='/full-list' 
                            element={<List/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App;