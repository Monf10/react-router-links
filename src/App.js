import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query'; // არ დაგავიწყდეთ ბიბლიოთეკის დაინსტალირება
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // საჭიროა ბიბლიოთეკის ინსტალაცია
import { Home } from './pages/Home';
import { Movies } from './pages/Movies';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* react routerის გასაშვებად გვჭირდება ამ ტეგში მოვაქციოტ დანარჩენი კომპონენტები */}
      <BrowserRouter> 
      {/* მისამართის გასაწერად ანუ დალასინკავ ვიყენებთ route ჩანაწერს. to  ატრიპუტი აღწერს რა 
      ლინკის დაბოლოებაზე უნდა ჰქონდეს რეაგირება, ხოლო element სად გადაიყვანოს მომხარებელი */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/movies' element={<Movies/>}/>
        </Routes>
      </BrowserRouter>
     </QueryClientProvider>
    
  );
}

export default App;
