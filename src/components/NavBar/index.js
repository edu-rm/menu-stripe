import React from 'react';

import { Container, DropdownStyles } from './styles';
import { DropdownOption } from '../Dropdown/Option';

function NavBar() {
  return (
    <DropdownStyles>
      <Container>
        <ul>
          <li>
            <DropdownOption
              name="Produtos"
              content={()=>(<h1>Podutos</h1>)}
            />
          </li>
          <li>
            <DropdownOption
              name="Desenvolvedores"
              content={()=>(<h1>Desenvolvedores</h1>)}
            />
          </li>
          <li>
            <DropdownOption
              name="Empresa"
              content={()=>(<h1>Empresa</h1>)}
            />
          </li>
        </ul>
      </Container>
    </DropdownStyles>
  );
}

export default NavBar;