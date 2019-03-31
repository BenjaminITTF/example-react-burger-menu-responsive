import React from 'react'

import { push as Menu } from 'react-burger-menu'
import { hot } from 'react-hot-loader/root'
import Lorem from 'react-lorem-component'

import styles from '../styles'

class App extends React.Component {
  constructor(props) {
    super(props)

    const mql = window.matchMedia('(min-width: 768px)')

    this.state = {
      menuIsOpen: mql.matches,
      menuIsSticky: mql.matches,
    }

    mql.onchange = e => {
      this.setState({
        menuIsOpen: e.matches,
        menuIsSticky: e.matches,
      })
    }
  }

  handleMenuStateChange = state => {
    this.setState({ menuIsOpen: state.isOpen })
  }

  handleMenuButtonClick = () => {
    this.setState(state => ({ menuIsOpen: !state.menuIsOpen }))
  }

  render() {
    const { menuIsOpen, menuIsSticky } = this.state

    return (
      <React.StrictMode>
        <div id="outer-container">
          <div id="menu-wrap">
            <Menu
              styles={styles}
              pageWrapId="page-wrap"
              outerContainerId="outer-container"
              isOpen={menuIsOpen}
              onStateChange={this.handleMenuStateChange}
              noOverlay={menuIsSticky}
              disableCloseOnEsc={menuIsSticky}
            >
              <div>
                <h1>Sidebar</h1>
                <p>One</p>
                <p>Two</p>
                <p>Three</p>
                <Lorem
                  type="list"
                  count={12}
                  sentenceLowerBound={3}
                  sentenceUpperBound={5}
                  paragraphLowerBound={1}
                  paragraphUpperBound={1}
                />
              </div>
            </Menu>
          </div>

          <main id="page-wrap">
            <button
              type="button"
              onClick={this.handleMenuButtonClick}
              hidden={menuIsSticky}
              className=""
            >
              ☰
            </button>
            <span>Navigation bar</span>

            <h1>Page Content</h1>
            <Lorem count={8} seed={12345} />
          </main>
        </div>
      </React.StrictMode>
    )
  }
}

export default hot(App)
