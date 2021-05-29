
import Header from './components/Header'
import Content from './components/Content'
import Slidebar from './components/Slidebar'
import Filter from './components/Filter'
import data from './data.json'
import Footer from './components/footer'
import store from './store'
import {Provider} from 'react-redux'
function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <header>
        <Header/>
        <Filter  data={data.products}/>
      </header>
      <main className="main">
        <Content data={data.products}/>
        <Slidebar/>
      </main>
      </Provider>
     <footer>
       <Footer/>
     </footer>
    </div>
  );
}

export default App;
