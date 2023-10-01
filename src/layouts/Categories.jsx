import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class Categories extends Component {

  state = { activeItem: '' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div>
        <Menu pointing vertical>
          <Menu.Item
            name='Metin'
            active={activeItem === 'Metin'}
            onClick={this.handleItemClick}
            as={Link}
            to="/"
          />
          <Menu.Item
            name='Karakter'
            active={activeItem === 'Karakter'}
            onClick={this.handleItemClick}
            as={Link}
            to="/"
          />
          <Menu.Item
            name='Restoran'
            active={activeItem === 'Restoran'}
            onClick={this.handleItemClick}
            as={Link}
            to="/"
          />
          <Menu.Item
            name='Kafe'
            active={activeItem === 'Kafe'}
            onClick={this.handleItemClick}
            as={Link}
            to="/"
          />
          <Menu.Item
            name='Müzik'
            active={activeItem === 'Müzik'}
            onClick={this.handleItemClick}
            as={Link}
            to="/"
          />
          <Menu.Item
            name='Alışveriş'
            active={activeItem === 'Alışveriş'}
            onClick={this.handleItemClick}
            as={Link}
            to="/"
          />
          <Menu.Item
            name='Proje'
            active={activeItem === 'Proje'}
            onClick={this.handleItemClick}
            as={Link}
            to="/"
          />
          <Menu.Item
            name='Yönlendirme'
            active={activeItem === 'Yönlendirme'}
            onClick={this.handleItemClick}
            as={Link}
            to="/"
          />
          <Menu.Item
            name='Tabela'
            active={activeItem === 'Tabela'}
            onClick={this.handleItemClick}
            as={Link}
            to="/"
          />
          <Menu.Item
            name='Ürünlerimiz'
            active={activeItem === 'Ürünlerimiz'}
            onClick={this.handleItemClick}
            as={Link}
            to="/urunler"
          />
        </Menu>
      </div>
    )
  }
}