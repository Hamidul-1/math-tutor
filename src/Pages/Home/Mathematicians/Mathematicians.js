import Mathematician from '../Mathematician/Mathematician';
import './Mathematicians.css'
import mathematicians1 from '../../../images/mathematicians/Hypatia.jpg';
import mathematicians2 from '../../../images/mathematicians/Girolamo_Cardano.jpg';
import mathematicians3 from '../../../images/mathematicians/Carl_Friedrich.jpg';



const mathematicians = [
    { id: 1, name: 'Hypatia', img: mathematicians1 },
    { id: 2, name: 'Girolamo cardano', img: mathematicians2 },
    { id: 3, name: 'carl friedrich gauss', img: mathematicians3 }
    
]
const Mathematicians = () => {
    return (
        <div id="mathematicians" className='container'>
            <h2 className='text-dark text-center mt-5'>My Idol Mathematicians</h2>
            <div className='row'>
                {
                    mathematicians.map(mathematician => <Mathematician
                        key={mathematician.id}
                        mathematician={mathematician}
                    ></Mathematician>)
                }
            </div>
        </div>
    );
};

export default Mathematicians;