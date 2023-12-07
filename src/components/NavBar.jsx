

const NavBar = ({titulo}) => {
  
  
    return (
    <div>
        <Menu>
  <MenuButton as={Button} colorScheme='pink'>
    Profile
  </MenuButton>
  <MenuList>
    <MenuGroup title={titulo}>
      <MenuItem>Home</MenuItem>
      <MenuItem>Articulos </MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Help'>
      <MenuItem>Galeria</MenuItem>
      <MenuItem>Nosotros</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>



    </div>
  )
}

export default NavBar
