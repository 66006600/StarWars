import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Dropdown() {
    return (
        <DropdownButton id="dropdown-basic-button" title="Favoritos ${store.favorites.length} ">
            {
                store.favorites.map((item, index) => {
                        return 
                            <Dropdown.Item key={ index } href="#/action-1">{item}</Dropdown.Item>
                        
                    }
                )

            }

        </DropdownButton>
    );
}

export default Dropdown;