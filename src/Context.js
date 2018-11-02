import React, { Component } from 'react'

// Context - First create the context and export it
export const AppContext = React.createContext()

// This context is used to build a provider component. This stores the context in its state:

class AppProvider extends Component {
  state = {
    number: 10,
    update: () => {}
  }

  // Wrap {this.props.children} in an AppContext.Provider
  // Then you can use it like
  /*
    <AppProvider>
      <div className=""> This is the child </div>
    </AppProvider>
  */
  render() {
    return(
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}


// then you can wrap the whole app in context by adding <AppProvider> to the top of the render tree
// in your app



export default AppProvider
